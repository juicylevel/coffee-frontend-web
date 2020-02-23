import useLocalstorage from '@rooks/use-localstorage';
import { isEmpty } from 'lodash';

export default () => {
    const  [value, set, remove] = useLocalstorage('coffee-client', undefined);
    return {
        phone: value, 
        isAuthenticated: !isEmpty(value),
        set, 
        remove,
    };
};