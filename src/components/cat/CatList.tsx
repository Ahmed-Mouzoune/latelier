import React from "react";
import CatCardSkeleton from "./CatCardSkeleton";

export default function CatList() {
  return (
    <main className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CatCardSkeleton />
        <CatCardSkeleton />
        <CatCardSkeleton />
      </div>
    </main>
  );
}
