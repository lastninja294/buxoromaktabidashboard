import AppPageMetadata from '@crema/core/AppPageMetadata';
import React from 'react';
import {DynamicTable} from '../Components';

const Results = () => {
  return (
    <>
      <AppPageMetadata title='Results' />
      <h2>Result page 1</h2>
      <DynamicTable routeForData={'results/all'} />
    </>
  );
};

export default Results;
