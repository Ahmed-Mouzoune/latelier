import React from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function CatVersusCard({ id, imageUrl }: ICat) {
  return (
    <Avatar className="w-32 sm:w-72 h-32 sm:h-72 cursor-pointer">
      <AvatarImage src={imageUrl} alt={`Chat mignon n°${id}`} />
    </Avatar>
  );
}
