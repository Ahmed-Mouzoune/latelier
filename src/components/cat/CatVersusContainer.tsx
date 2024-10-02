"use client";
import React, { useMemo } from "react";
import CatVersusCardSkeleton from "./CatVersusCardSkeleton";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchAllCats, voteForCat } from "@/infrastructure/api/HttpCatApi";
import { generateAllPossiblePairWithoutDuplicate } from "@/lib/duel";
import CatVersusCard from "./CatVersusCard";
import { cn } from "@/lib/utils";

export default function CatVersusContainer() {
  const queryClient = useQueryClient();
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["cats"],
    queryFn: fetchAllCats,
  });
  const mutation = useMutation({
    mutationFn: (cat: ICat) => voteForCat(cat),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cats"] });
    },
  });

  const allPairs = useMemo(() => {
    if (data && data.length > 1) {
      return generateAllPossiblePairWithoutDuplicate(data);
    }
    return [];
  }, [data]);

  const handleVote = async (cat: ICat) => {
    mutation.mutate(cat);
  };

  if (isLoading) {
    return (
      <div className="w-full flex justify-evenly">
        {[0, 1].map((_, i) => (
          <CatVersusCardSkeleton key={`cat-versus-skeleton-number-${i}`} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <p>
        Une erreur est survenue dans la récupération des chats ! :{" "}
        {error.message}
      </p>
    );
  }

  if (allPairs.length > 0) {
    return (
      <div className="w-full flex justify-evenly">
        <div
          onClick={() => handleVote(allPairs[0][0])}
          className={cn(
            "cursor-pointer",
            "flex items-center justify-center",
            "absolute left-0 inset-y-0 -z-10 w-1/2 h-screen",
            "bg-slate-500 active:bg-primary sm:hover:bg-primary",
            " drop-shadow-[4px_0_10px_rgba(0,0,0,0.4)]"
          )}
        >
          {mutation.status === "pending" ? (
            <CatVersusCardSkeleton />
          ) : (
            <CatVersusCard
              id={allPairs[0][0].id}
              imageUrl={allPairs[0][0].imageUrl}
              score={allPairs[0][0].score}
            />
          )}
        </div>
        <div
          onClick={() => handleVote(allPairs[0][1])}
          className={cn(
            "cursor-pointer",
            "flex items-center justify-center",
            "absolute right-0 inset-y-0 -z-10 w-1/2 h-screen",
            "bg-transparent active:bg-primary sm:hover:bg-primary",
            "drop-shadow-[-4px_0_10px_rgba(0,0,0,0.4)]"
          )}
        >
          {mutation.status === "pending" ? (
            <CatVersusCardSkeleton />
          ) : (
            <CatVersusCard
              id={allPairs[0][1].id}
              imageUrl={allPairs[0][1].imageUrl}
              score={allPairs[0][1].score}
            />
          )}
        </div>
      </div>
    );
  }

  return <p>Pas assez de chats pour un duel.</p>;
}
