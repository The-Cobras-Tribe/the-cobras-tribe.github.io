import "../styles/globals.css";
import { MantineProvider } from "@mantine/core";
import { Global } from "@emotion/react";

export default function App({ Component, pageProps }) {
  return (
    <MantineProvider
      withGlobalStyles={true}
      withNormalizeCSS={true}
      theme={{
        /** Put your mantine theme override here */
        fontFamily: "Quantico, sans-serif",
        colorScheme: "dark",
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}
