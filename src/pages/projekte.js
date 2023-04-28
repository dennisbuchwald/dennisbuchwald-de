import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";

const ProjectCardsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin: 0 -1rem;
	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
	}
`;

const ProjectCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.cardBgColor};
	color: ${(props) => props.theme.cardTextColor};
	padding: 2rem;
	border-radius: 1rem;
	box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
	margin: 0 1rem 2rem;
	flex-basis: calc(33.33% - 2rem);
	max-width: calc(33.33% - 2rem);
	@media (max-width: 768px) {
		flex-basis: 100%;
		max-width: 100%;
		margin: 0 0 2rem;
	}
`;

const ContainerHeader = styled.div`
	text-align: center;
	align-items: center;
`;

const Title = styled.h3`
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
`;

const Tags = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 1.5rem;
`;

const Tag = styled.span`
	background-color: ${(props) => props.theme.tagBgColor};
	color: ${(props) => props.theme.tagTextColor};
	font-size: 1.2rem;
	padding: 0.5rem;
	border-radius: 0.5rem;
	margin-right: 0.5rem;
`;

const Links = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Link = styled.a`
	color: ${(props) => props.theme.linkColor};
	font-size: 1.5rem;
	margin-right: 1rem;
	transition: color 0.2s ease-in-out;
	&:hover {
		color: ${(props) => props.theme.linkHoverColor};
	}
`;

const Icon = styled.span`
	margin-right: 0.5rem;
`;

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
		githubLink: "https://github.com/",
		demoLink: "https://example.com/",
		iphoneMockup: "/mockup-pomodoro-app.png",
	},
];

const Projekte = () => {
	return (
		<>
			<ContainerHeader>
				<Title>Projekte</Title>
				<Text>Hier sehen du einige meiner bisherigen Projekte.</Text>
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
