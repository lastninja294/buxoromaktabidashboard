import {Select} from 'antd';
import {Controller} from 'react-hook-form';
import axios from 'axios';
import {useQuery} from 'react-query';
import PropTypes from 'prop-types';

function FormSelect({
  control,
  placeholder,
  error,
  name,
  defaultValue,
  label = 'category',
  ...others
}) {
  const getFunc = async () =>
    axios.get('https://bariatrik.uz/api/news-category').then((res) => res.data);
  const {data} = useQuery('select', getFunc);
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
                {data?.data.map((item, index) => (
                  <Option key={index} value={item.id}>
                    {item.nameRu}
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
