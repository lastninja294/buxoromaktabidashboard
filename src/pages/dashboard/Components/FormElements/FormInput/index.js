import {Input} from 'antd';
import {Controller} from 'react-hook-form';
import PropTypes from 'prop-types';

function FormInput({
  control,
  placeholder,
  error,
  name,
  defaultValue,
  label = 'title',
  ...others
}) {
  return (
    <>
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
              <Input
                {...field}
                placeholder={placeholder}
                defaultValue={defaultValue}
              />
              {error && (
                <p style={{fontSize: '12px', color: 'red'}}>{error?.message}</p>
              )}
            </label>
          </>
        )}
        {...others}
      />
    </>
  );
}

export default FormInput;

FormInput.propTypes = {
  control: PropTypes.any,
  placeholder: PropTypes.any,
  error: PropTypes.any,
  name: PropTypes.any,
  defaultValue: PropTypes.any,
  label: PropTypes.any,
};
