import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import classNames from "clsx";
import ConnectButton from "./ConnectBtn";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
import SearchAddr from "./SearchAddr";

export default function Nav() {
  return (
    <Disclosure as="nav" className={classNames("w-full")}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex px-2 lg:px-0">
                <div className="flex flex-shrink-0 items-center">
                  <Link
                    href="/"
                    className="text-2xl font-black text-gray-900 align-center"
                  >
                    <img
                      className="block h-6 w-auto lg:hidden"
                      src="/cat-paw.svg"
                      alt="Your Company"
                    />
                    <img
                      className="hidden h-6 w-auto lg:block"
                      src="/cat-paw.svg"
                      alt="Your Company"
                    />
                  </Link>
                </div>
                <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  {/* <a
                    href="#"
                    className="inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900"
                  >
                    Explore
                  </a> */}
                  <a
                    href="https://github.com/timqian/sponsor.cat/issues"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Feedback
                  </a>
                  <a
                    href="https://etherscan.io/address/0x2093c652baeb79f14d773eed36266258f467d3fc"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Contract
                  </a>
                  <a
                    href="https://opensea.io/collection/sponsor-cat"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    OpenSea
                  </a>
                  <a
                    href="https://github.com/timqian/sponsor.cat"
                    className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    GitHub
                    {/* <iframe src="https://ghbtns.com/github-btn.html?user=twbs&repo=bootstrap&type=star&count=true" frameborder="0" scrolling="0" width="150" height="20" title="GitHub"></iframe> */}
                  </a>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
                <SearchAddr />
              </div>
              <div className="flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="hidden lg:ml-4 lg:flex lg:items-center">
                <ConnectButton
                  showBalance={false}
                  chainStatus="icon"
                  label="Connect&nbsp;Wallet"
                />
                {/* Profile dropdown */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 pt-2 pb-3">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
              {/* <Disclosure.Button
                as="a"
                href="#"
                className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
              >
                Dashboard
              </Disclosure.Button> */}
              <Disclosure.Button
                as="a"
                href="https://github.com/timqian/sponsor.cat/issues"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
              >
                Feedback
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="https://github.com/timqian/sponsor.cat"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
              >
                GitHub
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="https://opensea.io/collection/sponsor-cat"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-600 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-800"
              >
                OpenSea
              </Disclosure.Button>
            </div>
            <div className="border-t border-gray-200 py-4 pl-3">
              <ConnectButton />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
