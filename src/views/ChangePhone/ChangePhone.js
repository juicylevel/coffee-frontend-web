import React from 'react';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { FrameLayout as Layout } from 'views/common';

const Registration = () => {
    return (
        <Layout>
            <Layout.Header>
                Обновление номера телефона
            </Layout.Header>
            <Layout.Content>
                <Grid 
                    container 
                    direction="column"
                    spacing={3}
                >
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            label="Старый номер телефона"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
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
                        >
                            Сохранить
                        </Button>
                    </Grid>
                </Grid>
            </Layout.Content>
        </Layout>
    );
};

export default Registration;