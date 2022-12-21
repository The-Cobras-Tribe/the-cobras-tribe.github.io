import { createGetInitialProps } from "@mantine/next";
import { Html, Head, Main, NextScript } from "next/document";

const getInitialProps = createGetInitialProps();

export default function Document() {

  return (
    <Html lang='en' className='dark'>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
