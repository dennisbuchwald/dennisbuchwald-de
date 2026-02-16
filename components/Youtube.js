import { FaYoutube } from "react-icons/fa";
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

const videos = [
	{
		title: "Darkweb Website",
		description:
			"Ich versuche eine Website im Darkweb zu veröffentlichen.",
		tags: ["#Selbstexperiment", "#Darkweb"],
		link: "https://www.youtube.com/watch?v=0dOk40juT-Q&t=7s",
		thumbnail: "/YT/Darkweb_Website.png",
	},
	{
		title: "Pokemon AliExpress",
		description:
			"Ich habe mir Pokemon Rote Edition auf AliExpress bestellt.",
		tags: ["#Selbstexperiment", "#Pokemon"],
		link: "https://www.youtube.com/watch?v=wvlB20Naaqs&t=2s",
		thumbnail: "/YT/Pokemon_Aliexpress.png",
	},
];

const Youtube = () => {
	return (
		<div id="youtube">
			<SectionHeader>
				<SectionTitle>YouTube</SectionTitle>
				<SectionText>
					Neben der Agentur produziere ich Content auf YouTube – Tech-Experimente,
					Einblicke und alles, was mich antreibt.
				</SectionText>
			</SectionHeader>
			<CardsContainer>
				{videos.map((video) => (
					<Card key={video.title} $minWidth="320px" $maxWidth="500px">
						<CardTitle>{video.title}</CardTitle>
						{video.thumbnail && (
							<Image
								src={video.thumbnail}
								alt={`${video.title} Thumbnail`}
								width={480}
								height={270}
								style={{
									borderRadius: "1rem",
									marginBottom: "1rem",
									width: "100%",
									height: "auto",
								}}
							/>
						)}
						<CardDescription>{video.description}</CardDescription>
						<Tags>
							{video.tags.map((tag) => (
								<Tag key={tag}>{tag}</Tag>
							))}
						</Tags>
						<Links>
							<CardLink
								href={video.link}
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaYoutube /> YouTube
							</CardLink>
						</Links>
					</Card>
				))}
			</CardsContainer>
		</div>
	);
};

export default Youtube;
