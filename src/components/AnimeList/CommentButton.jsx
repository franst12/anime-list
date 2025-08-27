'use client';

import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const CommentButton = ({ anime_mal_id, user_email, username, anime_title }) => {
  const [comment, setComment] = useState('');
  const [isCreated, setIsCreated] = useState(false);
  const route = useRouter();

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleClick = async (e) => {
    e.preventDefault();

    const data = { anime_mal_id, user_email, comment, username, anime_title };
    const createComment = await axios.post('/api/v1/comment/', data);
    if (createComment) {
      setIsCreated(true);
      setComment('');
      route.refresh();
    }
  };

  return (
    <div>
      {isCreated && <p className="text-primary">Berhasil menambahkan komentar</p>}
      <div className="md:w-[50%] w-full h-42 rounded my-3">
        <textarea value={comment} onChange={handleChange} placeholder="Tulis komentar..." className=" p-3 bg-primary w-full h-full text-dark"></textarea>
      </div>
      <button onClick={handleClick} className="bg-accent cursor-pointer text-white p-3 rounded">
        Posting Komentar
      </button>
    </div>
  );
};

export default CommentButton;
