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
    <div className="flex justify-between items-center my-5">
      <button onClick={handleBack} className=" cursor-pointer">
        Back
      </button>
      <h1>{title}</h1>
    </div>
  );
};

export default Header;
