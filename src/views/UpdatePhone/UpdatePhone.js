import React from 'react';
import PropTypes from 'prop-types';
import { FrameLayout as Layout } from 'views/common';
import Form from './Form';

const UpdatePhone = ({ 
    loading, // TODO: disable ui
    accountPhone, 
    onSave 
}) => (
    <Layout>
        <Layout.Header>
            Обновление номера телефона
        </Layout.Header>
        <Layout.Content>
            <Form 
                currentPhone={accountPhone}
                onSubmit={onSave}
            />
        </Layout.Content>
    </Layout>
);

UpdatePhone.propTypes = {
    accountPhone: PropTypes.string,
    onSave: PropTypes.func,
};

export default UpdatePhone;