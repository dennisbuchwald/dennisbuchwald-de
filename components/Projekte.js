import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import {
	SectionHeader,
	SectionTitle,
	SectionText,
	CardsContainer,
	Card,
	CardTitle,
	CardDescription,
	Tags,
	Tag,
	Links,
	CardLink,
} from "./CardGrid";

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
		<div id="projekte">
			<SectionHeader>
				<SectionTitle>Early Work</SectionTitle>
				<SectionText>
					Wo alles angefangen hat – Projekte aus meiner Zeit beim Web
					Developer Bootcamp und darüber hinaus.
				</SectionText>
			</SectionHeader>

			<CardsContainer>
				{projects.map((project) => (
					<Card key={project.title}>
						<CardTitle>{project.title}</CardTitle>
						{project.mockup && (
							<Image
								src={project.mockup}
								alt={`${project.title} Mockup`}
								width={307}
								height={487}
								style={{ borderRadius: "0.75rem", marginBottom: "1rem" }}
							/>
						)}
						<CardDescription>{project.description}</CardDescription>
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
					</Card>
				))}
			</CardsContainer>
		</div>
	);
};

export default Projekte;
