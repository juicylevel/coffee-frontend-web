import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// TODO: use material-ui Grid

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.6rem;
`;

const useStyles = makeStyles({
    root: {
        textTransform: 'uppercase',
        fontWeight: 500,
        marginBottom: '3rem',
    },
});

const Header = props => {
    const classes = useStyles();
    return (
        <Typography 
            className={classes.root}
            align="center"
            variant="h5"
            {...props} 
        />
    );
};

const Content = styled.div``;

const FrameLayout = ({ children }) => (
    <Wrapper>
        {children}
    </Wrapper>
);

FrameLayout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(
            PropTypes.node,
        ),
    ])
};

FrameLayout.Header = Header;
FrameLayout.Content = Content;

export default FrameLayout;