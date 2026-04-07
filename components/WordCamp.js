import styled from "styled-components";
import Image from "next/image";

const WordCamp = () => {
	return (
		<Container id="wordcamp">
			<Inner>
				<ImageWrapper>
					<Image
						src="/wcvie-2026-dennis-buchwald-schluss-mit-was-kostet-eine-website-so-machst-du-dich-als-dienst.jpg"
						alt="WordCamp Wien 2026 – Dennis Buchwald Speaker"
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
					<Badge>Speaker</Badge>
					<Heading>Schluss mit „Was kostet eine Website?"</Heading>
					<Subheading>
						So machst du dich als Dienstleister unvergleichlich
					</Subheading>
					<MetaRow>
						<MetaItem>
							<MetaLabel>Wann</MetaLabel>
							Samstag, 11. April 2026 · 12:00 Uhr
						</MetaItem>
						<MetaItem>
							<MetaLabel>Track</MetaLabel>
							Track 1 · Deutsch · Room C1
						</MetaItem>
						<MetaItem>
							<MetaLabel>Event</MetaLabel>
							WordCamp Vienna 2026 · #wcvie
						</MetaItem>
					</MetaRow>
					<Description>
						In diesem Talk nehme ich euch mit auf meine Reise – weg vom
						klassischen Web-Dienstleister hin zum unvergleichbaren
						Lösungsanbieter.
					</Description>
					<CTALink
						href="https://vienna.wordcamp.org/2026/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Zum WordCamp Wien →
					</CTALink>
				</TextContent>
			</Inner>
		</Container>
	);
};

export default WordCamp;

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
