import { useCallback } from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { get } from 'lodash';
import ACCOUNT from './account.graphql';
import CREATE_ORDER from './createOrder.graphql';

export default () => {
    const { loading, data } = useQuery(ACCOUNT);
    const [createOrder, { loading: creating }] = useMutation(CREATE_ORDER);

    const handleCreate = useCallback(isFree => (
        createOrder({
            variables: {
                input: {
                    isFree,
                },
            },
        })
    ), [
        createOrder
    ]);

    console.log(loading, get(data, 'account'));

    return {
        loading,
        creating,
        onCreate: handleCreate,
    };
};