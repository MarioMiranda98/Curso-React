import { useCallback, useEffect, useState } from "react";
import { getHeroesByPublisher } from "../helpers/getHeroesByPublisher";

export const useGetHeroes = (publisher) => {
  const [heroes, setHeroes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getHeroes = useCallback(() => {
    const heroesList = getHeroesByPublisher(publisher);

    setHeroes(heroesList);
  }, [publisher]);

  useEffect(() => {
    getHeroes();
    setIsLoading(false);
  }, [getHeroes]);

  return {
    heroes,
    isLoading,
  };
};
