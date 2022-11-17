import axios from 'axios';
import {useMutation, useQueryClient} from 'react-query';

export const useDeleteData = (key) => {
  const queryClient = useQueryClient();
  return useMutation(
    (dataDELETE) =>
      axios({
        method: 'delete',
        url: `https://axiosuchunsinovapi.herokuapp.com/${key}`,
        data: dataDELETE,
      }),
    {
      onError: (err, userUpdates, context) => {
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
