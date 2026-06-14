import styled from "styled-components";
import Image from "next/image";

const Speaking = () => {
	return (
		<Container id="speaking">
			<Inner>
				<ImageWrapper>
					<Image
						src="/wcvie-2026-dennis-buchwald-schluss-mit-was-kostet-eine-website-so-machst-du-dich-als-dienst.jpg"
						alt="Dennis Buchwald als Speaker beim WordCamp Wien 2026"
						width={320}
						height={420}
						style={{
							width: "100%",
							height: "auto",
							display: "block",
							borderRadius: "0.75rem",
						}}
					/>
				</ImageWrapper>
				<TextContent>
					<Badge>Speaking</Badge>
					<Heading>Auf der Bühne der WordPress-Community.</Heading>
					<Subheading>
						Ich teile, was ich aus 9+ Jahren Agentur- und Entwickleralltag
						gelernt habe, zuletzt auf dem WordCamp Wien 2026.
					</Subheading>
					<MetaRow>
						<MetaItem>
							<MetaLabel>Talk</MetaLabel>
							Schluss mit „Was kostet eine Website?" - So machst du dich als
							Dienstleister unvergleichlich
						</MetaItem>
						<MetaItem>
							<MetaLabel>Event</MetaLabel>
							<MetaLink
								href="https://vienna.wordcamp.org/2026/"
								target="_blank"
								rel="noopener noreferrer"
							>
								WordCamp Vienna 2026
							</MetaLink>
							· #wcvie
						</MetaItem>
						<MetaItem>
							<MetaLabel>Wann</MetaLabel>
							11. April 2026 · Track 1 · Deutsch
						</MetaItem>
					</MetaRow>
					<Description>
						In dem Talk nehme ich euch mit auf meine Reise: weg vom klassischen
						Web-Dienstleister, hin zum unvergleichbaren Lösungsanbieter. Du
						suchst einen Speaker für dein Event? Meld dich gerne.
					</Description>
					<CTAGroup>
						<CTALink
							href="https://wordpress.tv/2026/04/27/schluss-mit-was-kostet-eine-website-so-machst-du-dich-als-dienstleister-unvergleichlich/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Talk auf WordPress.tv ansehen →
						</CTALink>
						<SecondaryLink href="#kontakt">Als Speaker anfragen</SecondaryLink>
					</CTAGroup>
				</TextContent>
			</Inner>
		</Container>
	);
};

export default Speaking;

const Container = styled.section`
	width: 100%;
	padding: 6rem 4rem;

	@media (max-width: 768px) {
		padding: 4rem 1.5rem;
	}
`;

const Inner = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 3fr;
	gap: 4rem;
	align-items: end;

	@media (max-width: 900px) {
		grid-template-columns: 1fr;
		gap: 2.5rem;
	}
`;

const TextContent = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

const ImageWrapper = styled.div`
	@media (max-width: 900px) {
		max-width: 220px;
	}
`;

const Badge = styled.span`
	display: inline-block;
	align-self: flex-start;
	padding: 0.28rem 0.85rem;
	font-size: 0.75rem;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 0.12em;
	color: ${(props) => props.theme.text};
	border-radius: 999px;
	background:
		linear-gradient(${(props) => props.theme.bg}, ${(props) => props.theme.bg})
			padding-box,
		linear-gradient(135deg, #ea2b1f, #ff3c6f, #ff4fdd, #7e56ff, #00b2ff)
			border-box;
	border: 1px solid transparent;
`;

const Heading = styled.h2`
	font-size: 2rem;
	font-weight: 700;
	color: ${(props) => props.theme.text};
	line-height: 1.25;
	margin: 0;

	@media (max-width: 768px) {
		font-size: 1.6rem;
	}
`;

const Subheading = styled.p`
	font-size: 1.1rem;
	color: ${(props) => props.theme.textSecondary};
	margin: 0;
`;

const MetaRow = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.4rem;
	padding: 1rem 1.25rem;
	background: ${(props) => props.theme.bgCard};
	border: 1px solid ${(props) => props.theme.borderCard};
	border-radius: 0.75rem;
`;

const MetaItem = styled.div`
	font-size: 0.9rem;
	color: ${(props) => props.theme.textSecondary};
	display: flex;
	gap: 0.5rem;
`;

const MetaLink = styled.a`
	color: ${(props) => props.theme.textSecondary};
	text-decoration: underline;
	text-underline-offset: 2px;
	transition: color 0.2s ease;

	&:hover {
		color: ${(props) => props.theme.text};
	}
`;

const MetaLabel = styled.span`
	font-weight: 600;
	color: ${(props) => props.theme.text};
	min-width: 4.5rem;
`;

const Description = styled.p`
	font-size: 1rem;
	line-height: 1.75;
	color: ${(props) => props.theme.textSecondary};
	margin: 0;
`;

const CTAGroup = styled.div`
	display: flex;
	gap: 0.75rem;
	align-items: center;
	flex-wrap: wrap;
`;

const SecondaryLink = styled.a`
	display: inline-flex;
	align-items: center;
	padding: 0.8rem 1.75rem;
	background: transparent;
	color: ${(props) => props.theme.textSecondary};
	font-size: 0.95rem;
	font-weight: 700;
	border: 1.5px solid ${(props) => props.theme.borderCard};
	border-radius: 999px;
	text-decoration: none;
	transition: all 0.2s ease;

	&:hover {
		color: ${(props) => props.theme.text};
		border-color: ${(props) => props.theme.borderCardHover};
		transform: translateY(-2px);
	}
`;

const CTALink = styled.a`
	display: inline-flex;
	align-self: flex-start;
	align-items: center;
	padding: 0.8rem 1.75rem;
	background: linear-gradient(
		135deg,
		#ea2b1f,
		#ff3c6f,
		#ff4fdd,
		#7e56ff,
		#00b2ff
	);
	color: #fff;
	font-size: 0.95rem;
	font-weight: 700;
	border-radius: 999px;
	text-decoration: none;
	transition: all 0.25s ease;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 30px rgba(126, 86, 255, 0.3);
	}
`;
