import styled from "styled-components";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Projekte from "./projekte";
import Kontakt from "./kontakt";
import Typewriter from "typewriter-effect";

const SectionHome = styled.section`
	margin: 1rem;
	margin-top: 90px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: calc(100vh - 6rem);
	background-color: ${(props) => props.theme.secondaryColor};
	color: ${(props) => props.theme.textColor};
	padding: 2rem;
	border-radius: 1rem;
	@media screen and (max-width: 768px) {
		margin-top: 110px;
		    margin: 1rem 0;
`;

const Section = styled.section`
	margin: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: calc(100vh - 6rem);
	background-color: ${(props) => props.theme.secondaryColor};
	color: ${(props) => props.theme.textColor};
	padding: 2rem;
	border-radius: 1rem;
	@media screen and (max-width: 768px) {
		margin-top: 100px;
		    margin: 1rem 0;

`;

const Container = styled.div`
	text-align: left;
	align-items: left;
`;

const ContainerTyperWriter = styled.div`
	text-align: left;
	align-items: left;
`;

const Title = styled.h1`
	font-weight: bold;
	color: ${(props) => props.theme.textColor};
`;

const Text = styled.p`
	font-size: 1.2rem;
	line-height: 1.6;
	max-width: 800px;
	text-align: justify;
	margin-bottom: 1.5rem;
`;

const TypedTitle = styled.span`
	font-size: 2rem;
	font-weight: bold;
	color: ${(props) => props.theme.textColor};
	margin-bottom: 1.5rem;
	@media screen and (max-width: 768px) {
		font-size: 1.8rem;
	}
`;

const typedStrings = [
	"Hallo! <br />Mein Name ist Dennis.<br />Ich bin ein Freigeist.",
	"Problemlöser.",
	"Webentwickler!",
];

const Home = () => {
	return (
		<>
			<Head>
				<title>Dennis Buchwald</title>
			</Head>
			<Header />
			<SectionHome id="home">
				<Container>
					<ContainerTyperWriter>
						<Title>
							<TypedTitle>
								<Typewriter
									options={{
										delay: 50,
										deleteSpeed: 5,
										pauseFor: 10,
									}}
									onInit={(typewriter) => {
										typewriter
											.typeString(typedStrings[0])
											.pauseFor(2000)
											.deleteChars(10)
											.typeString(typedStrings[1])
											.pauseFor(2000)
											.deleteChars(13)
											.typeString(typedStrings[2])
											.start();
									}}
								/>
							</TypedTitle>
						</Title>
					</ContainerTyperWriter>
					<Text>
						Hallo liebes Schwarz- Team. Diese Website befindet sich aktuell noch
						im Aufbau. 🙉
					</Text>
					<Text>
						Hey, ich bin ein kreativer Frontend-Entwickler aus Heilbronn und hab
						das Web Dev Boot Camp bei den Neuen Fischen gemeistert! <br />
						Mein Ding? Webanwendungen entwickeln, die optisch und funktional
						beeindrucken. Im Boot Camp hab ich zum Beispiel das spannende
						Capstone-Projekt Pokemon Battle erschaffen – ich liebe es einfach!
					</Text>
					{/* <Text>
						Mein Schwerpunkt liegt in der Entwicklung ansprechender und
						funktionaler Webanwendungen. Während meines Boot Camps habe ich ein
						interessantes Capstone-Projekt namens Pokemon Battle erstellt, das
						zeigt, wie leidenschaftlich ich an der Entwicklung von Projekten
						arbeite.
					</Text>
					<Text>
						Ich lade Sie ein, mehr über mich und meine Arbeit zu erfahren. Wenn
						Sie an einer Zusammenarbeit interessiert sind oder Fragen haben,
						zögern Sie bitte nicht, mich zu kontaktieren. Ich freue mich darauf,
						von Ihnen zu hören!
					</Text> */}
				</Container>
			</SectionHome>
			<Section id="projekte">
				<Projekte />
			</Section>
			<Section id="kontakt">
				<Kontakt />
			</Section>
			<Footer />
		</>
	);
};

export default Home;
