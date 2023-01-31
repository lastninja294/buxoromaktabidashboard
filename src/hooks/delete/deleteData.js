import {message} from 'antd';
import axios from 'axios';
import {useMutation, useQueryClient} from 'react-query';
import {useHistory} from 'react-router-dom';

export const useDeleteData = (key) => {
  const queryClient = useQueryClient();
  const history = useHistory();
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
        queryClient.invalidateQueries([
          key + '/' + history.location.search.slice(1),
        ]);
      },
    },
  );
};
