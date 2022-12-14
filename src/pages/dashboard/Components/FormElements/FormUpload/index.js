import {Controller} from 'react-hook-form';
import './styles.scss';
import PropTypes from 'prop-types';
import {AiOutlinePlus} from 'react-icons/ai';
import {useState} from 'react';

function FormUpload({control, register, error, name, defaultValue, ...others}) {
  const [base64, setBase64] = useState('');
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  return (
    <>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={() => {
          return (
            <>
              <div className='create-upload'>
                <label htmlFor='imageupload' className='labelForUpload'>
                  <AiOutlinePlus size={18} />
                  <span>Upload</span>
                </label>
                <input
                  {...register('imgUrl')}
                  type={'file'}
                  name='imgUrl'
                  accept={'.png, .jpg, .jpeg'}
                  id='imageupload'
                  style={{display: 'none'}}
                  onChange={async (e) => {
                    const file = e.target.files[0];
                    const base64 = await convertBase64(file);
                    setBase64(base64);
                  }}
                />
                {defaultValue.length > 0 && base64.length === 0 ? (
                  <img
                    src={defaultValue}
                    style={{maxWidth: '120px'}}
                    alt='Something'
                  />
                ) : (
                  <img
                    src={base64}
                    style={{
                      maxWidth: '120px',
                      display: base64.length === 0 ? 'none' : 'block',
                    }}
                    alt='Something'
                  />
                )}
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
