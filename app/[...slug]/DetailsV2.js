import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Sponsors from "./Sponsors";
import useUser from "../../hooks/useUser";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Detail({ address }) {
  const { user, isLoading, isError } = useUser({ address });

  return (
    <div className="px-4 py-12 ">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-5xl">
          <dl className="space-y-2">
            <Disclosure as="div" className="pt-6" defaultOpen>
              {({ open }) => (
                <div className="shadow rounded-lg bg-white">
                  <dt className="text-lg">
                    <Disclosure.Button
                      className={classNames(
                        "flex w-full items-start justify-between text-left text-s-400 bg-gray-50 border-x border-t px-4 py-2",
                        open ? "rounded-t-lg" : "rounded-lg"
                      )}
                    >
                      <span className="font-medium text-gray-900 ">
                        Sponsors
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        <ChevronDownIcon
                          className={classNames(
                            open ? "-rotate-180" : "rotate-0",
                            "h-6 w-6 transform"
                          )}
                          aria-hidden="true"
                        />
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel
                    as="dd"
                    className="py-6 px-8 border rounded-b-lg"
                  >
                    {isLoading && (
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-slate-200 h-20 relative flex items-center space-x-3 rounded-lg px-6 py-5"></div>
                        <div className="bg-slate-200 h-20 relative flex items-center space-x-3 rounded-lg px-6 py-5"></div>
                      </div>
                    )}
                    {isError && <div>Network issue</div>}
                    <Sponsors sponsors={user?.sponsors} />
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
            <Disclosure as="div" className="pt-6" defaultOpen>
              {({ open }) => (
                <div className="shadow rounded-lg bg-white">
                  <dt className="text-lg">
                    <Disclosure.Button
                      className={classNames(
                        "flex w-full items-start justify-between text-left text-gray-400 bg-slate-50 border-t border-x px-4 py-2",
                        open ? "rounded-t-lg" : "rounded-lg"
                      )}
                    >
                      <span className="font-medium text-gray-900">
                        Sponsoring
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        <ChevronDownIcon
                          className={classNames(
                            open ? "-rotate-180" : "rotate-0",
                            "h-6 w-6 transform"
                          )}
                          aria-hidden="true"
                        />
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel
                    as="dd"
                    className="py-6 px-8 border rounded-b-lg"
                  >
                    {isLoading && (
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-slate-200 h-20 relative flex items-center space-x-3 rounded-lg px-6 py-5"></div>
                        <div className="bg-slate-200 h-20 relative flex items-center space-x-3 rounded-lg px-6 py-5"></div>
                      </div>
                    )}
                    {isError && <div>Network issue</div>}
                    <Sponsors sponsors={user?.sponsoring} />
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          </dl>
        </div>
      </div>
    </div>
  );
}
