import { BoltIcon, GlobeAltIcon, ScaleIcon } from "@heroicons/react/24/outline";

import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  CogIcon,
  LockClosedIcon,
  ServerIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import FeatureCard from "./FeatureCard";

const features = [
  {
    name: "Sponsorship NFTs",
    description:
      "After sponsoring an creator, sponsors get NFTs representing their sponsorship",
    link: "https://opensea.io/collection/sponsor-cat",
    linkText: "View NFTs on OpenSea",
    pattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    name: "No intermediary",
    description:
      "The funds go directly and instantly to the creators. Sponsor cat takes 0 fee.",
    link: "https://etherscan.io/address/0x2093c652baeb79f14d773eed36266258f467d3fc",
    linkText: "View contract on Etherscan",
    pattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
  {
    name: "Sponsor anyone",
    description:
      "You can sponsor a creator as long as you know creator's ETH address or ENS name",
    link: "https://sponsor.cat/vitalik.eth",
    linkText: "Sponsor Vitalik Buterin",
    pattern: {
      y: 32,
      squares: [
        [0, 2],
        [1, 4],
      ],
    },
  },
  {
    name: "Embed to your website",
    description:
      "We provide a simple way to help you embed your sponsors to your website",
    link: "https://github.com/timqian/sponsor.cat/issues/12",
    linkText: "Help wanted",
    pattern: {
      y: 22,
      squares: [[0, 1]],
    },
  },
  {
    name: "API",
    description: "You can use our APIs to get sponsors' detail information",
    icon: ShieldCheckIcon,
    link: "https://thegraph.com/hosted-service/subgraph/timqian/sponsorcat",
    linkText: "Try out the GraphQL API",
    pattern: {
      y: 22,
      squares: [
        [-1, 1],
        [0, 3],
      ],
    },
  },
  {
    name: "Open source",
    description:
      "The whole solution is open-sourced, transparent and trustworthy",
    link: "https://github.com/timqian/sponsor.cat",
    linkText: "View on GitHub",
    pattern: {
      y: 2,
      squares: [
        [0, 1],
        [1, 4],
      ],
    },
  },
];

export default function Features() {
  return (
    <div className="relative py-32">
      <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
        {/* <h2 className="text-center text-3xl font-medium leading-8  text-gray-700 sm:text-4xl pb-8">
          Features
        </h2> */}
        <div className="">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <FeatureCard feature={feature} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
