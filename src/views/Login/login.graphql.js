import gql from 'graphql-tag';

export default gql`
    mutation Login($input: LoginInput!) {
        login(input: $input) {
            id
            phone
            createAt
            lastPaidOrders {
                id
                createAt
                isFree
            }
        }
    }
`;