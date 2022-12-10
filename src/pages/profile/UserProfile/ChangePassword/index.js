import React from 'react';
import {Button, Col, Form, Input, message} from 'antd';
import {AppRowContainer} from '../../../../@crema';
import IntlMessages from '../../../../@crema/utility/IntlMessages';
import {usePostData, usePutData} from 'hooks';

const ChangePassword = () => {
  const {mutateAsync} = usePostData('admins/check');
  const {mutateAsync: mutateAsync1} = usePutData('admins');

  const [form] = Form.useForm();

  const onFinish = async (values) => {
    await mutateAsync({
      password: values.oldPassword,
    })
      .then(() => {
        mutateAsync1({
          adminName: values.adminName,
          password: values.password,
        })
          .then((res) => {
            message.success(res.message);
            form.resetFields();
          })
          .catch((err) => {
            message.error(err.message);
          });
      })
      .catch((err) => message.error(err.message));
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      className='user-profile-form'
      initialValues={{remember: true}}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}>
      <h3 className='user-profile-form-title'>
        <IntlMessages id='userProfile.changePassword' />
      </h3>
      <AppRowContainer gutter={16}>
        <Col xs={24} md={16}>
          <Form.Item
            name='adminName'
            rules={[{required: false, message: 'Please input your new login'}]}>
            <Input placeholder='Enter login' />
          </Form.Item>
        </Col>
        <Col xs={24} md={16}>
          <Form.Item
            name='oldPassword'
            rules={[
              {required: true, message: 'Please input your Enter Password'},
            ]}>
            <Input.Password placeholder='Enter password' />
          </Form.Item>
        </Col>
        <Col xs={24} md={16}>
          <Form.Item
            name='password'
            rules={[
              {required: true, message: 'Please input your New Password!'},
            ]}>
            <Input.Password placeholder='Enter new password' />
          </Form.Item>
        </Col>
        <Col xs={24} md={16}>
          <Form.Item
            name='confirmPassword'
            rules={[
              {required: true, message: 'Please input Your Confirm Password!'},
              ({getFieldValue}) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    'The Confirm Password that you entered do not match!',
                  );
                },
              }),
            ]}>
            <Input.Password placeholder='Confirm new password' />
          </Form.Item>
        </Col>
        <Col xs={24} md={24}>
          <Form.Item shouldUpdate className='user-profile-group-btn'>
            <Button type='primary' htmlType='submit'>
              Save Changes
            </Button>
          </Form.Item>
        </Col>
      </AppRowContainer>
    </Form>
  );
};

export default ChangePassword;
