import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css';
import { AppProps } from "next/app";
import { useEffect } from "react";
import { useRouter } from "next/router";

const MyApp = ({ Component, pageProps }: AppProps) => {

    const router = useRouter()

    useEffect(() => {
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
    }, [router.events])

    return (
        <Component {...pageProps} />
    );
}

export default MyApp
