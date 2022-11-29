import AppPageMetadata from '@crema/core/AppPageMetadata';
import React from 'react';
import {DynamicTable} from '../Components';

const Admins = () => {
  return (
    <>
      <AppPageMetadata title='Admins' />
      <h2>Admins page</h2>
      <DynamicTable routeForData='admins/all' />
    </>
  );
};

export default Admins;
