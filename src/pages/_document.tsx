import Document, { DocumentContext, Head, Html, Main, NextScript} from 'next/document';

class MyDocument extends Document {

    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return initialProps
    }

    render() {
        return (
            <Html lang={"en"}>
                <Head>
                    {/* Global site tag (gtag.js) - Google Analytics */}
                    <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_KEY}`} />
                    <script dangerouslySetInnerHTML={{ __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){ dataLayer.push(arguments); }
                        gtag('js', new Date());
                        gtag('config', '${process.env.GOOGLE_ANALYTICS_KEY}', { page_path: window.location.pathname });`,
                    }} />
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="author" content="Tom Heaton" />
                    <meta name="description" content="Tom Heaton - Website" />
                    <meta name="keywords" content="Software, Developer" />
                    <meta name="color-scheme" content="dark light" />
                    {/*<link rel="icon" type="image/png" href="https://avatars.githubusercontent.com/u/50220137?v=4" />*/}
                    <link rel="icon" href="/favicon.ico" />
                    <title>Tom Heaton</title>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;