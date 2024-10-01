import CtaVersus from "@/components/cat/CtaVersus";
import Header from "@/components/layout/Header";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      {children}
      <div className="fixed bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2">
        <CtaVersus />
      </div>
    </div>
  );
}
