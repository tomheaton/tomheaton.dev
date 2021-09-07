import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const MyApp = ({ Component, pageProps }: AppProps) => {

    const router = useRouter()
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        console.log("follow the white rabbit...");
    }, []);

    useEffect(() => {
        const handleStart = () => { setLoading(true); };
        const handleComplete = () => { setLoading(false); };

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

    //return (<Component {...pageProps} />);
    return (
        loading ? (<div>loading</div>) : (<Component {...pageProps} />)
    );
}

 export default MyApp;
