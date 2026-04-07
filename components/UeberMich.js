import styled from "styled-components";
import Image from "next/image";

const UeberMich = () => {
	return (
		<Container id="about">
			<Inner>
				<TextContent>
					<Badge>Über mich</Badge>
					<Heading>Vom Nerd zum Unternehmer.</Heading>
					<Text>
						Ich bin Dennis – Gründer und Geschäftsführer von{" "}
						<AccentLink
							href="https://dbw-media.de"
							target="_blank"
							rel="noopener noreferrer"
						>
							dbw media
						</AccentLink>
						, meiner Digitalagentur aus Heilbronn. Was als Leidenschaft für Code
						begann, ist heute mein Alltag: Unternehmen dabei helfen, online
						sichtbar zu werden und wirklich zu wachsen.
					</Text>
					<Text>
						Ich glaube nicht an Websites um der Website willen. Ich glaube an
						Lösungen, die Business-Probleme lösen – mehr Sichtbarkeit, mehr
						Anfragen, mehr Umsatz. Das ist der Anspruch, den ich an jedes
						Projekt stelle.
					</Text>
				</TextContent>
				<ImageWrapper>
					<Image
						src="/dennis-2-ohne-hintergrund.webp"
						alt="Dennis Buchwald – Gründer & Geschäftsführer dbw media"
						width={400}
						height={520}
						style={{ width: "100%", height: "auto", display: "block" }}
					/>
				</ImageWrapper>
			</Inner>
		</Container>
	);
};

export default UeberMich;

const Container = styled.div`
	width: 100%;
`;

const Inner = styled.div`
	display: grid;
	grid-template-columns: 3fr 1fr;
	gap: 4rem;
	align-items: end;
	width: 100%;

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

const Text = styled.p`
	font-size: 1rem;
	line-height: 1.75;
	color: ${(props) => props.theme.textSecondary};
	margin: 0;
`;

const AccentLink = styled.a`
	color: ${(props) => props.theme.accent};
	text-decoration: none;
	font-weight: 600;
	transition: color 0.2s ease;

	&:hover {
		color: ${(props) => props.theme.accentHover};
	}
`;
