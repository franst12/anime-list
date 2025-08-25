import Header from '@/src/components/dashboard/Header';
import { getAnimeList } from '@/src/libs/api.lib';
import { authUsereSession } from '@/src/libs/auth-libs';
import prisma from '@/src/libs/prisma';
import Link from 'next/link';
import React from 'react';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const page = async () => {
  const user = await authUsereSession();

  const collection = await prisma.collection.findMany({
    where: {
      user_email: user?.email,
    },
  });

  const animeData = [];
  for (const collect of collection) {
    await delay(500);
    try {
      const animeDetail = await getAnimeList(`anime/${collect.anime_mal_id}`);
      animeData.push(animeDetail.data);
    } catch (error) {
      console.error(`Gagal mengambil data untuk anime ID ${collect.anime_mal_id}:`, error);
    }
  }

  return (
    <>
      <div>
        <Header title="My Collections" />
        <div className="flex flex-wrap gap-3 items-center mt-5">
          {animeData.map((anime, index) => (
            <div key={index} className="border border-accent w-[250px] h-[410px] rounded relative overflow-hidden shadow-lg">
              <Link href={`/anime/${anime.mal_id}`}>
                <img src={anime.images.webp.image_url} alt={anime.title} className="object-cover" width={250} height={350} />
                <div className="p-2 bg-accent w-full flex flex-col justify-center items-center">
                  <h4 className="text-sm font-bold text-center mb-1">{anime.title}</h4>
                  <p className="text-xs text-center">{anime.mal_id}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default page;
