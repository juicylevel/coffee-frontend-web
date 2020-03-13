// running by "npm build-fragment -- --env=development|production" (package.json scripts)
// see https://www.apollographql.com/docs/react/data/fragments/#fragments-on-unions-and-interfaces

'use strict';

const path = require('path');
const minimist = require('minimist');
const dotenv = require('dotenv');
const fetch = require('node-fetch');
const fs = require('fs');
const chalk = require('react-dev-utils/chalk');

// read script arguments
const args = minimist(process.argv.slice(2));
process.env.NODE_ENV = args['env'];

const { NODE_ENV } = process.env;

// read environment variables from .env file
const dotenvFile = path.resolve(`.env.${NODE_ENV}`);
const result = dotenv.config({ path: dotenvFile });
if (result.error) {
    console.error(chalk.red(result.error.message));
}

const GRAPHQL_URL = process.env.REACT_APP_GRAPHQL_URL;

const fetchSchema = async () => (
    fetch(GRAPHQL_URL, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            variables: {},
            query: `{
                __schema {
                    types {
                        kind
                        name
                        possibleTypes {
                            name
                        }
                    }
                }
            }`,
        }),
    })
    .then(result => result.json())
    .then(result => result.data)
    .catch(error => {
        console.error(chalk.red('Error fetching schema: ' + error.message));
        console.warn(chalk.yellow('Take default schema'));
        return {
            __schema: {
                types: [],
            },
        };
    })
);

const createFragmentTypes = async () => {
    console.log('Start creating fragmentTypes.json:');

    console.log('Fetching schema...');
    const data = await fetchSchema();

    console.log('Creating fragmentTypes.json...');
    const filteredData = data.__schema.types.filter(type => (
        type.possibleTypes !== null
    ));

    data.__schema.types = filteredData;

    fs.writeFileSync(
        './src/fragmentTypes.json', 
        JSON.stringify(data), 
        error => {
            if (error) {
                console.error(chalk.red('Error writing fragmentTypes file: ' + error.message));
            } else {
                console.log(chalk.green('Fragment types successfully extracted!'));
            }
        }
    );

    console.log(chalk.green('File fragmentTypes.json created'));
};

createFragmentTypes();