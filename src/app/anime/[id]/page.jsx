import Image from 'next/image';
import VideoPlayer from '../../utilities/VideoPlayer';

const { getAnimeList } = require('../../../libs/api.lib');

const Page = async ({ params }) => {
  const id = params.id;
  const animeDetail = await getAnimeList(`anime/${id}`);
  const data = animeDetail.data;
  return (
    <div className="pt-5 px-3">
      <div>
        <h1 className="md:text-3xl text-xl font-bold mb-3">{data.title}</h1>
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
      <div className="fixed bottom-0 right-0">
        <VideoPlayer videoId={data.trailer.youtube_id} />
      </div>
    </div>
  );
};

export default Page;
