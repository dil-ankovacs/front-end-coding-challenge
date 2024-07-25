import { useEffect, useState } from "react";
import { callApi } from "./call-api";

type FetchedData<T> = {
  data: T | null;
  error: Error | null;
  loading: boolean;
};

export const useFetchedData = <T>(route: string): FetchedData<T> => {
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetch = async () => {
      setError(null);
      setLoading(true);
      try {
        const heroes = await callApi<T>(route);
        setData(heroes);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [route]);

  return {
    data,
    error,
    loading,
  };
};
