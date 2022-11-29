import React, {useState} from 'react';
import {useGetData, useDeleteData} from 'hooks';
import {Table, Image, Tag, message, Space, Popconfirm} from 'antd';
import {BsImage} from 'react-icons/bs';
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai';

import PropTypes from 'prop-types';

const DynamicTable = ({routeForData}) => {
  const {data, isSuccess, refetch} = useGetData(routeForData, {
    headers: {
      access_token: `BMToken ${localStorage.getItem('token')}`,
    },
  });

  const {mutateAsync} = useDeleteData('news');
  const [visible, setVisible] = useState(false);
  const [tableLoading, setTableLoading] = useState(false);
  const [imageSrc, setImageSrc] = useState('');

  let columns = {};

  if (isSuccess) {
    columns = Object.keys(data?.data.data[0])
      .map((e) => {
        if (!(e.split('_').filter((element) => element === 'id').length > 0)) {
          if (e.split('_').filter((elem) => elem === 'img').length > 0) {
            return {
              title: e.split('_').join(' '),
              dataIndex: e,
              key: 'img',
              ellipse: true,
              width: 150,
              render: (text) => {
                return (
                  <>
                    <BsImage
                      size={24}
                      onClick={() => {
                        setVisible(true);
                        setImageSrc(text);
                      }}
                      style={{cursor: 'pointer'}}
                    />
                  </>
                );
              },
              forSort: 1,
            };
          } else if (
            e.split('_').filter((elem) => elem === 'status').length > 0
          ) {
            return {
              title: e.split('_').join(' '),
              dataIndex: e,
              key: e,
              forSort: 0,
              width: 150,
              render: (text) => {
                if (text) {
                  return <Tag color='green'>{text.toString()}</Tag>;
                }
                return <Tag color='red'>{text.toString()}</Tag>;
              },
            };
          }
          return {
            title: e.split('_').join(' '),
            dataIndex: e,
            key: e,
            width: 150,
            forSort: 0,
          };
        }
      })
      .filter((e) => e)
      .sort((a, b) => a.forSort - b.forSort);
    columns.push({
      title: 'Actions',
      key: 'actions',
      width: 120,
      fixed: 'right',
      render: (record) => {
        return (
          <>
            <Space size={'middle'} direction='horizontal' align='center'>
              <AiOutlineEdit
                size={28}
                style={{
                  border: '1px solid #000',
                  padding: '4px',
                  cursor: 'pointer',
                }}
              />
              <Popconfirm
                title={`Haqiqatdan ham o'chirishni xohlaysizmi?`}
                onConfirm={async () => {
                  setTableLoading(true);
                  mutateAsync({
                    id: record[
                      Object.keys(record).find((e) => {
                        return e.includes('_id');
                      })
                    ],
                  }).then(() => {
                    message.success("Muvaffaqiyatli o'chirildi");
                    setTableLoading(false);
                    refetch();
                  });
                }}
                okText='Xa'
                cancelText={`Yo'q`}>
                <AiOutlineDelete
                  size={28}
                  style={{
                    padding: '4px',
                    cursor: 'pointer',
                  }}
                  color='#e91e63'
                />
              </Popconfirm>
            </Space>
          </>
        );
      },
    });
  }

  return (
    <div>
      {isSuccess ? (
        <Table
          bordered
          rowKey={(record) => {
            return record[Object.keys(record)[0]];
          }}
          columns={columns}
          dataSource={data?.data?.data}
          loading={tableLoading}
          scroll={{
            y: 400,
          }}
          ellipse={true}
        />
      ) : (
        'Loading'
      )}
      <Image
        width={200}
        style={{
          display: 'none',
        }}
        src={imageSrc}
        onError={() => {
          visible ? message.error('Rasm aniqlanmadi!') : 'Hehe';
        }}
        preview={{
          visible,
          onVisibleChange: (value) => {
            if (value === false) {
              setImageSrc('');
            }
            setVisible(value);
          },
        }}
      />
    </div>
  );
};

export default DynamicTable;

DynamicTable.propTypes = {
  routeForData: PropTypes.string,
};
