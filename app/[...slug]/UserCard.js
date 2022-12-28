"use client";

import { useEnsName } from "wagmi";
import dayjs from "dayjs";
import Link from "next/link";
import Image from "next/image";
import shortAddress from "../../utils/shortAddress";

export default function UserCard({ sponsor }) {
  const address = sponsor?.sponsor?.id || sponsor?.creator?.id;
  const { amount, createdAt } = sponsor;
  const { data: ensName } = useEnsName({
    address,
    chainId: 1,
  });

  return (
    <div
      className="relative flex items-center space-x-3 rounded-lg border  px-6 py-5 shadow-sm"
    >
      <div className="flex-shrink-0">
        <Link href={`/${ensName || address}`}>
          <Image
            className="h-10 w-10 rounded-full"
            src={
              address ? `https://effigy.im/a/${address}.svg` : "/default.svg"
            }
            alt=""
            width={45}
            height={45}
          />
        </Link>
      </div>
      <div className="min-w-0 flex-1">
        {/* <span className="absolute inset-0" aria-hidden="true" /> */}
        <Link
          href={`/${ensName || address}`}
          className="text-sm font-medium text-gray-900 hover:text-gray-600"
        >
          {ensName || shortAddress(address)}
        </Link>
        <div className="truncate text-sm text-gray-500 flex items-center">
          <svg
            viewBox="0 0 24 24"
            className="w-3 h-3 inline-block"
            fill="currentColor"
          >
            <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" />
          </svg>
          {amount / 1000000000000000000} ETH at{" "}
          {dayjs(createdAt * 1000).format("YYYY-MM-DD")}
        </div>
      </div>
    </div>
  );
}
