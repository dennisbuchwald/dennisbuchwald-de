import { createGlobalStyle, ThemeProvider } from "styled-components";
import Head from "next/head";
import "../../public/fonts.css";

const SITE_URL = "https://www.dennisbuchwald.de";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: "LeagueSpartan", -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Roboto", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100%;
    overflow-x: hidden;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    background-color: #0a0a0a;
    color: #f0f0f0;
  }

  #__next {
    max-width: 100%;
    overflow-x: hidden;
    flex-grow: 1;
  }

  ::selection {
    background-color: rgba(126, 86, 255, 0.35);
    color: #fff;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #0a0a0a;
  }

  ::-webkit-scrollbar-thumb {
    background: #333;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const theme = {
	bg: "#0a0a0a",
	bgElevated: "#111113",
	bgCard: "rgba(255, 255, 255, 0.05)",
	bgCardHover: "rgba(255, 255, 255, 0.08)",
	borderCard: "rgba(255, 255, 255, 0.1)",
	borderCardHover: "rgba(126, 86, 255, 0.4)",

	accent: "#7e56ff",
	accentHover: "#9b7aff",
	accentGlow: "rgba(126, 86, 255, 0.15)",

	gradient:
		"linear-gradient(135deg, #ea2b1f, #ff3c6f, #ff4fdd, #7e56ff, #00b2ff)",
	gradientGlow: "rgba(126, 86, 255, 0.2)",

	text: "#f0f0f0",
	textSecondary: "#a1a1aa",
	textMuted: "#71717a",

	// Legacy compat
	primaryColor: "#0a0a0a",
	secondaryColor: "#111113",
	accentColor: "#7e56ff",
	textColor: "#f0f0f0",
	buttonTextColor: "#fff",
	cardTextColor: "#f0f0f0",
	cardBgColor: "rgba(255, 255, 255, 0.05)",
	textColorDark: "#a1a1aa",
};

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta property="og:type" content="website" />
				<meta property="og:image" content={`${SITE_URL}/profilbild.webp`} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:image" content={`${SITE_URL}/profilbild.webp`} />
				<link rel="icon" href="/icon.png" />
			</Head>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
