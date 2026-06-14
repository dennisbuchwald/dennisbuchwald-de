import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import FinalCTA from "../../../components/FinalCTA";
import {
	FaGithub,
	FaWordpress,
	FaCheck,
	FaShieldAlt,
	FaCubes,
	FaBolt,
	FaUniversalAccess,
} from "react-icons/fa";

const SITE_URL = "https://www.dennisbuchwald.de";

const pillars = [
	{
		icon: <FaShieldAlt />,
		title: "DSGVO ab Werk",
		desc: "Kein reCAPTCHA, kein Akismet, keine IP-Speicherung. Spam-Schutz läuft komplett auf deinem Server. Einwilligungsfeld, automatische Datenlöschung und WordPress-Privacy-Tools sind eingebaut.",
	},
	{
		icon: <FaCubes />,
		title: "Block-Editor nativ",
		desc: "Jedes Feld ist ein Gutenberg-Block. Kein separater Formular-Builder, kein Iframe, kein Shortcode. Flinkform erbt Farben, Typografie und Abstände direkt aus deiner theme.json.",
	},
	{
		icon: <FaBolt />,
		title: "Unter 15 KB, ohne jQuery",
		desc: "Das gesamte Frontend-JavaScript bleibt unter 15 KB gzipped. Gebaut mit der WordPress Interactivity API. Server-Side Rendering sorgt dafür, dass Formulare sofort sichtbar sind.",
	},
	{
		icon: <FaUniversalAccess />,
		title: "Barrierefreiheit (WCAG 2.1 AA)",
		desc: "Volle Tastaturnavigation, Screenreader-Support, keine Farb-only-Informationen. Fokus-Management bei Multi-Step, prefers-reduced-motion wird respektiert.",
	},
];

const features = [
	"13 Feldtypen: Text, E-Mail, Textarea, Nummer, Datum, URL, Telefon, Select, Radio, Checkbox, Toggle, Hidden, Einwilligung",
	"Multi-Step-Formulare mit Fortschrittsanzeige und Step-Skipping",
	"Bedingte Logik: Felder und Steps ein-/ausblenden, Submit-Button sperren",
	"Spam-Schutz: Honeypot + Time-Check + Proof-of-Work (kein externer Dienst)",
	"Admin- und Bestätigungs-Mails mit Merge-Tags",
	"Submissions-Dashboard: Suche, Filter, Sortierung, Bulk-Aktionen",
	"Automatische Datenlöschung nach konfigurierbarer Aufbewahrungsfrist",
	"Datenexport und Datenlöschung über WordPress-Privacy-Tools",
	"Theme-aware Styling: 4 Feld-Styles, Label-Position, Button-Style",
	"Redirect nach Absenden mit Conversion-Tracking (GA4, Meta Pixel)",
];

const competitors = [
	{
		feature: "Multi-Step + Logik",
		flinkform: "Kostenlos",
		others: "Ab 99 $/Jahr",
	},
	{
		feature: "Spam ohne ext. Dienst",
		flinkform: "Eingebaut",
		others: "reCAPTCHA / Akismet",
	},
	{
		feature: "Keine IP-Speicherung",
		flinkform: "Standard",
		others: "Oft nicht möglich",
	},
	{
		feature: "theme.json Support",
		flinkform: "Vollständig",
		others: "Nicht vorhanden",
	},
	{
		feature: "jQuery-frei",
		flinkform: "Ja",
		others: "Nein (meistens)",
	},
	{
		feature: "Frontend JS",
		flinkform: "<15 KB",
		others: "50-200 KB+",
	},
];

const flinkformSchema = {
	"@context": "https://schema.org",
	"@type": "SoftwareApplication",
	name: "Flinkform",
	description:
		"DSGVO-konformes Formular-Plugin fuer WordPress. Block-Editor nativ, ohne jQuery, mit eingebautem Spam-Schutz.",
	applicationCategory: "Plugin",
	operatingSystem: "WordPress",
	url: `${SITE_URL}/apps/flinkform`,
	offers: {
		"@type": "Offer",
		price: "0",
		priceCurrency: "EUR",
	},
	author: {
		"@type": "Person",
		name: "Dennis Buchwald",
		url: SITE_URL,
	},
};

