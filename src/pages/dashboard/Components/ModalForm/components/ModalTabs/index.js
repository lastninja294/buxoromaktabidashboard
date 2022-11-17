import React, {useState} from 'react';
import {Tabs} from 'antd';
import {FrownOutlined} from '@ant-design/icons';
import PropTypes from 'prop-types';
import FormElements from 'pages/dashboard/Components/FormElements';

function ModalTabs({
  isTitle,
  isBody,
  isName,
  register,
  error,
  control,
  index,
  initialValue,
}) {
  const {TabPane} = Tabs;
  const [tab, settab] = useState('Uz');
  function callback(key) {
    settab(key);
  }
  return (
    <>
      <Tabs defaultActiveKey='Uz' activeKey={tab} onChange={callback}>
        <TabPane
          tab={
            <span>
              Uzbekcha
              <FrownOutlined
                hidden={
                  error
                    ? !(
                        'titleUz' in error ||
                        'bodyUz' in error ||
                        'nameUz' in error
                      )
                    : true
                }
                style={{color: 'red', marginLeft: '10px'}}
              />
            </span>
          }
          key='Uz'
        />
        <TabPane
          tab={
            <span>
              Russian
              <FrownOutlined
                hidden={
                  error
                    ? !(
                        'titleRu' in error ||
                        'bodyRu' in error ||
                        'nameRu' in error
                      )
                    : true
                }
                style={{color: 'red', marginLeft: '10px'}}
              />
            </span>
          }
          key='Ru'
        />
        <TabPane
          tab={
            <span>
              English
              <FrownOutlined
                hidden={
                  error
                    ? !(
                        'titleEn' in error ||
                        'bodyEn' in error ||
                        'nameEn' in error
                      )
                    : true
                }
                style={{color: 'red', marginLeft: '10px'}}
              />
            </span>
          }
          key='En'
        />
      </Tabs>
      <div style={tab !== 'Uz' ? {display: 'none'} : null}>
        {isTitle ? (
          <FormElements
            type='input'
            control={control}
            index={index}
            error={error?.titleUz}
            name={`create[${index}].titleUz`}
            register={register}
            defaultValue={initialValue.titleUz}
            placeholder='titleUz'
            label='title Uz'
          />
        ) : null}
        {isBody ? (
          <FormElements
            type='editor'
            control={control}
            index={index}
            name={`create[${index}].bodyUz`}
            error={error?.bodyUz}
            defaultValue={initialValue.bodyUz}
            placeholder='bodyUz'
            label='body Uz'
          />
        ) : null}
        {isName ? (
          <FormElements
            type='input'
            control={control}
            index={index}
            error={error?.nameUz}
            name={`create[${index}].nameUz`}
            register={register}
            defaultValue={initialValue.nameUz}
            placeholder='nameUz'
            label='name Uz'
          />
        ) : null}
      </div>
      <div style={tab !== 'Ru' ? {display: 'none'} : null}>
        {isTitle ? (
          <FormElements
            type='input'
            control={control}
            index={index}
            error={error?.titleRu}
            name={`create[${index}].titleRu`}
            register={register}
            defaultValue={initialValue.titleRu}
            placeholder='titleRu'
            label='title Ru'
          />
        ) : null}
        {isBody ? (
          <FormElements
            type='editor'
            control={control}
            index={index}
            name={`create[${index}].bodyRu`}
            error={error?.bodyRu}
            defaultValue={initialValue.bodyRu}
            placeholder='bodyRu'
            label='body Ru'
          />
        ) : null}
        {isName ? (
          <FormElements
            type='input'
            control={control}
            index={index}
            error={error?.nameRu}
            name={`create[${index}].nameRu`}
            register={register}
            defaultValue={initialValue.nameRu}
            placeholder='nameRu'
            label='name Ru'
          />
        ) : null}
      </div>
      <div style={tab !== 'En' ? {display: 'none'} : null}>
        {isTitle ? (
          <FormElements
            type='input'
            control={control}
            index={index}
            error={error?.titleEn}
            name={`create[${index}].titleEn`}
            register={register}
            defaultValue={initialValue.titleEn}
            placeholder='titleEn'
            label='title En'
          />
        ) : null}
        {isBody ? (
          <FormElements
            type='editor'
            control={control}
            index={index}
            name={`create[${index}].bodyEn`}
            error={error?.bodyEn}
            defaultValue={initialValue.bodyEn}
            placeholder='bodyEn'
            label='body En'
          />
        ) : null}
        {isName ? (
          <FormElements
            type='input'
            control={control}
            index={index}
            error={error?.nameEn}
            name={`create[${index}].nameEn`}
            register={register}
            defaultValue={initialValue.nameEn}
            placeholder='nameEn'
            label='name En'
          />
        ) : null}
      </div>
    </>
  );
}

export default ModalTabs;

ModalTabs.propTypes = {
  isTitle: PropTypes.any,
  isBody: PropTypes.any,
  isName: PropTypes.any,
  register: PropTypes.any,
  error: PropTypes.any,
  control: PropTypes.any,
  index: PropTypes.any,
  initialValue: PropTypes.any,
};
