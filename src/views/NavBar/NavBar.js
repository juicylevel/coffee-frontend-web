import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 1rem;
`;

const NavBar = ({ 
    allowBack,
    allowNav,
    onLogout,
}) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = useCallback(event => {
        setAnchorEl(event.currentTarget);
    }, []);

    const handleClose = useCallback(() => {
        setAnchorEl(null);
    }, []);

    const handleLogout = useCallback(() => {
        handleClose();
        onLogout();
    }, [
        handleClose,
        onLogout,
    ]);
    
    return (
        <Wrapper>
            {allowBack && (
                <IconButton
                    to='/'
                    component={Link} 
                >
                    <ArrowBackIcon />
                </IconButton>
            )}
            {allowNav && (
                <>
                    <IconButton 
                        style={{ marginLeft: 'auto' }}
                        onClick={handleClick}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        keepMounted
                        open={!!anchorEl}
                        onClose={handleClose}
                    >
                        <MenuItem 
                            to='/history'
                            component={Link} 
                            onClick={handleClose}
                        >
                            История заказов
                        </MenuItem>
                        <MenuItem
                            to='/update-phone'
                            component={Link} 
                            onClick={handleClose}
                        >
                            Сменить телефон
                        </MenuItem>
                        <MenuItem onClick={handleLogout}>
                            Выход
                        </MenuItem>
                    </Menu>
                </>
            )}
        </Wrapper>
    );
};

NavBar.propTypes = {
    allowBack: PropTypes.bool,
    allowNav: PropTypes.bool,
    onLogout: PropTypes.func,
};

export default NavBar;