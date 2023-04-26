import styled from "styled-components";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Typewriter from "typewriter-effect";

const Section = styled.section`
	margin: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: calc(100vh - 6rem);
	background-color: ${(props) => props.theme.secondaryColor};
	color: ${(props) => props.theme.primaryColor};
	padding: 2rem;
`;

const Container = styled.div`
	text-align: left;
	align-items: left;
`;

const Title = styled.h1`
	font-weight: bold;
	color: ${(props) => props.theme.primaryColor};
`;

const Text = styled.p`
	font-size: 1.2rem;
	line-height: 1.6;
	max-width: 800px;
	text-align: justify;
	margin-bottom: 1.5rem;
`;

const TypedTitle = styled.span`
	font-size: 2.5rem;
	font-weight: bold;
	color: ${(props) => props.theme.primaryColor};
	margin-bottom: 1.5rem;
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
			<Section id="home">
				<Container>
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
					<Text>
						Ich bin ein Frontend-Entwickler aus Heilbronn und habe meine
						Ausbildung im Web Dev Boot Camp bei Neue Fische absolviert. Seitdem
						arbeite ich mit modernen Technologien wie JavaScript ES8+, React
						18.2, Next.js, MongoDB, HTML5, CSS3, Bootstrap4 und Git Workflow.
						Zusätzlich habe ich auch Grundkenntnisse in C.
					</Text>
					<Text>
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
					</Text>
				</Container>
			</Section>
			<Section id="projekte">
				<Container>
					<Title>Projekte</Title>
					<Text>Hier sehen Sie einige meiner bisherigen Projekte.</Text>
				</Container>
			</Section>
			<Section id="kontakt">
				<Container>
					<Title>Kontakt</Title>
					<Text>
						Wenn Sie Fragen haben oder an einer Zusammenarbeit interessiert
						sind, kontaktieren Sie mich bitte.
					</Text>
				</Container>
			</Section>
			<Footer />
		</>
	);
};

export default Home;
