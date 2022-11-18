import Link from "next/link";

export default function App() {
  return (
    <div>
      <div className="container max-w-lg px-4 pt-52 pb-32 mx-auto mt-px text-left md:max-w-none md:text-center">
        <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl">
          <span className="inline md:block">Sponsor creators</span>{" "}
          <span className="background-animate relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-green-400 via-blue-500 to-purple-500 md:inline-block">
            directly
          </span>
        </h1>
        <div className="mx-auto mt-5 md:mt-8 text-gray-600 text-xl md:max-w-lg md:text-center">
          A decentralized sponsor system powered by NFTs
        </div>
        <div className="flex flex-col items-center mt-12 text-center">
          <span className="relative inline-flex w-full md:w-auto">
            <Link
              href="/new"
              type="button"
              className="inline-flex items-center justify-center w-full px-4 py-3 text-base font-bold leading-6 text-white bg-slate-800 border border-transparent rounded-lg md:w-auto hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-800"
            >
              Create your profile
            </Link>
          </span>
          {/* <a href="#_" className="mt-3 text-sm text-indigo-500">
            View creators
          </a> */}
        </div>
      </div>
      {/* End Main Hero Content */}

    </div>
  );
}
