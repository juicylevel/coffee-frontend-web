import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import * as OrderState from 'constants/orderStates';

const CONFIG = {
    [OrderState.DEFAULT]: {
        backgroundColor: 'rgb(4, 4, 4)',
        actionButtonTextColor: 'secondary',
        autoHideDuration: 3000,
        message: 'Заказ успешно создан!',
    },
    [OrderState.PRE_FREE]: {
        backgroundColor: '#9e00ad',
        actionButtonTextColor: 'default',
        autoHideDuration: 6000,
        message: 'Ура! Следующий кофе бесплатный!',
    },
    [OrderState.FREE]: {
        backgroundColor: '#e40f94',
        actionButtonTextColor: 'default',
        autoHideDuration: 6000,
        message: 'Ура! Бесплатный кофе получен!',
    },
};

const Notification = ({ 
    show, 
    orderState,
    onCancel, 
    onClose,
}) => {
    const {
        backgroundColor,
        actionButtonTextColor,
        autoHideDuration,
        message,
    } = CONFIG[orderState];

    return (
        <Snackbar
            open={show}
            message={message}
            autoHideDuration={autoHideDuration}
            TransitionComponent={Slide}
            onClose={onClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            ContentProps={{
                style: {
                    backgroundColor,
                },
            }}
            action={
                <Fragment>
                    <Button 
                        color={actionButtonTextColor} 
                        size="small" 
                        onClick={onCancel}
                    >
                        Отменить
                    </Button>
                    <IconButton 
                        size="small" 
                        color="inherit" 
                        onClick={onClose}
                    >
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </Fragment>
            }
        />
    );
};

Notification.propTypes = {
    show: PropTypes.bool, 
    orderState: PropTypes.string,
    onCancel: PropTypes.func,
    onClose: PropTypes.func,
};

export default Notification;