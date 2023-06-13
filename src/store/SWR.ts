import useSWR from "swr";

export function fetchBySWR(url: string) {
  const fetcher = () => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(url, fetcher);

  return {
    data,
    isLoading,
    isError: error,
  };
}
