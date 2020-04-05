import { useCallback } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useApolloClient } from '@apollo/react-hooks';
import { useSession } from 'views/common';

export default () => {
    const { pathname } = useLocation();
    const history = useHistory();
    const session = useSession();
    const client = useApolloClient();

    const allowBack = pathname !== '/';

    const handleLogout = useCallback(() => {
        session.remove();
        client.resetStore();
        history.replace('/login');
    }, [
        session,
        client,
        history,
    ]);

    return {
        allowBack,
        onLogout: handleLogout,
    };
};