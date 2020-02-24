import { useCallback } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { useSession } from 'provider';
import CHANGE_PHONE from './changePhone.graphql';

export default () => {
    const { set: setSession } = useSession();
    const history = useHistory();

    const [changePhone] = useMutation(CHANGE_PHONE, {
        onCompleted: data => {
            setSession(data.changePhone.phone);
            history.replace('/');
        },
        onError: ({ message }) => {
            // TODO
            alert(message);
        },
    });

    const handleSave = useCallback(({ newPhone }) => (
        changePhone({
            variables: {
                input: {
                    // TODO
                    accountId: 'xxQ1nOe0XSrw6YbsgKDq',
                    newPhone
                }
            }
        })
    ), [changePhone]);

    return {
        onSave: handleSave,
    };
};