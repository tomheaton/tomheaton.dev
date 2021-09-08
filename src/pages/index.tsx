import Image from "next/image";
import {toWords} from "number-to-words";
import {toggleTheme} from "../utils/theme";
import getAge from "../utils/age";
import Cards from "../components/cards";
import SEO from "../components/seo";

const Home = () => {

    const age = getAge(new Date("09/30/2002"));

    return (
        <div>
            <SEO/>
            <main className="wrapper" style={{height: "100vh", padding: "60px"}}>
                <div className="d-flex flex-row flex-wrap align-items-center justify-content-center" style={{padding: "20px"}}>
                    <Image id="theme-toggle" className="avatar btn" src="/avatar.jpg" alt="Tom Heaton" width={100} height={100} onClick={toggleTheme} />
                    <h1 className="m-2 name">Tom Heaton <small>developer</small></h1>
                </div>
                <div>
                    <p className="lead m-2">hey, I am a{age === 18 && "n"} {toWords(age)} year old who likes to code things.</p>
                </div>
                {/*<Cards/>*/}
                <footer className="d-flex fixed-bottom justify-content-center">
                    <div className="wrapper-footer d-flex-col">
                        <div className="socials">
                            <a target="_blank" href="https://www.github.com/tomheaton" rel="noopener noreferrer">
                                <i className="bi bi-github" aria-label="Github"/>
                            </a>
                            <a target="_blank" href="https://www.discord.com/users/325306360004739072" rel="noopener noreferrer">
                                <i className="bi bi-discord" aria-label="Discord"/>
                            </a>
                            <a target="_blank" href="https://www.twitter.com/tomheaton_" rel="noopener noreferrer">
                                <i className="bi bi-twitter" aria-label="Twitter"/>
                            </a>
                            <a target="_blank" href="mailto:tom@tomheaton.dev" rel="noopener noreferrer">
                                <i className="bi bi-envelope-fill" aria-label="Email"/>
                            </a>
                        </div>
                        <p className="copyright">
                            &#169; Tom Heaton {new Date().getFullYear()}
                            {" - "}
                            <a target="_blank" href="https://www.github.com/tomheaton/next-tomheaton-dev" rel="noopener noreferrer">
                                <i className="bi bi-code-square" aria-label="Source Code"/>
                            </a>
                        </p>
                    </div>
                </footer>
            </main>
        </div>
    );
}

export default Home;
