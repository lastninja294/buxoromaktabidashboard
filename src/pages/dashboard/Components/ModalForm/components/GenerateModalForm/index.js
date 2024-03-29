import React, {useEffect, useRef, memo} from 'react';
import {Button} from 'antd';
import {useForm, useFieldArray} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import FormFields from '../ModalFields';
import PropTypes from 'prop-types';
import CustomModal from '../CustomModal';
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
    reset,
    formState: {errors},
  } = useForm({
    defaultValues: initialValue,
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
    reset();
    onCancel();
  };
  useEffect(() => {
    append(initialValue);
  }, []);

  return (
    <div className='generate-modal-form'>
      <CustomModal
        visible={visible}
        title={type === 'create' ? 'Create Modal' : 'Edit Modal'}
        onCancel={onCancel}
        width={1000}
        footer={
          <div className='create-modal-form-footer'>
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
            onSubmit(data, reset);
          })}
          className='create-modal-form-scrollbar'>
          <ul>
            {fields?.map((item, index) => (
              <li key={item.id} className='create-modal-form-box'>
                <FormFields
                  type={type}
                  item={item}
                  index={index}
                  remove={remove}
                  control={control}
                  error={errors['create']?.[index]}
                  register={register}
                  initialValue={initialValue}
                />
              </li>
            ))}
          </ul>
          <input type='submit' hidden={true} ref={refFrom} />
        </form>
      </CustomModal>
    </div>
  );
}

export default memo(GenerateModalForm);

GenerateModalForm.propTypes = {
  type: PropTypes.string,
  visible: PropTypes.bool,
  onCancel: PropTypes.any,
  initialValue: PropTypes.object,
  schema: PropTypes.object,
  onSubmit: PropTypes.any,
  isLoading: PropTypes.bool,
};
