import React, { useState } from 'react';
import styled from 'styled-components';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
// import PropTypes from 'prop-types';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 0 1rem;
`;

const NavBar = props => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    
    return (
        <Wrapper>
            <IconButton>
                <ArrowBackIcon />
            </IconButton>
            <IconButton onClick={handleClick}>
                <MenuIcon />
            </IconButton>
            <Menu
                id="long-menu"
                anchorEl={anchorEl}
                keepMounted
                open={!!anchorEl}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>
                    История заказов
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    Сменить телефон
                </MenuItem>
            </Menu>
        </Wrapper>
    );
};

NavBar.propTypes = {
    
};

export default NavBar;