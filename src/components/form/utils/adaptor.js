import React from 'react';

export default Component => ({
    input, 
    meta, 
    ...rest
}) => {
    const showError = meta.error && meta.touched;
    const helperText = showError
        ? meta.error
        : rest.helperText;
        
    return (
        <Component 
            error={showError}
            helperText={helperText}
            {...input}
            {...rest}
        />
    );
};