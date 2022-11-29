import AppPageMetadata from '@crema/core/AppPageMetadata';
import React from 'react';
import {DynamicTable} from '../Components';

const News = () => {
  return (
    <>
      <AppPageMetadata title='News' />
      <h2>News page</h2>
      <DynamicTable routeForData={'news/all'} />
    </>
  );
};

export default News;
