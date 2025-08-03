import { FilmStripIcon } from '@phosphor-icons/react';
import axios from 'axios';

export const getAnimeList = async (resource, query) => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/${resource}?${query}`);
  return response.data;
};

export const getNestedAnimeList = async (resource, objectNested) => {
  const response = await getAnimeList(resource);
  return response.data.flatMap((items) => items[objectNested]);
};

export const reproduce = (data, gap) => {
  const first = ~~(Math.random() * (data.length - gap));
  const last = first + gap;

  const response = {
    data: data.slice(first, last),
  };

  return response;
};
