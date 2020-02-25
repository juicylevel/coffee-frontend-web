import composeHooks from 'react-hooks-compose';
import useUpdatePhone from './useUpdatePhone';
import UpdatePhone from './UpdatePhone';

export default composeHooks({ useUpdatePhone })(UpdatePhone);