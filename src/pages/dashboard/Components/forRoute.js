import React, {useState} from 'react';
import {PaginationForTable} from './index';
import * as yup from 'yup';
import AppPageMetadata from '@crema/core/AppPageMetadata';
// import {useForm} from 'react-hook-form';
import ModalForm from './ModalForm';
// import FormElements from './FormElements';
// import RichTextEditor from './FormElements/RichTextEditor';
// import FormElements from './FormElements';
import {DynamicTable} from './index';
// import draftToHtml from 'draftjs-to-html';

import {useForm} from 'react-hook-form';
import RichTextEditor from './FormElements/RichTextEditor';
import {Modal} from 'antd';

import generate from './Table/generate';
import {usePostData} from 'hooks';

function Components() {
  const [visible, setvisible] = useState(false);
  const initialEditValue = {
    title: {
      Uz: 'title uz',
      Ru: 'title ru',
    },
    description: {
      Uz: '<p>erkin uz</p>',
      Ru: '<p>erkin ru</p>',
    },
    name: {
      Uz: 'string uz',
      Ru: 'string ru',
    },
    address: 'Beruniy Metro',
    email: 'erkin@gmail.com',
    phone: '+(998) 94 924 2319',
    photo: [
      {
        uid: '-1',
        name: 'qwe.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl:
          'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
    ],
  };

  const {mutateAsync} = usePostData('files');

  const {mutateAsync: mutateAsync1} = usePostData('news');
  // exemple initialCreateValue
  // const initialCreateValue = {
  //   name1: {
  //     Uz: '',
  //     Ru: '',
  //   },
  //   description: {
  //     Uz: '',
  //     Ru: '',
  //   },
  //   age: '',
  //   gender: '',
  //   address: '',
  //   email: '',
  //   phone: '',
  //   photo: [],
  // };

  // const schema1 = yup.object().shape({
  //   create: yup.array().of(
  //     yup.object().shape({
  //       name1: yup.object().shape({
  //         Uz: yup.string().required("*En Maydon to'ldirilishi kerak"),
  //         Ru: yup.string().required("*Ru Maydon to'ldirilishi kerak"),
  //       }),
  //       description: yup.object().shape({
  //         Uz: yup.object(),
  //         Ru: yup.object(),
  //       }),
  //       age: yup.string().required("*Maydon to'ldirilishi kerak"),
  //       gender: yup.string().required("*Maydon to'ldirilishi kerak"),
  //       email: yup
  //         .string()
  //         .email('Must be a valid email')
  //         .max(255)
  //         .required('Email is required'),
  //       address: yup.string().required("*Maydon to'ldirilishi kerak"),
  //       phone: yup.string().required("*Maydon to'ldirilishi kerak"),
  //       photo: yup.array().nullable(),
  //     }),
  //   ),
  // });

  // exemple schema
  const schema = yup.object().shape({
    create: yup.array().of(
      yup.object().shape({
        title: yup.object().shape({
          Uz: yup.object().required("*En Maydon to'ldirilishi kerak"),
          Ru: yup.object().required("*Ru Maydon to'ldirilishi kerak"),
        }),
        description: yup.object().shape({
          Uz: yup.object(),
          Ru: yup.object(),
        }),
        name: yup.object().shape({
          Uz: yup.object().required("*En Maydon to'ldirilishi kerak"),
          Ru: yup.object().required("*Ru Maydon to'ldirilishi kerak"),
        }),
        email: yup
          .string()
          .email('Must be a valid email')
          .max(255)
          .required('Email is required'),
        address: yup.string().required("*Maydon to'ldirilishi kerak"),
        phone: yup.string().required("*Maydon to'ldirilishi kerak"),
        photo: yup.array().nullable(),
      }),
    ),
  });
  // handle submit
  const handleSubmit1 = async (data) => {
    const imgUpload = new FormData();
    console.log('drtfvgybhj', data.create[0].data);
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
    };

    await mutateAsync1(uploadData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    console.log(uploadData);
  };

  const {control, handleSubmit} = useForm({});
  const onSubmit = (data) => console.log(data);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '16px',
        flexDirection: 'column',
      }}>
      <AppPageMetadata title='Components' />
      <h4>RichTextEditor</h4>
      <button
        onClick={() => {
          setvisible(true);
        }}>
        open
      </button>
      <Modal
        visible={visible}
        centered={true}
        title={'Edit Modal'}
        cancelText='Cancel'
        onCancel={() => {
          setvisible(false);
        }}
        className='create-modal-form-boxs'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <RichTextEditor name='firstName' control={control} />
          <button>submit</button>
        </form>
      </Modal>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RichTextEditor name='firstName' control={control} />
        <button>submit</button>
      </form>
      {/* <FormElements type='editor' /> */}
      <h4>Pagination</h4>
      <PaginationForTable total={100} />
      <h4>Create</h4>
      {/* create exemple */}
      <ModalForm
        type='create'
        initialValue={generate('news')[0]}
        schema={generate('news')[1]}
        onSubmit={handleSubmit1}
        isLoading={false}
      />
      {/* create exemple */}

      <h4>Edit</h4>
      {/* edit exemple */}
      <ModalForm
        type='edit'
        initialValue={initialEditValue}
        schema={schema}
        onSubmit={handleSubmit1}
        isLoading={false}
      />
      {/* edit exemple */}
      <h4>Dynamic table</h4>
      <DynamicTable routeForData={'teachers'} deleteKey={'teachers'} />
    </div>
  );
}

export default Components;
