import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <script src="https://universal-editor-service.adobe.io/cors.js" async></script>
      <meta name="urn:adobe:aue:system:aemconnection" content={`aem:${process.env.AEM_ON_PREM_HOST_AUTHOR}`}></meta>
      <meta name="urn:adobe:aue:config:service" content="https://author-diriyah-dev1.adobecqms.net/universal-editor" />
        </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
