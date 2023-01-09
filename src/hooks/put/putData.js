import axios from 'axios';
import {useMutation, useQueryClient} from 'react-query';
import {notification} from 'antd';

const openNotificationWithIcon = (type) => {
  notification[type]({
    message: 'Xatolik !',
    description: 'Xatolik yuz berdi !',
  });
};
export const usePutData = (key) => {
  const queryClient = useQueryClient();
  return useMutation(
    async (dataPUT) => {
      const res = await axios({
        headers: {
          Authorization: 'BMToken ' + localStorage.getItem('token'),
        },
        method: 'PUT',
        url: `https://api.buxoromaktabi.uz/api/${key}`,
        data: dataPUT,
      });
      return res.data;
    },
    {
      onError: (err, userUpdates, context) => {
        openNotificationWithIcon('error');
        queryClient.setQueryData(
          [key, context.userUpdates.id],
          context.previousUser,
        );
      },

      onSettled: () => {
        queryClient.invalidateQueries([key]);
      },
    },
  );
};
