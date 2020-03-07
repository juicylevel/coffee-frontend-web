import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useForm, useField } from 'react-final-form-hooks';
import { FieldAdaptor } from 'components/form/utils';
import { PhoneField } from 'components/form/fields';
import { required, phone, composeValidators } from 'components/form/validation';

const Form = ({ onSubmit }) => {
    const { form, handleSubmit, submitting } = useForm({ onSubmit });
    const phoneFieldProps = useField(
        'phone', 
        form, 
        composeValidators(required, phone)
    );
    return (
        <form onSubmit={handleSubmit}>
            <Grid 
                container 
                direction="column"
                spacing={3}
            >
                <Grid item xs={12}>
                    <FieldAdaptor
                        {...phoneFieldProps}
                        component={PhoneField}
                        variant="filled"
                        label="Ваш номер телефона для входа"
                        fullWidth
                        autoComplete="off"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button 
                        color="primary"
                        variant="contained"
                        fullWidth
                        size="large"
                        disabled={submitting}
                        type="submit"
                    >
                        Далее
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

Form.propTypes = {
    onSubmit: PropTypes.func,
};

export default Form;