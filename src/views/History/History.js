import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import { CircularProgress, Grid } from '@material-ui/core';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
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
    onFetchMore,
}) => {
    const historyItems = useMemo(() => (
        map(items, item => (
            <Order key={item.id} {...item} />
        ))
    ), [items]);

    const handleScroll = useCallback(() => {
        console.log('scroll')
    }, []);

    return (
        <Layout>
            <Layout.Header>
                История заказов
            </Layout.Header>
            <Layout.Content>
                {loading && (
                    <Grid container justify="center">
                        <Grid item>
                            <CircularProgress size={72} />
                        </Grid>
                    </Grid>
                )}
                <List onScroll={handleScroll}>
                    {historyItems}
                </List>
                <div style={{ textAlign: 'center'}}>
                    {hasNext && (
                        <Button onClick={onFetchMore}>
                            показать ещё
                        </Button>
                    )}
                </div>
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