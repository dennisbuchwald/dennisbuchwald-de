import styled from "styled-components";
import { FaYoutube } from "react-icons/fa";
import Image from "next/image";
import { useWindowSize } from "react-use";

const projects = [
	{
		title: "Neustes Video",
		description: "Ich habe mir Pokémon Rote Edition auf AliExpress bestellt.",
		tags: ["Selbstexperiment", "Pokemon"],
		Link: "https://www.youtube.com/@dennisbuchwald",
		iphoneMockup: "/YT/Pokemon_Aliexpress.png",
	},
];

const Youtube = () => {
	const { width } = useWindowSize();

	let divider;
	if (width <= 768) {
		divider = 3;
	} else if (width <= 1024) {
		divider = 2.5;
	} else {
		divider = 2;
	}

	return (
		<>
			<a id="youtube" />
			<ContainerHeader>
				<Title>Youtube</Title>
				<Text>
					Nebenbei bin ich noch Content Creator auf YouTube. <br /> Dort filme
					und dokumentiere ich die verschiedensten Selbstexperimente.
				</Text>
			</ContainerHeader>
			<ProjectCardsContainer>
				{projects.map((project, index) => (
					<ProjectCard key={index}>
						<Title>{project.title}</Title>
						{project.iphoneMockup && (
							<Image
								src={project.iphoneMockup}
								alt={`${project.title} iPhone mockup`}
								width={1280 / divider}
								height={720 / divider}
							/>
						)}
						<Description>{project.description}</Description>
						<Tags>
							{project.tags.map((tag, index) => (
								<Tag key={index}>{tag}</Tag>
							))}
						</Tags>
						<Links>
							<Link href={project.Link} target="_blank">
								<Icon>
									<FaYoutube />
								</Icon>
								Youtube
							</Link>
						</Links>
					</ProjectCard>
				))}
			</ProjectCardsContainer>
		</>
	);
};

export default Youtube;

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
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.cardBgColor};
	color: ${(props) => props.theme.cardTextColor};
	padding: 2rem;
	border-radius: 4rem;
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 0 6px 6px rgba(0, 0, 0, 0.1);
	margin: 0 1rem 2rem;
	flex-basis: calc(30% - 2rem);
	max-width: calc(30% - 2rem);
	min-width: 700px;
	box-sizing: border-box;
	text-align: center;
	height: auto;

	@media (max-width: 1024px) {
		flex-basis: calc(45% - 2rem);
		max-width: calc(45% - 2rem);
		min-width: 550px;
		border-radius: 3rem;
	}
	@media (max-width: 768px) {
		min-width: 480px;
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
	text-align: center;
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
	gap: 1rem;
	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		text-align: center;
		gap: 0.5rem;
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
