import AppPageMetadata from '@crema/core/AppPageMetadata';
import React from 'react';
import {DynamicTable} from '../Components';
import {message, Space} from 'antd';
import ModalForm from '../Components/ModalForm';
import generate from '../Components/Table/generate';
import {usePostData} from 'hooks';

const Comments = () => {
  const {mutateAsync} = usePostData('files');
  const {mutateAsync: mutateAsync1} = usePostData('comments');
  const handleSubmit = async (data, reset) => {
    const imgUpload = new FormData();
    imgUpload.append('file', data.imgUrl[0]);

    let url = '';
    await mutateAsync(imgUpload)
      .then((a) => {
        url = a?.fileUrl;
      })
      .catch(() => {
        url = '';
      });
    const uploadData = {
      imgUrl: url,
      desc: data.create[0].desc,
      name: data.create[0].name,
    };
    console.log(uploadData);
    await mutateAsync1(uploadData)
      .then((res) => {
        message.success(res.message);
        reset();
      })
      .catch(() => message.error('Xatolik mavjud'));
  };

  return (
    <>
      <AppPageMetadata title='comments' />
      <Space size={'middle'} direction='vertical'>
        <ModalForm
          type='create'
          initialValue={generate('comments')[0]}
          schema={generate('comments')[1]}
          onSubmit={handleSubmit}
          isLoading={false}
        />
        <DynamicTable routeForData='comments' deleteKey='comments' />
      </Space>
    </>
  );
};

export default Comments;
