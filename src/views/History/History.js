import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import { FrameLayout as Layout } from 'views/common';

const History = ({ 
    loading,
    data: {
        pagination,
        items,
    },
    onFetchMore,
}) => {
    const historyItems = useMemo(() => (
        map(items, item => (
            <ListItem key={item.id}>
                item
            </ListItem>
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
                <List onScroll={handleScroll}>
                    {historyItems}
                </List>
                <div style={{ textAlign: 'center'}}>
                    <Button onClick={onFetchMore}>
                        показать ещё
                    </Button>
                </div>
            </Layout.Content>
        </Layout>
    );
};

History.propTypes = {
    loading: PropTypes.bool,
    data: PropTypes.arrayOf(
        PropTypes.object,
    ),
    onFetchMore: PropTypes.func,
};

export default History;