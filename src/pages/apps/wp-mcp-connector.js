import { useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import FinalCTA from "../../../components/FinalCTA";
import { FaGithub, FaCheck, FaTimes } from "react-icons/fa";

const SITE_URL = "https://www.dennisbuchwald.de";
const REPO_URL = "https://github.com/dennisbuchwald/wp-mcp-connector-plus";

const features = [
	{
		title: "Blockbaum statt HTML-Wand",
		desc: "Liest und schreibt Seiten als Gutenberg-Blockbaum. Der Agent bekommt Struktur zurück und gibt Struktur zurück, kein zusammengeklebtes Markup.",
	},
	{
		title: "Kennt deinen Baukasten",
		desc: "Jeder Block deines Themes mit Attributen, erlaubten Kind-Blöcken und Design-Tokens aus der theme.json. Der Agent rät nicht, er liest nach.",
	},
	{
		title: "Fünfstufige Validierung",
		desc: "Jede Änderung wird vor dem Speichern geprüft. Der Testlauf ist der Standard: Du siehst erst, was passieren würde, und entscheidest dann.",
	},
	{
		title: "Eigene KI-Rolle ohne Veröffentlichungsrecht",
		desc: "Der Agent arbeitet unter einer Rolle ohne publish-Cap. Entwürfe bleiben Entwürfe, und das erzwingt WordPress selbst, nicht ein gut gemeinter Prompt.",
	},
	{
		title: "Jede Änderung eine Revision",
		desc: "Zurückrollen geht mit WordPress-Bordmitteln. Du siehst im Editor, was sich geändert hat, und stellst den Stand davor mit einem Klick wieder her.",
	},
	{
		title: "Vollständiges Protokoll",
		desc: "Jeder Aufruf landet im Audit-Log im Backend. Wer hat wann welche Seite angefasst, steht schwarz auf weiss da.",
	},
	{
		title: "Offen und auf offiziellen Schienen",
		desc: "Baut auf der WordPress Abilities API (im Core seit 6.9) und dem offiziellen mcp-adapter auf, kein Sonderweg am Core vorbei. Quellcode auf GitHub unter GPL-2.0-or-later.",
	},
	{
		title: "Läuft auf jeder Gutenberg-Seite",
		desc: "Das Block-Wissen kommt aus block.json und theme.json deiner Installation. Eigene Regeln hängst du über Filter dran.",
	},
	{
		title: "Kein Entwickler-Zugang",
		desc: "Kein PHP im Prozess, kein WP-CLI, keine Datenbankabfragen. Der Agent bearbeitet Inhalte, sonst nichts. Deshalb ist es kein reines Staging-Werkzeug.",
	},
];

const notForYou = [
	{
		title: "Du baust mit Elementor oder WPBakery",
		desc: "Dann gibt es keinen Blockbaum, an dem das Plugin arbeiten könnte. Was in solchen Seiten steckt, ist Page-Builder-Markup, und genau das versteht der Connector nicht.",
	},
	{
		title: "Du erwartest Bilder-Upload oder SEO-Felder",
		desc: "Beides macht es nicht. Der Agent arbeitet an Inhalt und Struktur. Medien und SEO-Felder bleiben deine Baustelle.",
	},
	{
		title: "Du willst einen Agenten mit Serverzugang",
		desc: "PHP ausführen, WP-CLI, direkte Datenbankabfragen: alles nicht drin, und zwar mit Absicht. Für solche Aufgaben gibt es Werkzeuge, die dafür gebaut sind. Dieses hier ist es nicht.",
	},
	{
		title: "Dir fehlt der passende Block",
		desc: "Ein Redakteur kann nichts bauen, was es nicht gibt. Fehlt in deinem Theme ein Block, kann der Agent ihn nicht erfinden. Blöcke baust du, Seiten baut er.",
	},
	{
		title: "Du fährst WordPress unter 6.9",
		desc: "Dann kannst du es gar nicht erst installieren. Die Abilities API, auf der alles aufsetzt, kam erst mit 6.9 in den Core.",
	},
];

const compareRows = [
	{ feature: "Arbeitet auf", ours: "Blockbaum", others: "post_content" },
	{ feature: "Zugriff auf PHP, WP-CLI, Datenbank", ours: "bewusst nein", others: "teils ja" },
	{ feature: "Kennt Block-Attribute deines Themes", ours: true, others: false },
	{ feature: "Kennt Verschachtelungsregeln", ours: true, others: false },
	{ feature: "Design-Tokens aus theme.json", ours: true, others: false },
	{ feature: "Prüfung vor dem Speichern", ours: "5 Stufen", others: false },
	{ feature: "Testlauf als Standard", ours: true, others: false },
	{ feature: "Rolle ohne Veröffentlichungsrecht", ours: true, others: false },
	{ feature: "Revision je Änderung", ours: true, others: "teilweise" },
	{ feature: "Audit-Log im Backend", ours: true, others: false },
	{ feature: "Preis", ours: "Kostenlos", others: "Free + Pro" },
];

const faqs = [
	{
		q: "Was ist MCP und was hat WordPress damit zu tun?",
		a: "MCP steht für Model Context Protocol, einen offenen Standard, über den KI-Clients mit Programmen sprechen. Ein MCP-Plugin macht deine WordPress-Installation zu so einem Gesprächspartner: Der Agent kann Seiten lesen und schreiben, ohne dass du ihm Zugangsdaten ins Chatfenster kippst.",
	},
	{
		q: "Was unterscheidet es von den anderen MCP-Plugins für WordPress?",
		a: "Die anderen geben der KI Zugang zu WordPress. Dieses gibt ihr Urteilsvermögen. Konkret: Statt das post_content-Feld zu übergeben, liefert es den Blockbaum samt Block-Schemas, erlaubten Kind-Blöcken und Design-Tokens. Der Agent weiss dadurch, womit er arbeitet, und jede Änderung läuft vor dem Speichern durch fünf Prüfstufen.",
	},
	{
		q: "Funktioniert das mit Claude?",
		a: "Mit jedem Client, der MCP spricht. Entwickelt und getestet haben wir es mit Claude.",
	},
	{
		q: "Brauche ich wirklich WordPress 6.9?",
		a: "Ja. Das Plugin setzt auf der WordPress Abilities API auf, die erst mit Version 6.9 in den Core gekommen ist. Auf älteren Installationen lässt es sich nicht aktivieren.",
	},
	{
		q: "Kann die KI aus Versehen etwas veröffentlichen?",
		a: "Der Agent arbeitet unter einer eigenen Rolle, der das Veröffentlichungsrecht fehlt. Ein Beitrag, den er anlegt oder ändert, bleibt ein Entwurf. Das hängt nicht an einer Anweisung im Prompt, sondern am Rechtesystem von WordPress.",
	},
	{
		q: "Ist das ein Werkzeug für Entwickler?",
		a: "Eingerichtet wird es von einem Entwickler oder einer Agentur, gearbeitet wird damit redaktionell. Der Agent bekommt bewusst keinen Serverzugang: kein PHP, kein WP-CLI, keine Datenbank. Er pflegt Inhalte innerhalb deines Baukastens. Die Blöcke baust weiter du, damit du dich auf Entwicklung konzentrieren kannst statt auf Änderungswünsche.",
	},
	{
		q: "Funktioniert es mit meinem Theme oder nur mit euren Blöcken?",
		a: "Mit jedem Theme, das Gutenberg nutzt. Das Wissen über Blöcke liest das Plugin aus den block.json-Dateien deiner Installation und aus deiner theme.json. Eigene Regeln, etwa welche Container offen sind oder welche Blöcke der Agent nicht anfassen soll, hängst du über Filter dran.",
	},
	{
		q: "Was kostet es?",
		a: "Nichts. Der Quellcode liegt unter GPL-2.0-or-later auf GitHub.",
	},
];

const appSchema = {
	"@context": "https://schema.org",
	"@type": "SoftwareApplication",
	name: "WP MCP Connector Plus",
	description:
		"MCP-Plugin fuer WordPress, das auf dem Gutenberg-Blockbaum arbeitet statt auf post_content: Block-Schemas, Verschachtelungsregeln, Design-Tokens aus theme.json und fuenfstufige Validierung vor jedem Speichern. Kostenlos und Open Source.",
	applicationCategory: "DeveloperApplication",
	operatingSystem: "WordPress",
	url: `${SITE_URL}/apps/wp-mcp-connector`,
	downloadUrl: REPO_URL,
	license: "https://www.gnu.org/licenses/old-licenses/gpl-2.0.html",
	offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
	author: { "@type": "Person", name: "Dennis Buchwald", url: SITE_URL },
};

const faqSchema = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: faqs.map((f) => ({
		"@type": "Question",
		name: f.q,
		acceptedAnswer: { "@type": "Answer", text: f.a },
	})),
};

