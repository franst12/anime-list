import axios from 'axios';
import AnimeList from '@/src/components/AnimeList';
import Header from '@/src/components/AnimeList/Header';

const Page = async ({ params }) => {
  const keyword = params.keyword;
  const decodeKeyword = decodeURI(keyword);
  console.log(decodeKeyword);
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/anime?q=${decodeKeyword}`);
  const searchAnime = response.data.data;

  return (
    <>
      <section>
        <Header title={`Hasil pencarian ${decodeKeyword}`} />
        <AnimeList apiAnime={searchAnime} />
      </section>
    </>
  );
};

export default Page;
