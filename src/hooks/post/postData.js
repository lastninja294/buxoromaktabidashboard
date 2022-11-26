import {useMutation, useQueryClient} from 'react-query';
import {notification} from 'antd';
import axios from 'axios';

const openNotificationWithIcon = (type) => {
  notification[type]({
    message: 'Xatolik !',
    description: 'Xatolik yuz berdi !',
  });
};
export const usePostData = (key) => {
  const queryClient = useQueryClient();
  return useMutation(
    async (dataPOST) => {
      const res = await axios({
        method: 'post',
        url: `http://167.71.60.204:9000/api/login/${key}`,
        data: dataPOST
      });
      return res.data;
    },
    {
      onError: (_error, _hero, context) => {
        openNotificationWithIcon('error');
        queryClient.setQueryData(key, context.previousData);
      },
      onSettled: () => {
        queryClient.invalidateQueries(key);
      },
    },
  );
};
