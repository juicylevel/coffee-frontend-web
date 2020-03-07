import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useForm, useField } from 'react-final-form-hooks';
import { FieldAdaptor } from 'components/form/utils';
import { PhoneField } from 'components/form/fields';
import { required, phone, composeValidators } from 'components/form/validation';

const validate = currentPhone => values => {
    const errors = {};
    const { phone, newPhone } = values;

    if (phone !== currentPhone) {
        errors.phone = 'Введён неправильный номер телефона';
    } else if (newPhone === phone) {
        errors.newPhone = 'Введён текущий номер телефона';
    }

    return errors;
};

const Form = ({ 
    currentPhone, 
    onSubmit 
}) => {
    const { form, handleSubmit, submitting } = useForm({ 
        onSubmit,
        validate: validate(currentPhone),
    });

    const phoneFieldProps = useField(
        'phone', 
        form, 
        composeValidators(required, phone)
    );

    const newPhoneFieldProps = useField(
        'newPhone', 
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
                        label="Текущий номер телефона"
                        fullWidth
                        autoComplete="off"
                    />
                </Grid>
                <Grid item xs={12}>
                    <FieldAdaptor
                        {...newPhoneFieldProps}
                        component={PhoneField}
                        variant="filled"
                        label="Новый номер телефона"
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
                        type="submit"
                        disabled={submitting}
                    >
                        Сохранить
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

Form.propTypes = {
    currentPhone: PropTypes.string,
    onSubmit: PropTypes.func,
};

export default Form;