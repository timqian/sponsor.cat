"use client";

import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { useEnsName, useEnsAddress } from "wagmi";
import Profile from "./Profile";
import Detail from "./Detail";

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
    <div className="px-4 mt-16 bg-gray-50 border-b min-h-screen">
      <Profile address={address} name={name} />
      <Detail address={address} />
    </div>
  );
}
