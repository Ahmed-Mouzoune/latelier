import CtaList from "@/components/cat/CtaList";
import Header from "@/components/layout/Header";
import { cn } from "@/lib/utils";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={cn("w-screen min-h-screen relative")}>
      <div
        className={cn(
          "-z-10",
          "before:absolute before:left-0 before:inset-y-0 before:-z-10 before:w-1/2 before:bg-slate-500",
          "after:absolute after:right-0 after:inset-y-0 after:-z-10 after:w-1/2 after:bg-transparent"
        )}
      ></div>
      <Header />
      {children}
      <div className="fixed bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2">
        <CtaList />
      </div>
    </div>
  );
}
