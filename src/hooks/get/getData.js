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
    key,
    async () => {
      return axios.get(`https://axiosuchunsinovapi.herokuapp.com/${key}`);
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
