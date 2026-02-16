import styled from "styled-components";
import Typewriter from "typewriter-effect";

const typedStrings = [
	"Hallo!",
	"Ich bin Dennis.",
	"Webentwickler.",
	"Unternehmer.",
	"Gründer von dbw media.",
];

const deleteCharsCount = [20, 15, 14, 12];

const Start = () => {
	return (
		<Container>
			<Title>
				<SrOnly>
					Dennis Buchwald – Webentwickler, Unternehmer und Gründer von dbw
					media in Heilbronn
				</SrOnly>
				<TypedTitle aria-hidden="true">
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
			<Subtitle>
				Digitalagentur für Webdesign, SEO & Online-Marketing aus Heilbronn.
			</Subtitle>
			<CTARow>
				<CTAButton
					href="https://dbw-media.de"
					target="_blank"
					rel="noopener noreferrer"
				>
					dbw-media.de besuchen
				</CTAButton>
				<CTASecondary
					onClick={() =>
						document
							.querySelector("#kontakt")
							.scrollIntoView({ behavior: "smooth" })
					}
				>
					Kontakt aufnehmen
				</CTASecondary>
			</CTARow>
		</Container>
	);
};

export default Start;

const Container = styled.div`
	text-align: left;
	width: 100%;
`;

const Title = styled.h1`
	font-weight: 700;
	color: ${(props) => props.theme.text};
	margin-bottom: 1.5rem;
`;

const SrOnly = styled.span`
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	margin: -1px;
	overflow: hidden;
	clip: rect(0, 0, 0, 0);
	white-space: nowrap;
	border: 0;
`;

const TypedTitle = styled.span`
	font-size: 4.5rem;
	font-weight: 700;
	color: ${(props) => props.theme.text};

	@media screen and (max-width: 768px) {
		font-size: 2.5rem;
	}
`;

const Subtitle = styled.p`
	font-size: 1.25rem;
	line-height: 1.7;
	color: ${(props) => props.theme.textSecondary};
	max-width: 500px;
	margin-bottom: 2.5rem;

	@media screen and (max-width: 768px) {
		font-size: 1.1rem;
	}
`;

const CTARow = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
	flex-wrap: wrap;
`;

const CTAButton = styled.a`
	display: inline-flex;
	align-items: center;
	padding: 0.85rem 2rem;
	background: ${(props) => props.theme.gradient};
	color: #fff;
	font-size: 1rem;
	font-weight: 600;
	border: none;
	border-radius: 0.75rem;
	text-decoration: none;
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 30px ${(props) => props.theme.gradientGlow};
	}
`;

const CTASecondary = styled.button`
	display: inline-flex;
	align-items: center;
	padding: 0.85rem 2rem;
	background: transparent;
	color: ${(props) => props.theme.textSecondary};
	font-size: 1rem;
	font-weight: 500;
	border: 1px solid ${(props) => props.theme.borderCard};
	border-radius: 0.75rem;
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover {
		color: ${(props) => props.theme.text};
		border-color: ${(props) => props.theme.textSecondary};
		transform: translateY(-2px);
	}
`;
