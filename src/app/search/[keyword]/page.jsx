import axios from 'axios';
import AnimeList from '@/src/components/AnimeList';
import Header from '@/src/components/AnimeList/Header';
import { getAnimeList } from '../../../libs/api.lib';

const Page = async ({ params }) => {
  const keyword = params.keyword;
  const decodeKeyword = decodeURI(keyword);
  const searchAnime = await getAnimeList('anime', `q=${decodeKeyword}`);

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
