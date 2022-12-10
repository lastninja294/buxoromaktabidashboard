import {Controller} from 'react-hook-form';
import './styles.scss';
import PropTypes from 'prop-types';
import {Switch} from 'antd';

function FormSwitch({control, error, name, defaultValue, ...others}) {
  return (
    <>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({field}) => {
          return (
            <>
              <label>Status</label>
              <div className='create-switch'>
                <Switch {...field} checked={field.value} />
              </div>
              {error && (
                <p style={{fontSize: '12px', color: 'red'}}>{error?.message}</p>
              )}
            </>
          );
        }}
        {...others}
      />
    </>
  );
}

export default FormSwitch;

FormSwitch.propTypes = {
  control: PropTypes.any,
  error: PropTypes.any,
  name: PropTypes.any,
  label: PropTypes.any,
  defaultValue: PropTypes.any,
};
