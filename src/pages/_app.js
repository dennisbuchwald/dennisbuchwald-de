import { useEffect } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "../../public/fonts.css";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "FiraCode", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const theme = {
	primaryColor: "#1a1a1a",
	secondaryColor: "#f5f5f5",
	accentColor: "#ff9800",
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
