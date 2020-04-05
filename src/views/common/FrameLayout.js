import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    padding: 1.6rem;

    @media (max-width: 320px) {
        padding: 0 1.3rem;
    }
`;

const useStyles = makeStyles({
    root: {
        lineHeight: 1,
        textTransform: 'uppercase',
        fontWeight: 500,
        marginBottom: '3rem',
        '@media (max-width: 320px)': { 
            marginBottom: '2rem',
            fontSize: '1.3rem',
        }
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

const Content = styled.article`

`;

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