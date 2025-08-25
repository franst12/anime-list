'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const Header = ({ title }) => {
  const router = useRouter();

  const handleBack = (e) => {
    e.preventDefault();
    router.back();
  };
  return (
    <>
      {title ? (
        <div className="flex justify-between items-center my-5">
          <button onClick={handleBack} className="transition-all duration-100 hover:scale-105 cursor-pointer">
            &larr;Kembali
          </button>
          <h1>{title}</h1>
        </div>
      ) : (
        <button onClick={handleBack} className="hover:scale-105 transition-all duration-100 cursor-pointer">
          &larr;Kembali
        </button>
      )}
    </>
  );
};

export default Header;
