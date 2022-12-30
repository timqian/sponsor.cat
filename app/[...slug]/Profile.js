"use client";
import SponsorBtn from "./SponsorBtn";
import Image from "next/image";
import { useContractRead } from "wagmi";
import contractInfo from "../../contract/index";

import AddressLine from "./AddressLine";

export default function Profile({ address, name }) {
  const { data, isError, isLoading } = useContractRead({
    ...contractInfo,
    functionName: "creatorId",
    args: [address],
  });
  const creatorId = data && Number(data.toString());

  return (
    <section className="mt-16 ">
      <div className="flex justify-between max-w-5xl py-12 px-4 mx-auto flex-nowrap">
        <div className="flex">
          <Image
            src={
              address ? `https://effigy.im/a/${address}.svg` : "/default.svg"
            }
            alt="avatar"
            width={100}
            height={100}
            className="rounded-full border w-20 h-20 md:w-24 md:h-24"
            style={{ objectFit: "cover" }}
          />
          <div className="mx-4 flex flex-col justify-center">
            <AddressLine address={address} ensName={name} />
            {creatorId > 0 && (
              <a
                className="text-sm text-gray-800 pt-1 inline hover:underline"
                href={`https://opensea.io/assets/ethereum/0x2093c652baeb79f14d773eed36266258f467d3fc/${creatorId}`}
              >{`🐈‍⬛ #${creatorId}`}</a>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <SponsorBtn address={address} />
        </div>
      </div>
    </section>
  );
}
