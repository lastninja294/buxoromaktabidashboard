import React from 'react';
import {PaginationForTable} from './index';
import * as yup from 'yup';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import {useForm} from 'react-hook-form';
import ModalForm from './ModalForm';
import FormElements from './FormElements';
import RichTextEditor from './FormElements/RichTextEditor';
// import FormElements from './FormElements';

function Components() {
  const initialEditValue = {
    title: {
      Uz: 'title uz',
      Ru: 'title ru',
    },
    description: {
      Uz: "",
      Ru: "",
    },
    name: {
      Uz: 'string uz',
      Ru: 'string ru',
    },
    address: 'Beruniy Metro',
    category: '9db1a4bb-5df8-4f9d-a712-c6b80c5294c2',
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
      Uz: null,
      Ru: null,
    },
    age: '',
    gender: '',
  };

  const schema1 = yup.object().shape({
    create: yup.array().of(
      yup.object().shape({
        name1: yup.object().shape({
          Uz: yup.string().required("*En Maydon to'ldirilishi kerak"),
          Ru: yup.string().required("*Ru Maydon to'ldirilishi kerak"),
        }),
        description: yup.object().shape({
          Uz: yup.string().required("*En Maydon to'ldirilishi kerak"),
          Ru: yup.string().required("*Ru Maydon to'ldirilishi kerak"),
        }),
        age: yup.string().required("*Maydon to'ldirilishi kerak"),
        gender: yup.string().required("*Maydon to'ldirilishi kerak"),
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
          Uz: yup.string().required("*En Maydon to'ldirilishi kerak"),
          Ru: yup.string().required("*Ru Maydon to'ldirilishi kerak"),
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
        category: yup.string(),
        phone: yup.string().required("*Maydon to'ldirilishi kerak"),
        photo: yup.array().nullable(),
      }),
    ),
  });
  // handle submit
  // const handleSubmit = (data) => {
  //   console.log('submit', data);
  // };

  // test
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm();
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

      {/* test */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <RichTextEditor name='description' errors={errors} control={control} />
        <FormElements
          type={'input'}
          name='name'
          errors={errors}
          control={control}
        />
        <button>Submit</button>
      </form>
      {/* test */}
    </div>
  );
}

export default Components;
