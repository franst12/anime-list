import Image from 'next/image';
import VideoPlayer from '../../utilities/VideoPlayer';
import CollectionButton from '@/src/components/AnimeList/CollectionButton';
import { authUsereSession } from '@/src/libs/auth-libs';
import prisma from '@/src/libs/prisma';
import Header from '@/src/components/dashboard/Header';
import CommentButton from '@/src/components/AnimeList/CommentButton';
import CommentBox from '@/src/components/AnimeList/CommentBox';

const { getAnimeList } = require('../../../libs/api.lib');

const Page = async ({ params }) => {
  const id = await params?.id;
  const animeDetail = await getAnimeList(`anime/${id}`);
  const data = animeDetail.data;

  const dataUser = await authUsereSession();
  const collection = await prisma.collection.findFirst({
    where: {
      user_email: dataUser?.email,
      anime_mal_id: id,
    },
  });

  return (
    <div className="pt-5 px-3">
      <div className="mb-3">
        <Header />
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="md:text-3xl text-xl font-bold mb-3">{data.title}</h1>
        {!collection && dataUser ? <CollectionButton anime_mal_id={id} user_email={dataUser?.email} images={data?.images?.webp?.image_url} title={data?.title} /> : ''}
      </div>
      <div className="flex gap-5 items-center overflow-x-auto ">
        <div className="border flex flex-col justify-center items-center gap-1 my-3 rounded-md border-accent p-3 w-25">
          <p>PERINGKAT</p>
          <p>{data.rank}</p>
        </div>
        <div className="border flex flex-col justify-center items-center gap-1 my-3 rounded-md border-accent p-3 w-25">
          <p>SCORE</p>
          <p>{data.score}</p>
        </div>
        <div className="border flex flex-col justify-center items-center gap-1 my-3 rounded-md border-accent p-3 w-25">
          <p>POPULARITY</p>
          <p>{data.popularity}</p>
        </div>
        <div className="border flex flex-col justify-center items-center gap-1 my-3 rounded-md border-accent p-3 w-25">
          <p>MEMBERS</p>
          <p>{data.members}</p>
        </div>
        <div className="border flex flex-col justify-center items-center gap-1 my-3 rounded-md border-accent p-3 w-25">
          <p>FAVORITES</p>
          <p>{data.favorites}</p>
        </div>
      </div>
      <div className="w-full flex justify-between gap-5 flex-col md:flex-row">
        <Image src={data.images.webp.image_url} alt="gambar" width={400} height={400} className="w-full md:w-[400] md:h-[600px] object-fit-cover " />
        <p className="md:text-xl">{data.synopsis}</p>
      </div>
      <div className="my-5 p-2 rounded">
        <h1 className="md:text-3xl text-xl p-3 rounded bg-gray-800 font-bold mb-3 md:w-[50%]">Comments</h1>
        <CommentBox anime_mal_id={id} />
        {dataUser && <CommentButton anime_mal_id={id} user_email={dataUser?.email} username={dataUser?.name} anime_title={data.title} />}
      </div>
      <div className="fixed bottom-0 right-0">
        <VideoPlayer videoId={data.trailer.youtube_id} />
      </div>
    </div>
  );
};

export default Page;
