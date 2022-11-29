import {message} from 'antd';
import axios from 'axios';
import {useMutation, useQueryClient} from 'react-query';

export const useDeleteData = (key) => {
  const queryClient = useQueryClient();
  return useMutation(
    (dataDELETE) =>
      axios({
        headers: {
          access_token: 'BMToken ' + localStorage.getItem('token'),
        },
        method: 'delete',
        url: `http://167.71.60.204:9000/api/${key}`,
        data: dataDELETE,
      }),
    {
      onError: () => {
        message.error('Something went wrong');
      },

      onSettled: () => {
        queryClient.invalidateQueries([key]);
      },
    },
  );
};
