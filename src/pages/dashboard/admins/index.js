import AppPageMetadata from '@crema/core/AppPageMetadata';
import React from 'react';
import {DynamicTable} from '../Components';
import {message, Space} from 'antd';
import ModalForm from '../Components/ModalForm';
import generate from '../Components/Table/generate';
import {usePostData} from 'hooks';

const Admins = () => {
  const {mutateAsync} = usePostData('admins');
  const handleSubmit = async (data, reset) => {
    await mutateAsync(data.create[0])
      .then((res) => {
        message.success(res.message);
        reset();
      })
      .catch(() => message.error('Xatolik mavjud'));
  };

  return (
    <>
      <AppPageMetadata title='Admins' />
      <Space size={'middle'} direction='vertical'>
        <ModalForm
          type='create'
          initialValue={generate('admins')[0]}
          schema={generate('admins')[1]}
          onSubmit={handleSubmit}
          isLoading={false}
        />
        <DynamicTable routeForData='admins' deleteKey='admins' />
      </Space>
    </>
  );
};

export default Admins;
