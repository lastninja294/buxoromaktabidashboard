import React from 'react';
import {PaginationForTable} from './index';
import * as yup from 'yup';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import ModalForm from './ModalForm';
import FormElements from './FormElements';

function Components() {
  // exemple editor data
  const str = JSON.stringify({
    blocks: [
      {
        key: 'dh5e6',
        text: 'Hello World!',
        type: 'unstyled',
        depth: 0,
        inlineStyleRanges: [],
        entityRanges: [],
        data: {},
      },
    ],
    entityMap: {},
  });
  // exemple initialEditValue
  const initialEditValue = {
    titleUz: 'title uz',
    titleRu: 'title ru',
    titleEn: 'title en',
    bodyUz: str,
    bodyRu: str,
    bodyEn: str,
    nameUz: 'string',
    nameRu: 'string',
    nameEn: 'string',
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
    titleUz: '',
    titleRu: '',
    titleEn: '',
    bodyUz: null,
    bodyRu: null,
    bodyEn: null,
    nameUz: '',
    nameRu: '',
    nameEn: '',
    address: '',
    category: '',
    email: '',
    phone: '',
    photo: [],
  };
  // exemple schema
  const schema = yup.object().shape({
    create: yup.array().of(
      yup.object().shape({
        titleUz: yup.string().required("*Maydon to'ldirilishi kerak"),
        titleRu: yup.string().required("*Maydon to'ldirilishi kerak"),
        titleEn: yup.string().required("*Maydon to'ldirilishi kerak"),
        bodyUz: yup.object().nullable(),
        bodyRu: yup.object().nullable(),
        bodyEn: yup.object().nullable(),
        nameUz: yup.string().required("*Maydon to'ldirilishi kerak"),
        nameRu: yup.string().required("*Maydon to'ldirilishi kerak"),
        nameEn: yup.string().required("*Maydon to'ldirilishi kerak"),
        email: yup
          .string()
          .email('Must be a valid email')
          .max(255)
          .required('Email is required'),
        address: yup.string().required("*Maydon to'ldirilishi kerak"),
        category: yup.string(),
        phone: yup
          .string()
          // .matches(/(?:\+\([9]{2}[8]\) [0-9]{2}\ [0-9]{3}\ [0-9]{4})/g, {
          //   message: 'Invalid phone number',
          //   excludeEmptyString: false,
          // })
          .required(),
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
      <FormElements type='rich-editor' />
      <h4>Pagination</h4>
      <PaginationForTable total={100} />
      <h4>Create</h4>
      {/* create exemple */}
      <ModalForm
        type='create'
        initialValue={initialCreateValue}
        schema={schema}
        onSubmit={handleSubmit}
        isLoading={true}
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
    </div>
  );
}

export default Components;
