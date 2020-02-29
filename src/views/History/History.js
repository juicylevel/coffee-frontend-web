import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { map } from 'lodash';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { FrameLayout as Layout } from 'views/common';

const History = ({ 
    loading,
    data,
}) => {
    const items = useMemo(() => (
        map(data, item => (
            <ListItem key={item.id}>
                item
            </ListItem>
        ))
    ), [data]);
    return (
        <Layout>
            <Layout.Header>
                История заказов
            </Layout.Header>
            <Layout.Content>
                <List>
                    {items}
                </List>
            </Layout.Content>
        </Layout>
    );
};

History.propTypes = {
    loading: PropTypes.bool,
    data: PropTypes.arrayOf(
        PropTypes.object,
    ),
};

export default History;