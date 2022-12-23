import {getAge} from "@utils/index";
import {toWords} from "number-to-words";
import Footer from "@components/Footer";
import Header from "@components/Header";

const Index = () => {
    const age: number = getAge(new Date("09/30/2002"));

    return (
        <div className={"min-h-screen bg-white text-zinc-900 dark:bg-zinc-900 dark:text-white flex flex-col justify-between"}>
            <main className={"h-full w-full flex flex-col content-center items-center"}>
                <div className={"w-4/5 md:w-2/5 mt-20 min-h-96 p-10 flex flex-col border-2 border-myGreen rounded-md"}>
                    <Header/>
                    <div className={"border-t-4 my-4 border-myGreen"}/>
                    <p className={"text-xl"}>
                        Hey, I am a {toWords(age)} year old software developer from the United Kingdom.
                    </p>
                </div>
            </main>

            <Footer/>
        </div>
    );
}

export default Index;
