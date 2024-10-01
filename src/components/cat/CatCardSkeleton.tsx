import React from "react";
import { Card, CardContent, CardFooter } from "../ui/card";
import { FaRegThumbsUp } from "react-icons/fa";
import { Skeleton } from "../ui/skeleton";

export default function CatCardSkeleton() {
  return (
    <Card>
      <CardContent className="p-0">
        <Skeleton className="h-60 w-full" />
      </CardContent>
      <CardFooter className="p-2 justify-center items-center gap-2">
        <span className="font-semibold">
          <Skeleton className="h-6 w-4" />
        </span>
        <FaRegThumbsUp className="fill-primary" />
      </CardFooter>
    </Card>
  );
}
