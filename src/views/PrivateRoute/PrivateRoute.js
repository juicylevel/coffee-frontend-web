import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({
    component: Component, 
    isAuthenticated,
    ...rest
}) => (
    <Route 
        {...rest} 
        render={props => (
            isAuthenticated ? (
                <Component {...props}>
                    {props.children}
                </Component>
            ) : (
                <Redirect to={{
                    pathname: '/',
                    state: { 
                        from: props.location 
                    }
                }}/>
            ))
        }
    />
);

PrivateRoute.propTypes = {
    component: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
};

export default PrivateRoute;