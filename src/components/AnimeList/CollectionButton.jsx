'use client';

import axios from 'axios';
import React, { useState } from 'react';

const CollectionButton = ({ anime_mal_id, user_email, images, title }) => {
  const [isCreated, setIsCreated] = useState(false);
  const handleClick = async (e) => {
    e.preventDefault();

    const data = { anime_mal_id, user_email, images, title };
    console.log('Ini data yang ditambahakan ke favorit :', data);

    try {
      const response = await axios.post('/api/v1/collection/', data);
      const collection = await response.data;

      setIsCreated(true);
      console.log(collection);
    } catch (error) {
      console.error('Error adding to collection:', error);
    }
  };

  return (
    <div>
      {!isCreated ? (
        <button onClick={handleClick} className="bg-accent text-white py-2 px-4 rounded">
          Tambah Ke Koleksi
        </button>
      ) : (
        <p className=" text-primary">Berhasil ditambahakan ke koleksi</p>
      )}{' '}
    </div>
  );
};

export default CollectionButton;
