import composeHooks from 'react-hooks-compose';
import useHistory from './useHistory';
import History from './History';

export default composeHooks({ useHistory })(History);