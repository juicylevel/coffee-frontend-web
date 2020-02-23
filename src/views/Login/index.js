import composeHooks from 'react-hooks-compose';
import { useLogin } from './useLogin';
import Login from './Login';

export default composeHooks({ useLogin })(Login);