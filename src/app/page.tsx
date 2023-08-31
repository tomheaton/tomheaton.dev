import Header from "@/components/Header";
import { getAge } from "@/utils";
import { toWords } from "number-to-words";

export default function Page() {
  const age = getAge(new Date("09/30/2002"));

  return (
    <main className="flex h-full w-full flex-col content-center items-center">
      <div className="min-h-96 mt-20 flex w-4/5 flex-col rounded-md border-2 border-myGreen p-10 md:w-2/5">
        <Header />
        <div className="my-4 border-t-4 border-myGreen" />
        <p className="text-center text-xl">
          Hey! I am a {toWords(age)} year old software engineer from the United Kingdom.
        </p>
      </div>
    </main>
  );
}
