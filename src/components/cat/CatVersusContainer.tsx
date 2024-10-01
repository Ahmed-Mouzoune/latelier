import React from "react";
import CatVersusCardSkeleton from "./CatVersusCardSkeleton";

export default function CatVersusContainer() {
  return (
    <div className="w-full flex justify-evenly">
      <CatVersusCardSkeleton />
      <CatVersusCardSkeleton />
    </div>
  );
}
