import AnimeList from '../components/AnimeList';
import Header from '../components/AnimeList/Header';
import { getAnimeList, getNestedAnimeList, reproduce } from '../libs/api.lib';

const Page = async () => {
  const topAnime = await getAnimeList('top/anime', 'limit=8');
  let recomendeationAnime = await getNestedAnimeList('recommendations/anime', 'entry');

  recomendeationAnime = reproduce(recomendeationAnime, 4);

  return (
    <>
      <section>
        <Header title="Paling Populer" linkHref="/popular" linkTitle="Lihat Semua" />
        <AnimeList apiAnime={topAnime} />
      </section>
      <section>
        <Header title="Rekomendasi" />
        <AnimeList apiAnime={recomendeationAnime} />
      </section>
    </>
  );
};

export default Page;
