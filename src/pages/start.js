import styled from "styled-components";
import Typewriter from "typewriter-effect";

const typedStrings = [
	"Hallo!",
	"Mein Name ist Dennis.",
	"Ich bin ein Freigeist.",
	"Problemlöser.",
	"Webentwickler!",
];

const deleteCharsCount = [20, 21, 10, 13];

const Start = () => {
	return (
		<Container>
			<ContainerTyperWriter>
				<Title>
					<TypedTitle>
						<Typewriter
							options={{
								delay: 50,
								deleteSpeed: 5,
								pauseFor: 5,
							}}
							onInit={(typewriter) => {
								typewriter.typeString(typedStrings[0]).pauseFor(2000);
								for (let i = 1; i < typedStrings.length; i++) {
									typewriter
										.deleteChars(deleteCharsCount[i - 1])
										.typeString(typedStrings[i])
										.pauseFor(2000);
								}
								typewriter.start();
							}}
						/>
					</TypedTitle>
				</Title>
			</ContainerTyperWriter>
		</Container>
	);
};

export default Start;

const Container = styled.div`
	text-align: left;
`;

const ContainerTyperWriter = styled.div`
	width: 100%;
	position: relative;
	display: flex;
	align-items: left;
	justify-content: left;
	text-align: left;
	@media screen and (max-width: 768px) {
		flex-direction: column;
		width: 100%;
		position: relative;
		display: flex;
		justify-content: left;
		text-align: left;
		margin-top: -150px;
	}
`;

const Title = styled.h1`
	font-weight: bold;
	color: black;
`;

const TypedTitle = styled.span`
	position: relative;
	font-size: 4rem;
	font-weight: bold;
	color: black;
	margin-bottom: 1.5rem;
	left: 0;
	@media screen and (max-width: 768px) {
		font-size: 2rem;
		left: 0;
		text-align: left;
	}
`;
