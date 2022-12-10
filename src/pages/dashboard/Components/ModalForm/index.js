import React, {useState} from 'react';
import GenerateModalForm from './components/GenerateModalForm';
import {Button} from 'antd';
import PropTypes from 'prop-types';
import './index.styles.scss';

function ModalForm({type, visibility, ...others}) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {type === 'create' ? (
        <Button
          type='primary'
          style={{width: '140px', maxWidth: '50%'}}
          onClick={() => {
            setVisible(true);
          }}>
          Create
        </Button>
      ) : null}
      <GenerateModalForm
        visible={visible || visibility?.[0]}
        type={type}
        onCancel={() => {
          setVisible(false);
          visibility?.[1](false);
        }}
        {...others}
      />
    </>
  );
}

export default ModalForm;

ModalForm.propTypes = {
  type: PropTypes.string,
  visibility: PropTypes.array,
};
