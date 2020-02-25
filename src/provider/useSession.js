import { isEmpty } from 'lodash';
import useLocalstorage from '@rooks/use-localstorage';

export default () => {
    const  [value, set, remove] = useLocalstorage('coffee-client');

    return {
        phone: value, 
        isAuthenticated: !isEmpty(value),
        set, 
        remove,
    };
};