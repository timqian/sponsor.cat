"use client";
import SponsorBtn from "./SponsorBtn";
import Image from "next/image";

import AddressLine from "./AddressLine";

export default function Profile({ address, name }) {
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
            className="rounded-full border w-20 md:w-24"
          />
          <div className="mx-4 flex flex-col justify-center">
            <AddressLine address={address} ensName={name} />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <SponsorBtn address={address} />
        </div>
      </div>

      {/* <Sponsors /> */}
    </section>
  );
}
