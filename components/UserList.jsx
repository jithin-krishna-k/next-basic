'use client';

import useSWR, { mutate } from 'swr';
import { fetcher } from '@/lib/fetcher';
import { Button } from './ui/button';
import { useAuth } from '@/app/context/AuthContext';

export default function UserList() {
  const { logout } = useAuth();


  const { data, error, isLoading } = useSWR('/api/users', fetcher, {
    refreshInterval: 10000, //10s
    revalidateOnFocus: true,
  });

  mutate('/api/users'); 
  // console.log(">>>",{data});
  

  if (isLoading) return <p>Loading users...</p>;
  if (error) return <p>Error loading users</p>;

  return (
    <ul>
      <Button onClick={logout}>Logout</Button>
      {data.map((user) => (
        <li key={user.id}>
          {user.name} ({user.email})
        </li>

      ))}
    </ul>
  );
}
