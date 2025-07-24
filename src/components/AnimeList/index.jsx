import Image from 'next/image';
import Link from 'next/link';

const AnimeList = ({ apiAnime }) => {
  return (
    <div className=" grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 ">
      {apiAnime.map((anime) => (
        <div key={anime.mal_id}>
          <Link href={`/${anime.mal_id}`} className="cursor-pointer">
            <Image src={anime.images.webp.image_url} alt="gambar" width={400} height={400} className="w-full md:h-90 h-76 object-fit-cover " />
            <p className="font-bold p-4 md:text-xl text-md">{anime.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default AnimeList;
