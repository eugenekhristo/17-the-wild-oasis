import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateSetting as apiUpdateSetting } from '../../services/apiSettings';
import toast from 'react-hot-toast';

export default function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { isLoading: isUpdating, mutate: updateSetting } = useMutation({
    mutationFn: apiUpdateSetting,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['settings'],
      });
      toast.success('Setting successfully updated!');
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateSetting };
}
