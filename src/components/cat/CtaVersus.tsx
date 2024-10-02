import React from "react";
import { Button } from "../ui/button";
import { FaPlayCircle } from "react-icons/fa";
import Link from "next/link";

export default function CtaVersus() {
  return (
    <Link href={"/versus"} passHref>
      <Button size={"lg"} className="capitalize gap-2">
        Start sending like for cat
        <FaPlayCircle />
      </Button>
    </Link>
  );
}
