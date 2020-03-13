import { useQuery } from '@apollo/react-hooks';
import produce from 'immer';
import { get, concat } from 'lodash';
import ORDERS from './orders.graphql';
import { useCallback } from 'react';

const LIMIT = 8;

export default () => {
    const { loading, data, fetchMore } = useQuery(ORDERS, {
        variables: {
            pagination: {
                limit: LIMIT,
                offset: 0,
            },
        },
        // TODO
        fetchPolicy: 'network-only'
    });

    const handleFetchMore = useCallback(() => {
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
        })
    }, [
        data, 
        fetchMore
    ]);

    const orders = get(data, 'orders');

    return {
        loading,
        data: orders,
        onFetchMore: handleFetchMore,
    };
};