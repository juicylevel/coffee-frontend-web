import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import { 
    CREATE_PREFREE_ORDER, 
    FREE_ORDER, 
    CREATE_ORDER,
} from 'constants/notifications';

const CancelButton = withStyles({
    root: {
        lineHeight: 1,
    },
})(Button);

const MESSAGES = {
    [CREATE_ORDER]: 'Заказ успешно создан!',
    [CREATE_PREFREE_ORDER]: 'Следующий кофе бесплатный!',
    [FREE_ORDER]: 'Ура! Бесплатный кофе получен!',
};

const Notification = ({ 
    type,
    show, 
    onCancelOrder, 
    onClose,
}) => {
    const message = MESSAGES[type];
    return (
        <Snackbar
            open={show}
            message={message}
            autoHideDuration={5000}
            TransitionComponent={Slide}
            onClose={onClose}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            ContentProps={{
                style: {
                    backgroundColor: 'rgb(4, 4, 4)',
                },
            }}
            action={
                <CancelButton 
                    color="secondary" 
                    size="small" 
                    onClick={onCancelOrder}
                >
                    Отменить
                </CancelButton>
            }
        />
    );
};

Notification.propTypes = {
    type: PropTypes.string,
    show: PropTypes.bool, 
    onCancel: PropTypes.func,
    onClose: PropTypes.func,
};

export default Notification;