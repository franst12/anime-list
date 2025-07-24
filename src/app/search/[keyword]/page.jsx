import axios from 'axios';
import AnimeList from '@/src/components/AnimeList';
import Header from '@/src/components/AnimeList/Header';

const Page = async ({ params }) => {
  const keyword = params.keyword;
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/anime?q=${keyword}`);
  const searchAnime = response.data.data;

  return (
    <>
      <section>
        <Header title={`Hasil pencarian ${keyword}`} />
        <AnimeList apiAnime={searchAnime} />
      </section>
    </>
  );
};

export default Page;