const CellValue = ({ value, highlight }) => {
	if (value === true) return <CellCheck $highlight={highlight}><FaCheck /></CellCheck>;
	if (value === false) return <CellCross><FaTimes /></CellCross>;
	return <CellText $highlight={highlight}>{value}</CellText>;
};

const AccordionItem = ({ question, answer }) => {
	const [open, setOpen] = useState(false);
	return (
		<AccordionWrapper>
			<AccordionTrigger onClick={() => setOpen(!open)}>
				<span>{question}</span>
				<AccordionIcon $open={open}>+</AccordionIcon>
			</AccordionTrigger>
			<AccordionContent $open={open}>
				<AccordionText>{answer}</AccordionText>
			</AccordionContent>
		</AccordionWrapper>
	);
};

const WpMcpConnector = () => {
	return (
		<div id="top">
			<Head>
				<title>WP MCP Connector Plus - MCP-Server fuer WordPress mit Gutenberg-Blockbaum</title>
				<meta
					name="description"
					content="MCP-Plugin fuer WordPress, das auf dem Gutenberg-Blockbaum arbeitet statt auf post_content: Block-Schemas, Verschachtelungsregeln, theme.json und fuenfstufige Validierung vor jedem Speichern. Kein Entwickler-Zugang, sondern ein Redakteur, der dein Design-System kennt. Kostenlos und Open Source."
				/>
				<link rel="canonical" href={`${SITE_URL}/apps/wp-mcp-connector`} />
				<meta property="og:title" content="WP MCP Connector Plus - die KI, die deine Website versteht" />
				<meta property="og:description" content="Kein Entwickler-Zugang, sondern ein Redakteur, der dein Design-System kennt: Blockbaum, Block-Schemas, Validierung vor dem Speichern. Kostenlos und Open Source." />
				<meta property="og:url" content={`${SITE_URL}/apps/wp-mcp-connector`} />
				<meta property="og:type" content="website" />
				<meta name="twitter:title" content="WP MCP Connector Plus - die KI, die deine Website versteht" />
				<meta name="twitter:description" content="MCP fuer WordPress auf Basis des Gutenberg-Blockbaums. Kostenlos und Open Source." />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify([appSchema, faqSchema]) }}
				/>
			</Head>
			<Header />
			<PageContent>
				{/* ── HERO ── */}
				<HeroWrapper>
					<Hero>
						<Breadcrumb>
							<BreadcrumbLink href="/apps">Apps & Plugins</BreadcrumbLink>
							<span>/</span>
							<span>WP MCP Connector Plus</span>
						</Breadcrumb>
						<HeroIconRow>
							<HeroIcon src="/apps/icons/wpmcp-app.svg" alt="WP MCP Connector Plus" />
							<Eyebrow>Open Source auf GitHub</Eyebrow>
						</HeroIconRow>
						<Title>
							Die KI, die deine Website versteht, statt nur reinzuschreiben.
						</Title>
						<Intro>
							Kein Entwickler-Zugang, sondern ein Redakteur, der dein
							Design-System auswendig kennt. Der Agent bekommt den echten
							Baukasten deiner Seite statt eines leeren Textfelds, und er
							darf genau so viel wie ein Redakteur darf.
						</Intro>
						<HeroActions>
							<PrimaryButton href={REPO_URL} target="_blank" rel="noopener noreferrer">
								<FaGithub /> Auf GitHub ansehen
							</PrimaryButton>
						</HeroActions>
					</Hero>
					<GradientDivider />
				</HeroWrapper>

				{/* ── PROBLEM ── */}
				<Section>
					<ProblemText>
						<SectionHeading>Zugang ist noch kein Verständnis</SectionHeading>
						<ProblemDesc>
							Rund 15 MCP-Plugins stehen inzwischen im WordPress-Verzeichnis,
							und fast alle machen dasselbe: Sie reichen der KI das
							post_content-Feld. Die schreibt eine HTML-Wand hinein, der
							Editor meldet ungültige Blöcke, und hinterher kann niemand
							nachvollziehen, was sich eigentlich geändert hat.
						</ProblemDesc>
						<ProblemDesc>
							Das Problem ist nicht der Transport. Das Problem ist, dass der
							Agent nicht weiss, womit er arbeitet. Eine Seite in WordPress
							ist kein Fliesstext, sondern ein Baum aus Blöcken mit Attributen,
							erlaubten Kind-Blöcken und Farben, die aus der theme.json kommen.
							Wer davon nichts weiss, kann nur raten.
						</ProblemDesc>
						<ProblemDesc>
							<strong>
								Andere MCP-Plugins geben einer KI Zugang zu WordPress. Dieses
								gibt ihr Urteilsvermögen.
							</strong>{" "}
							Der Agent bekommt den echten Baukasten mit Block-Schemas,
							Verschachtelungsregeln und Design-Tokens, und jede Änderung wird
							vor dem Speichern geprüft.
						</ProblemDesc>
						<ProblemDesc>
							Daraus wird eine klare Arbeitsteilung. Du baust die Blöcke, der
							Agent baut damit die Seiten. Er bekommt keinen Serverzugang, kein
							PHP, keine Datenbank, und genau deshalb darf er auf eine
							Kundenseite. Was übrig bleibt, ist die Arbeit, die dich ohnehin
							aufhält: Texte einpflegen, Abschnitte umbauen, Änderungswünsche
							nachziehen, die drei Wochen später kommen.
						</ProblemDesc>
					</ProblemText>
				</Section>

				{/* ── FEATURES ── */}
				<Section>
					<SectionHeading>Was das Plugin kann</SectionHeading>
					<FeatureGrid>
						{features.map((f) => (
							<FeatureCard key={f.title}>
								<FeatureTitle>{f.title}</FeatureTitle>
								<FeatureDesc>{f.desc}</FeatureDesc>
							</FeatureCard>
						))}
					</FeatureGrid>
				</Section>

				{/* ── VERGLEICH ── */}
				<Section>
					<SectionHeading>
						WP MCP Connector Plus und die üblichen MCP-Plugins
					</SectionHeading>
					<CompareWrapper>
						<CompareTable>
							<thead>
								<tr>
									<Th></Th>
									<ThHighlight>WP MCP Connector Plus</ThHighlight>
									<Th>Übliche MCP-Plugins</Th>
								</tr>
							</thead>
							<tbody>
								{compareRows.map((row) => (
									<tr key={row.feature}>
										<TdFeature>{row.feature}</TdFeature>
										<TdHighlight><CellValue value={row.ours} highlight /></TdHighlight>
										<Td><CellValue value={row.others} /></Td>
									</tr>
								))}
							</tbody>
						</CompareTable>
					</CompareWrapper>
					<TableNote>
						Stand September 2026, nach einem Blick in das WordPress-Verzeichnis.
						Die rechte Spalte fasst zusammen, was dort verbreitet ist, und
						beschreibt kein einzelnes Plugin.
					</TableNote>
				</Section>

				{/* ── FUER WEN ES NICHTS IST ── */}
				<Section>
					<SectionHeading>Für wen das nichts ist</SectionHeading>
					<SectionSub>
						Fünf Fälle, in denen du dir den Download sparen kannst.
					</SectionSub>
					<NotForGrid>
						{notForYou.map((item) => (
							<NotForCard key={item.title}>
								<NotForIcon><FaTimes /></NotForIcon>
								<div>
									<FeatureTitle>{item.title}</FeatureTitle>
									<FeatureDesc>{item.desc}</FeatureDesc>
								</div>
							</NotForCard>
						))}
					</NotForGrid>
				</Section>

				{/* ── FAQ ── */}
				<Section>
					<SectionHeading>Häufige Fragen</SectionHeading>
					<FaqList>
						{faqs.map((faq) => (
							<AccordionItem key={faq.q} question={faq.q} answer={faq.a} />
						))}
					</FaqList>
				</Section>

				{/* ── VORAUSSETZUNGEN ── */}
				<Section>
					<SectionHeading>Voraussetzungen</SectionHeading>
					<ReqGrid>
						<ReqItem><ReqLabel>WordPress</ReqLabel><ReqValue>6.9+</ReqValue></ReqItem>
						<ReqItem><ReqLabel>PHP</ReqLabel><ReqValue>8.1+</ReqValue></ReqItem>
						<ReqItem><ReqLabel>Editor</ReqLabel><ReqValue>Gutenberg</ReqValue></ReqItem>
						<ReqItem><ReqLabel>Lizenz</ReqLabel><ReqValue>GPL-2.0+</ReqValue></ReqItem>
						<ReqItem><ReqLabel>Preis</ReqLabel><ReqValue>Kostenlos</ReqValue></ReqItem>
					</ReqGrid>
				</Section>

				{/* ── SEO KEYWORD SEKTIONEN ── */}
				<Section>
					<KeywordGrid>
						<KeywordItem>
							<KeywordTitle>MCP-Server für WordPress einrichten</KeywordTitle>
							<KeywordText>
								Plugin installieren, KI-Benutzer mit der mitgelieferten Rolle
								anlegen, Anwendungspasswort erzeugen, den Endpunkt im
								MCP-Client eintragen. Ab da spricht der Agent mit deiner
								Installation, ohne dass Zugangsdaten durch ein Chatfenster
								wandern.
							</KeywordText>
						</KeywordItem>
						<KeywordItem>
							<KeywordTitle>Claude mit WordPress verbinden</KeywordTitle>
							<KeywordText>
								Der Connector spricht MCP, den offenen Standard hinter Claude
								und anderen Agenten. Statt Copy-und-Paste aus dem Chat ins
								Backend liest und schreibt der Agent direkt in deiner Seite,
								mit den Rechten, die du ihm gibst.
							</KeywordText>
						</KeywordItem>
						<KeywordItem>
							<KeywordTitle>KI-Agent für den Gutenberg-Editor</KeywordTitle>
							<KeywordText>
								Der Agent sieht eine Seite so, wie der Editor sie sieht: als
								Baum aus Blöcken mit Attributen und erlaubten Kind-Blöcken.
								Deshalb kann er einen bestehenden Abschnitt umbauen, statt am
								Ende der Seite eine neue HTML-Wand anzuhängen.
							</KeywordText>
						</KeywordItem>
						<KeywordItem>
							<KeywordTitle>KI im Backend, ohne die Kontrolle abzugeben</KeywordTitle>
							<KeywordText>
								Testlauf als Standard, fünf Prüfstufen vor dem Speichern, eine
								Rolle ohne Veröffentlichungsrecht, eine Revision je Änderung
								und ein vollständiges Protokoll im Backend. Was der Agent tut,
								kannst du vorher sehen und hinterher zurücknehmen.
							</KeywordText>
						</KeywordItem>
					</KeywordGrid>
				</Section>

				<FinalCTA />
			</PageContent>
			<Footer />
		</div>
	);
};

