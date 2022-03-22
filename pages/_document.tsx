import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name="theme-color" content="#121212" />
                <meta name="description" content="Minnesota based web developer. Passionate about efficiently building lovable products. Enjoys getting outdoors and to the gym." />
                <meta name="keywords" content="Thomas Juranek, Nisswa, Brainerd, Baxter, Web Developer" />

                <link rel="canonical" href="https://thomasjuranek.com" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
