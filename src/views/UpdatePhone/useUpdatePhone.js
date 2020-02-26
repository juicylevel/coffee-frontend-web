import { useCallback } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { get } from 'lodash';
import ACCOUNT from './account.graphql';
import UPDATE_PHONE from './updatePhone.graphql';

export default () => {
    const { loading, data } = useQuery(ACCOUNT);
    const history = useHistory();

    const [updatePhone] = useMutation(UPDATE_PHONE, {
        onCompleted: () => {
            history.replace('/');
        },
        onError: ({ message }) => {
            // TODO
            alert(message);
        },
    });

    const handleSave = useCallback(({ newPhone }) => (
        updatePhone({
            variables: {
                input: {
                    newPhone
                }
            }
        })
    ), [updatePhone]);

    return {
        loading,
        accountPhone: get(data, 'account.phone'),
        onSave: handleSave,
    };
};