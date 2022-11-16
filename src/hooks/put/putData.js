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
    (dataPUT) => {
      return axios({
        method: 'put',
        url: `https://axiosuchunsinovapi.herokuapp.com${key}`,
        data: dataPUT,
      }).then((res) => res.data);
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
