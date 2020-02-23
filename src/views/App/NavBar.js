import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
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

export default () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const { pathname } = useLocation();
    const displayBack = pathname !== '/';

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    return (
        <Wrapper>
            {displayBack && (
                <IconButton
                    to='/'
                    component={Link} 
                >
                    <ArrowBackIcon />
                </IconButton>
            )}
            <IconButton 
                style={{ marginLeft: 'auto' }}
                onClick={handleClick}
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="long-menu"
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
                    to='/change-phone'
                    component={Link} 
                    onClick={handleClose}
                >
                    Сменить телефон
                </MenuItem>
            </Menu>
        </Wrapper>
    );
};