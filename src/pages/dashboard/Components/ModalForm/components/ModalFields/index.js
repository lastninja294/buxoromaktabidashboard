import {Button} from 'antd';
import {IoIosRemoveCircleOutline} from 'react-icons/io';
import ModalTabs from '../ModalTabs';
import PropTypes from 'prop-types';
import FormElements from 'pages/dashboard/Components/FormElements';
import './styles.scss';

const FormFields = ({
  type,
  remove,
  register,
  error,
  control,
  index,
  initialValue,
}) => {
  const isTitle =
    'titleUz' in initialValue &&
    'titleRu' in initialValue &&
    'titleEn' in initialValue;
  const isBody =
    'bodyUz' in initialValue &&
    'bodyRu' in initialValue &&
    'bodyEn' in initialValue;
  const isName =
    'nameUz' in initialValue &&
    'nameRu' in initialValue &&
    'nameEn' in initialValue;
    
  const isEmail = 'email' in initialValue;
  const isPhone = 'phone' in initialValue;
  const isPhoto = 'photo' in initialValue;
  const isAddress = 'address' in initialValue;
  const isCategory = 'category' in initialValue;

  return (
    <div className='create-modal-fields'>
      {isTitle || isBody || isName ? (
        <ModalTabs
          isTitle={isTitle}
          isBody={isBody}
          isName={isName}
          remove={remove}
          register={register}
          error={error}
          control={control}
          index={index}
          initialValue={initialValue}
        />
      ) : null}
      {isEmail ? (
        <FormElements
          type='input'
          control={control}
          index={index}
          error={error?.email}
          name={`create[${index}].email`}
          register={register}
          defaultValue={initialValue.email}
          placeholder='email'
          label='email'
        />
      ) : null}
      {isAddress ? (
        <FormElements
          type='input'
          control={control}
          index={index}
          error={error?.address}
          name={`create[${index}].address`}
          register={register}
          defaultValue={initialValue.address}
          placeholder='address'
          label='address'
        />
      ) : null}
      {isCategory ? (
        <FormElements
          type='select'
          control={control}
          index={index}
          error={error?.category}
          name={`create[${index}].category`}
          register={register}
          defaultValue={initialValue.category}
          placeholder='category'
          label='category'
        />
      ) : null}
      {isPhone ? (
        <FormElements
          type='phone'
          control={control}
          index={index}
          error={error?.phone}
          name={`create[${index}].phone`}
          register={register}
          placeholder='phone'
          defaultValue={initialValue.phone}
          label='phone number'
        />
      ) : null}

      {isPhoto ? (
        <FormElements
          type='upload'
          control={control}
          index={index}
          error={error?.photo}
          name={`create[${index}].photo`}
          register={register}
          defaultValue={initialValue.photo}
          label='photo'
        />
      ) : null}
      {type == 'create' ? (
        <Button
          type='link'
          danger
          onClick={() => remove(index)}
          className='create-modal-btn'>
          <IoIosRemoveCircleOutline
            style={{fontSize: '1.2em', marginRight: '4px'}}
          />
          Delete
        </Button>
      ) : null}
    </div>
  );
};

export default FormFields;

FormFields.propTypes = {
  type: PropTypes.string,
  remove: PropTypes.any,
  register: PropTypes.any,
  error: PropTypes.any,
  control: PropTypes.any,
  index: PropTypes.any,
  initialValue: PropTypes.any,
};
