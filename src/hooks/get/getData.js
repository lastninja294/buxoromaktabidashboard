import axios from 'axios';
import {notification} from 'antd';
import {useQuery} from 'react-query';

const openNotificationWithIcon = (type) => {
  notification[type]({
    message: 'Error !',
    description: 'Malumotlarni olib kelishda xatolik yuz berdi! !',
  });
};
export const useGetData = (key) => {
  return useQuery(
    {
      queryKey: [key],
      queryFn: async () => {
        return axios.get(`https://api.buxoromaktabi.uz/api/${key}`, {
          headers: {
            Authorization: 'BMToken ' + localStorage.getItem('token'),
          },
        });
      },
    },

    {
      onError: () => {
        openNotificationWithIcon('error');
      },
      onSuccess: () => {
        return 'success!!';
      },
      onSettled: () => {
        return 'settled!!';
      },
    },
  );
};
