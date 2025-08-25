import { authUsereSession } from '@/src/libs/auth-libs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = async () => {
  const user = await authUsereSession();

  return (
    <div className="flex flex-col gap-3 mt-18 justify-center items-center">
      <h1>Dashboard</h1>
      <p>Hello, {user?.name}</p>
      <Image src={user?.image} alt={user?.name} width={250} height={250} />
      <div className="flex w-100 justify-center gap-8 items-center my-5">
        <Link href={'/users/collection'} className="bg-accent p-2 rounded">
          My Collection
        </Link>
        <Link href={'/users/dashboard/comment'} className="bg-accent p-2 rounded">
          My Comment
        </Link>
      </div>
    </div>
  );
};

export default page;
