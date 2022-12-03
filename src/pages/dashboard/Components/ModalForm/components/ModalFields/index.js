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
  const isNameValue = () => {
    let isValue = [];
    let isMultiValues = [];
    for (const key in initialValue) {
      if (
        typeof initialValue[key] === 'object' &&
        'Uz' in initialValue[key] &&
        'Ru' in initialValue[key]
      ) {
        let pushValue = {
          type: key === 'description' ? 'editor' : 'input',
          nameValue: key,
        };
        isMultiValues.push(pushValue);
      } else {
        let pushValue = {
          type:
            key === 'phone'
              ? 'phone'
              : key === 'image' || key === 'video' || key === 'photo'
              ? 'upload'
              : 'input',
          nameValue: key,
        };
        isValue.push(pushValue);
      }
    }
    return [isValue, isMultiValues];
  };

  const [isNameArr, isMultiNameArr] = isNameValue();

  return (
    <div className='create-modal-fields'>
      {isMultiNameArr ? (
        <ModalTabs
          isMultiNameArr={isMultiNameArr}
          languageTabs={['Uz', 'Ru']}
          remove={remove}
          register={register}
          error={error}
          control={control}
          index={index}
          initialValue={initialValue}
        />
      ) : null}

      {isNameArr?.map(({type, nameValue}, key) => (
        <FormElements
          key={key}
          type={type}
          control={control}
          index={index}
          error={error && error[nameValue]}
          name={`create[${index}].${nameValue}`}
          register={register}
          defaultValue={initialValue[nameValue]}
          placeholder={nameValue}
          label={nameValue}
        />
      ))}

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
  error: PropTypes.object,
  control: PropTypes.any,
  index: PropTypes.number,
  initialValue: PropTypes.object,
};
