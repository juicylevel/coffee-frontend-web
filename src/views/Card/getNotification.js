import { MAX_PAID_ORDERS } from 'constants/orders';
import { 
    CREATE_PREFREE_ORDER, 
    FREE_ORDER, 
    CREATE_ORDER,
} from 'constants/notifications';

export default paidOrdersCount => {
    switch (paidOrdersCount) {
        case MAX_PAID_ORDERS: return CREATE_PREFREE_ORDER; 
        case 0: return FREE_ORDER;
        default: return CREATE_ORDER;
    }
};