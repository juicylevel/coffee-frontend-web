import { isEmpty } from 'lodash';
import useLocalstorage from '@rooks/use-localstorage';
import { LOCAL_STORAGE } from 'provider/constants';

export default () => {
    const  [value, set, remove] = useLocalstorage(LOCAL_STORAGE);

    return {
        accountId: value,
        set, 
        remove,
        isAuthenticated: !isEmpty(value),
    };
};