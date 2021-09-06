import '../styles/globals.css';
import { AppProps /*, AppContext */ } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => {
    return <Component {...pageProps} />
}

export default MyApp
