import composeHooks from 'react-hooks-compose';
import useCard from './useCard';
import Card from './Card';

export default composeHooks({ useCard })(Card);