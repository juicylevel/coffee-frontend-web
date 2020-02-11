// running by "npm build-fragment" (package.json script)
// see https://www.apollographql.com/docs/react/data/fragments/#fragments-on-unions-and-interfaces

/*
"build-fragment": "node src/schemaQuery.js",
"start": "npm run build-fragment && react-scripts start",
"build": "npm run build-fragment && react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject"
*/

const fetch = require('node-fetch');
const fs = require('fs');

const BASE_URL = 'https://abc.pscb.ru/b';
const AUTH_URL = BASE_URL + '/api/v1/auth/login';
const GRAPHQL_URL = BASE_URL + '/graphql';

const login = async () => (
    fetch(AUTH_URL, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: '', 
            password: '',
        }),
    })
    .then(result => result.json())
    .then(result => (
        result.accessToken
    ))
);

const fetchSchema = async token => (
    fetch(GRAPHQL_URL, {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json',
            'authorization': 'Bearer ' + token
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
);

const createFragmentTypes = async () => {
    console.log('start creating fragmentTypes.json:');

    console.log('fetching token...');
    const token = await login();

    console.log('fetching schema...');
    const data = await fetchSchema(token);

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