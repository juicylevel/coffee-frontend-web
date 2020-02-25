import gql from 'graphql-tag';

export default gql`
    mutation UpdatePhone($input: UpdatePhoneInput!) {
        updatePhone(input: $input)
    }
`;