import gql from 'graphql-tag';

export default gql`
    mutation CreateOrder {
        createOrder {
            id
            createAt
            isFree
        }
    }
`;