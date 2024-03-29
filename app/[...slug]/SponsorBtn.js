"use client";

import { Dialog, Transition, Tab } from "@headlessui/react";
import { Fragment, useState } from "react";
import {
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import contractInfo from "../../contract/index";
import ETHToDollar from "./ETHToDollar";
import { ethers } from "ethers";
import Button from "../Button";
import { useConnectModal } from "@rainbow-me/rainbowkit";

export default function SponsorBtn({ address, text }) {
  const { openConnectModal } = useConnectModal();
  const { isConnected } = useAccount();
  let [isOpen, setIsOpen] = useState(false);
  const [ETHAmount, setETHAmount] = useState(0.01);

  const {
    config,
    isError: isPrepareError,
    error: prepareError,
  } = usePrepareContractWrite({
    ...contractInfo,
    functionName: "sponsor",
    args: [address],
    overrides: {
      value: ethers.utils.parseEther(ETHAmount ? ETHAmount.toString() : "0"),
    },
  });

  const {
    data: writeData,
    isLoading: writeLoading,
    isSuccess: writeSuccess,
    isError: writeError,
    write,
  } = useContractWrite(config);

  const { data: txData, isLoading: txLoading } = useWaitForTransaction({
    hash: writeData?.hash,
  });

  function sponsor() {
    if (ETHAmount <= 0.00001) {
      alert("ETH amount should be > 0.00001");
      return;
    }
    if (isPrepareError) {
      if (prepareError.message.includes("insufficient funds")) {
        alert("Insufficient funds")
        return;
      } else {
        alert(prepareError.message);
        return;
      }
    }
    write();
  }
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      {!text ? (
        <Button
          type="button"
          onClick={isConnected ? openModal : openConnectModal}
          // className="px-4 py-2 text-white bg-slate-800 border border-transparent rounded-full hover:bg-slate-700 font-medium"
        >
          <span className="text-red-400 text-lg">♡</span>&nbsp;Sponsor
        </Button>
      ) : (
        <button
          type="button"
          onClick={isConnected ? openModal : openConnectModal}
          className="px-4 py-2 rounded-full hover:bg-gray-200 font-medium"
        >
          <span className="text-red-400 text-lg">♡</span>&nbsp;{text}
        </button>
      )}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                  <Tab.Group>
                    <Tab.List className="isolate flex divide-x divide-gray-200 shadow">
                      <Tab className="text-gray-900 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-base font-medium text-center hover:bg-gray-50">
                        <span>One time</span>
                        <span
                          aria-hidden="true"
                          className="bg-indigo-500 absolute inset-x-0 bottom-0 h-0.5"
                        ></span>
                      </Tab>
                      <Tab
                        disabled
                        className="text-gray-500 group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-base font-normal text-center hover:bg-gray-50"
                      >
                        Monthly (Comming soon)
                      </Tab>
                    </Tab.List>
                    <Tab.Panels className="p-6">
                      <Tab.Panel>
                        <div>
                          <div className="flex justify-between items-end">
                            <label class="block text-sm font-medium text-gray-700">
                              Amount
                            </label>
                            <span className="text-gray-400 text-xs pr-3">
                              $ <ETHToDollar ETHAmount={ETHAmount} />
                            </span>
                          </div>
                          <div class="relative mt-1 rounded-md shadow-sm">
                            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                              <span className="text-gray-500 sm:text-sm inline-flex items-center gap-1">
                                <svg
                                  viewBox="0 0 24 24"
                                  className="w-5 h-5 inline-block"
                                  fill="currentColor"
                                >
                                  <path d="M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" />
                                </svg>
                                <span>ETH</span>
                              </span>
                            </div>
                            <input
                              type="text"
                              name="price"
                              id="price"
                              class="font-semibold text-right block w-full rounded-md border-gray-300 pl-16 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                              // placeholder="0.01"
                              aria-describedby="price-currency"
                              value={ETHAmount}
                              onChange={(e) => setETHAmount(e.target.value)}
                              autoFocus
                            />
                          </div>
                          <div className="text-right pr-3">
                            <span className="text-gray-400 text-xs ">
                              NFTs you will get:{" "}
                              {Math.round(ETHAmount / 0.00001)}
                            </span>
                          </div>

                          <button
                            type="button"
                            onClick={sponsor}
                            className="mt-6 w-full px-4 py-2 text-white bg-slate-800 border border-transparent rounded-lg hover:bg-slate-700"
                            disabled={writeLoading}
                          >
                            {writeLoading ? (
                              <span>Check your Wallet</span>
                            ) : (
                              <span>
                                <span className="text-red-400 text-lg">♡</span>
                                &nbsp;Sponsor
                              </span>
                            )}
                          </button>

                          {txLoading && (
                            <div className="mt-6 w-full text-gray-600">
                              Waiting for transaction....
                            </div>
                          )}
                          {txData && (
                            <div className="mt-6 w-full text-gray-600">
                              Transaction done! Try refreshing the page and you
                              will see your sponsorship.
                            </div>
                          )}
                        </div>
                      </Tab.Panel>
                      <Tab.Panel>Content 2</Tab.Panel>
                    </Tab.Panels>
                  </Tab.Group>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
