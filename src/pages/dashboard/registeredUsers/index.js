import AppPageMetadata from '@crema/core/AppPageMetadata';
import React from 'react';
import {DynamicTable} from '../Components';

const RegisteredUsers = () => {
  return (
    <>
      <AppPageMetadata title='News' />
      <h2>{"Ro'yhatdan o'tgan foydalanuvchilar"}</h2>
      <DynamicTable routeForData={'users'} deleteKey='users' />
    </>
  );
};

export default RegisteredUsers;
