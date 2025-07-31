import axios from 'axios';
import AnimeList from '../components/AnimeList';
import Header from '../components/AnimeList/Header';
import { getAnimeList, getNestedAnimeList } from '../libs/api.lib';

const Page = async () => {
  const topAnime = await getAnimeList('top/anime', 'limit=8');
  const recomendeationAnime = await getNestedAnimeList('recommendations/anime', 'entry');
  const randomAnime = recomendeationAnime.sort(() => Math.random() - 0.5);
  const rekomenAnime = { data: randomAnime.slice(0, 4) };
  return (
    <>
      <section>
        <Header title="Paling Populer" linkHref="/popular" linkTitle="Lihat Semua" />
        <AnimeList apiAnime={topAnime} />
      </section>
      <section>
        <Header title="Rekomendasi" />
        <AnimeList apiAnime={rekomenAnime} />
      </section>
    </>
  );
};

export default Page;
