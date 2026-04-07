import styled from "styled-components";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Slider from "./Slider";

const CARD_WIDTH = 280;
// Aligns first card with the 1200px content container
const START_PADDING = "max(4rem, calc((100vw - 1200px) / 2))";

const projects = [
	{
		title: "Pokemon Battler",
		description:
			"Capstone-Projekt bei neue fische – ein interaktives Browser-Game mit Echtzeit-Kampfsystem.",
		tags: ["Next.js", "React", "Styled Components"],
		githubLink:
			"https://github.com/dennisbuchwald/capstone-project-pokemon-battler",
		demoLink: "https://pokemon-battler.dennisbuchwald.de",
		mockup: "/mockup-pokemon-battler.png",
	},
	{
		title: "Kanto Pokedex",
		description:
			"React-App mit PokéAPI-Integration – entstanden an einem Coding-Wochenende.",
		tags: ["React", "PokéAPI", "Photoshop"],
		githubLink: "https://github.com/dennisbuchwald/pokedex-react-app",
		demoLink: "https://pokedex.dennisbuchwald.de/",
		mockup: "/mockup-pokedex-react-app.png",
	},
	{
		title: "Portfolio Website",
		description:
			"Diese Webseite – selbst designt und entwickelt als persönliche Visitenkarte.",
		tags: ["Next.js", "React", "Vercel"],
		githubLink: "https://github.com/dennisbuchwald/dennisbuchwald-de",
		demoLink: "https://www.dennisbuchwald.de",
		mockup: "/mockup-portfolio-website.png",
	},
	{
		title: "Wetter App",
		description:
			"Wetter-Dashboard mit OpenWeatherMap API – Echtzeit-Daten, clean dargestellt.",
		tags: ["Next.js", "React", "OpenWeatherMap API"],
		githubLink: "https://github.com/dennisbuchwald/nextjs-wheaterapp",
		demoLink: "https://wetter.dennisbuchwald.de",
		mockup: "/mockup-wetter-app.png",
	},
	{
		title: "Pomodoro App",
		description:
			"Produktivitäts-Timer nach der Pomodoro-Technik mit anpassbaren Intervallen.",
		tags: ["Next.js", "React", "Styled Components"],
		githubLink: "https://github.com/dennisbuchwald/pomodoro-app",
		demoLink: "https://pomodoro-app-amber-two.vercel.app",
		mockup: "/mockup-pomodoro-app.png",
	},
];

const Projekte = () => {
	return (
		<Container id="projekte">
			<Header>
				<Eyebrow>Early Work</Eyebrow>
				<Heading>Wo alles angefangen hat.</Heading>
				<Sub>
					Projekte aus meiner Zeit beim Web Developer Bootcamp und darüber
					hinaus.
				</Sub>
			</Header>
			<Slider cardWidth={CARD_WIDTH} startPadding={START_PADDING}>
				{projects.map((project) => (
					<Card key={project.title} style={{ width: CARD_WIDTH }}>
						{project.mockup && (
							<Mockup>
								<Image
									src={project.mockup}
									alt={`${project.title} Mockup`}
									width={307}
									height={487}
									style={{ width: "100%", height: "auto", display: "block" }}
								/>
							</Mockup>
						)}
						<CardBody>
							<CardTitle>{project.title}</CardTitle>
							<CardDesc>{project.description}</CardDesc>
							<Tags>
								{project.tags.map((tag) => (
									<Tag key={tag}>{tag}</Tag>
								))}
							</Tags>
							<Links>
								<CardLink
									href={project.githubLink}
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaGithub /> GitHub
								</CardLink>
								<CardLink
									href={project.demoLink}
									target="_blank"
									rel="noopener noreferrer"
								>
									<FaExternalLinkAlt /> Demo
								</CardLink>
							</Links>
						</CardBody>
					</Card>
				))}
			</Slider>
		</Container>
	);
};

export default Projekte;

const Container = styled.div`
	width: 100%;
`;

const Header = styled.div`
	padding: 0 max(4rem, calc((100vw - 1200px) / 2));
	margin-bottom: 2.5rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 0.75rem;

	@media (max-width: 768px) {
		padding: 0 1.5rem;
	}
`;

const Eyebrow = styled.span`
	display: inline-block;
	padding: 0.28rem 0.85rem;
	font-size: 0.75rem;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 0.12em;
	color: #fff;
	border-radius: 999px;
	background: linear-gradient(
				${(props) => props.theme.bg},
				${(props) => props.theme.bg}
			)
			padding-box,
		linear-gradient(135deg, #ea2b1f, #ff3c6f, #ff4fdd, #7e56ff, #00b2ff)
			border-box;
	border: 1px solid transparent;
	box-shadow: inset 0 0 0 999px
		linear-gradient(
			135deg,
			rgba(234, 43, 31, 0.12),
			rgba(255, 79, 221, 0.12),
			rgba(0, 178, 255, 0.12)
		);
`;

const Heading = styled.h2`
	font-size: 2.25rem;
	font-weight: 700;
	color: ${(props) => props.theme.text};
	margin: 0;

	@media (max-width: 768px) {
		font-size: 1.75rem;
	}
`;

const Sub = styled.p`
	font-size: 1rem;
	color: ${(props) => props.theme.textSecondary};
	margin: 0;
`;

const Card = styled.div`
	flex-shrink: 0;
	background: ${(props) => props.theme.bgCard};
	border: 1px solid ${(props) => props.theme.borderCard};
	border-radius: 1.25rem;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	transition: border-color 0.2s ease, transform 0.2s ease;

	&:hover {
		border-color: ${(props) => props.theme.borderCardHover};
		transform: translateY(-3px);
	}
`;

const Mockup = styled.div`
	width: 100%;
	background: ${(props) => props.theme.bgElevated};
	overflow: hidden;
`;

const CardBody = styled.div`
	padding: 1.25rem;
	display: flex;
	flex-direction: column;
	flex: 1;
	gap: 0.6rem;
`;

const CardTitle = styled.h3`
	font-size: 1.05rem;
	font-weight: 600;
	color: ${(props) => props.theme.text};
`;

const CardDesc = styled.p`
	font-size: 0.875rem;
	line-height: 1.6;
	color: ${(props) => props.theme.textSecondary};
	flex: 1;
`;

const Tags = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.4rem;
`;

const Tag = styled.span`
	font-size: 0.72rem;
	font-weight: 600;
	letter-spacing: 0.04em;
	padding: 0.22rem 0.65rem;
	border-radius: 999px;
	color: #fff;
	background: linear-gradient(
				${(props) => props.theme.bg},
				${(props) => props.theme.bg}
			)
			padding-box,
		linear-gradient(135deg, #ea2b1f, #ff3c6f, #ff4fdd, #7e56ff, #00b2ff)
			border-box;
	border: 1px solid transparent;
`;

const Links = styled.div`
	display: flex;
	gap: 1rem;
	margin-top: 0.25rem;
`;

const CardLink = styled.a`
	display: flex;
	align-items: center;
	gap: 0.35rem;
	font-size: 0.85rem;
	color: ${(props) => props.theme.textSecondary};
	text-decoration: none;
	transition: color 0.2s ease;

	&:hover {
		color: ${(props) => props.theme.accent};
	}
`;
