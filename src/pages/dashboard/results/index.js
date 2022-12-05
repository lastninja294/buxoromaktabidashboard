import AppPageMetadata from '@crema/core/AppPageMetadata';
import React from 'react';
import {DynamicTable} from '../Components';
import {Space, message} from 'antd';
import ModalForm from '../Components/ModalForm';
import generate from '../Components/Table/generate';
import {usePostData} from 'hooks';

const Results = () => {
  const {mutateAsync} = usePostData('results');
  const handleSubmit = async (data, reset) => {
    await mutateAsync(data.create[0])
      .then((res) => {
        message.success(res.message);
        reset();
      })
      .catch((err) => message.error(err.message));
  };

  return (
    <>
      <AppPageMetadata title='Results' />
      <Space size={'middle'} direction='vertical'>
        <ModalForm
          type='create'
          initialValue={generate('results')[0]}
          schema={generate('results')[1]}
          onSubmit={handleSubmit}
          isLoading={false}
        />
        <DynamicTable routeForData={'results'} deleteKey='results' />
      </Space>
    </>
  );
};

export default Results;
