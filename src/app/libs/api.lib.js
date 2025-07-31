import axios from 'axios';

export const getAnimeList = async ({ resource, query }) => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_API_URL}/${resource}?${query}`);

  return response.data;
};
