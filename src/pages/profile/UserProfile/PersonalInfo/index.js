import React from 'react';
import {Form, Col, Input, Button} from 'antd';
import {AppRowContainer} from '../../../../@crema';
// import {useDropzone} from 'react-dropzone';
import {useAuthUser} from '../../../../@crema/utility/AuthHooks';
import './index.style.less';

const PersonalInfo = () => {
  const {user} = useAuthUser();

  // const [userImage, setUserImage] = useState('/assets/images/placeholder.jpg');

  const onFinish = (values) => {
    console.log('Finish:', values);
  };

  return (
    <Form
      onFinish={onFinish}
      initialValues={{
        ...user,
        userImage: user.photoURL
          ? user.photoURL
          : '/assets/images/placeholder.jpg',
      }}>
      <AppRowContainer gutter={16}>
        <Col xs={24} md={16}>
          <Form.Item
            name='admin_name'
            rules={[{required: true, message: 'Please input your Full Name!'}]}>
            <Input placeholder='Full Name' />
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

export default PersonalInfo;
