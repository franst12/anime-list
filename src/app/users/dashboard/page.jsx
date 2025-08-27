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
      <div className="border border-accent rounded overflow-hidden hover:scale-105 hover:rotate-0 rotate-12 hover:shadow-gray-300 shadow-lg transition-all duration-300">
        <Image src={user?.image} alt={user?.name} width={250} height={250} />
      </div>
      <div className="flex w-100 justify-center gap-8 items-center my-5">
        <Link href={'/users/collection'} className="bg-accent p-2 rounded">
          My Collection
        </Link>
        <Link href={'/users/comment'} className="bg-accent p-2 rounded">
          My Comment
        </Link>
      </div>
    </div>
  );
};

export default page;
