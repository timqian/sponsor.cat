"use client";

import UserCard from "./UserCard";

export default function Sponsors({ sponsors }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" >
      {sponsors?.map((sponsor, i) => (
        <UserCard sponsor={sponsor} key={`${i}`}/>
      ))}
    </div>
  );
}
