import axios from 'axios';
import AnimeList from '../components/AnimeList';
import Header from '../components/AnimeList/Header';

const Page = async () => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/top/anime?limit=8`);
  const topAnime = response.data;
  console.log(topAnime);

  return (
    <>
      <section>
        <Header title="Paling Populer" linkHref="/popular" linkTitle="Lihat Semua" />
        <AnimeList apiAnime={topAnime} />
      </section>
    </>
  );
};

export default Page;
