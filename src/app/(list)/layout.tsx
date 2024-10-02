import CtaVersus from "@/components/cat/CtaVersus";
import Header from "@/components/layout/Header";
import { FaTrophy } from "react-icons/fa";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <h2 className="text-primary text-xl sm:text-4xl my-2 flex justify-center gap-2 mx-auto">
        Ranking of cutest cats{" "}
        <span>
          <FaTrophy className="fill-yellow-500" />
        </span>
      </h2>
      {children}
      <div className="fixed bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2">
        <CtaVersus />
      </div>
    </div>
  );
}
