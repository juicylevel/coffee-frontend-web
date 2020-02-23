import composeHooks from 'react-hooks-compose';
import { useSession } from 'provider';
import PrivateRoute from './PrivateRoute';

export default composeHooks({ useSession })(PrivateRoute);