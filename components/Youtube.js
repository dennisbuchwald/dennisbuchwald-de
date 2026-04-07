import styled from "styled-components";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";
import Slider from "./Slider";

const CARD_WIDTH = 340;
const START_PADDING = "max(4rem, calc((100vw - 1200px) / 2))";

const videos = [
	{
		title: "Die größten Fehler beim WordPress-Setup",
		description:
			"Diese typischen Fehler passieren beim WordPress-Setup immer wieder – und wie du sie von Anfang an vermeidest.",
		tags: ["#WordPress", "#Webdesign"],
		link: "https://www.youtube.com/watch?v=XFSnKks2C2s",
		thumbnail: "https://img.youtube.com/vi/XFSnKks2C2s/maxresdefault.jpg",
	},
	{
		title: "5 Tipps für eine schnellere WordPress Website",
		description:
			"Viele Bilder aus Webseiten laden ewig. Diese 5 Tipps machen deine WordPress-Website messbar schneller.",
		tags: ["#WordPress", "#Performance"],
		link: "https://www.youtube.com/watch?v=t2APS6l_RzY",
		thumbnail: "https://img.youtube.com/vi/t2APS6l_RzY/maxresdefault.jpg",
	},
	{
		title: "Darkweb Website",
		description:
			"Ich versuche eine Website im Darkweb zu veröffentlichen – ein Selbstexperiment.",
		tags: ["#Selbstexperiment", "#Darkweb"],
		link: "https://www.youtube.com/watch?v=0dOk40juT-Q&t=7s",
		thumbnail: "/YT/Darkweb_Website.png",
	},
	{
		title: "Pokemon AliExpress",
		description:
			"Ich habe mir Pokemon Rote Edition auf AliExpress bestellt. Was kam an?",
		tags: ["#Selbstexperiment", "#Pokemon"],
		link: "https://www.youtube.com/watch?v=wvlB20Naaqs&t=2s",
		thumbnail: "/YT/Pokemon_Aliexpress.png",
	},
];

const Youtube = () => {
	return (
		<Container id="youtube">
			<Header>
				<Eyebrow>YouTube</Eyebrow>
				<Heading>Aus meinem Alltag.</Heading>
				<Sub>
					Tech-Experimente, WordPress-Insights und alles, was mich antreibt.
				</Sub>
			</Header>
			<Slider cardWidth={CARD_WIDTH} startPadding={START_PADDING}>
				{videos.map((video) => (
					<Card
						key={video.title}
						href={video.link}
						target="_blank"
						rel="noopener noreferrer"
						style={{ width: CARD_WIDTH }}
					>
						<Thumbnail>
							<Image
								src={video.thumbnail}
								alt={video.title}
								width={640}
								height={360}
								style={{ width: "100%", height: "100%", objectFit: "cover" }}
							/>
							<PlayOverlay>
								<FaYoutube />
							</PlayOverlay>
						</Thumbnail>
						<CardBody>
							<CardTitle>{video.title}</CardTitle>
							<CardDesc>{video.description}</CardDesc>
							<Tags>
								{video.tags.map((tag) => (
									<Tag key={tag}>{tag}</Tag>
								))}
							</Tags>
						</CardBody>
					</Card>
				))}
			</Slider>
		</Container>
	);
};

export default Youtube;

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
	background:
		linear-gradient(${(props) => props.theme.bg}, ${(props) => props.theme.bg})
			padding-box,
		linear-gradient(135deg, #ea2b1f, #ff3c6f, #ff4fdd, #7e56ff, #00b2ff)
			border-box;
	border: 1px solid transparent;
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

const Card = styled.a`
	flex-shrink: 0;
	background: ${(props) => props.theme.bgCard};
	border: 1px solid ${(props) => props.theme.borderCard};
	border-radius: 1.25rem;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	text-decoration: none;
	transition:
		border-color 0.2s ease,
		transform 0.2s ease;

	&:hover {
		border-color: ${(props) => props.theme.borderCardHover};
		transform: translateY(-3px);
	}
`;

const Thumbnail = styled.div`
	width: 100%;
	aspect-ratio: 16 / 9;
	overflow: hidden;
	position: relative;
	background: ${(props) => props.theme.bgElevated};

	img {
		transition: transform 0.4s ease;
	}

	${Card}:hover & img {
		transform: scale(1.03);
	}
`;

const PlayOverlay = styled.div`
	position: absolute;
	inset: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(0, 0, 0, 0.3);
	opacity: 0;
	transition: opacity 0.2s ease;
	color: #fff;
	font-size: 3rem;

	${Card}:hover & {
		opacity: 1;
	}
`;

const CardBody = styled.div`
	padding: 1.25rem;
	display: flex;
	flex-direction: column;
	gap: 0.6rem;
`;

const CardTitle = styled.h3`
	font-size: 1rem;
	font-weight: 600;
	color: ${(props) => props.theme.text};
	line-height: 1.4;
`;

const CardDesc = styled.p`
	font-size: 0.875rem;
	line-height: 1.6;
	color: ${(props) => props.theme.textSecondary};
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
	background:
		linear-gradient(${(props) => props.theme.bg}, ${(props) => props.theme.bg})
			padding-box,
		linear-gradient(135deg, #ea2b1f, #ff3c6f, #ff4fdd, #7e56ff, #00b2ff)
			border-box;
	border: 1px solid transparent;
`;
