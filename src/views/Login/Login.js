import React from 'react';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Form, Field } from 'react-final-form';
import { adaptor } from 'components/form/utils';
import { required } from 'components/form/validation';
import { FrameLayout as Layout } from 'views/common';

const Login = ({ onLogin }) => {
    return (
        <Layout>
            <Layout.Header>
                Карточка резидента кофейни
            </Layout.Header>
            <Layout.Content>
                <Form onSubmit={onLogin}>
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
                                        label="Ваш номер телефона для входа"
                                        fullWidth
                                        validate={required}
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
                    )}
                </Form>
            </Layout.Content>
        </Layout>
    );
};

export default Login;