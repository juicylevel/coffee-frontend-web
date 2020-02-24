import gql from 'graphql-tag';

export default gql`
    mutation ChangePhone($input: ChangePhoneInput!) {
        changePhone(input: $input) {
            phone
        }
    }
`;