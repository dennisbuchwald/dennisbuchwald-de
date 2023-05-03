import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Image from "next/image";

import profilbild from "../../public/profilbild_hover.png";

const ÜberMich = () => {
	return (
		<>
			<Container>
				<MainContainer>
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
					<ProfileImage
						src={profilbild}
						alt="Profilbild"
						width={500}
						height={500}
					/>
				</MainContainer>

				<TextContainer>
					<Text>
						Hey, ich bin ein kreativer Frontend-Entwickler aus Heilbronn. Ich
						habe erfolgreich das Web Developer Bootcamp bei &quot;neue
						fische&quot; absolviert! <br /> <br />
						Wofür brenne ich? Für die Entwicklung von Webanwendungen, die durch
						ihre Optik und Funktionalität glänzen. Eines meiner Highlights
						während des Bootcamps war die Entwicklung meines Capstone-Projekts
						&quot;Pokemon Battler&quot; – ein Projekt, das meine Hingabe für die
						Webentwicklung perfekt zum Ausdruck bringt!
					</Text>
				</TextContainer>
			</Container>
		</>
	);
};

export default ÜberMich;

const Container = styled.div`
	width: 100%;
	display: grid;
	grid-template-rows: auto auto;
	align-items: center;
`;

const MainContainer = styled.section`
	display: flex;
	width: 100%;
	justify-content: space-evenly;
	align-items: center;
	@media screen and (max-width: 768px) {
		flex-direction: column-reverse;
		align-items: center;
	}
`;

const ProfileImage = styled(Image)`
	width: 50%;
	height: auto;
	max-width: 500px;
	max-height: 500px;
`;

const TextContainer = styled.section`
	width: 80%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-left: auto;
	margin-right: auto;
`;

const ContainerTyperWriter = styled.div`
	width: 400px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: left;
	text-align: left;
	@media screen and (max-width: 768px) {
		flex-direction: column;
		text-align: center;
		width: 100%;
	}
`;

const Title = styled.h1`
	font-weight: bold;
	color: ${(props) => props.theme.textColor};
`;

const Text = styled.p`
	font-size: 1.2rem;
	line-height: 1.6;
	width: 100%;
	text-align: left;
	margin-bottom: 1.5rem;
`;

const TypedTitle = styled.span`
	position: relative;
	font-size: 2rem;
	font-weight: bold;
	color: ${(props) => props.theme.textColor};
	margin-bottom: 1.5rem;
	left: 0;
	@media screen and (max-width: 768px) {
		font-size: 1.4rem;
		left: 0;
		transform: none;
		margin-bottom: 2rem;
		text-align: center;
	}
`;

const typedStrings = [
	"Hallo! <br />Mein Name ist Dennis.<br />Ich bin ein Freigeist.",
	"Problemlöser.",
	"Webentwickler!",
];
