import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { map, size, isEmpty } from 'lodash';
import styled from 'styled-components';
import { CircularProgress, Grid } from '@material-ui/core';
import List from '@material-ui/core/List';
import coffeeTimeSvg from 'images/coffee-time.svg';
import { useInfinityScroll } from 'components';
import { FrameLayout as Layout } from 'views/common';
import Order from './Order';

const Empty = styled.div`
    text-align: center;
`;

const CoffeeTime = styled.div`
    background-image: url(${coffeeTimeSvg});
    background-repeat: no-repeat;
    background-size: cover;
    width: 8rem;
    height: 8rem;
`;

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
    const hasData = !isEmpty(items);

    const progressSize = initialLoading ? 72 : 40;

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
                {hasData && (
                    <List>
                        {historyItems}
                    </List>
                )}
                {!loading && !hasData && (
                    <Grid 
                        container 
                        direction="column" 
                        alignItems="center"
                        spacing={3}
                    >
                        <Grid item>
                            <CoffeeTime />
                        </Grid>
                        <Grid item>
                            <Empty>
                                Вы не сделали ещё ни одного заказа<br />
                                Гоу за кофой!
                            </Empty>
                        </Grid>
                    </Grid>
                )}
                {loading && (
                    <Grid container justify="center">
                        <Grid item>
                            <CircularProgress size={progressSize} />
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