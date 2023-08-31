import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex w-full flex-col items-center gap-y-4 text-center sm:flex-row">
      <div className="w-1/3">
        <Link href="/" className="group">
          <Image
            src="/avatar.jpg"
            width={100}
            height={100}
            alt="Tom Heaton Avatar"
            className="m-auto rounded-full transition-transform hover:scale-105 active:scale-95 group-hover:hidden"
            priority
          />
          <Image
            src="/profile.jpg"
            width={100}
            height={100}
            alt="Tom Heaton Avatar"
            className="m-auto hidden rounded-full transition-transform hover:scale-105 active:scale-95 group-hover:block"
            priority
          />
        </Link>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-extrabold tracking-tighter md:text-5xl">Tom Heaton </h1>
        <h2 className="text-2xl font-medium tracking-normal text-myGreen md:text-3xl">
          software engineer
        </h2>
      </div>
    </header>
  );
}
