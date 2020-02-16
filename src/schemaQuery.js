// running by "npm build-fragment" (package.json script)
// see https://www.apollographql.com/docs/react/data/fragments/#fragments-on-unions-and-interfaces

'use strict';

const fetch = require('node-fetch');
const fs = require('fs');

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
        console.error('error fetching schema:', error.message);
        console.warn('take default schema');
        return {
            __schema: {
                types: [],
            },
        };
    })
);

const createFragmentTypes = async () => {
    console.log('start creating fragmentTypes.json:');

    console.log('fetching schema...');
    const data = await fetchSchema();

    console.log('creating fragmentTypes.json...');
    const filteredData = data.__schema.types.filter(type => (
        type.possibleTypes !== null
    ));

    data.__schema.types = filteredData;

    fs.writeFileSync(
        './src/fragmentTypes.json', 
        JSON.stringify(data), 
        err => {
            if (err) {
                console.error('Error writing fragmentTypes file', err);
            } else {
                console.log('Fragment types successfully extracted!');
            }
        }
    );

    console.log('fragmentTypes.json created');
};

createFragmentTypes();