export default WpMcpConnector;

/* ═══════════════════════════════════════════ STYLES ═══════════════════════════════════════════ */

const PageContent = styled.main` flex-grow: 1; `;

const HeroWrapper = styled.div` background: #fbfbfd; width: 100%; `;

const GradientDivider = styled.div`
	width: 100%;
	height: 8px;
	background: linear-gradient(90deg, #ea2b1f, #ff3c6f, #ff4fdd, #7e56ff, #00b2ff);
`;

const Hero = styled.section`
	max-width: calc(1200px + 8rem);
	width: 100%;
	margin: 0 auto;
	padding: 2rem 4rem 4rem;
	padding-top: 160px;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	@media screen and (max-width: 768px) { padding: 2rem 1.5rem 3rem; padding-top: 120px; }
`;

const Breadcrumb = styled.div`
	display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem; color: #888; margin-bottom: 0.5rem;
	span { color: #666; }
`;
const BreadcrumbLink = styled(Link)` color: #888; text-decoration: none; &:hover { color: #111; } `;

const HeroIconRow = styled.div` display: flex; align-items: center; gap: 1rem; `;
const HeroIcon = styled.img` width: 7rem; height: 7rem; `;

const Eyebrow = styled.span`
	display: inline-block; padding: 0.28rem 0.85rem; font-size: 0.75rem; font-weight: 700;
	text-transform: uppercase; letter-spacing: 0.12em; color: #fff; border-radius: 999px;
	background: linear-gradient(135deg, #ea2b1f, #ff3c6f, #ff4fdd, #7e56ff, #00b2ff);
`;

