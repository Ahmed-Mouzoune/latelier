import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import Image from "next/image";
import { FaRegThumbsUp } from "react-icons/fa";

export default function CatCard({ id, imageUrl, score }: ICat) {
  return (
    <Card className="">
      <CardContent className="p-0 h-60 overflow-hidden">
        <Image
          className="object-cover h-full"
          width={768}
          height={576}
          src={imageUrl}
          alt={`Chat mignon n°${id}`}
        />
      </CardContent>
      <CardFooter className="p-2 justify-center items-center gap-2">
        <span className="font-semibold text-primary">{score}</span>{" "}
        <FaRegThumbsUp className="fill-primary" />
      </CardFooter>
    </Card>
  );
}
