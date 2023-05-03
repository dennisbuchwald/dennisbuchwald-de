import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const projects = [
	{
		title: "Pokemon Battler",
		description:
			"Dieses Projekt entstand im Rahmen meines Capstone-Projekts bei neueFische. Schaut es euch an und viel Sp...",
		tags: ["Next.js", "React", "Style Components"],
		githubLink:
			"https://github.com/dennisbuchwald/capstone-project-pokemon-battler",
		demoLink: "https://pokemon-battler.dennisbuchwald.de",
		iphoneMockup: "/mockup-pokemon-battler.png",
	},
	{
		title: "Kanto Pokedex",
		description:
			"Dieses Projekt war die Vorstufe zu meinem Capstone-Projekt und entstand während eines Coding-Wochenendes.",
		tags: ["React", "PokéAPI API", "Photoshop"],
		githubLink: "https://github.com/dennisbuchwald/pokedex-react-app",
		demoLink: "https://pokedex.dennisbuchwald.de/",
		iphoneMockup: "/mockup-pokedex-react-app.png",
	},
	{
		title: "Pomodoro App",
		description:
			"Dies ist eine Pomodoro-App, die mit React und Next.js erstellt wurde. Die App hilft Benutzern, ihre Produk...",
		tags: ["Next.js", "React", "Style Components"],
		githubLink: "https://github.com/dennisbuchwald/pomodoro-app",
		demoLink: "https://pomodoro-app-amber-two.vercel.app",
		iphoneMockup: "/mockup-pomodoro-app.png",
	},
];

const Projekte = () => {
	return (
		<>
			<ContainerHeader>
				<Title>Projekte</Title>
				<Text>Hier siehst du einige meiner bisherigen Projekte.</Text>
			</ContainerHeader>
			<ProjectCardsContainer>
				{projects.map((project, index) => (
					<ProjectCard key={index}>
						<Title>{project.title}</Title>
						{project.iphoneMockup && (
							<Image
								src={project.iphoneMockup}
								alt={`${project.title} iPhone mockup`}
								width={307}
								height={487}
							/>
						)}
						<Description>{project.description}</Description>
						<Tags>
							{project.tags.map((tag, index) => (
								<Tag key={index}>{tag}</Tag>
							))}
						</Tags>
						<Links>
							<Link href={project.githubLink} target="_blank">
								<Icon>
									<FaGithub />
								</Icon>
								GitHub
							</Link>
							<Link href={project.demoLink} target="_blank">
								<Icon>
									<FaExternalLinkAlt />
								</Icon>
								Demo
							</Link>
						</Links>
					</ProjectCard>
				))}
			</ProjectCardsContainer>
		</>
	);
};

export default Projekte;

const ProjectCardsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 0 -1rem;
	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		margin: 0;
		padding: 0 1.5rem;
	}
`;

const ProjectCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: c enter;
	align-items: center;
	background-color: ${(props) => props.theme.cardBgColor};
	color: ${(props) => props.theme.cardTextColor};
	padding: 2rem;
	border-radius: 4rem;
	box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
	margin: 0 1rem 2rem;
	flex-basis: calc(30% - 2rem);
	max-width: calc(30% - 2rem);
	min-width: 400px;
	box-sizing: border-box;

	@media (max-width: 1024px) {
		flex-basis: calc(45% - 2rem);
		max-width: calc(45% - 2rem);
		min-width: 300px;
		border-radius: 3rem;
	}
	@media (max-width: 768px) {
		min-width: 75%;
		margin: 0 auto 2rem;
		border-radius: 3rem;
	}
`;

const ContainerHeader = styled.div`
	text-align: center;
	align-items: center;
`;

const Title = styled.h3`
	text-align: center;
	font-size: 2rem;
	margin-bottom: 1rem;
`;

const Text = styled.p`
	font-size: 1.2rem;
	line-height: 1.6;
	max-width: 800px;
	text-align: justify;
	margin-bottom: 1.5rem;
`;

const Description = styled.p`
	font-size: 1.5rem;
	margin-bottom: 1.5rem;
	@media (max-width: 768px) {
		font-size: 1rem;
	}
`;

const Tags = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 1.5rem;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		text-align: center;
	}
`;

const Tag = styled.span`
	background-color: ${(props) => props.theme.tagBgColor};
	color: ${(props) => props.theme.tagTextColor};
	font-size: 1.2rem;
	padding: 0.5rem;
	border-radius: 0.5rem;
`;

const Links = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		text-align: center;
	}
`;

const Link = styled.a`
	color: ${(props) => props.theme.linkColor};
	font-size: 1.5rem;
	transition: color 0.2s ease-in-out;
	transition: transform 0.3s ease;

	&:hover {
		color: ${(props) => props.theme.accentColor};
		transform: translateY(-5px);
	}
`;

const Icon = styled.span`
	padding: 0.5rem;
`;
