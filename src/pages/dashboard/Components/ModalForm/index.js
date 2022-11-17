import React, {useState} from 'react';
import GenerateModalForm from './components/GenerateModalForm';
import {AiOutlineEdit} from 'react-icons/ai';
import {Button} from 'antd';
import PropTypes from 'prop-types';
import './index.styles.scss';

function ModalForm({type, ...others}) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      {type === 'create' ? (
        <Button
          type='primary'
          onClick={() => {
            setVisible(true);
          }}>
          Create
        </Button>
      ) : (
        <Button
          type='link'
          onClick={() => {
            setVisible(true);
          }}>
          <AiOutlineEdit style={{fontSize: '1.3em'}} />
        </Button>
      )}
      <GenerateModalForm
        visible={visible}
        type={type}
        onCancel={() => {
          setVisible(false);
        }}
        {...others}
      />
    </>
  );
}

export default ModalForm;

ModalForm.propTypes = {
  type: PropTypes.string,
};