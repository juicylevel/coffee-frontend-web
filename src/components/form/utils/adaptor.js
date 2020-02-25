import React from 'react';

export default Component => ({
    input, 
    meta, 
    ...rest
}) => {
    const showError = ((meta.submitError && !meta.dirtySinceLastSubmit) || meta.error) && meta.touched;
    
    const helperText = showError
        ? (meta.error || meta.submitError)
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