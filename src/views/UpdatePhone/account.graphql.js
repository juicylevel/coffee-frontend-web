import gql from 'graphql-tag';

export default gql`
    query Account {
        account {
            id
            phone
        }
    }
`;