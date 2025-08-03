'use client';

import { MagnifyingGlassIcon } from '@phosphor-icons/react';
import { useRouter } from 'next/navigation';
import { useRef } from 'react';

const InputSearch = () => {
  const searchHref = useRef();
  const router = useRouter();

  const handleSearch = (e) => {
    const keyword = searchHref.current.value;

    if (keyword.length <= 3 || keyword === '') return;
    if (e.key === 'Enter' || e.type === 'click') {
      e.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };
  return (
    <div className="relative">
      <input type="text" placeholder="search anime..." ref={searchHref} onKeyDown={handleSearch} className="bg-white md:w-100 p-2 rounded-md w-full text-dark" />
      <button onClick={handleSearch} className="absolute end-2 cursor-pointer top-2 text-slate-800 ">
        <MagnifyingGlassIcon size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
