"use client";
import Link from "next/link";
import ClaimBtn from "./ClaimBtn";
import People from "./People2";
import Features from "./Features";
import { ROUTES_MANIFEST } from "next/dist/shared/lib/constants";
import Nav from "./Nav3";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <div
        className={clsx(
          "fixed top-0 backdrop-blur-xl w-full z-50",
          scrollPosition > 0 && "border-b bg-white/50"
        )}
      >
        <Nav />
      </div>
      {/* <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <svg
          className="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#9089FC" />
              <stop offset={1} stopColor="#FF80B5" />
            </linearGradient>
          </defs>
        </svg>
      </div> */}
      <div
        // style={{
        //   backgroundImage: "url('/catpaw.jpg')",
        //   backgroundSize: "500px 200px",
        //   backgroundRepeat: "no-repeat",
        //   backgroundPosition: "left top",
        // }}
        className="container max-w-lg px-4 mt-40 md:mt-52 pb-8 mx-auto text-left md:max-w-none md:text-center"
      >
        <h1 className="font-extrabold tracking-tight text-left text-gray-900 md:text-center sm:leading-none text-5xl lg:text-7xl">
          <span className="inline md:block">Sponsor creators</span>{" "}
          <span className="background-animate relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-green-400 via-blue-500 to-purple-500 md:inline-block">
            Directly
          </span>
        </h1>
        <div className="mx-auto mt-5 md:mt-8 text-gray-500 text-xl md:max-w-lg md:text-center">
          A decentralized funding platform. Powered by NFTs.
        </div>

        {/* <div className="flex flex-col items-center mt-12 text-center">
          <span className="relative inline-flex w-full md:w-auto">
            <Link
              href="/new"
              type="button"
              className="inline-flex items-center justify-center w-full px-4 py-3 text-base font-bold leading-6 text-white bg-slate-800 border border-transparent rounded-lg md:w-auto hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-800"
            >
              Create your profile
            </Link>
            <ClaimBtn />
          </span>
          <a href="#_" className="mt-3 text-sm text-indigo-500">
            Creators
          </a>
        </div> */}
      </div>
      {/* End Main Hero Content */}
      <People />

      {/* <Feature/> */}
      <Features />
      
    </div>
  );
}
