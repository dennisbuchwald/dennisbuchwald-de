import styled from "styled-components";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ÜberMich from "./übermich.js";
import Projekte from "./projekte";
import Kontakt from "./kontakt";
import Typewriter from "typewriter-effect";

const Home = () => {
	return (
		<>
			<a id="top" />
			<Head>
				<title>Dennis Buchwald</title>
			</Head>
			<Header />
			<PageContent>
				<SectionHome id="about">
					<ÜberMich />
				</SectionHome>
				<a id="projekte" />
				<Section>
					<Projekte />
				</Section>
				<Section>
					<a id="kontakt" />
					<Kontakt />
				</Section>
			</PageContent>

			<Footer />
		</>
	);
};

export default Home;

const PageContent = styled.div`
	flex-grow: 1;
`;

const SectionHome = styled.section`
	box-sizing: border-box;
	margin: 4rem;
	margin-top: 90px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background-color: ${(props) => props.theme.secondaryColor};
	color: ${(props) => props.theme.textColor};
	padding: 2rem;
	border-radius: 4rem;
	@media screen and (max-width: 768px) {
		margin-left: 1rem;
		margin-right: 1rem;
		border-radius: 3rem;
	}
`;

const Section = styled.section`
	box-sizing: border-box;
	margin: 4rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background-color: ${(props) => props.theme.secondaryColor};
	color: ${(props) => props.theme.textColor};
	padding: 2rem;
	border-radius: 4rem;
	@media screen and (max-width: 768px) {
		margin-left: 1rem;
		margin-right: 1rem;
		border-radius: 3rem;
	}
`;
