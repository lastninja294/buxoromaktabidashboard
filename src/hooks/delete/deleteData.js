import {message} from 'antd';
import axios from 'axios';
import {useMutation, useQueryClient} from 'react-query';

export const useDeleteData = (key) => {
  const queryClient = useQueryClient();
  return useMutation(
    (dataDELETE) =>
      axios({
        headers: {
          Authorization: 'BMToken ' + localStorage.getItem('token'),
        },
        method: 'delete',
        url: `https://api.buxoromaktabi.uz/api/${key}`,
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
