import 'bootstrap-icons/font/bootstrap-icons.css';
import '@styles/globals.css';
import {AppProps} from "next/app";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {Toaster} from "react-hot-toast";
import {getTheme, setTheme} from "@utils/theme";

const App = ({Component, pageProps}: AppProps) => {

    const router = useRouter();

    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        // TODO: remove this?
        /*if (typeof window !== "undefined") {
            window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", (e) => {
                setTheme(e.matches ? "light" : "dark");
            });
        }*/
        setTheme(getTheme());
        console.log("follow the white rabbit...");
    }, []);

    useEffect(() => {
        const handleStart = () => {
            setLoading(true);
        };
        const handleComplete = () => {
            setLoading(false);
        };

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

        const handleRouteChange = (url: URL) => {
            // @ts-ignore
            window.gtag('config', process.env.GOOGLE_ANALYTICS_KEY, {
                page_path: url
            });
        }
        router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        }
    }, [router.events]);

    return (
        loading ? (
            <>
                <h1 className={"font-bold text-6xl"}>
                    Tom Heaton - Software Developer
                </h1>
                <br/>
                <div className={"animate-spin"}>
                    <p>loading...</p>
                </div>
            </>
        ) : (
            <>
                <Toaster toastOptions={{position: "top-center"}}/>
                <Component {...pageProps} />
            </>
        )
    );
}

export default App;
