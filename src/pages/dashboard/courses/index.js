import AppPageMetadata from '@crema/core/AppPageMetadata';
import React from 'react';
import {DynamicTable} from '../Components';

const Courses = () => {
  return (
    <>
      <AppPageMetadata title='Courses' />
      <h2>Courses page</h2>
      <DynamicTable routeForData={'courses/all'} />
    </>
  );
};

export default Courses;
