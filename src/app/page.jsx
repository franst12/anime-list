import axios from 'axios';
import AnimeList from '../components/AnimeList';
import Header from '../components/AnimeList/Header';
import { getAnimeList } from './libs/api.lib';

const Page = async () => {
  const topAnime = await getAnimeList({ resource: 'top/anime', query: 'limit=8' });
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
