// useAuth hook
// Authentication state management

import { useQuery, useMutation } from '@tanstack/react-query';
import { APIClient } from '../lib/api';

export function useAuth() {
  const { data: user, isLoading } = useQuery({
    queryKey: ['auth'],
    queryFn: APIClient.getMe,
    retry: false
  });

  const loginMutation = useMutation({
    mutationFn: APIClient.login
  });

  const logoutMutation = useMutation({
    mutationFn: APIClient.logout
  });

  return {
    user,
    isLoading,
    login: loginMutation.mutate,
    logout: logoutMutation.mutate
  };
}
