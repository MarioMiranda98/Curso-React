import { useEffect } from "react";
import { useState } from "react";

const localCache = {}

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  const getPokemons = async () => {
    if (localCache[url]) {
      setState({
        data: localCache[url],
        isLoading: false,
        hasError: false,
        error: null,
      });

      return;
    }

    setLoadingState();

    const resp = await fetch(url);
    await new Promise((resolve) => { setTimeout(resolve, 3000) });

    if (!resp.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: resp.status,
          message: resp.statusText,
        }
      });

      return;
    }

    const data = await resp.json();

    console.log(data);
    setState({
      data: data,
      isLoading: false,
      hasError: false,
      error: null,
    });

    localCache[url] = data;
  }

  useEffect(() => {
    getPokemons();
  }, [url]);

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });
  }

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  };
};