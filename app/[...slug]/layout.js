"use client";

import Nav from "../Nav3";

export default function layout({ children }) {
  return (
    <>
      <div className="w-full fixed top-0 z-10 bg-white/90 backdrop-blur-sm border-b">
        <Nav />
      </div>
      {children}
    </>
  );
}
