import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import Image from "next/image";
import { FaRegThumbsUp, FaTrophy } from "react-icons/fa";
import { cn } from "@/lib/utils";

interface ICatCard extends ICat {
  ranking: number;
}

export default function CatCard({ id, imageUrl, score, ranking }: ICatCard) {
  // }

  return (
    <Card>
      <CardContent className="p-0 h-60 overflow-hidden">
        <Image
          className="object-cover h-full"
          width={768}
          height={576}
          src={imageUrl}
          alt={`Chat mignon n°${id}`}
        />
      </CardContent>
      <CardFooter className="text-primary p-2 justify-between">
        <div
          className={cn(
            "flex items-center gap-2",
            ranking > 3 ? "text-primary" : "",
            ranking === 1 ? "text-yellow-500" : "",
            ranking === 2 ? "text-gray-500" : "",
            ranking === 3 ? "text-amber-900" : ""
          )}
        >
          Rank: {ranking}{" "}
          <FaTrophy
            className={cn(
              ranking > 3 ? "hidden" : "",
              ranking === 1 ? "fill-yellow-500" : "",
              ranking === 2 ? "fill-gray-500" : "",
              ranking === 3 ? "fill-amber-900" : ""
            )}
          />
        </div>
        <div className="flex items-center gap-2">
          <span>{score}</span> <FaRegThumbsUp className="fill-primary" />
        </div>
      </CardFooter>
    </Card>
  );
}
