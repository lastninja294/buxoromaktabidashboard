import {message} from 'antd';
import axios from 'axios';
import {useMutation, useQueryClient} from 'react-query';

export const useDeleteData = (key) => {
  const queryClient = useQueryClient();
  return useMutation(
    (dataDELETE) =>
      axios({
        headers: {
          access_token:
            'BMToken eyJhbGciOiJIUzI1NiJ9.YTE0Nzc2MWItOWE5ZS00YzIwLWJiZWItODYzYTQ2MzBhY2Rl.S0JAQm3NxO0kwF8OV1RT0NZzIxy9EMlZwTPuQ2OmPR0',
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
