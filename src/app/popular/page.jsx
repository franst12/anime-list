'use client';

import React, { useEffect, useState } from 'react';
import HeaderMenu from '../utilities/HeaderMenu';
import Pagination from '../utilities/Pagination';
import axios from 'axios';
import AnimeList from '@/src/components/AnimeList';

const Page = () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/top/anime?page=${page}`);
    const data = response.data;
    setTopAnime(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div>
      <HeaderMenu page={page} />
      <AnimeList apiAnime={topAnime} />
      <Pagination page={page} setPage={setPage} lastPage={topAnime.pagination?.last_visible_page} />
    </div>
  );
};

export default Page;
