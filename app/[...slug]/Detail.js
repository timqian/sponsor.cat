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
    <div className="bg-gray-50 px-4 py-12 ">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-5xl">
          <dl className="space-y-2">
            <Disclosure as="div" className="pt-6" defaultOpen>
              {({ open }) => (
                <div className="shadow rounded-lg bg-white">
                  <dt className="text-lg">
                    <Disclosure.Button
                      className={classNames(
                        "flex w-full items-start justify-between text-left text-gray-400 border-x border-t px-4 py-2",
                        open ? "rounded-t-lg" : "rounded-lg"
                      )}
                    >
                      <span className="font-medium text-gray-900">
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
                        "flex w-full items-start justify-between text-left text-gray-400 border-t border-x px-4 py-2",
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
                    {/* <Profile /> */}
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
