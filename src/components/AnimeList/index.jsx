import Image from 'next/image';
import Link from 'next/link';

const AnimeList = ({ apiAnime }) => {
  return (
    <div className="flex mx-auto justify-center flex-wrap items-center gap-5 ">
      {apiAnime.data?.map((anime, index) => (
        <Link href={`/anime/${anime.mal_id}`} key={index} className="cursor-pointer transition-all hover:scale-105 duration-200">
          <div className="lg:w-[270px] md:w-52 w-44 md:h-[450px] h-70 border border-accent bg-accent rounded">
            <Image src={anime.images.webp.image_url} alt="gambar" width={300} height={410} className="md:h-[80%] h-[75%] object-fit-cover " />
            <div className="p-4 ">
              <p className="font-bold md:text-xl overflow-hidden whitespace-nowrap text-ellipsis">{anime.title}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AnimeList;
