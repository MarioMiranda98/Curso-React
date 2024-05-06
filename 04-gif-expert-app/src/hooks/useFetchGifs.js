import { useState, useEffect } from "react";
import { getGifs } from "./../helpers/GetGifs";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAsyncGifs = async () => {
      const gifs = await getGifs(category);
      setImages(gifs)
      setIsLoading(false);
    }

    getAsyncGifs();
  }, []);

  return {
    images: images,
    isLoading: isLoading,
  }
};