const Flinkform = () => {
	return (
		<div id="top">
			<Head>
				<title>
					Flinkform - DSGVO-konformes Formular-Plugin fuer WordPress
				</title>
				<meta
					name="description"
					content="Flinkform: das Formular-Plugin fuer WordPress, das DSGVO ernst nimmt. Kein reCAPTCHA, keine IP-Speicherung, Spam-Schutz auf deinem Server. 13 Feldtypen, Multi-Step, bedingte Logik. Kostenlos."
				/>
				<link rel="canonical" href={`${SITE_URL}/apps/flinkform`} />
				<meta
					property="og:title"
					content="Flinkform - DSGVO-konformes Formular-Plugin fuer WordPress"
				/>
				<meta
					property="og:description"
					content="Formulare ohne reCAPTCHA, ohne IP-Speicherung, ohne externe Dienste. Block-Editor nativ, unter 15 KB, kostenlos."
				/>
				<meta property="og:url" content={`${SITE_URL}/apps/flinkform`} />
				<meta property="og:type" content="website" />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(flinkformSchema),
					}}
				/>
			</Head>
			<Header />
			<PageContent>
				{/* Hero */}
				<HeroWrapper>
					<Hero>
						<Breadcrumb>
							<BreadcrumbLink href="/apps">Apps & Plugins</BreadcrumbLink>
							<span>/</span>
							<span>Flinkform</span>
						</Breadcrumb>
						<HeroIconRow>
							<HeroIcon src="/apps/icons/flinkform-app.svg" alt="Flinkform" />
							<Eyebrow>WordPress-Plugin</Eyebrow>
						</HeroIconRow>
						<Title>Flinkform.</Title>
						<Tagline>
							Das letzte Formular-Plugin, das du installieren wirst.
						</Tagline>
						<Intro>
							Dein Kontaktformular schickt wahrscheinlich gerade Besucherdaten
							an Google oder Cloudflare. Flinkform nicht. Spam-Schutz, Formulare,
							Einreichungen: alles bleibt auf deinem Server. Gebaut als echte
							Gutenberg-Blöcke, nicht als aufgesetztes System.
						</Intro>
						<HeroActions>
							<PrimaryButton
								href="https://github.com/dennisbuchwald/Flinkform"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaGithub /> GitHub
							</PrimaryButton>
							<SecondaryButton
								href="https://wordpress.org/plugins/flinkform/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaWordpress /> Bald auf WordPress.org
							</SecondaryButton>
						</HeroActions>
					</Hero>
					<GradientDivider />
				</HeroWrapper>

				{/* 4 Säulen */}
				<Section>
					<SectionInner>
						<PillarGrid>
							{pillars.map((p) => (
								<PillarCard key={p.title}>
									<PillarIcon>{p.icon}</PillarIcon>
									<PillarTitle>{p.title}</PillarTitle>
									<PillarDesc>{p.desc}</PillarDesc>
								</PillarCard>
							))}
						</PillarGrid>
					</SectionInner>
				</Section>

				{/* Features */}
				<Section>
					<SectionInner>
						<SectionHeading>Alles drin. Alles kostenlos.</SectionHeading>
						<SectionSub>
							Multi-Step und bedingte Logik kosten bei anderen Plugins ab 99 $
							pro Jahr. Bei Flinkform ist das im Free Core.
						</SectionSub>
						<FeatureList>
							{features.map((item) => (
								<FeatureItem key={item}>
									<FeatureIcon>
										<FaCheck />
									</FeatureIcon>
									<span>{item}</span>
								</FeatureItem>
							))}
						</FeatureList>
					</SectionInner>
				</Section>

				{/* Vergleich */}
				<Section>
					<SectionInner>
						<SectionHeading>
							Flinkform vs. WPForms, Gravity Forms & Co.
						</SectionHeading>
						<CompareTable>
							<thead>
								<tr>
									<Th></Th>
									<ThHighlight>Flinkform</ThHighlight>
									<Th>Andere Plugins</Th>
								</tr>
							</thead>
							<tbody>
								{competitors.map((row) => (
									<tr key={row.feature}>
										<Td>{row.feature}</Td>
										<TdHighlight>{row.flinkform}</TdHighlight>
										<Td>{row.others}</Td>
									</tr>
								))}
							</tbody>
						</CompareTable>
					</SectionInner>
				</Section>

				{/* Voraussetzungen */}
				<Section>
					<SectionInner>
						<SectionHeading>Voraussetzungen</SectionHeading>
						<ReqGrid>
							<ReqItem>
								<ReqLabel>WordPress</ReqLabel>
								<ReqValue>6.5+</ReqValue>
							</ReqItem>
							<ReqItem>
								<ReqLabel>PHP</ReqLabel>
								<ReqValue>8.1+</ReqValue>
							</ReqItem>
							<ReqItem>
								<ReqLabel>Editor</ReqLabel>
								<ReqValue>Gutenberg</ReqValue>
							</ReqItem>
							<ReqItem>
								<ReqLabel>Lizenz</ReqLabel>
								<ReqValue>GPL v2</ReqValue>
							</ReqItem>
						</ReqGrid>
					</SectionInner>
				</Section>

				<FinalCTA />
			</PageContent>
			<Footer />
		</div>
	);
};

