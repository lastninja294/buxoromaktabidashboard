import React from 'react';
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

function Components() {
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
  // exemple initialCreateValue
  const initialCreateValue = {
    name1: {
      Uz: '',
      Ru: '',
    },
    description: {
      Uz: '',
      Ru: '',
    },
    age: '',
    gender: '',
    address: '',
    email: '',
    phone: '',
    photo: [],
  };

  const schema1 = yup.object().shape({
    create: yup.array().of(
      yup.object().shape({
        name1: yup.object().shape({
          Uz: yup.string().required("*En Maydon to'ldirilishi kerak"),
          Ru: yup.string().required("*Ru Maydon to'ldirilishi kerak"),
        }),
        description: yup.object().shape({
          Uz: yup.object(),
          Ru: yup.object(),
        }),
        age: yup.string().required("*Maydon to'ldirilishi kerak"),
        gender: yup.string().required("*Maydon to'ldirilishi kerak"),
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

  // exemple schema
  const schema = yup.object().shape({
    create: yup.array().of(
      yup.object().shape({
        title: yup.object().shape({
          Uz: yup.string().required("*En Maydon to'ldirilishi kerak"),
          Ru: yup.string().required("*Ru Maydon to'ldirilishi kerak"),
        }),
        description: yup.object().shape({
          Uz: yup.object(),
          Ru: yup.object(),
        }),
        name: yup.object().shape({
          Uz: yup.string().required("*En Maydon to'ldirilishi kerak"),
          Ru: yup.string().required("*Ru Maydon to'ldirilishi kerak"),
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
  const handleSubmit = (data) => {
    console.log('submit', data);
  };

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
      {/* <FormElements type='editor' /> */}
      <h4>Pagination</h4>
      <PaginationForTable total={100} />
      <h4>Create</h4>
      {/* create exemple */}
      <ModalForm
        type='create'
        initialValue={initialCreateValue}
        schema={schema1}
        onSubmit={handleSubmit}
        isLoading={false}
      />
      {/* create exemple */}

      <h4>Edit</h4>
      {/* edit exemple */}
      <ModalForm
        type='edit'
        initialValue={initialEditValue}
        schema={schema}
        onSubmit={handleSubmit}
        isLoading={false}
      />
      {/* edit exemple */}
      <h4>Dynamic table</h4>
      <DynamicTable routeForData={'teachers/all'} />
    </div>
  );
}

export default Components;
