import {
  useContractWrite,
  usePrepareContractWrite,
  useContractRead,
} from "wagmi";
import contractInfo from "../contract/index";

export default function ClaimBtn({}) {
  const {
    data: creatorsCount,
    isError: countErr,
    isLoading: countLoading,
  } = useContractRead({
    ...contractInfo,
    functionName: "creatorsCount",
  });

  const { config } = usePrepareContractWrite({
    ...contractInfo,
    functionName: "addCreator",
  });
  const { data, isLoading, isSuccess, write } = useContractWrite(config);

  return (
    <>
      <button
        onClick={() => write()}
        type="button"
        className="inline-flex items-center justify-center w-full px-4 py-3 text-base font-bold leading-6 text-white bg-slate-800 border border-transparent rounded-lg md:w-auto hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-800"
      >
        Be the #{creatorsCount ? creatorsCount.toString() : "?"} creator on sponsor.cat
      </button>
      {isLoading && <div>Check Wallet</div>}
      {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
    </>
  );
}
