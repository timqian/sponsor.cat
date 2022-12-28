"use client";

import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { useEnsName, useEnsAddress } from "wagmi";
import Profile from "./Profile";
import Detail from "./DetailsV2";
import Tabs from "./Tabs";

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
  const {
    slug: [creator, tabName],
  } = params;
  const slugAddr = isAddr(creator) ? creator : null;
  const slugName = isEns(creator) ? creator : null;

  if (!slugAddr && !slugName) {
    notFound();
  }

  const [address, setAddress] = useState(slugAddr);
  const [name, setName] = useState(slugName);

  const { data: ensAddress, isLoading: addrLoading } = useEnsAddress({
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

  // if (!address && addrLoading) {
  //   return (
  //     <section className="animate-pulse max-w-5xl mx-auto mt-28 mb-12 px-4">
  //       <div className="flex justify-between ">
  //         <div className="flex items-center gap-4">
  //           <div className="rounded-full bg-slate-200 h-24 w-24"></div>
  //           <div className="w-40 h-8 bg-slate-200"></div>
  //         </div>
  //         <div className="flex flex-col justify-center">
  //           <button className="bg-slate-200 w-20 h-10"></button>
  //         </div>
  //       </div>
  //       <div className="w-full bg-slate-200 h-48 mt-32"></div>
  //       <div className="w-full bg-slate-200 h-48 mt-20"></div>
  //     </section>
  //   );
  // }

  // ens name don't have address
  // if (slugName && !ensAddress && !addrLoading) {
  //   return notFound();
  // }

  return (
    <div className="">
      {/* {address && (
        <> */}
          <Profile address={address} name={name} />
          <Tabs creator={creator} tabName={tabName} />
          <Detail address={address} />
        {/* </>
      )}
      {!address && addrLoading && (
        <section className="animate-pulse max-w-5xl mx-auto mt-28 mb-12 px-4">
          <div className="flex justify-between ">
            <div className="flex items-center gap-4">
              <div className="rounded-full bg-slate-200 h-24 w-24"></div>
              <div className="w-40 h-8 bg-slate-200"></div>
            </div>
            <div className="flex flex-col justify-center">
              <button className="bg-slate-200 w-20 h-10"></button>
            </div>
          </div>
          <div className="w-full bg-slate-200 h-48 mt-32"></div>
          <div className="w-full bg-slate-200 h-48 mt-20"></div>
        </section>
      )} */}
    </div>
  );
}
