import composeHooks from 'react-hooks-compose';
import useChangePhone from './useChangePhone';
import ChangePhone from './ChangePhone';

export default composeHooks({ useChangePhone })(ChangePhone);