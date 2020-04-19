import { useQuery } from '@apollo/react-hooks';
import produce from 'immer';
import { get, concat } from 'lodash';
import ORDERS from './orders.graphql';
import { useCallback } from 'react';

const LIMIT = 10;

export default () => {
    const { loading, data, fetchMore } = useQuery(ORDERS, {
        variables: {
            pagination: {
                limit: LIMIT,
                offset: 0,
            },
        },
        fetchPolicy: 'network-only',
        notifyOnNetworkStatusChange: true,
    });

    const handleFetchNext = useCallback(() => {
        if (loading || !data.orders.pagination.hasNext) {
            return;
        }

        fetchMore({
            variables: {
                pagination: {
                    limit: LIMIT,
                    offset: data.orders.items.length
                }
            },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) {
                    return prev;
                }
                return produce(prev, draftResult => {
                    draftResult.orders.pagination = fetchMoreResult.orders.pagination;
                    draftResult.orders.items = concat(
                        draftResult.orders.items,
                        fetchMoreResult.orders.items
                    );
                });
            },
        });
    }, [
        loading,
        data, 
        fetchMore
    ]);

    const orders = get(data, 'orders');

    return {
        loading,
        data: orders,
        onFetchNext: handleFetchNext,
    };
};