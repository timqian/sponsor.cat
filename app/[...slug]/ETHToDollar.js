import useCoinPrice from "../../hooks/useCoinPrice";

export default function App({ ETHAmount }) {
  const { price } = useCoinPrice("ETHBUSD");
  if (price) {
    return <>{(ETHAmount * price).toFixed(2)}</>;
  } else {
    return <>~</>;
  }
}
