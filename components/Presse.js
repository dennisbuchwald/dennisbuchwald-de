import styled from "styled-components";

const presseArtikel = [
	{
		medium: "Heilbronner Stimme",
		datum: "13. August 2026",
		datetime: "2026-08-13",
		rubrik: "Bürokratie",
		titel:
			"1000-Euro-Bußgelddrohung im Begrüßungsbrief: Heilbronn reagiert auf Kritik eines Gründers",
		text: "Einen Tag nach dem ersten Bericht meldet sich das Rathaus zu Wort. Laut Artikel plant die Stadt, das Begrüßungsschreiben für Gründer zu überarbeiten.",
		url: "https://www.stimme.de/heilbronn/stadt-heilbronn/unternehmer-gruender-brief-rathaus-kritik-tiktok-buerokratie-bussgeld-drohung-muell-reaktion-aenderung-geplant-begruessung-art-5203986",
		paywall: true,
	},
	{
		medium: "Heilbronner Stimme",
		datum: "12. August 2026",
		datetime: "2026-08-12",
		rubrik: "Begrüßungsschreiben",
		titel:
			"Gründer kritisiert Brief von Stadt Heilbronn: „Direkt Drohung mit 1000 Euro Bußgeld“",
		text: "Mein erster Brief als frisch angemeldeter Unternehmer in Heilbronn: Gebührenbescheid, Hinweis zur Mülltonne und eine Bußgelddrohung. Darüber habe ich öffentlich den Kopf geschüttelt.",
		url: "https://www.stimme.de/heilbronn/stadt-heilbronn/buerokratie-wahnsinn-gruender-jungunternehmer-bussgeld-drohung-1000-euro-muellgebuehr-auswandern-aerger-rathaus-brief-art-5203624",
		paywall: true,
	},
];

const Presse = () => {
	return (
		<Container id="presse">
			<Inner>
				<Intro>
					<Badge>Presse</Badge>
					<Heading>Bekannt aus der Heilbronner Stimme.</Heading>
					<Subheading>
						Als ich mein Unternehmen in Heilbronn angemeldet habe, war der erste
						Brief der Stadt ein Gebührenbescheid mit Bußgelddrohung. Ich habe das
						öffentlich gemacht, die Heilbronner Stimme hat darüber berichtet und
						das Rathaus hat reagiert.
					</Subheading>
				</Intro>

				<CardGrid>
					{presseArtikel.map((artikel) => (
						<Card
							key={artikel.url}
							href={artikel.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							<CardMeta>
								<Medium>{artikel.medium}</Medium>
								<Dot>·</Dot>
								<time dateTime={artikel.datetime}>{artikel.datum}</time>
								{artikel.paywall && <Paywall title="Artikel nur mit Abo lesbar">ST+</Paywall>}
							</CardMeta>
							<Rubrik>{artikel.rubrik}</Rubrik>
							<CardTitle>{artikel.titel}</CardTitle>
							<CardText>{artikel.text}</CardText>
							<CardLink>Artikel lesen →</CardLink>
						</Card>
					))}
				</CardGrid>

				<Note>
					Du schreibst über Digitalisierung, Bürokratie oder Selbstständigkeit und
					brauchst eine Stimme aus der Praxis?{" "}
					<NoteLink href="#kontakt">Melde dich gerne.</NoteLink>
				</Note>
			</Inner>
		</Container>
	);
};

export default Presse;

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
	display: flex;
	flex-direction: column;
	gap: 2.5rem;
`;

const Intro = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	max-width: 720px;
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
	line-height: 1.7;
	color: ${(props) => props.theme.textSecondary};
	margin: 0;
`;

const CardGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1.5rem;

	@media (max-width: 900px) {
		grid-template-columns: 1fr;
	}
`;

const Card = styled.a`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	padding: 1.75rem;
	background: ${(props) => props.theme.bgCard};
	border: 1px solid ${(props) => props.theme.borderCard};
	border-radius: 0.75rem;
	text-decoration: none;
	transition: all 0.25s ease;

	&:hover {
		background: ${(props) => props.theme.bgCardHover};
		border-color: ${(props) => props.theme.borderCardHover};
		transform: translateY(-2px);
	}
`;

const CardMeta = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	flex-wrap: wrap;
	font-size: 0.85rem;
	color: ${(props) => props.theme.textMuted};
`;

const Medium = styled.span`
	font-weight: 600;
	color: ${(props) => props.theme.textSecondary};
`;

const Dot = styled.span`
	color: ${(props) => props.theme.textMuted};
`;

const Paywall = styled.span`
	padding: 0.1rem 0.5rem;
	font-size: 0.7rem;
	font-weight: 700;
	letter-spacing: 0.04em;
	color: ${(props) => props.theme.textSecondary};
	border: 1px solid ${(props) => props.theme.borderCard};
	border-radius: 999px;
`;

const Rubrik = styled.span`
	font-size: 0.8rem;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 0.1em;
	color: ${(props) => props.theme.accent};
`;

const CardTitle = styled.h3`
	font-size: 1.15rem;
	font-weight: 700;
	line-height: 1.4;
	color: ${(props) => props.theme.text};
	margin: 0;
`;

const CardText = styled.p`
	font-size: 0.95rem;
	line-height: 1.7;
	color: ${(props) => props.theme.textSecondary};
	margin: 0;
	flex-grow: 1;
`;

const CardLink = styled.span`
	font-size: 0.9rem;
	font-weight: 700;
	background: linear-gradient(
		135deg,
		#ea2b1f,
		#ff3c6f,
		#ff4fdd,
		#7e56ff,
		#00b2ff
	);
	-webkit-background-clip: text;
	background-clip: text;
	-webkit-text-fill-color: transparent;
`;

const Note = styled.p`
	font-size: 0.95rem;
	line-height: 1.7;
	color: ${(props) => props.theme.textMuted};
	margin: 0;
`;

const NoteLink = styled.a`
	color: ${(props) => props.theme.textSecondary};
	text-decoration: underline;
	text-underline-offset: 2px;
	transition: color 0.2s ease;

	&:hover {
		color: ${(props) => props.theme.text};
	}
`;
