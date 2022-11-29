import React, {useState} from 'react';
import {Tabs} from 'antd';
import {FrownOutlined} from '@ant-design/icons';
import PropTypes from 'prop-types';
import FormElements from 'pages/dashboard/Components/FormElements';

function ModalTabs({
  isMultiNameArr,
  languageTabs,
  register,
  error,
  control,
  index,
  initialValue,
}) {
  const {TabPane} = Tabs;
  const [tab, settab] = useState(languageTabs[0]);
  function callback(key) {
    settab(key);
  }

  const isAllErrorLang = (error, values, lang) => {
    if (!error) return null;
    let isErr = false;
    for (const item of values) {
      if (item.nameValue in error) {
        error[item.nameValue][lang]
          ? (isErr = true || isErr)
          : (isErr = false || isErr);
      }
    }
    return isErr;
  };
  console.log(error, 'error');
  return (
    <>
      <Tabs
        defaultActiveKey={languageTabs[0]}
        activeKey={tab}
        onChange={callback}>
        {languageTabs.map((item) => (
          <TabPane
            tab={
              <span>
                {item === 'Uz' ? 'Uzbekcha' : 'Russian'}
                <FrownOutlined
                  hidden={
                    error ? !isAllErrorLang(error, isMultiNameArr, item) : true
                  }
                  style={{color: 'red', marginLeft: '10px'}}
                />
              </span>
            }
            key={item}
          />
        ))}
      </Tabs>

      {languageTabs.map((lang, key) => {
        return (
          <div style={tab !== lang ? {display: 'none'} : null} key={key}>
            {isMultiNameArr.map(({nameValue, type}, i) => {
              console.log(type, nameValue, 'wuuuuuuuuuu', i);
              return (
                <FormElements
                  key={i}
                  type={'input'}
                  control={control}
                  index={index}
                  error={error && error[nameValue]?.[lang]}
                  name={`create[${index}].${nameValue}.${lang}`}
                  register={register}
                  defaultValue={initialValue[nameValue]?.[lang]}
                  placeholder={nameValue}
                  label={nameValue}
                />
              );
            })}
          </div>
        );
      })}
    </>
  );
}

export default ModalTabs;

ModalTabs.propTypes = {
  isMultiNameArr: PropTypes.array,
  languageTabs: PropTypes.array,
  register: PropTypes.any,
  error: PropTypes.object,
  control: PropTypes.any,
  index: PropTypes.number,
  initialValue: PropTypes.object,
};