export default Flinkform;

/* ── Hero (hell) ── */

const PageContent = styled.main`
	flex-grow: 1;
`;

const HeroWrapper = styled.div`
	background: #fbfbfd;
	width: 100%;
`;

const GradientDivider = styled.div`
	width: 100%;
	height: 8px;
	background: linear-gradient(
		90deg,
		#ea2b1f,
		#ff3c6f,
		#ff4fdd,
		#7e56ff,
		#00b2ff
	);
`;

const Hero = styled.section`
	max-width: calc(1200px + 8rem);
	width: 100%;
	margin: 0 auto;
	padding: 2rem 4rem 4rem;
	padding-top: 140px;
	display: flex;
	flex-direction: column;
	gap: 1rem;

	@media screen and (max-width: 768px) {
		padding: 2rem 1.5rem 3rem;
		padding-top: 120px;
	}
`;

const Breadcrumb = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	font-size: 0.85rem;
	color: #888;
	margin-bottom: 0.5rem;

	span {
		color: #666;
	}
`;

const BreadcrumbLink = styled(Link)`
	color: #888;
	text-decoration: none;
	transition: color 0.2s ease;

	&:hover {
		color: #111;
	}
`;

const HeroIconRow = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
`;

const HeroIcon = styled.img`
	width: 7rem;
	height: 7rem;
`;

const Eyebrow = styled.span`
	display: inline-block;
	padding: 0.28rem 0.85rem;
	font-size: 0.75rem;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 0.12em;
	color: #fff;
	border-radius: 999px;
	background: linear-gradient(
		135deg,
		#ea2b1f,
		#ff3c6f,
		#ff4fdd,
		#7e56ff,
		#00b2ff
	);
`;

const Title = styled.h1`
	font-size: 3.5rem;
	font-weight: 800;
	color: #111;
	line-height: 1.1;
	margin: 0;

	@media screen and (max-width: 768px) {
		font-size: 2.5rem;
	}
`;

const Tagline = styled.p`
	font-size: 1.35rem;
	font-weight: 600;
	background: linear-gradient(135deg, #ea2b1f, #ff3c6f, #ff4fdd);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
	margin: 0;
`;

const Intro = styled.p`
	font-size: 1.15rem;
	line-height: 1.7;
	color: #444;
	max-width: 620px;
	margin: 0;

	@media screen and (max-width: 768px) {
		font-size: 1.05rem;
	}
`;

const HeroActions = styled.div`
	display: flex;
	gap: 1rem;
	margin-top: 0.5rem;
	flex-wrap: wrap;
`;

const PrimaryButton = styled.a`
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
	padding: 0.75rem 1.5rem;
	background: #111;
	color: #fff;
	font-size: 0.95rem;
	font-weight: 600;
	border-radius: 999px;
	text-decoration: none;
	transition: all 0.2s ease;

	&:hover {
		background: #333;
		transform: translateY(-2px);
	}
`;

