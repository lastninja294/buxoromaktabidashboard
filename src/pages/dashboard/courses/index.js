import AppPageMetadata from '@crema/core/AppPageMetadata';
import React from 'react';
import {DynamicTable} from '../Components';
import {message, Space} from 'antd';
import ModalForm from '../Components/ModalForm';
import generate from '../Components/Table/generate';
import {usePostData} from 'hooks';

const Courses = () => {
  const {mutateAsync} = usePostData('files');
  const {mutateAsync: mutateAsync1} = usePostData('courses');

  const handleSubmit = async (data, reset) => {
    console.log(data.imgUrl);
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

    console.log('newwwww', newData);

    await mutateAsync1(newData)
      .then((res) => {
        message.success(res.message);
        reset();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <AppPageMetadata title='Courses' />
      <Space size={'middle'} direction='vertical'>
        <ModalForm
          type='create'
          initialValue={generate('courses')[0]}
          schema={generate('courses')[1]}
          onSubmit={handleSubmit}
          isLoading={false}
        />
        <DynamicTable routeForData={'courses'} deleteKey='courses' />
      </Space>
    </>
  );
};

export default Courses;
