"use client";

import Link from "next/link";
import Steps from "./Steps";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { useForm } from "react-hook-form";

const settings = {
  dots: true,
  infinite: false,
  accessibility: false,
  arrows: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

/**
 * Steps
 *  1. username, descriptions...
 *  2. tiers
 *  3. register NFT
 */
export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  };

  const slider = useRef(null);
  const next = () => slider.current.slickNext();
  return (
    <section className="bg-gray-100 min-h-screen">
      <div className="mx-auto max-w-md pt-12">
        <Link className="text-center text-gray-500 text-xs block mb-8" href="/">
          sponsor.cat
        </Link>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Slider {...settings} ref={slider}>
          <>
              <div className="bg-white shadow-md rounded p-8 m-4">
                <h1 className="text-gray-600 font-bold text-xl pb-4">
                  Mint your account for free
                </h1>
                <label
                  className="block text-gray-700 text-sm mb-2"
                  htmlFor="username"
                >
                  What do you want your link to be?
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300">
                    sponsor.cat/
                  </span>
                  <input
                    type="text"
                    id="website-admin"
                    className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 "
                    placeholder="yourname"
                  />
                </div>
                <button
                  className="mt-10 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={next}
                >
                  Next
                </button>
              </div>
            </>
            <>
              <div className="bg-white shadow-md rounded p-8 m-4">
                <h1 className="text-gray-600 font-bold text-xl pb-4">
                  Choose a username
                </h1>
                <label
                  className="block text-gray-700 text-sm mb-2"
                  htmlFor="username"
                >
                  What do you want your link to be?
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300">
                    sponsor.cat/
                  </span>
                  <input
                    type="text"
                    id="website-admin"
                    className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 "
                    placeholder="yourname"
                  />
                </div>
                <button
                  className="mt-10 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={next}
                >
                  Next
                </button>
              </div>
            </>
            <>
              <div className="bg-white shadow-md rounded p-8 m-4">
                <h1 className="text-gray-600 font-bold text-xl pb-4">
                  About you
                </h1>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Full Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Your name"
                    {...register("name")}
                  />
                </div>
                <div>
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="password"
                  >
                    Bio
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Introduce yourself and what you are creating"
                    rows="4"
                  />
                </div>
                <button
                  className="mt-10 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={next}
                >
                  Next
                </button>
              </div>
            </>
            <>
              <div className="bg-white shadow-md rounded p-8 m-4">
                <h1 className="text-gray-600 font-bold text-xl pb-4">
                  Choose your profile picture
                </h1>
                <label
                  className="block text-gray-700 text-sm mb-2"
                  htmlFor="username"
                >
                  What do you want your link to be?
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 rounded-l-md border border-r-0 border-gray-300">
                    sponsor.cat/
                  </span>
                  <input
                    type="text"
                    id="website-admin"
                    className="rounded-none rounded-r-lg bg-gray-50 border border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm p-2.5 "
                    placeholder="yourname"
                  />
                </div>
                <button
                  className="mt-10 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={next}
                >
                  View your profile
                </button>
              </div>
            </>
           
          </Slider>
        </form>
      </div>
    </section>
  );
}
