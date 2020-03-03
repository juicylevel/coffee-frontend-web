import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
`;

const useStyles = makeStyles({
    root: {
        textTransform: 'uppercase',
        marginBottom: '2rem',
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

/*styled.h2`
    text-transform: uppercase;
    text-align: center;
    font-size: 1.28rem;
    line-height: 1.7rem;
    letter-spacing: 0.05rem;
`;*/

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