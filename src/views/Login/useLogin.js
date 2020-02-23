import { useCallback } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';
import { useSession } from 'provider';
import LOGIN from './login.graphql';

export default () => {
    const { set: setSession } = useSession();
    const history = useHistory();
    const [login] = useMutation(LOGIN);

    const handleLogin = useCallback(({ phone }) => {
        return login({
            variables: {
                input: {
                    phone
                }
            },
            onCompleted: () => {
                setSession(phone);
                history.replace('/');
            },
            onError: ({ message }) => {
                alert(message);
            },
        });
    }, []);

    return {
        onLogin: handleLogin,
    };
};