'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

const NotFound = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center flex flex-col gap-3 items-center justify-center transition-all duration-200">
        <h1 className="text-4xl text-accent">404</h1>
        <p className="text-2xl text-accent">Page Not Found</p>
        <button onClick={() => router.back()} className="text-lg underline hover:text-accent">
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
