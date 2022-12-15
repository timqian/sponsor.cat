import classNames from "../../utils/classNames";
import Link from "next/link";

export default function Tabs({ creator, tabName }) {
  const tabs = [
    { name: "Overview", href: `/${creator}`, current: !tabName },
    {
      name: "Sponsors",
      href: `/${creator}/sponsors`,
      current: tabName === "sponsors",
    },
    {
      name: "Sponsoring",
      href: `/${creator}/sponsoring`,
      current: tabName === "sponsoring",
    },
  ];
  return (
    <div>
      <div className="border-b">
        <div className="px-4 border-gray-200 mx-auto max-w-5xl">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {/* {tabs.map((tab) => (
              <Link
                key={tab.name}
                href={tab.href}
                className={classNames(
                  tab.current
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                  "whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm"
                )}
                aria-current={tab.current ? "page" : undefined}
              >
                {tab.name}
              </Link>
            ))} */}
          </nav>
        </div>
      </div>
    </div>
  );
}
