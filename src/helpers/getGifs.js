const apiKey = '1SPbygaro4cf31qOcsmmExHLIVl10MLX';
const mainUrl = 'https://api.giphy.com/v1/gifs/search';
export const getGifs = async (category, limit = 10) => {
  const url = `${mainUrl}?q=${encodeURI(category)}&limit=${limit}&api_key=${apiKey}`;
  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map(({ id, title, images }) => {
    return { id: id, title: title, url: images?.fixed_height.url };
  });
  return gifs;
};
