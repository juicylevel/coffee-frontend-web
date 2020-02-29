import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Form, Field } from 'react-final-form';
import { adaptor } from 'components/form/utils';
import { required, phone, composeValidators } from 'components/form/validation';
import { FrameLayout as Layout } from 'views/common';

const validate = accountPhone => values => {
    const errors = {};
    const { phone, newPhone } = values;

    if (phone !== accountPhone) {
        errors.phone = 'Введён неправильный номер телефона';
    } else if (newPhone === phone) {
        errors.newPhone = 'Введён старый номер телефона';
    }

    return errors;
}

// TODO: use final form hooks

const UpdatePhone = ({ 
    loading, // TODO: disable ui
    accountPhone, 
    onSave 
}) => {
    return (
        <Layout>
            <Layout.Header>
                Обновление номера телефона
            </Layout.Header>
            <Layout.Content>
                <Form 
                    validate={validate(accountPhone)}
                    onSubmit={onSave}
                >
                    {({ handleSubmit, submitting }) => (
                        <form onSubmit={handleSubmit}>
                            <Grid 
                                container 
                                direction="column"
                                spacing={3}
                            >
                                <Grid item xs={12}>
                                    <Field
                                        name="phone"
                                        render={adaptor(TextField)}
                                        variant="outlined"
                                        label="Старый номер телефона"
                                        fullWidth
                                        validate={composeValidators(
                                            required,
                                            phone
                                        )}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        name="newPhone"
                                        render={adaptor(TextField)}
                                        variant="outlined"
                                        label="Новый номер телефона"
                                        fullWidth
                                        validate={composeValidators(
                                            required,
                                            phone
                                        )}
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
                    )}
                </Form>
            </Layout.Content>
        </Layout>
    );
};

UpdatePhone.propTypes = {
    onSave: PropTypes.func,
};

export default UpdatePhone;