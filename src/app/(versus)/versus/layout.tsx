import CtaList from "@/components/cat/CtaList";
import Header from "@/components/layout/Header";
import { cn } from "@/lib/utils";
import { FaBoltLightning } from "react-icons/fa6";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={cn("relative")}>
      <Header />
      <h2 className="text-primary text-xl sm:text-xl my-2 flex justify-center gap-2 mx-auto">
        Vote for cutest cat
        <FaBoltLightning className="fill-yellow-500" />
      </h2>
      {children}
      <div className="fixed bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2">
        <CtaList />
      </div>
    </div>
  );
}
