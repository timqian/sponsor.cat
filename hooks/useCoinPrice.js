import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function usePrice(symbol) {
  const { data, error } = useSWR(
    `https://api.binance.com/api/v3/avgPrice?symbol=${symbol}`,
    fetcher
  );

  return {
    price: data && data.price,
    isLoading: !error && !data,
    isError: error,
  };
}
