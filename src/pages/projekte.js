import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCardsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center; /* hier geändert */
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

const Title = styled.h3`
	font-size: 2rem;
	margin-bottom: 1rem;
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
		title: "Project 1",
		description:
			"This is a project I built using React, styled-components and Node.js. It is a full-stack application that allows users to...",
		tags: ["React", "Node.js", "MongoDB"],
		githubLink: "https://github.com/",
		demoLink: "https://example.com/",
	},
	{
		title: "Project 2",
		description:
			"This is a project I built using Vue.js and Firebase. It is a real-time chat application that allows users to...",
		tags: ["Vue.js", "Firebase"],
		githubLink: "https://github.com/",
		demoLink: "https://example.com/",
	},
	{
		title: "Project 2",
		description:
			"This is a project I built using Vue.js and Firebase. It is a real-time chat application that allows users to...",
		tags: ["Vue.js", "Firebase"],
		githubLink: "https://github.com/",
		demoLink: "https://example.com/",
	},
];

const Projekte = () => {
	return (
		<ProjectCardsContainer>
			{projects.map((project, index) => (
				<ProjectCard key={index}>
					<Title>{project.title}</Title>
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
	);
};

export default Projekte;
