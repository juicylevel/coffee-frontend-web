import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { OrderNumber } from 'components';

const useStyles = makeStyles({
    container: {
        backgroundColor: (
            props => props.isFree 
                ? 'rgba(173, 42, 47, 0.38)' 
                : 'rgba(90, 90, 90, 0.48)'
        ),
        marginBottom: '0.8rem',
        borderRadius: '6px',
        borderTopRightRadius: '0px',
    },
    root: {
        paddingTop: '12px',
        paddingBottom: '12px',
    },
});

const Order = ({ 
    createAt, 
    num, 
    isFree,
}) => {
    const classes = useStyles({ isFree }); 
    const date = moment(createAt).format('DD.MM.YY HH:mm');
    return (
        <ListItem classes={classes}>
            <ListItemText primary={date} />
            <ListItemSecondaryAction>
                <OrderNumber 
                    size="45px" 
                    value={num} 
                    isFree={isFree}
                />
            </ListItemSecondaryAction>
        </ListItem>
    );
};

Order.propTypes = {
    createAt: PropTypes.string,
    num: PropTypes.number,
    isFree: PropTypes.bool,
};

export default Order;