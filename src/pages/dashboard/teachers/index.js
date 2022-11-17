import AppPageMetadata from '@crema/core/AppPageMetadata';
import {useGetData} from 'hooks/get/getData';
import React from 'react';

const Teachers = () => {
  const {data, isLoading} = useGetData('users');
  if (isLoading) {
    return (
      <>
        <div>isLoading...</div>
      </>
    );
  }
  console.log('dara', data);
  return (
    <>
      <AppPageMetadata title='Teachers' />
      <h2>Teachers page</h2>
      <p>You can kick start your app</p>
    </>
  );
};

export default Teachers;