const Title = styled.h1`
	font-size: 2.75rem; font-weight: 800; color: #111; line-height: 1.15; max-width: 760px; margin: 0;
	@media screen and (max-width: 768px) { font-size: 2rem; }
`;

const Intro = styled.p`
	font-size: 1.15rem; line-height: 1.7; color: #444; max-width: 640px; margin: 0;
	@media screen and (max-width: 768px) { font-size: 1.05rem; }
`;

const HeroActions = styled.div` display: flex; gap: 1rem; margin-top: 0.5rem; flex-wrap: wrap; `;

const PrimaryButton = styled.a`
	display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.85rem 1.75rem;
	background: #111; color: #fff; font-size: 1rem; font-weight: 600; border-radius: 999px;
	text-decoration: none; transition: all 0.2s ease;
	&:hover { background: #333; transform: translateY(-2px); }
`;

const Section = styled.section`
	max-width: calc(1200px + 8rem); width: 100%; margin: 0 auto; padding: 5rem 4rem;
	@media screen and (max-width: 768px) { padding: 3rem 1.5rem; }
`;

const SectionHeading = styled.h2`
	font-size: 2rem; font-weight: 700; color: ${(p) => p.theme.text}; margin: 0 0 1.5rem;
	@media screen and (max-width: 768px) { font-size: 1.5rem; }
`;

