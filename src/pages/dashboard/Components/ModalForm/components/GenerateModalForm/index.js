import React, {useEffect, useRef} from 'react';
import {Modal, Button} from 'antd';
import {IoIosAddCircleOutline} from 'react-icons/io';
import {useForm, useFieldArray} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import FormFields from '../ModalFields';
import PropTypes from 'prop-types';
import './styles.scss';

function GenerateModalForm({
  type,
  visible,
  onCancel,
  initialValue,
  schema,
  onSubmit,
  isLoading,
}) {
  const refFrom = useRef();
  const {
    register,
    handleSubmit,
    control,
    // reset,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  const {fields, append, remove} = useFieldArray({
    control,
    name: 'create',
  });

  const handleOk = () => {
    refFrom.current?.click();
  };
  const handleCancel = () => {
    onCancel();
  };
  useEffect(() => {
    append(initialValue);
  }, []);

  return (
    <Modal
      visible={visible}
      centered={true}
      title={type == 'create' ? 'Create Modal' : 'Edit Modal'}
      cancelText='Cancel'
      onCancel={onCancel}
      className='create-modal-form-boxs'
      width={1000}
      footer={
        <div className='create-modal-form-footer'>
          {type === 'create' ? (
            <Button
              type='link'
              onClick={() => append(initialValue)}
              className='create-modal-form-add-btn'>
              <IoIosAddCircleOutline
                style={{fontSize: '1.2em', marginRight: '4px'}}
              />
              Add field
            </Button>
          ) : null}
          <div className='create-modal-form-action-btn'>
            <Button key='back' onClick={handleCancel}>
              Cancel
            </Button>
            <Button
              key='submit'
              type='primary'
              loading={isLoading}
              onClick={handleOk}>
              Submit
            </Button>
          </div>
        </div>
      }>
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
        })}
        className='create-modal-form-scrollbar'>
        <ul>
          {fields.map((item, index) => {
            return (
              <li key={item.id} className='create-modal-form-box'>
                <FormFields
                  type={type}
                  item={item}
                  index={index}
                  remove={remove}
                  control={control}
                  error={errors.create?.[index]}
                  register={register}
                  initialValue={initialValue}
                />
              </li>
            );
          })}
        </ul>
        <input type='submit' hidden={true} ref={refFrom} />
      </form>
    </Modal>
  );
}

export default GenerateModalForm;

GenerateModalForm.propTypes = {
  type: PropTypes.string,
  visible: PropTypes.any,
  onCancel: PropTypes.any,
  pageName: PropTypes.any,
  initialValue: PropTypes.any,
  schema: PropTypes.any,
  onSubmit: PropTypes.any,
  isLoading: PropTypes.any,
};
