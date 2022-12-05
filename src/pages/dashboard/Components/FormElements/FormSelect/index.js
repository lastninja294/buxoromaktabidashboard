import {Select} from 'antd';
import {Controller} from 'react-hook-form';
import PropTypes from 'prop-types';
import {useGetData} from 'hooks';

function FormSelect({
  control,
  placeholder,
  error,
  name,
  defaultValue,
  label = 'category',
  ...others
}) {
  const {data} = useGetData('teachers/all');
  const {Option} = Select;
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
              <Select
                {...field}
                placeholder={placeholder}
                defaultValue={defaultValue}>
                {data?.data?.data?.map((item, index) => (
                  <Option key={index} value={item.teacher_id}>
                    {item.teacher_name}
                  </Option>
                ))}
              </Select>
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

export default FormSelect;

FormSelect.propTypes = {
  control: PropTypes.any,
  placeholder: PropTypes.any,
  error: PropTypes.any,
  name: PropTypes.any,
  defaultValue: PropTypes.any,
  label: PropTypes.any,
};
