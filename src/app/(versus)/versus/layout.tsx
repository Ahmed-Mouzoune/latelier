import CtaList from "@/components/cat/CtaList";
import Header from "@/components/layout/Header";
import { cn } from "@/lib/utils";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={cn("relative")}>
      <Header />
      {children}
      <div className="fixed bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2">
        <CtaList />
      </div>
    </div>
  );
}
