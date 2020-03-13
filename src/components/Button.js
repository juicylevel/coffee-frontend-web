import React from 'react';
import PropTypes from 'prop-types';
import MuiButton from '@material-ui/core/Button';
import { CircularProgress } from '@material-ui/core';

const Button = ({
    loading,
    children,
    ...rest
}) => (
    <MuiButton {...rest}>
        {loading 
            ? <CircularProgress size={26} /> 
            : children
        }
    </MuiButton>
);

Button.propTypes = {
    children: PropTypes.any,
    loading: PropTypes.bool,
};

export default Button;