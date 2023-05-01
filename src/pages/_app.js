import { useEffect } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "../../public/fonts.css";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "FiraCode", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
	width: 100%;
	    overflow-x: hidden;


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
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
