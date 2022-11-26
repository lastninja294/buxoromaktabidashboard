import axios from 'axios';
import {notification} from 'antd';
import {useQuery} from 'react-query';

const openNotificationWithIcon = (type) => {
  notification[type]({
    message: 'Error !',
    description: 'Malumotlarni olib kelishda xatolik yuz berdi! !',
  });
};
export const useGetData = (key, headers) => {
  return useQuery(
    key,
    async () => {
      return axios.get(
        `http://167.71.60.204:9000/api/${key}`,
        headers,
      );
    },
    {
      onError: () => {
        openNotificationWithIcon('error');
      },
      onSuccess: () => {
        console.log('success!!');
      },
      onSettled: () => {
        console.log('settled!!');
      },
    },
  );
};
