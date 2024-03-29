"use client";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import classNames from "../../utils/classNames";
import {
  ClipboardIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

import shortAddress from "../../utils/shortAddress";

export default function addr({ address, ensName }) {
  // if (ensName) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex space-x-1 items-center justify-center text-gray-800 hover:text-gray-600 ">
          <span className="text-xl md:text-2xl font-bold">
            {ensName || shortAddress(address)}
          </span>
          <ChevronDownIcon className="mt-1 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          static
          className="absolute left-0 z-10 mt-2 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  // target="_blank"
                  href={`https://mest.io/stories/head-first-wallet?address=${address}`}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "group flex items-center px-4 py-2 justify-between text-sm cursor-pointer"
                  )}
                >
                  <span className="mr-6">Portfolio</span>
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 group-hover:-rotate-12" />
                </a>
              )}
            </Menu.Item>
          </div>
          {ensName && (
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <div
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "group flex items-center px-4 py-2 justify-between text-sm cursor-pointer"
                    )}
                    onClick={() => {
                      navigator.clipboard.writeText(ensName);
                    }}
                  >
                    <span className="mr-6">{ensName}</span>
                    <ClipboardIcon className="w-4 h-4 group-hover:-rotate-12 " />
                  </div>
                )}
              </Menu.Item>
            </div>
          )}
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <div
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "group flex items-center px-4 py-2 justify-between text-sm cursor-pointer"
                  )}
                  onClick={() => {
                    navigator.clipboard.writeText(address);
                  }}
                >
                  <span className="mr-6">{shortAddress(address)}</span>
                  <ClipboardIcon className="w-4 h-4 group-hover:-rotate-12" />
                </div>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
  // }
}
