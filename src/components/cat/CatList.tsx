"use client";
import React, { useEffect } from "react";
import CatCardSkeleton from "./CatCardSkeleton";
import { useQuery } from "@tanstack/react-query";
import CatCard from "./CatCard";
import { fetchAllCats } from "@/infrastructure/api/HttpCatApi";

export default function CatList() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["cats"],
    queryFn: fetchAllCats,
  });

  useEffect(() => {
    if (data)
      console.log(
        "data sorted",
        data.sort((a, b) => b.score - a.score)
      );
  }, [data]);

  return (
    <main className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {isPending &&
          [0, 1, 2].map((cat, i) => (
            <CatCardSkeleton key={`cat-skeleton-number-${i}`} />
          ))}
        {isError && (
          <p>
            Une erreur est survenue dans la récupération des chats ! :{" "}
            {error.message}
          </p>
        )}
        {data &&
          data
            .sort((a, b) => b.score - a.score)
            .map((cat: ICat, i: number) => (
              <CatCard
                key={`cat-number-${i}`}
                id={cat.id}
                imageUrl={cat.imageUrl}
                score={cat.score}
              />
            ))}
      </div>
    </main>
  );
}
