import { useEffect, useRef } from "react";
import Link from "next/link";

const people = [
  {
    name: "ens.eth",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",

  },
  {
    name: "vitalik.eth",
    role: "vitalik.eth",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "timqian.eth",
    address: "timqian.eth",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "ashu.eth",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "harper.eth",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "nick.eth",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "guoyu.eth",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "ethereum.eth",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "bored.eth",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },

  {
    name: "hublot.eth",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "wong2.eth",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  },
  {
    name: "agm.eth",
    role: "Co-Founder / CTO",
    imageUrl:
      "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
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
    <div className="mt-16 md:mt-24">
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
                    className="w-16 rounded-full flex-shrink-0 mx-4"
                    src={`https://effigy.im/a/${person.name}.svg`}
                    alt=""
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
