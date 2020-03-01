// https://www.apollographql.com/docs/react/data/pagination/
// https://firebase.google.com/docs/firestore/query-data/query-cursors#paginate_a_query
import { useQuery } from '@apollo/react-hooks';
import produce from 'immer';
import { get } from 'lodash';
import ORDERS from './orders.graphql';
import { useCallback } from 'react';

export default () => {
    const { loading, data, fetchMore } = useQuery(ORDERS, {
        variables: {
            pagination: {
                limit: 6,
                offset: 0,
            },
        },
    });

    const handleFetchMore = useCallback(() => {
        fetchMore({
            variables: {
                offset: data.orders.length
            },
            updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult) {
                    return prev;
                }
                return produce(prev, draftResult => {
                    draftResult.orders.pagination = fetchMoreResult.orders.pagination;
                    draftResult.orders.items.push(fetchMoreResult.orders.items)
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