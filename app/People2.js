import { useEffect, useRef } from "react";
import Link from "next/link";

const people = [
  {
    name: "ens.eth",
  },
  {
    name: "ethereum.eth",
  },
  {
    name: "chis.eth",
  },
  {
    name: "soyoung.eth",
  },
  {
    name: "vitalik.eth",
  },
  {
    name: "timqian.eth",
  },
  {
    name: "ashu.eth",
  },
  {
    name: "harper.eth",
  },
  {
    name: "nick.eth",
  },
  {
    name: "tianlitao.eth",
  },
  {
    name: "bobjiang.eth",
  },
  {
    name: "guoyu.eth",
  },

  {
    name: "bored.eth",
  },
  {
    name: "hublot.eth",
  },
];

function isElementInViewport(el, parent) {
  const parentRect = parent.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();
  return elRect.right > parentRect.left;
}

export default function People() {
  // make it auto scroll, ref: https://stackoverflow.com/a/65460711/4674834
  useEffect(() => {
    const id = setInterval(() => {
      const firstEl = document.querySelector("#flavoursContainer li");
      const parentEl = document.querySelector("#flavoursContainer");
      if (!isElementInViewport(firstEl, parentEl)) {
        parentEl.appendChild(firstEl, parentEl);
        parentEl.scrollTo(parentEl.scrollLeft - firstEl.offsetWidth, 0);
      }
      if (parentEl.scrollLeft !== parentEl.scrollWidth) {
        parentEl.scrollTo(parentEl.scrollLeft + 1, 0);
      }
    }, 25);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="mt-8 md:mt-24">
      <div className="flex justify-center">
        <div className="relative max-w-4xl overflow-scroll">
          <div className="absolute left-0 md:w-40 w-20 h-24 bg-gradient-to-r from-white to-white/0"></div>
          <div className="absolute right-0 md:w-40 w-20 h-24 bg-gradient-to-l from-white to-white/0"></div>
          <ul
            id="flavoursContainer"
            className="w-full flex flex-nowrap overflow-x-scroll"
          >
            {people.map((person, i) => (
              <li
                // ref={i === 0 ? firstChild : null}
                key={person.name}
                className="flex-shrink-0 "
              >
                <Link
                  className="text-gray-400 hover:text-gray-700 text-sm flex-shrink-0 flex flex-col items-center"
                  href={`/${person.name}`}
                >
                  <img
                    className="w-16 h-16 rounded-full flex-shrink-0 mx-4"
                    src={`https://effigy.im/a/${person.name}.svg`}
                    alt=""
                    style={{ objectFit: "cover" }}
                  />
                  <span className="pt-3">{person.name}</span>
                  {/* <div className="space-y-2">
                    <div className="text-xs font-medium lg:text-sm">
                      <h3>{person.name}</h3>
                      <p className="text-indigo-600">{person.role}</p>
                    </div>
                  </div> */}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
