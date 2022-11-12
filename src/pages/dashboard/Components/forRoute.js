import React from 'react';
import {RichTextEditor} from './index';
import {PaginationForTable} from './index';
import AppPageMetadata from '@crema/core/AppPageMetadata';

function Components() {
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
      <RichTextEditor />
      <h4>Pagination</h4>
      <PaginationForTable total={100} />
    </div>
  );
}

export default Components;
