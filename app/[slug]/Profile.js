import SponsorBtn from "./SponsorBtn";
import shortAddress from "../../utils/shortAddress";
import Image from "next/image";
import Tabs from "./Tabs";
import AddressLine from "./AddressLine";

export default function Profile({ address, name }) {
  // const { user, isLoading, isError } = useUser({ address });
  return (
    <section className="max-w-5xl mx-auto pt-12">
      <div className="flex justify-between">
        <div className="flex">
          <Image
            src={
              address ? `https://effigy.im/a/${address}.svg` : "/default.svg"
            }
            alt="avatar"
            width={100}
            height={100}
            className="rounded-full border"
            onErrorCapture
          />
          <div className="mx-4 flex flex-col justify-center">
            {/* <h2 className="text-3xl font-bold text-gray-800 my-1">
              {name || "Unnamed"}
            </h2> */}
            {/* <span className="text-sm text-gray-600">{}</span> */}
            <AddressLine address={address} ensName={name} />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <SponsorBtn address={address} />
        </div>
      </div>
      {/* <Tabs /> */}
      {/* <Sponsors /> */}
    </section>
  );
}
