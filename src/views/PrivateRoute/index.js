import composeHooks from 'react-hooks-compose';
import { useSession } from 'views/common';
import PrivateRoute from './PrivateRoute';

export default composeHooks({ useSession })(PrivateRoute);