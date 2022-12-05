import {Controller} from 'react-hook-form';
import './styles.scss';
import PropTypes from 'prop-types';

function FormUpload({control, register, error, name, defaultValue, ...others}) {
  return (
    <>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={() => {
          return (
            <>
              <label htmlFor='imageupload'>Select image</label>
              <div className='create-upload'>
                <input
                  {...register('imgUrl')}
                  type={'file'}
                  name='imgUrl'
                  accept={'image/*'}
                  id='imageupload'
                />
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

export default FormUpload;

FormUpload.propTypes = {
  control: PropTypes.any,
  error: PropTypes.any,
  name: PropTypes.any,
  label: PropTypes.any,
  defaultValue: PropTypes.any,
  register: PropTypes.any,
};
