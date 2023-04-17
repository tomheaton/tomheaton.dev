import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex w-full flex-col items-center text-center md:flex-row">
      <div className="w-1/3">
        <Link href="/">
          <Image
            src="/avatar.jpg"
            width={100}
            height={100}
            alt="Tom Heaton Avatar"
            className="m-auto rounded-full transition-transform hover:scale-105 active:scale-95"
            priority
          />
        </Link>
      </div>
      <h1 className="mx-5 w-2/3 text-4xl font-extrabold tracking-tighter md:text-5xl">
        Tom Heaton{" "}
        <span className="text-3xl font-medium tracking-normal text-myGreen">developer</span>
      </h1>
    </header>
  );
}
