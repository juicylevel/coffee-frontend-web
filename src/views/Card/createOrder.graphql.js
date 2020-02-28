import gql from 'graphql-tag';

export default gql`
    mutation CreateOrder($input: OrderInput!) {
        createOrder(input: $input) {
            id
            createAt
            isFree
        }
    }
`;