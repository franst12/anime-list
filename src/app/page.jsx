import axios from 'axios';
import AnimeList from '../components/AnimeList';
import Link from 'next/link';

const Home = async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/top/anime?limit=8`);
  const anime = response.data.data;

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="p-4 text-3xl font-bold">
          <p>Paling Populer</p>
        </div>
        <Link href="/populer">
          <p className="hover:text-red-600 md:text-xl text-sm transition-all">Lihat semua</p>
        </Link>
      </div>
      <div className=" grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 ">
        {anime.map((data) => {
          return (
            <div key={data.mal_id} className="shadow-md rounded-md hover:overflow-visible transition-all duration-150 overflow-hidden bg-gray-300 max-h-">
              <AnimeList title={data.title} images={data.images.webp.image_url} id={data.mal_id} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
