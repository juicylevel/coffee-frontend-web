import { isEmpty } from 'lodash';
import useLocalstorage from '@rooks/use-localstorage';

export default () => {
    const  [value, set, remove] = useLocalstorage('coffee-account');

    return {
        account: value,
        set, 
        remove,
        isAuthenticated: !isEmpty(value),
    };
};