const SectionSub = styled.p`
	font-size: 1.05rem; line-height: 1.7; color: ${(p) => p.theme.textSecondary};
	max-width: 700px; margin: -0.75rem 0 1.75rem;
`;

const ProblemText = styled.div` display: flex; flex-direction: column; gap: 1.25rem; max-width: 700px; `;
const ProblemDesc = styled.p`
	font-size: 1.05rem; line-height: 1.7; color: ${(p) => p.theme.textSecondary}; margin: 0;
	strong { color: ${(p) => p.theme.text}; font-weight: 600; }
`;

const FeatureGrid = styled.div`
	display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem;
	@media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
	@media (max-width: 600px) { grid-template-columns: 1fr; }
`;

const FeatureCard = styled.div`
	display: flex; flex-direction: column; gap: 0.5rem; padding: 1.75rem;
	background: ${(p) => p.theme.bgCard}; border: 1px solid ${(p) => p.theme.borderCard};
	border-radius: 1.25rem; transition: border-color 0.2s ease, transform 0.2s ease;
	&:hover { border-color: ${(p) => p.theme.borderCardHover}; transform: translateY(-3px); }
`;

const FeatureTitle = styled.h3` font-size: 1.05rem; font-weight: 700; color: ${(p) => p.theme.text}; margin: 0 0 0.5rem; `;
const FeatureDesc = styled.p` font-size: 0.9rem; line-height: 1.6; color: ${(p) => p.theme.textSecondary}; margin: 0; `;

