import Header from '@/src/components/dashboard/Header';
import Link from 'next/link';
import React from 'react';

const page = () => {
  return (
    <>
      <div>
        <Header title="MyCollections" />
        <div className="flex flex-wrap justify-around gap-3 items-center mt-5">
          <div className="border border-accent w-[250px] h-[300px] rounded relative">
            <Link href={'/'}>
              <h5 className="absolute bottom-0 p-2 bg-accent w-full flex justify-center items-center">Judul Anime</h5>
            </Link>
          </div>
          <div className="border border-accent w-[250px] h-[300px] rounded relative">
            <Link href={'/'}>
              <h5 className="absolute bottom-0 p-2 bg-accent w-full flex justify-center items-center">Judul Anime</h5>
            </Link>
          </div>
          <div className="border border-accent w-[250px] h-[300px] rounded relative">
            <Link href={'/'}>
              <h5 className="absolute bottom-0 p-2 bg-accent w-full flex justify-center items-center">Judul Anime</h5>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
