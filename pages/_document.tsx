import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name="theme-color" content="#121212" />
                <meta name="description" content="Minnesota based web developer. Passionate about efficiently building lovable products. Enjoys getting outdoors and to the gym." />
                <meta name="keywords" content="Thomas Juranek, Nisswa, Brainerd, Baxter, Web Developer" />

                <link rel="canonical" href="https://thomasjuranek.com" />

                <meta property="og:url" content="https://thomasjuranek.com"/><meta property="og:title" content="Thomas Juranek"/>
                <meta property="og:description" content="Minnesota based web developer. Passionate about efficiently building lovable products. Enjoys getting outdoors and to the gym."/>
                <meta property="og:image" content="http://localhost:3000/OG-Index-V1.png"/>

                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:creator" content="@thomasjuranek"/>
                <meta name="twitter:site" content="@thomasjuranek"/>
                <meta name="twitter:title" content="Thomas Juranek"/>
                <meta name="twitter:description" content="Minnesota based web developer. Passionate about efficiently building lovable products. Enjoys getting outdoors and to the gym."/>
                <meta name="twitter:image" content="http://localhost:3000/TI-Index-V1.png"/>
                <meta name="twitter:alt" content="Thomas Juranek"/>
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
