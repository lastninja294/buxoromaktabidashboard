import React, {useState} from 'react';
import {useGetData, useDeleteData, usePostData, usePutData} from 'hooks';
import {Table, Image, Tag, message, Space, Popconfirm} from 'antd';
import {BsImage} from 'react-icons/bs';
import {AiOutlineDelete, AiOutlineEdit} from 'react-icons/ai';
import PaginationForTable from '../Pagination';
import {useHistory} from 'react-router-dom';

import PropTypes from 'prop-types';
import generateEdit from './generateEdit';
import ModalForm from '../ModalForm';
import generate from './generate';

const DynamicTable = ({routeForData, deleteKey}) => {
  const history = useHistory();

  const {data, isSuccess, refetch} = useGetData(
    `${routeForData}/${
      history.location.search.split('?')[1]
        ? history.location.search.split('?')[1]
        : 'page=1&size=10'
    }`,
  );

  const {mutateAsync} = useDeleteData(deleteKey);
  const {mutateAsync: mutateAsync1} = usePostData('files');
  const {mutateAsync: mutateAsync2} = usePutData(deleteKey);
  // -----------------------------------------------------

  const [visible, setVisible] = useState(false);
  const [tableLoading, setTableLoading] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  const [recData, setRecData] = useState({});
  const [visibility, setVisibility] = useState(false);

  let columns = {};

  if (isSuccess) {
    columns = Object.keys(data?.data.data[0])
      .map((e) => {
        if (!(e.split('_').filter((element) => element === 'id').length > 0)) {
          if (e.split('_').filter((elem) => elem === 'img').length > 0) {
            return {
              title: 'Img',
              dataIndex: e,
              key: 'img',
              ellipse: true,
              width: 80,
              align: 'center',
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
            ellipsis: true,
          };
        }
      })
      .filter((e) => e)
      .sort((a, b) => a.forSort - b.forSort);
    if (deleteKey !== 'users' && deleteKey !== 'admins') {
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
                    padding: '4px',
                    cursor: 'pointer',
                  }}
                  onClick={() => {
                    // console.log('recors', record);
                    setRecData(record);
                    setVisibility(true);
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
    } else {
      columns.push({
        title: 'Actions',
        key: 'actions',
        width: 30,
        fixed: 'right',
        align: 'center',
        render: (record) => {
          return (
            <>
              <Space size={'middle'} direction='horizontal' align='center'>
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
  }

  return (
    <div>
      {isSuccess ? (
        <div>
          <Table
            bordered
            rowKey={(record) => {
              return record[Object.keys(record)[0]];
            }}
            columns={columns}
            dataSource={data?.data?.data || []}
            loading={tableLoading}
            scroll={{
              y: 400,
            }}
            ellipse={true}
            pagination={false}
          />
          <PaginationForTable total={data?.data?.size || 100} />
        </div>
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
      <ModalForm
        type={'edit'}
        visibility={[visibility, setVisibility]}
        initialValue={generateEdit(deleteKey, recData)}
        schema={generate(deleteKey)?.[1]}
        onSubmit={async (data) => {
          if (deleteKey === 'teachers') {
            const hideFunc = message.loading({
              content: 'Yangilanmoqda',
              duration: 0,
            });
            const newData = {
              id: recData.teacher_id,
              ...data.create[0],
            };
            newData.about = JSON.stringify(newData.about);
            if (data.imgUrl.length === 0) {
              newData.imgUrl = recData.teacher_img;
            } else {
              const formData = new FormData();
              formData.append('file', data.imgUrl[0]);

              await mutateAsync1(formData)
                .then((a) => {
                  newData.imgUrl = a?.fileUrl;
                })
                .catch(() => {
                  message.error("Rasm yuklanmadi qayta urinib ko'ring!");
                });
            }
            mutateAsync2(newData)
              .then((e) => {
                message.success(e.message);
                hideFunc();
              })
              .catch((err) => {
                message.error(err.message);
                hideFunc();
              });
          } else if (deleteKey === 'news') {
            const hideFunc = message.loading({
              content: 'Yangilanmoqda',
              duration: 0,
            });
            const newData = {
              id: recData.news_id,
              ...data.create[0],
            };
            newData.data = JSON.stringify(newData.data);
            if (data.imgUrl.length === 0) {
              newData.imgUrl = recData.news_img;
            } else {
              const formData = new FormData();
              formData.append('file', data.imgUrl[0]);

              await mutateAsync1(formData)
                .then((a) => {
                  newData.imgUrl = a?.fileUrl;
                })
                .catch(() => {
                  message.error("Rasm yuklanmadi qayta urinib ko'ring!");
                });
            }
            mutateAsync2(newData)
              .then((e) => {
                message.success(e.message);
                hideFunc();
              })
              .catch((err) => {
                message.error(err.message);
                hideFunc();
              });
          } else if (deleteKey === 'results') {
            const hideFunc = message.loading({
              content: 'Yangilanmoqda',
              duration: 0,
            });
            await mutateAsync2({
              id: recData.result_id,
              ...data.create[0],
            })
              .then((res) => {
                message.success(res.message);
                hideFunc();
              })
              .catch(() => {
                message.error('Xatolik mavjud');
                hideFunc();
              });
          } else if (deleteKey === 'courses') {
            console.log(data);
            const hideFunc = message.loading({
              content: 'Yangilanmoqda',
              duration: 0,
            });
            const newData = {
              id: recData.course_id,
              ...data.create[0],
            };
            newData.data = JSON.stringify(newData.data);
            if (data.imgUrl.length === 0) {
              newData.imgUrl = recData.course_img;
            } else {
              const formData = new FormData();
              formData.append('file', data.imgUrl[0]);

              await mutateAsync1(formData)
                .then((a) => {
                  newData.imgUrl = a?.fileUrl;
                })
                .catch(() => {
                  message.error("Rasm yuklanmadi qayta urinib ko'ring!");
                });
            }

            newData.desc = JSON.stringify(newData.desc);

            console.log(newData);
            mutateAsync2(newData)
              .then((e) => {
                message.success(e.message);
                hideFunc();
              })
              .catch((err) => {
                message.error(err.message);
                hideFunc();
              });
          } else if (deleteKey === 'comments') {
            const hideFunc = message.loading({
              content: 'Yangilanmoqda',
              duration: 0,
            });
            const newData = {
              id: recData.comment_id,
              ...data.create[0],
            };
            newData.data = JSON.stringify(newData.data);
            if (data.imgUrl.length === 0) {
              newData.imgUrl = recData.news_img;
            } else {
              const formData = new FormData();
              formData.append('file', data.imgUrl[0]);

              await mutateAsync1(formData)
                .then((a) => {
                  newData.imgUrl = a?.fileUrl;
                })
                .catch(() => {
                  message.error("Rasm yuklanmadi qayta urinib ko'ring!");
                });
            }

            mutateAsync2(newData)
              .then((e) => {
                message.success(e.message);
                hideFunc();
              })
              .catch((err) => {
                message.error(err.message);
                hideFunc();
              });
          }
        }}
        isLoading={false}
      />
    </div>
  );
};

export default DynamicTable;

DynamicTable.propTypes = {
  routeForData: PropTypes.string,
  deleteKey: PropTypes.string,
};
