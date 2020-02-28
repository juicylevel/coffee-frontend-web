import { useQuery, useMutation } from '@apollo/react-hooks';
import { get } from 'lodash';
import { MAX_PAID_ORDERS } from 'constants/orders';
import ACCOUNT from './account.graphql';
import CREATE_ORDER from './createOrder.graphql';

export default () => {
    const { loading, data } = useQuery(ACCOUNT);
    const count = get(data, 'account.lastPaidOrders.length', 0);

    const [createOrder, { loading: creating }] = useMutation(CREATE_ORDER, {
        // TODO: need manually update?
        update: (proxy, { data: { createOrder: lastPaidOrders } }) => {
            const data = proxy.readQuery({ query: ACCOUNT });
            data.account.lastPaidOrders = lastPaidOrders;
            proxy.writeQuery({ query: ACCOUNT, data });
        },
        onCompleted: (data) => {
            const count = data.createOrder.length;
            if (count === MAX_PAID_ORDERS) {
                // TODO
                alert('Следующий кофе бесплатный!');
            } else {
                // TODO
                alert('Заказ кофе создан');
            }
        },
    });

    return {
        loading,
        creating,
        count,
        onCreate: createOrder,
    };
};