export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=JZQ8Hc2HTbD9ccjKBJQ0H8SFckiAmtDJ&q=${category}&limit=20`;

  const resp = await fetch(url, { method: "GET" });
  const { data = [] } = await resp.json();

  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
}
