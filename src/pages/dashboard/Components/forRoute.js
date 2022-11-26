import React from 'react';
import {PaginationForTable} from './index';
import {DynamicTable} from './index';
import * as yup from 'yup';
import AppPageMetadata from '@crema/core/AppPageMetadata';
import ModalForm from './ModalForm';
import FormElements from './FormElements';

function Components() {
  const initialEditValue = {
    name: 'Asadbek',
    age: '19',
    gender: 'male',
  };
  // exemple initialCreateValue
  const initialCreateValue = {
    name: null,
    age: null,
    gender: null,
  };
  // exemple schema
  const schema = yup.object().shape({
    create: yup.array().of(
      yup.object().shape({
        title: yup.string().required("Maydon to'ldirilishi kerak"),
        age: yup.string().required("Maydon to'ldirilishi kerak"),
        gender: yup.string().required("Maydon to'ldirilishi kerak"),
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
      <h4>Dynamic table</h4>
      <DynamicTable routeForData={'news/all'} />
    </div>
  );
}

export default Components;
