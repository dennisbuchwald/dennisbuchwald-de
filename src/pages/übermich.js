import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Image from "next/image";

import profilbild from "../../public/profilbild.png";
import profilbildHover from "../../public/profilbild_hover.png";

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
					<ProfileImage>
						<Image
							src={profilbild}
							alt="Profilbild"
							layout="fill"
							objectFit="cover"
							priority
							sizes="100vw"
						/>
						<Image
							src={profilbildHover}
							alt="Profilbild Hover"
							layout="fill"
							objectFit="cover"
							sizes="100vw"
						/>
					</ProfileImage>
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

const ProfileImage = styled.div`
	width: 500px;
	height: 500px;
	position: relative;
	overflow: hidden;

	img {
		position: absolute;
		top: 0;
		left: 0;
		transition: all 0.3s ease;
	}

	img:first-child {
		z-index: 1;
	}

	img:last-child {
		opacity: 0;
	}

	&:hover img:first-child {
		opacity: 0;
		transform: translateY(-10px) scale(1);
	}

	&:hover img:last-child {
		opacity: 1;
		transform: translateY(-10px) scale(1);
	}

	@media screen and (max-width: 768px) {
		width: 100%;
		height: 0;
		padding-bottom: 100%;
	}
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
