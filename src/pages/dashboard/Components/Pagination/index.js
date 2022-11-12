import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Pagination} from 'antd';
import PropTypes from 'prop-types';

function PaginationForTable({total}) {
  const history = useHistory();

  const [page, setPage] = useState(
    history.location.search.split('&').map((e) => {
      return +e.split('=')[1];
    })[0] || 1,
  );
  const [size, setSize] = useState(
    history.location.search.split('&').map((e) => {
      return +e.split('=')[1];
    })[1] || 10,
  );

  useEffect(() => {
    history.push(`?page=${page}&size=${size}`);
  }, []);

  return (
    <Pagination
      current={page}
      pageSize={size}
      total={total}
      showSizeChanger
      onChange={(cur, pageSize) => {
        history.push(`?page=${cur}&size=${pageSize}`);
        if (size !== pageSize) {
          setPage(1);
          setSize(pageSize);
          history.push(`?page=${1}&size=${pageSize}`);
        } else {
          setPage(cur);
          setSize(pageSize);
        }
      }}
    />
  );
}

export default PaginationForTable;

PaginationForTable.propTypes = {
  total: PropTypes.number,
};
