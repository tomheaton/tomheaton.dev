import { getAge } from "@/utils";
import { toWords } from "number-to-words";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Tom Heaton",
    // description: "Tom Heaton - Software Developer",
};

const Index = () => {
    const age: number = getAge(new Date("09/30/2002"));

    return (
        <div
            className={
                "flex min-h-screen flex-col justify-between bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white"
            }
        >
            <main className={"flex h-full w-full flex-col content-center items-center"}>
                <div
                    className={
                        "min-h-96 mt-20 flex w-4/5 flex-col rounded-md border-2 border-myGreen p-10 md:w-2/5"
                    }
                >
                    <Header />
                    <div className={"my-4 border-t-4 border-myGreen"} />
                    <p className={"text-xl"}>
                        Hey, I am a {toWords(age)} year old software developer from the United
                        Kingdom.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Index;
