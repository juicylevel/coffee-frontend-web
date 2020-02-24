import { useCallback } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useSession } from 'provider';

export default () => {
    const { pathname } = useLocation();
    const history = useHistory();
    const session = useSession();

    const allowBack = (
        pathname !== '/' && 
        pathname !== '/login'
    );

    const allowNav = pathname !== '/login';

    const handleLogout = useCallback(() => {
        session.remove();
        history.replace('/login');
    }, [
        session,
        history,
    ]);

    return {
        allowBack,
        allowNav,
        onLogout: handleLogout,
    };
};