import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Form, Field } from 'react-final-form';
import { adaptor } from 'components/form/utils';
import { FrameLayout as Layout } from 'views/common';

const ChangePhone = ({ onSave }) => {
    return (
        <Layout>
            <Layout.Header>
                Обновление номера телефона
            </Layout.Header>
            <Layout.Content>
                <Form onSubmit={onSave}>
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
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Field
                                        name="newPhone"
                                        render={adaptor(TextField)}
                                        variant="outlined"
                                        label="Новый номер телефона"
                                        fullWidth
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button 
                                        color="primary"
                                        variant="contained"
                                        fullWidth
                                        size="large"
                                        type="submit"
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

ChangePhone.propTypes = {
    onSave: PropTypes.func,
};

export default ChangePhone;