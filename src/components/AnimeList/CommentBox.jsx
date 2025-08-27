import prisma from '@/src/libs/prisma';
import React from 'react';
import CommentCard from './CommentCard';

const CommentBox = async ({ anime_mal_id }) => {
  const comments = await prisma.comment.findMany({ where: { anime_mal_id } });

  return (
    <div className="grid md:grid-cols-4 grid-cols-1 gap-3 ">
      {comments.map((comment, index) => (
        <CommentCard key={index} comment={comment} />
      ))}
    </div>
  );
};

export default CommentBox;
