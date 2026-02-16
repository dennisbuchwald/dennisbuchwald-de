import styled from "styled-components";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

import profilbild from "../public/profilbild.webp";
import profilbildHover from "../public/profilbild_hover.webp";

const services = [
	"Webdesign",
	"SEO",
	"Online-Marketing",
	"Digitalstrategie",
	"Social Media",
];

const UeberMich = () => {
	return (
		<Container id="about">
			<SectionLabel>Über mich</SectionLabel>
			<MainContainer>
				<TextContainer>
					<Heading>
						Webentwickler aus Leidenschaft, Unternehmer aus Überzeugung.
					</Heading>
					<Text>
						Ich bin Dennis – Gründer und Geschäftsführer von{" "}
						<AccentLink
							href="https://dbw-media.de"
							target="_blank"
							rel="noopener noreferrer"
						>
							dbw media
						</AccentLink>
						, meiner Digitalagentur aus Heilbronn. Was als Leidenschaft für Code
						begann, ist heute mein Lebenswerk: Unternehmen dabei zu helfen,
						online sichtbar zu werden und messbar zu wachsen.
					</Text>
					<Text>
						Wir entwickeln Webseiten, die nicht nur gut aussehen, sondern
						performen – mehr Sichtbarkeit, mehr Anfragen, mehr Umsatz. Das ist
						unser Anspruch bei jedem Projekt.
					</Text>
				</TextContainer>
				<ProfileImage>
					<Image
						src={profilbild}
						alt="Dennis Buchwald – Gründer & Geschäftsführer dbw media"
						width={500}
						height={500}
						priority
					/>
					<Image
						src={profilbildHover}
						alt="Dennis Buchwald"
						width={500}
						height={500}
					/>
				</ProfileImage>
			</MainContainer>

			<AgencyCard>
				<AgencyCardInner>
					<AgencyInfo>
						<AgencyName>dbw media</AgencyName>
						<AgencyTagline>
							Digitalagentur für Unternehmen, die online wachsen wollen.
						</AgencyTagline>
						<ServiceTags>
							{services.map((s) => (
								<ServiceTag key={s}>{s}</ServiceTag>
							))}
						</ServiceTags>
					</AgencyInfo>
					<AgencyCTA
						href="https://dbw-media.de"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaExternalLinkAlt /> dbw-media.de
					</AgencyCTA>
				</AgencyCardInner>
			</AgencyCard>
		</Container>
	);
};

export default UeberMich;

const Container = styled.div`
	width: 100%;
`;

const SectionLabel = styled.p`
	font-size: 0.9rem;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 0.15em;
	color: ${(props) => props.theme.accent};
	margin-bottom: 2rem;
`;

const MainContainer = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	gap: 4rem;

	@media screen and (max-width: 768px) {
		flex-direction: column-reverse;
		gap: 2rem;
	}
`;

const ProfileImage = styled.div`
	width: 40%;
	max-width: 400px;
	aspect-ratio: 1;
	position: relative;
	overflow: hidden;
	border-radius: 1.25rem;
	flex-shrink: 0;

	img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: all 0.4s ease;
		border-radius: 1.25rem;
	}

	img:first-child {
		z-index: 1;
	}

	img:last-child {
		opacity: 0;
	}

	&:hover img:first-child {
		opacity: 0;
		transform: scale(1.02);
	}

	&:hover img:last-child {
		opacity: 1;
		transform: scale(1.02);
	}

	@media screen and (max-width: 768px) {
		width: 70%;
	}
`;

const TextContainer = styled.div`
	flex: 1;
`;

const Heading = styled.h2`
	font-size: 2.5rem;
	font-weight: 700;
	line-height: 1.2;
	color: ${(props) => props.theme.text};
	margin-bottom: 1.5rem;

	@media screen and (max-width: 768px) {
		font-size: 1.8rem;
	}
`;

const Text = styled.p`
	font-size: 1.1rem;
	line-height: 1.7;
	color: ${(props) => props.theme.textSecondary};
	margin-bottom: 1rem;
`;

const AccentLink = styled.a`
	color: ${(props) => props.theme.accent};
	text-decoration: none;
	font-weight: 600;
	transition: color 0.2s ease;

	&:hover {
		color: ${(props) => props.theme.accentHover};
	}
`;

const AgencyCard = styled.div`
	margin-top: 4rem;
	position: relative;
	border-radius: 1.25rem;
	padding: 1px;
	background: ${(props) => props.theme.gradient};
`;

const AgencyCardInner = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 2rem;
	padding: 2rem 2.5rem;
	border-radius: 1.25rem;
	background: ${(props) => props.theme.bgElevated};

	@media screen and (max-width: 768px) {
		flex-direction: column;
		text-align: center;
		padding: 2rem 1.5rem;
	}
`;

const AgencyInfo = styled.div`
	flex: 1;
`;

const AgencyName = styled.h3`
	font-size: 1.6rem;
	font-weight: 700;
	margin-bottom: 0.4rem;
	background: ${(props) => props.theme.gradient};
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
`;

const AgencyTagline = styled.p`
	font-size: 1rem;
	color: ${(props) => props.theme.textSecondary};
	margin-bottom: 1rem;
`;

const ServiceTags = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.5rem;

	@media screen and (max-width: 768px) {
		justify-content: center;
	}
`;

const ServiceTag = styled.span`
	font-size: 0.8rem;
	font-weight: 500;
	padding: 0.3rem 0.75rem;
	border-radius: 999px;
	background: ${(props) => props.theme.accentGlow};
	color: ${(props) => props.theme.accentHover};
	border: 1px solid rgba(126, 86, 255, 0.2);
`;

const AgencyCTA = styled.a`
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
	padding: 0.85rem 2rem;
	background: ${(props) => props.theme.gradient};
	color: #fff;
	font-size: 1rem;
	font-weight: 600;
	border-radius: 0.75rem;
	text-decoration: none;
	white-space: nowrap;
	flex-shrink: 0;
	transition: all 0.3s ease;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 30px ${(props) => props.theme.gradientGlow};
	}
`;
