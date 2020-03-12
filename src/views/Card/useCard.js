import { useQuery, useMutation } from '@apollo/react-hooks';
import { get } from 'lodash';
import { MAX_PAID_ORDERS } from 'constants/orders';
import * as State from 'constants/orderStates';
import ACCOUNT from './account.graphql';
import CREATE_ORDER from './createOrder.graphql';

export default () => {
    const { loading, data } = useQuery(ACCOUNT);
    const count = get(data, 'account.lastPaidOrders.length');

    const orderState = count === MAX_PAID_ORDERS
        ? State.PRE_FREE
        : count === 0 // TODO: get last order after createOrder
            ? State.FREE
            : State.DEFAULT;

    const [createOrder, { loading: creating }] = useMutation(CREATE_ORDER, {
        // TODO: need manually update?
        update: (proxy, { data: { createOrder: lastPaidOrders } }) => {
            const data = proxy.readQuery({ query: ACCOUNT });
            data.account.lastPaidOrders = lastPaidOrders;
            proxy.writeQuery({ query: ACCOUNT, data });
        },
    });

    return {
        loading,
        creating,
        count,
        orderState,
        onCreate: createOrder,
    };
};