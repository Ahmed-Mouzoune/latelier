import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { PiEyesBold } from "react-icons/pi";

export default function CtaList() {
  return (
    <Link href={"/"} passHref>
      <Button className="capitalize gap-2">
        See the cutest cats
        <PiEyesBold />
      </Button>
    </Link>
  );
}
