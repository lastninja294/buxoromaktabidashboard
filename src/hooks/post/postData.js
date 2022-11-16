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
    (dataPOST) => {
      return axios({
        method: 'post',
        url: `https://axiosuchunsinovapi.herokuapp.com/${key}`,
        data: dataPOST,
      }).then((res) => res.data);
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
