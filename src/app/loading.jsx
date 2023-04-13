import Image from "next/image";
import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center">
      <Image width={384} height={384} src="spiner.svg" alt="loading..." />
    </div>
  );
}
