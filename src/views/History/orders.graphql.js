import gql from 'graphql-tag';

export default gql`
    query Orders($pagination: PaginationInput!) {
        orders(pagination: $pagination) {
            pagination {
                limit
                offset
                total
                hasNext
            }
            items {
                ... on Order {
                    id
                    createAt
                    isFree
                }
            }
        }
    }
`;