import React from 'react';

const CommentCard = ({ comment }) => {
  // `comment.createdAt` adalah objek Date dari Prisma
  const formattedDate = new Date(comment.createdAt).toLocaleString('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });

  return (
    <div className="w-full bg-slate-800 p-3 rounded my-3">
      <div className="flex justify-between">
        <p className="font-medium text-gray-400">{comment.username}</p>
        <p className="text-sm text-slate-600">{formattedDate}</p>
      </div>
      <p>{comment.comment}</p>
    </div>
  );
};

export default CommentCard;
