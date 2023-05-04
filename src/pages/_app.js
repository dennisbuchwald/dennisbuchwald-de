import { useEffect } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from "next/head";
import "../../public/fonts.css";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "LeagueSpartan", "FiraCode", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    overflow-x: hidden;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0; 
  }

  #__next {
    max-width: 100%;
    overflow-x: hidden;
    flex-grow: 1;
  }
`;

const theme = {
  primaryColor: "black",
  secondaryColor: "#1c1c1e",
  accentColor: "#ff4081",
  textColor: "white",
  buttonTextColor: "white",
  cardTextColor: "whtie",
  cardBgColor: "grey",
  linkColor: "black",
  linkHoverColor: "black",
  textColorDark: "lightgrey",
};

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
