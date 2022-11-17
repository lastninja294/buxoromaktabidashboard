import {Upload, Button} from 'antd';
import {UploadOutlined} from '@ant-design/icons';
import {Controller} from 'react-hook-form';
import './styles.scss';
import PropTypes from 'prop-types';

function FormUpload({
  control,
  error,
  name,
  label = 'files',
  defaultValue,
  ...others
}) {
  return (
    <>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({value, ...field}) => (
          <>
            <label>{label}</label>
            <div className='create-upload'>
              <Upload
                {...field}
                fileList={value}
                action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
                multiple
                listType='picture'
                defaultFileList={defaultValue}
                accept={'image/* , video/*'}>
                <Button icon={<UploadOutlined />}>Upload</Button>
              </Upload>
            </div>
            {error && (
              <p style={{fontSize: '12px', color: 'red'}}>{error?.message}</p>
            )}
          </>
        )}
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
};
