import React from 'react';
// import {useHistory} from 'react-router-dom';
import {useIntl} from 'react-intl';
import {Button, Form, Input} from 'antd';

import IntlMessages from '../../../@crema/utility/IntlMessages';
import {useAuthMethod} from '../../../@crema/utility/AuthHooks';

const SignInJwtAuth = () => {
  // const history = useHistory();
  const {signInUser} = useAuthMethod();

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  // const onGoToForgetPassword = () => {
  //   history.push('/forget-password', {tab: 'jwtAuth'});
  // };

  // function onRememberMe(e) {
  //   console.log(`checked = ${e.target.checked}`);
  // }

  const {messages} = useIntl();

  return (
    <div className='sign'>
      <div className='sign-content'>
        <Form
          className='sign-form'
          name='basic'
          onFinish={(val) => {
            signInUser(val);
          }}
          onFinishFailed={onFinishFailed}>
          <Form.Item
            name='name'
            className='form-field'
            rules={[{required: true, message: 'Please input your username!'}]}>
            <Input placeholder={messages['common.name']} />
          </Form.Item>

          <Form.Item
            name='password'
            className='form-field'
            rules={[{required: true, message: 'Please input your Password!'}]}>
            <Input.Password placeholder={messages['common.password']} />
          </Form.Item>

          {/* <div className='rememberMe'>
            <Checkbox onChange={onRememberMe}>
              <IntlMessages id='common.rememberMe' />
            </Checkbox>

            <span className='sign-link' onClick={onGoToForgetPassword}>
              <IntlMessages id='common.forgetPassword' />
            </span>
          </div> */}

          <div className='form-btn-field'>
            <Button type='primary' htmlType='submit' className='sign-btn'>
              <IntlMessages id='common.login' />
            </Button>
          </div>

          <div className='form-field-action'>
            <span className='sign-text-grey'>
              Developed by <a href={'http://www.abez.uz'}> ABEZ IT Company</a>
            </span>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default SignInJwtAuth;
