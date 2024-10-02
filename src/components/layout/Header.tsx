import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full flex flex-col items-center py-2 bg-transparent">
      <figure className="w-32 sm:w-60 h-auto">
        <Image
          src="/images/catmash-logo.webp"
          objectFit="cover"
          className="w-full h-auto"
          alt="alt"
          width={200}
          height={200}
        />
      </figure>
      <h1 className="uppercase font-bold text-[#1a414b] text-2xl">cat mash</h1>
    </header>
  );
}
