import { useState, useCallback } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { get } from 'lodash';
import getNotification from './getNotification';
import ACCOUNT from './account.graphql';
import CREATE_ORDER from './createOrder.graphql';

export default () => {
    const { loading, data } = useQuery(ACCOUNT);
    const [state, setState] = useState({
        notification: undefined,
        showNotification: false,
    });

    const [createOrder, { loading: creating }] = useMutation(CREATE_ORDER, {
        onCompleted: data => {
            const count = get(data, 'createOrder.length');
            const notification = getNotification(count);
            setState(ps => ({ 
                ...ps, 
                notification,
                showNotification: true,
            }));
        },
        // TODO
        update: (cache, result) => {
            const lastPaidOrders = result.data.createOrder;
            const data = cache.readQuery({ query: ACCOUNT });
            data.account.lastPaidOrders = lastPaidOrders;
            cache.writeQuery({ 
                query: ACCOUNT, 
                data
            });
        },
    });

    const onCloseNotification = useCallback(() => {
        setState(ps => ({ 
            ...ps, 
            showNotification: false,
        }));
    }, []);

    const onCancelOrder = useCallback(() => {
        // TODO
        setState(ps => ({ 
            ...ps, 
            showNotification: false,
        }));
    }, []);

    const count = get(data, 'account.lastPaidOrders.length');

    return {
        ...state,
        loading,
        creating,
        count,
        onCreate: createOrder,
        onCancelOrder,
        onCloseNotification,
    };
};