import AppPageMetadata from '@crema/core/AppPageMetadata';
import React from 'react';
import {DynamicTable} from '../Components';

const RegisteredUsers = () => {
  return (
    <>
      <AppPageMetadata title='News' />
      <h2>Registered Users page</h2>
      <DynamicTable routeForData={'users/all'} />
    </>
  );
};

export default RegisteredUsers;
