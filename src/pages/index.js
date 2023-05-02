import styled from "styled-components";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
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
							Hallo liebes Schwarz- Team. Diese Website befindet sich aktuell
							noch im Aufbau. 🙉
						</Text>
						<Text>
							Hey, ich bin ein kreativer Frontend-Entwickler aus Heilbronn. Ich
							habe erfolgreich das Web Developer Bootcamp bei &quot;neue
							fische&quot; absolviert! <br /> <br />
							Wofür brenne ich? Für die Entwicklung von Webanwendungen, die
							durch ihre Optik und Funktionalität glänzen. Eines meiner
							Highlights während des Bootcamps war die Entwicklung meines
							Capstone-Projekts &quot;Pokemon Battler&quot; – ein Projekt, das
							meine Hingabe für die Webentwicklung perfekt zum Ausdruck bringt!
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
	margin: 1rem;
	margin-top: 90px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background-color: ${(props) => props.theme.secondaryColor};
	color: ${(props) => props.theme.textColor};
	padding: 2rem;
	border-radius: 1rem;
	@media screen and (max-width: 768px) {
		margin-left: 1rem 0;
		margin-right: 1rem 0;
	}
`;

const Section = styled.section`
	box-sizing: border-box;
	margin: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	background-color: ${(props) => props.theme.secondaryColor};
	color: ${(props) => props.theme.textColor};
	padding: 2rem;
	border-radius: 1rem;
	@media screen and (max-width: 768px) {
		margin-left: 1rem 0;
		margin-right: 1rem 0;
	}
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
	text-align: justify-center;
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
