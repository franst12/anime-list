import { authUsereSession } from '@/src/libs/auth-libs';
import Image from 'next/image';
import React from 'react';

const page = async () => {
  const user = await authUsereSession();
  const PageDashboard = () => {
    return (
      <div>
        <h1>Dashboard</h1>
        <p>Hello, {user?.name}</p>
        <Image src={user?.image} alt={user?.name} width={250} height={250} />
      </div>
    );
  };

  return <>{user ? <PageDashboard /> : <h1>Anda Belum Login</h1>}</>;
};

export default page;
