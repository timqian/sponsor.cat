import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { ethers } from "ethers";
import { useRouter } from "next/navigation";
import Link from "next/link";
import classNames from "clsx";
import Image from "next/image";

function isAddr(value) {
  return ethers.utils.isAddress(value) || value.includes(".eth");
}

export default function SearchAddr() {
  const router = useRouter();

  const [value, setValue] = useState("");
  const [focus, setFocus] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (isAddr(value)) {
        router.push(`/${value}`);
        setValue("");
      } else {
        alert("Invalid address or ENS name", value);
      }
    }
  };

  return (
    <div className="w-full max-w-lg lg:max-w-md">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <MagnifyingGlassIcon
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
        <div>
          <input
            id="search"
            name="search"
            autoComplete="off"
            className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
            placeholder="ETH address or ENS name"
            type="text"
            onKeyDown={handleKeyDown}
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
            onFocus={() => setFocus(true)}
            onBlur={() => setTimeout(() => setFocus(false), 200)}
          />
          <div
            className={classNames(
              !focus && "hidden",
              "absolute bg-white w-full mt-2 rounded-lg border"
            )}
          >
            {value && (
              <Link
                href={`/${value}`}
                className="flex justify-between p-4 border-b hover:bg-gray-100 rounded-t-lg"
              >
                <span>View profile of {value}</span>
                <span>↵</span>
              </Link>
            )}
            <Link
              href="/vitalic.eth"
              className="p-4 border-b  hover:bg-gray-100 flex gap-2"
            >
              <Image
                className="w-6 rounded-full"
                src="https://effigy.im/a/vitalic.eth.svg"
                alt=""
                width={45}
                height={45}
              />
              <span>vitalic.eth</span>
            </Link>
            <Link
              href="/timqian.eth"
              className="p-4 hover:bg-gray-100 flex gap-2 rounded-b-lg"
            >
              <Image
                className="w-6 rounded-full"
                src="https://effigy.im/a/timqian.eth.svg"
                alt=""
                width={45}
                height={45}
              />
              <span>timqian.eth</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
