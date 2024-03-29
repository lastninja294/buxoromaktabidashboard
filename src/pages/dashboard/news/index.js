import AppPageMetadata from '@crema/core/AppPageMetadata';
import React from 'react';
import {DynamicTable} from '../Components';
import ModalForm from '../Components/ModalForm';
import generate from '../Components/Table/generate';
import {usePostData} from 'hooks';
import {message, Space} from 'antd';

const News = () => {
  const {mutateAsync} = usePostData('files');
  const {mutateAsync: mutateAsync1} = usePostData('news');

  const handleSubmit = async (data, reset) => {
    const hideFunc = message.loading({
      content: 'Yangilanmoqda',
      duration: 0,
    });
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
      data: JSON.stringify(data.create[0].data),
      title: JSON.stringify(data.create[0].title),
      desc: JSON.stringify(data.create[0].desc),
    };

    await mutateAsync1(uploadData)
      .then((res) => {
        message.success(res.message);
        reset();
        hideFunc();
      })
      .catch(() => {
        hideFunc();
      });
  };

  return (
    <>
      <AppPageMetadata title='News' />
      <Space size={'middle'} direction='vertical'>
        <ModalForm
          type='create'
          initialValue={generate('news')[0]}
          schema={generate('news')[1]}
          onSubmit={handleSubmit}
          isLoading={false}
        />
        <DynamicTable routeForData={'news'} deleteKey='news' />
      </Space>
    </>
  );
};

export default News;
