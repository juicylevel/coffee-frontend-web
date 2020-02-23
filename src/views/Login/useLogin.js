import { useCallback } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { useSession } from 'provider';
import LOGIN from './login.graphql';

export default () => {
    const { set: setSession } = useSession();
    const history = useHistory();

    const [login] = useMutation(LOGIN, {
        onCompleted: data => {
            setSession(data.login.phone);
            history.replace('/');
        },
        onError: ({ message }) => {
            alert(message);
        },
    });

    const handleLogin = useCallback(({ phone }) => (
        login({
            variables: {
                input: {
                    phone
                }
            }
        })
    ), [login]);

    return {
        onLogin: handleLogin,
    };
};