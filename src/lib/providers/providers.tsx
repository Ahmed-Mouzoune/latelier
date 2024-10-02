"use client";

import type { ReactNode } from "react";
import TanstackProvider from "./TanstackProvider";

export function Providers({ children }: { children: ReactNode }) {
  return <TanstackProvider>{children}</TanstackProvider>;
}
