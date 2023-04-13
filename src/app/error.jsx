"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center mt-14">
      <h1>Something went wrong</h1>
      <button className="hover:text-amber-600 transition" onClick={() => reset()}>Try again</button>
    </div>
  );
}
