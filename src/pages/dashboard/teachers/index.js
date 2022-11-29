import AppPageMetadata from '@crema/core/AppPageMetadata';
import React from 'react';
import {DynamicTable} from '../Components';

const Teachers = () => {
  return (
    <>
      <AppPageMetadata title='Teachers' />
      <h2>Teachers page</h2>
      <DynamicTable routeForData={'teachers/all'} />
    </>
  );
};

export default Teachers;
