import composeHooks from 'react-hooks-compose';
import useNav from './useNav';
import NavBar from './NavBar';

export default composeHooks({ useNav })(NavBar);