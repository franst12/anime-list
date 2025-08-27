import Image from 'next/image';
import Link from 'next/link';

const AnimeList = ({ apiAnime }) => {
  return (
    <div className="grid grid-cols-2 md:flex flex-wrap items-center md:gap-4 gap-5 md:px-6 ">
      {apiAnime.data?.map((anime, index) => (
        <Link href={`/anime/${anime.mal_id}`} key={index} className="cursor-pointer mx-auto transition-all shadow-lg hover:shadow-gray-400 hover:scale-105 duration-200">
          <div className="lg:w-60 md:w-52 w-46 md:h-[450px] h-70 border border-accent bg-accent rounded">
            <Image src={anime.images.webp.image_url} alt="gambar" width={300} height={410} className="md:h-[80%] h-[75%] object-fit-cover " />
            <p className="font-bold m-3 md:text-xl overflow-hidden whitespace-nowrap text-ellipsis">{anime.title}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AnimeList;
