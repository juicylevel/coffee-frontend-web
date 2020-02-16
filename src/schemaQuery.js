// running by "npm build-fragment" (package.json script)
// see https://www.apollographql.com/docs/react/data/fragments/#fragments-on-unions-and-interfaces

'use strict';

const fetch = require('node-fetch');
const fs = require('fs');
const chalk = require('react-dev-utils/chalk');

// TODO
const GRAPHQL_URL = `http://localhost:5000/coffee-7be5e/us-central1/graphql`;

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
            if (err) {
                console.error(chalk.red('Error writing fragmentTypes file: ' + error.message));
            } else {
                console.log(chalk.green('Fragment types successfully extracted!'));
            }
        }
    );

    console.log(chalk.green('File fragmentTypes.json created'));
};

createFragmentTypes();