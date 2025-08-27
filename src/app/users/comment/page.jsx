import Header from '@/src/components/dashboard/Header';
import { authUsereSession } from '@/src/libs/auth-libs';
import prisma from '@/src/libs/prisma';
import Link from 'next/link';
import React from 'react';

const page = async () => {
  const user = await authUsereSession();
  console.log(user);

  const comments = await prisma.comment.findMany({
    where: {
      user_email: user?.email,
    },
  });

  console.log(comments);

  return (
    <div>
      <Header title="My Comment" />
      <div className=" grid grid-cols-2 gap-5">
        {comments.map((comment) => (
          <Link href={`/anime/${comment.anime_mal_id}`} key={comment.id} className="bg-primary text-dark mb-3 p-3 rounded">
            <p>{comment.anime_title}</p>
            <p>{comment.comment}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