const SecondaryButton = styled.a`
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
	padding: 0.75rem 1.5rem;
	background: transparent;
	color: #111;
	font-size: 0.95rem;
	font-weight: 600;
	border: 1.5px solid #ddd;
	border-radius: 999px;
	text-decoration: none;
	transition: all 0.2s ease;

	&:hover {
		border-color: #999;
		transform: translateY(-2px);
	}
`;

/* ── Sections (dunkel) ── */

const Section = styled.section`
	width: 100%;
	padding: 5rem 4rem;

	@media screen and (max-width: 768px) {
		padding: 3rem 1.5rem;
	}
`;

const SectionInner = styled.div`
	max-width: calc(1200px + 8rem);
	margin: 0 auto;
`;

const SectionHeading = styled.h2`
	font-size: 2rem;
	font-weight: 700;
	color: ${(props) => props.theme.text};
	margin: 0 0 1rem;

	@media screen and (max-width: 768px) {
		font-size: 1.6rem;
	}
`;

const SectionSub = styled.p`
	font-size: 1.05rem;
	color: ${(props) => props.theme.textSecondary};
	margin: 0 0 2.5rem;
	max-width: 600px;
`;

/* ── Pillars ── */

const PillarGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1.5rem;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

const PillarCard = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	padding: 2rem;
	background: ${(props) => props.theme.bgCard};
	border: 1px solid ${(props) => props.theme.borderCard};
	border-radius: 1.25rem;
	transition: border-color 0.2s ease, transform 0.2s ease;

	&:hover {
		border-color: ${(props) => props.theme.borderCardHover};
		transform: translateY(-3px);
	}
`;

const PillarIcon = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2.75rem;
	height: 2.75rem;
	border-radius: 0.75rem;
	font-size: 1.2rem;
	color: #fff;
	background: ${(props) => props.theme.gradient};
`;

const PillarTitle = styled.h3`
	font-size: 1.15rem;
	font-weight: 700;
	color: ${(props) => props.theme.text};
	margin: 0;
`;

const PillarDesc = styled.p`
	font-size: 0.9rem;
	line-height: 1.65;
	color: ${(props) => props.theme.textSecondary};
	margin: 0;
`;

/* ── Features ── */

const FeatureList = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem;

	@media (max-width: 700px) {
		grid-template-columns: 1fr;
	}
`;

const FeatureItem = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 0.75rem;
	font-size: 0.95rem;
	color: ${(props) => props.theme.textSecondary};
	line-height: 1.5;
`;

const FeatureIcon = styled.span`
	color: ${(props) => props.theme.accent};
	font-size: 0.75rem;
	margin-top: 0.3rem;
	flex-shrink: 0;
`;

/* ── Vergleichstabelle ── */

const CompareTable = styled.table`
	width: 100%;
	border-collapse: collapse;
	margin-top: 1.5rem;
`;

const Th = styled.th`
	text-align: left;
	padding: 1rem 1.25rem;
	font-size: 0.85rem;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 0.06em;
	color: ${(props) => props.theme.textMuted};
	border-bottom: 1px solid ${(props) => props.theme.borderCard};
`;

const ThHighlight = styled(Th)`
	color: ${(props) => props.theme.accent};
`;

const Td = styled.td`
	padding: 1rem 1.25rem;
	font-size: 0.95rem;
	color: ${(props) => props.theme.textSecondary};
	border-bottom: 1px solid ${(props) => props.theme.borderCard};
`;

const TdHighlight = styled(Td)`
	color: ${(props) => props.theme.text};
	font-weight: 600;
`;

/* ── Voraussetzungen ── */

const ReqGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 1.5rem;
	margin-top: 1.5rem;

	@media (max-width: 700px) {
		grid-template-columns: repeat(2, 1fr);
	}
`;

const ReqItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
	padding: 1.5rem;
	background: ${(props) => props.theme.bgCard};
	border: 1px solid ${(props) => props.theme.borderCard};
	border-radius: 1rem;
	text-align: center;
`;

const ReqLabel = styled.span`
	font-size: 0.8rem;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 0.08em;
	color: ${(props) => props.theme.textMuted};
`;

const ReqValue = styled.span`
	font-size: 1.25rem;
	font-weight: 700;
	color: ${(props) => props.theme.text};
`;
