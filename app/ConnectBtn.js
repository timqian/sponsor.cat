import { ConnectButton } from "@rainbow-me/rainbowkit";
import Button from "../components/Button";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import classNames from "clsx";
import Link from "next/link";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import shortAddress from "../utils/shortAddress";

export default () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");
        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button onClick={openConnectModal} type="button">
                    Connect Wallet
                  </Button>
                );
              }
              if (chain.unsupported) {
                return (
                  <Button onClick={openChainModal} type="button" color="red">
                    Wrong network
                  </Button>
                );
              }
              return (
                <div className="flex gap-1">
                  {/* <button
                    onClick={openChainModal}
                    className="flex items-center gap-1 p-1 rounded-full hover:bg-gray-100"
                    type="button"
                  >
                    {chain.hasIcon && chain.iconUrl && (
                      <img
                        alt={chain.name ?? "Chain icon"}
                        src={chain.iconUrl}
                        className="w-6 rounded-full"
                      />
                    )}
                    <ChevronDownIcon className="w-4" aria-hidden="true" />
                  </button> */}
                  <Menu as="div" className="relative flex-shrink-0">
                    <div>
                      <Menu.Button className="flex items-center border p-1 rounded-full bg-white hover:bg-gray-100 text-sm">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="w-6 rounded-full"
                          src={
                            account.address
                              ? `https://effigy.im/a/${account.address}.svg`
                              : "/default.svg"
                          }
                          alt="profile"
                        />
                        <span className="font-semibold px-1">
                          {account.ensName || shortAddress(account.address)}
                        </span>
                        <ChevronDownIcon
                          className="h-4 w-4"
                          aria-hidden="true"
                        />
                        {/* <button onClick={openAccountModal} type="button">
                          {account.displayName}
                          {account.displayBalance
                            ? ` (${account.displayBalance})`
                            : ""}
                        </button> */}
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
                      <Menu.Items className="absolute right-0 z-10 mt-3 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href={`/${account.ensName || account.address}`}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </Link>
                          )}
                        </Menu.Item>{" "}
                        {/* <Menu.Item>

                        </Menu.Item> */}
                        {/* <Menu.Item></Menu.Item> */}
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                              onClick={openAccountModal}
                            >
                              Disconnect
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
