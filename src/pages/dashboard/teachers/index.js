import AppPageMetadata from '@crema/core/AppPageMetadata';
import React from 'react';
import {DynamicTable} from '../Components';
import {message, Space} from 'antd';
import ModalForm from '../Components/ModalForm';
import {usePostData} from 'hooks';
import generate from '../Components/Table/generate';

const Teachers = () => {
  const {mutateAsync} = usePostData('files');
  const {mutateAsync: mutateAsync1} = usePostData('teachers');

  const handleSubmit = async (data, reset) => {
    const newData = {...data.create[0]};
    const imgUpload = new FormData();
    imgUpload.append('file', data.imgUrl[0]);

    await mutateAsync(imgUpload)
      .then((a) => {
        newData.imgUrl = a?.fileUrl;
      })
      .catch(() => {
        newData.imgUrl = '';
        message.error("Rasm yuklanmadi qayta urinib ko'ring!");
      });

    console.log(newData);

    await mutateAsync1(newData)
      .then(() => {
        message.success("Ma'lumot qo'shildi");
        reset();
      })
      .catch(() => message.error('Xatolik mavjud'));
  };

  return (
    <>
      <AppPageMetadata title='Teachers' />
      <Space size={'middle'} direction='vertical'>
        <ModalForm
          type='create'
          initialValue={generate('teachers')[0]}
          schema={generate('teachers')[1]}
          onSubmit={handleSubmit}
          isLoading={false}
        />
        <DynamicTable routeForData={'teachers'} deleteKey='teachers' />
      </Space>
    </>
  );
};

export default Teachers;
