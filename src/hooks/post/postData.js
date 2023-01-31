import {useMutation, useQueryClient} from 'react-query';
import {notification} from 'antd';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const openNotificationWithIcon = (type) => {
  notification[type]({
    message: 'Xatolik !',
    description: 'Xatolik yuz berdi !',
  });
};
export const usePostData = (key) => {
  const queryClient = useQueryClient();
  const history = useHistory();
  return useMutation(
    async (dataPOST) => {
      const res = await axios({
        headers: {
          Authorization: 'BMToken ' + localStorage.getItem('token'),
        },
        method: 'post',
        url: `https://api.buxoromaktabi.uz/api/${key}`,
        data: dataPOST,
      });
      return res.data;
    },
    {
      onError: (_error, _hero, context) => {
        if (key !== 'login') {
          openNotificationWithIcon('error');
        }
        queryClient.setQueryData(key, context.previousData);
      },
      onSettled: () => {
        queryClient.invalidateQueries(
          key + '/' + history.location.search.slice(1),
        );
      },
    },
  );
};