const NotForGrid = styled.div`
	display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem;
	@media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
	@media (max-width: 700px) { grid-template-columns: 1fr; }
`;

const NotForCard = styled.div`
	display: flex; align-items: flex-start; gap: 1rem; padding: 1.75rem;
	background: ${(p) => p.theme.bgCard}; border: 1px solid ${(p) => p.theme.borderCard};
	border-radius: 1.25rem;
`;

const NotForIcon = styled.span`
	display: inline-flex; align-items: center; justify-content: center; flex-shrink: 0;
	width: 1.75rem; height: 1.75rem; border-radius: 50%; font-size: 0.75rem;
	color: ${(p) => p.theme.textMuted};
	background: ${(p) => p.theme.bg}; border: 1px solid ${(p) => p.theme.borderCard};
`;

const CompareWrapper = styled.div`
	overflow-x: auto; margin-top: 1.5rem;
	border: 1px solid ${(p) => p.theme.borderCard}; border-radius: 1.25rem;
`;

const CompareTable = styled.table` width: 100%; border-collapse: collapse; min-width: 560px; `;

const Th = styled.th`
	text-align: center; padding: 1.25rem 0.75rem; font-size: 0.8rem; font-weight: 600;
	text-transform: uppercase; letter-spacing: 0.06em; color: ${(p) => p.theme.textMuted};
	border-bottom: 1px solid ${(p) => p.theme.borderCard};
	&:first-child { text-align: left; padding-left: 1.5rem; }
`;

const ThHighlight = styled(Th)` color: #fff; background: ${(p) => p.theme.accent}; `;

