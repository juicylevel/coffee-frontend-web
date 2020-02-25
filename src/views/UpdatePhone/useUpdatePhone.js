import { useCallback } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { useSession } from 'provider';
import UPDATE_PHONE from './updatePhone.graphql';

export default () => {
    const { set: setSession } = useSession();
    const history = useHistory();

    const [updatePhone] = useMutation(UPDATE_PHONE, {
        onCompleted: data => {
            setSession(data.updatePhone || null);
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
                    // TODO
                    accountId: '9ACc8otAatXuz1LDRnH7',
                    newPhone
                }
            }
        })
    ), [updatePhone]);

    return {
        onSave: handleSave,
    };
};