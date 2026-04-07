import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import { FaYoutube, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

const GRADIENT =
	"linear-gradient(135deg, #ea2b1f, #ff3c6f, #ff4fdd, #7e56ff, #00b2ff)";

const gradientSpan = (text) =>
	`<span style="background:${GRADIENT};-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;">${text}</span>`;

const Start = () => {
	return (
		<Container>
			<TextCol>
				<Title>
					<SrOnly>
						Dennis Buchwald – Webentwickler, Unternehmer, Speaker und Gründer
						von dbw media in Heilbronn
					</SrOnly>
					<TypedTitle aria-hidden="true">
						<Typewriter
							options={{
								delay: 50,
								deleteSpeed: 5,
								pauseFor: 5,
							}}
							onInit={(typewriter) => {
								typewriter
									.typeString("Hallo!")
									.pauseFor(2000)
									.deleteAll(5)
									.typeString("Ich bin Dennis.")
									.pauseFor(2000)
									.deleteChars(7)
									.typeString("Webentwickler.")
									.pauseFor(2000)
									.deleteChars(14)
									.typeString("Unternehmer.")
									.pauseFor(2000)
									.deleteChars(12)
									.typeString("Speaker.")
									.pauseFor(2000)
									.deleteChars(8)
									.typeString(`Gründer von ${gradientSpan("dbw media.")}`)
									.pauseFor(5000)
									.start();
							}}
						/>
					</TypedTitle>
				</Title>
				<Subtitle>
					Webentwickler, Unternehmer & Speaker aus Heilbronn. Gründer von{" "}
					<strong>dbw media</strong> – Digitalagentur für Webdesign, SEO &
					Online-Marketing.
				</Subtitle>
				<SpeakerBadge href="#wordcamp">
					Speaker @ WordCamp Wien 2026
				</SpeakerBadge>
				<CTARow>
					<CTAPrimary
						href="https://dbw-media.de"
						target="_blank"
						rel="noopener noreferrer"
					>
						dbw media →
					</CTAPrimary>
					<CTASecondary
						href="https://calendar.app.google/ZeDaDauE5puu3inf6"
						target="_blank"
						rel="noopener noreferrer"
					>
						Dennis kennenlernen
					</CTASecondary>
				</CTARow>
				<SocialRow>
					<SocialLink
						href="https://www.instagram.com/dennisbuchwald/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="Instagram"
					>
						<FaInstagram />
					</SocialLink>
					<SocialLink
						href="https://www.linkedin.com/in/dennisbuchwald/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="LinkedIn"
					>
						<FaLinkedin />
					</SocialLink>
					<SocialLink
						href="https://www.youtube.com/@dennisbuchwald"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="YouTube"
					>
						<FaYoutube />
					</SocialLink>
					<SocialLink
						href="https://github.com/dennisbuchwald/"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="GitHub"
					>
						<FaGithub />
					</SocialLink>
				</SocialRow>
			</TextCol>
			<ImageCol>
				<Image
					src="/Dennis.png"
					alt="Dennis Buchwald"
					width={480}
					height={600}
					style={{ objectFit: "contain", objectPosition: "bottom" }}
					priority
				/>
			</ImageCol>
		</Container>
	);
};

export default Start;

const Container = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: end;
	gap: 3rem;
	width: 100%;

	@media (max-width: 900px) {
		grid-template-columns: 1fr;
	}
`;

const TextCol = styled.div`
	display: flex;
	flex-direction: column;
	padding-bottom: 2rem;
`;

const ImageCol = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-end;

	img {
		max-height: 60vh;
		width: auto;
	}

	@media (max-width: 900px) {
		display: none;
	}
`;

const Title = styled.h1`
	font-weight: 800;
	color: #111;
	margin-bottom: 1.5rem;
	/* Fixed height prevents layout shift when typewriter changes text */
	min-height: 5rem;
	display: flex;
	align-items: flex-start;

	@media (max-width: 768px) {
		min-height: 7rem;
	}
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
	font-size: 3rem;
	font-weight: 700;
	color: #111;
	line-height: 1.2;

	.Typewriter__cursor {
		color: #7e56ff;
	}

	@media screen and (max-width: 768px) {
		font-size: 2rem;
	}
`;

const Subtitle = styled.p`
	font-size: 1.15rem;
	line-height: 1.7;
	color: #444;
	max-width: 500px;
	margin-bottom: 1rem;

	strong {
		color: #111;
		font-weight: 600;
	}

	@media screen and (max-width: 768px) {
		font-size: 1.05rem;
	}
`;

const SpeakerBadge = styled.a`
	display: inline-block;
	align-self: flex-start;
	padding: 0.28rem 0.85rem;
	margin-bottom: 1.75rem;
	font-size: 0.75rem;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 0.12em;
	color: #fff;
	border-radius: 999px;
	background: linear-gradient(
		135deg,
		#ea2b1f,
		#ff3c6f,
		#ff4fdd,
		#7e56ff,
		#00b2ff
	);
	text-decoration: none;
	transition:
		opacity 0.2s ease,
		transform 0.2s ease;

	&:hover {
		opacity: 0.85;
		transform: translateY(-1px);
	}
`;

const CTARow = styled.div`
	display: flex;
	gap: 0.75rem;
	align-items: center;
	flex-wrap: wrap;
	margin-bottom: 1.75rem;
`;

const CTAPrimary = styled.a`
	display: inline-flex;
	align-items: center;
	padding: 0.8rem 1.75rem;
	background: #111;
	color: #fff;
	font-size: 0.95rem;
	font-weight: 700;
	border-radius: 999px;
	text-decoration: none;
	transition: all 0.2s ease;

	&:hover {
		background: #333;
		transform: translateY(-2px);
	}
`;

const CTASecondary = styled.a`
	display: inline-flex;
	align-items: center;
	padding: 0.8rem 1.75rem;
	background: transparent;
	color: #444;
	font-size: 0.95rem;
	font-weight: 700;
	border: 1.5px solid #ccc;
	border-radius: 999px;
	text-decoration: none;
	transition: all 0.2s ease;

	&:hover {
		color: #111;
		border-color: #888;
		transform: translateY(-2px);
	}
`;

const SocialRow = styled.div`
	display: flex;
	gap: 0.75rem;
	align-items: center;
`;

const SocialLink = styled.a`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2.4rem;
	height: 2.4rem;
	border-radius: 999px;
	border: 1.5px solid #ddd;
	color: #555;
	font-size: 1.1rem;
	text-decoration: none;
	transition: all 0.2s ease;

	&:hover {
		color: #111;
		border-color: #888;
		transform: translateY(-2px);
	}
`;