const Td = styled.td`
	text-align: center; padding: 0.85rem 0.75rem; font-size: 0.9rem;
	color: ${(p) => p.theme.textSecondary}; border-bottom: 1px solid ${(p) => p.theme.borderCard};
	tr:last-child & { border-bottom: none; }
`;

const TdFeature = styled(Td)` text-align: left; padding-left: 1.5rem; font-weight: 500; color: ${(p) => p.theme.text}; `;
const TdHighlight = styled(Td)` background: rgba(126, 86, 255, 0.06); `;

const TableNote = styled.p`
	font-size: 0.85rem; line-height: 1.6; color: ${(p) => p.theme.textMuted};
	max-width: 700px; margin: 1rem 0 0;
`;

const CellCheck = styled.span`
	display: inline-flex; align-items: center; justify-content: center; width: 1.6rem; height: 1.6rem;
	border-radius: 50%; font-size: 0.7rem; color: #fff;
	background: ${(p) => p.$highlight ? "linear-gradient(135deg, #ea2b1f, #ff3c6f, #7e56ff)" : "#22c55e"};
`;

const CellCross = styled.span`
	display: inline-flex; align-items: center; justify-content: center; width: 1.6rem; height: 1.6rem;
	border-radius: 50%; font-size: 0.7rem; color: ${(p) => p.theme.textMuted};
	background: ${(p) => p.theme.bgCard}; border: 1px solid ${(p) => p.theme.borderCard};
`;

const CellText = styled.span`
	font-size: 0.8rem; font-weight: ${(p) => (p.$highlight ? "700" : "400")};
	color: ${(p) => p.$highlight ? p.theme.accent : p.theme.textSecondary};
`;

const FaqList = styled.div` display: flex; flex-direction: column; max-width: 800px; margin: 0 auto; `;

const AccordionWrapper = styled.div`
	border-bottom: 1px solid ${(p) => p.theme.borderCard};
	&:first-child { border-top: 1px solid ${(p) => p.theme.borderCard}; }
`;

const AccordionTrigger = styled.button`
	display: flex; justify-content: space-between; align-items: center; width: 100%;
	padding: 1.25rem 0; background: none; border: none; cursor: pointer; text-align: left;
	font-size: 1.05rem; font-weight: 600; color: ${(p) => p.theme.text};
	&:hover { color: ${(p) => p.theme.accent}; }
`;

const AccordionIcon = styled.span`
	font-size: 1.4rem; font-weight: 300; color: ${(p) => p.theme.textMuted};
	transition: transform 0.3s ease; transform: ${(p) => (p.$open ? "rotate(45deg)" : "rotate(0)")};
	flex-shrink: 0; margin-left: 1rem;
`;

const AccordionContent = styled.div`
	max-height: ${(p) => (p.$open ? "320px" : "0")}; overflow: hidden; transition: max-height 0.3s ease;
`;

const AccordionText = styled.p`
	font-size: 0.95rem; line-height: 1.65; color: ${(p) => p.theme.textSecondary}; margin: 0; padding-bottom: 1.25rem;
`;

const ReqGrid = styled.div`
	display: grid; grid-template-columns: repeat(5, 1fr); gap: 1.5rem; margin-top: 1.5rem;
	@media (max-width: 1024px) { grid-template-columns: repeat(3, 1fr); }
	@media (max-width: 700px) { grid-template-columns: repeat(2, 1fr); }
`;

const ReqItem = styled.div`
	display: flex; flex-direction: column; gap: 0.25rem; padding: 1.5rem;
	background: ${(p) => p.theme.bgCard}; border: 1px solid ${(p) => p.theme.borderCard};
	border-radius: 1rem; text-align: center;
`;

const ReqLabel = styled.span` font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: ${(p) => p.theme.textMuted}; `;
const ReqValue = styled.span` font-size: 1.25rem; font-weight: 700; color: ${(p) => p.theme.text}; `;

const KeywordGrid = styled.div`
	display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem;
	@media (max-width: 768px) { grid-template-columns: 1fr; }
`;

const KeywordItem = styled.div` display: flex; flex-direction: column; gap: 0.5rem; `;
const KeywordTitle = styled.h3` font-size: 1.1rem; font-weight: 700; color: ${(p) => p.theme.text}; margin: 0; `;
const KeywordText = styled.p` font-size: 0.95rem; line-height: 1.7; color: ${(p) => p.theme.textSecondary}; margin: 0; `;
