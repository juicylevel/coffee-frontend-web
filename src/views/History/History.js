import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { map, size } from 'lodash';
import { CircularProgress, Grid } from '@material-ui/core';
import List from '@material-ui/core/List';
import { useInfinityScroll } from 'components';
import { FrameLayout as Layout } from 'views/common';
import Order from './Order';

// TODO: show empty placeholder
const History = ({ 
    loading,
    // TODO: = {}
    data: {
        pagination: {
            hasNext
        } = {},
        items,
    } = {},
    onFetchNext,
}) => {
    const initialLoading = loading && size(items) === 0;
    const infinityLoading = loading && size(items) > 0;

    useInfinityScroll({
        loading,
        hasNext,
        onFetchNext,
    });

    const historyItems = useMemo(() => (
        map(items, item => (
            <Order key={item.id} {...item} />
        ))
    ), [items]);

    return (
        <Layout>
            <Layout.Header>
                История заказов
            </Layout.Header>
            <Layout.Content>
                {initialLoading && (
                    <Grid container justify="center">
                        <Grid item>
                            <CircularProgress size={72} />
                        </Grid>
                    </Grid>
                )}
                <List>
                    {historyItems}
                </List>
                {infinityLoading && (
                    <Grid container justify="center">
                        <Grid item>
                            <CircularProgress />
                        </Grid>
                    </Grid>
                )}
            </Layout.Content>
        </Layout>
    );
};

History.propTypes = {
    loading: PropTypes.bool,
    data: PropTypes.shape({
        pagination: PropTypes.shape({
            hasNext: PropTypes.bool,
            total: PropTypes.number,
        }),
        items: PropTypes.array,
    }),
    onFetchMore: PropTypes.func,
};

export default History;