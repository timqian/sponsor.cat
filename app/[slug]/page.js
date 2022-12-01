"use client";

import Image from "next/image";
import Tabs from "./Tabs";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { useEnsName, useEnsAddress, useEnsAvatar } from "wagmi";
import SponsorBtn from "./SponsorBtn";


function isEns(address) {
  return address.includes(".eth");
}

function isAddr(address) {
  return address.length === 42 && address.startsWith("0x");
}

/**
 * 1. Check if address is registered
 * 2.
 */
export default function Page({ params }) {
  const { slug } = params;
  const slugAddr = isAddr(slug) ? slug : null;
  const slugName = isEns(slug) ? slug : null;

  if (!slugAddr && !slugName) {
    notFound();
  }

  const [address, setAddress] = useState(slugAddr);
  const [name, setName] = useState(slugName);

  const { data: ensAddress } = useEnsAddress({
    name: slugName,
    chainId: 1,
  });

  const { data: ensName } = useEnsName({
    address: slugAddr,
    chainId: 1,
  });

  useEffect(() => {
    if (ensAddress) {
      setAddress(ensAddress);
    }
    if (ensName) {
      setName(ensName);
    }
  }, [ensAddress, ensName]);

  return (
    <section className="min-h-screen max-w-5xl mx-auto pt-32 px-4 md:px-8 ">
      <div className="flex justify-between">
        <div className="flex">
          <Image
            src={`https://effigy.im/a/${address}.svg`}
            alt="avatar"
            width={100}
            height={100}
            className="rounded-full border"
            onErrorCapture
          />
          <div className="mx-4 flex flex-col justify-center">
            {/* <h1 className="text-4xl font-bold text-gray-800">Tim Qian </h1> */}
            <h2 className="text-4xl font-bold text-gray-800 my-1">{name}</h2>
            <span className="text-sm text-gray-600">{address}</span>
            {/* <p> Building sponsor.cat </p> */}
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <SponsorBtn address={address} />
        </div>
      </div>

      <Tabs />
    </section>
  );
}
