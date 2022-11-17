import {Input} from 'antd';
import InputMask from 'react-input-mask';
import {Controller} from 'react-hook-form';
import PropTypes from 'prop-types';

function FormPhone({
  control,
  placeholder,
  error,
  name,
  defaultValue,
  label,
  ...others
}) {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({field}) => (
        <>
          <label
            style={{
              display: 'flex',
              flexDirection: 'column',
              margin: '10px 0',
            }}>
            <span>{label}</span>
            <InputMask
              {...field}
              mask='+(\9\98) 99 999 9999'
              defaultValue={defaultValue}
              placeholder={placeholder}>
              {(inputProps) => <Input {...inputProps} />}
            </InputMask>
            {error && (
              <p style={{fontSize: '12px', color: 'red'}}>{error?.message}</p>
            )}
          </label>
        </>
      )}
      {...others}
    />
  );
}

export default FormPhone;

FormPhone.propTypes = {
  control: PropTypes.any,
  placeholder: PropTypes.any,
  error: PropTypes.any,
  name: PropTypes.any,
  defaultValue: PropTypes.any,
  label: PropTypes.any,
};
