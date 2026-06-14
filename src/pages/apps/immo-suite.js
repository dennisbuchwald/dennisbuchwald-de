import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import FinalCTA from "../../../components/FinalCTA";
import {
	FaGithub,
	FaCheck,
	FaTimes,
	FaSync,
	FaSearch,
	FaFileAlt,
	FaMapMarkerAlt,
	FaCalculator,
	FaWhatsapp,
	FaShieldAlt,
	FaChartBar,
} from "react-icons/fa";

const SITE_URL = "https://www.dennisbuchwald.de";

const pillars = [
	{
		icon: <FaSync />,
		title: "OpenImmo-Autoimport",
		desc: "OnOffice, FlowFact, JustImmo: ZIP oder XML hochladen, der Rest passiert automatisch. Stündliche Synchronisation per WP-Cron. Anlegen, aktualisieren, archivieren, löschen.",
	},
	{
		icon: <FaCalculator />,
		title: "Kaufnebenkosten und Finanzierung",
		desc: "Grunderwerbsteuer nach Bundesland (PLZ-basiert), Notar, Grundbuch, Provision. Plus interaktiver Finanzierungsrechner mit Eigenkapital, Zinssatz und Tilgung. Hält Interessenten auf der Seite und qualifiziert Leads.",
	},
	{
		icon: <FaChartBar />,
		title: "Infrastruktur-Score",
		desc: "Walk-Score-artiges Bewertungssystem: ÖPNV, Shopping, Bildung, Gastronomie, Verkehr. SVG-Ring mit 5 gewichteten Kategorien und aufklappbaren Entfernungsdetails.",
	},
	{
		icon: <FaFileAlt />,
		title: "Exposé-PDF zum Drucken",
		desc: "Professionelles A4-Exposé als druckbare Standalone-Seite. Cover, Daten, Features, Lage, Energieausweis, Galerie, Grundrisse, Kontakt. Kein externes Tool nötig.",
	},
	{
		icon: <FaSearch />,
		title: "AJAX-Filter und drei Ansichten",
		desc: "Grid, Liste und Kartenansicht mit Live-Switcher. Filterbar mit Autocomplete, Preisslider mit Histogramm und aktiven Filter-Chips. Ohne Page Reload.",
	},
	{
		icon: <FaWhatsapp />,
		title: "WhatsApp-Integration",
		desc: "Sidebar-Button, Floating-Button, Mobile Sticky Bar und Modal-Redirect. Vorgefüllte Nachricht mit Platzhaltern. Nicht aufgesetzt, sondern durchdacht integriert.",
	},
];

const wowFeatures = [
	{
		title: "Kontaktmodal, das Leads qualifiziert",
		desc: "Kein langweiliges Formular. Erst wählt der Interessent seinen Intent (Besichtigung, Infos, Preisauskunft, Rückruf), dann kommen passende Felder. Objekt-Preview im Header, Fortschrittsbalken, animierter Erfolgsscreen mit Ansprechpartner.",
	},
	{
		title: "Energiekostenrechner",
		desc: "Was kostet mich das Heizen? Automatische Schätzung aus dem Energieausweis, 9 Energieträger, konfigurierbarer Preis-Slider. Hält Interessenten länger auf der Seite und erzeugt Vertrauen.",
	},
	{
		title: "Preis-pro-qm-Vergleich",
		desc: "Kaufpreis geteilt durch Wohnfläche, verglichen mit dem Standort-Durchschnitt aus dem eigenen Portfolio. Zeigt dem Interessenten sofort, ob der Preis fair ist. Schafft Transparenz, baut Vertrauen auf.",
	},
	{
		title: "View Transitions",
		desc: "Das Objektbild morpht nahtlos von der Listenansicht zur Detailseite. Modernes UI-Pattern, das professionelle Websites von 08/15-Plugins unterscheidet.",
	},
];

const allFeatures = [
	"Galerie-Slider mit Thumbnails, Lightbox und Image Counter",
	"Sticky Section-Navigation mit Scroll-Spy und Lesefortschritt",
	"Merkliste per localStorage (DSGVO-konform, ohne Accounts)",
	"Energieausweis-Skala mit visueller Pfeilanzeige (EnEV A+ bis H)",
	"Referenzen-System: Verkauft, Reserviert, Referenz mit Statusschutz",
	"Schema.org JSON-LD (RealEstateListing, BreadcrumbList, RealEstateAgent)",
	"Open Graph und Twitter Cards aus Objektdaten generiert",
	"Conditional Asset Loading (CSS/JS nur auf Immobilienseiten)",
	"Responsive Images mit srcset, fetchpriority, Lazy Loading",
	"Globale Du/Sie-Umschaltung für alle Texte im gesamten Plugin",
	"7-Tab-Property-Editor im Backend (Basis, Preise, Flächen, Ausstattung, Technik, Kontakt, Import)",
	"Gutenberg-Blöcke: Immobilien-Grid und Referenzen",
	"Geo-Landingpages über Shortcodes mit Orts-Parameter",
	"OpenStreetMap via Leaflet (kein Google API-Key nötig)",
	"Floating Action Buttons: Zurück, Teilen, Exposé, Grundrisse",
	"Ähnliche Objekte mit 3-stufiger Fallback-Logik",
	"Honeypot und Rate Limiting für alle Formulare",
	"25+ Customizer-Optionen für Design und Sichtbarkeit",
];

const compareRows = [
	{ feature: "OpenImmo-XML-Import", immo: true, wpImmo: true, immonex: true, frymo: true },
	{ feature: "Kaufnebenkostenrechner (PLZ)", immo: true, wpImmo: false, immonex: false, frymo: false },
	{ feature: "Finanzierungsrechner", immo: true, wpImmo: false, immonex: false, frymo: false },
	{ feature: "Infrastruktur-Score", immo: true, wpImmo: false, immonex: false, frymo: false },
	{ feature: "Energiekostenrechner", immo: true, wpImmo: false, immonex: false, frymo: false },
	{ feature: "Preis/qm-Vergleich", immo: true, wpImmo: false, immonex: false, frymo: false },
	{ feature: "PDF-Exposé (druckfertig)", immo: true, wpImmo: "Ab PLUS", immonex: "Add-on", frymo: false },
	{ feature: "Multi-Step Kontaktmodal", immo: true, wpImmo: false, immonex: false, frymo: false },
	{ feature: "WhatsApp-Integration", immo: true, wpImmo: false, immonex: false, frymo: false },
	{ feature: "Karte ohne API-Key", immo: true, wpImmo: false, immonex: "Teilweise", frymo: false },
	{ feature: "Merkliste (DSGVO-safe)", immo: true, wpImmo: true, immonex: false, frymo: false },
	{ feature: "Schema.org JSON-LD", immo: true, wpImmo: false, immonex: true, frymo: true },
	{ feature: "Gutenberg-Blöcke nativ", immo: true, wpImmo: false, immonex: false, frymo: false },
	{ feature: "Kein PageBuilder nötig", immo: true, wpImmo: false, immonex: true, frymo: false },
	{ feature: "Unbegrenzte Objekte", immo: true, wpImmo: false, immonex: true, frymo: "Ab Pro" },
	{ feature: "Preis", immo: "499 EUR/J.", wpImmo: "Ab 649 EUR", immonex: "Auf Anfrage", frymo: "Ab 348 EUR/J." },
];

const immoSuiteSchema = {
	"@context": "https://schema.org",
	"@type": "SoftwareApplication",
	name: "Immo Suite",
	description:
		"Immobilien-Komplettlösung fuer WordPress mit OpenImmo-Import, Finanzrechner, Infrastruktur-Score und Exposé-PDF.",
	applicationCategory: "Plugin",
	operatingSystem: "WordPress",
	url: `${SITE_URL}/apps/immo-suite`,
	offers: {
		"@type": "Offer",
		price: "499",
		priceCurrency: "EUR",
	},
	author: {
		"@type": "Person",
		name: "Dennis Buchwald",
		url: SITE_URL,
	},
};

const CellValue = ({ value, highlight }) => {
	if (value === true)
		return <CellCheck $highlight={highlight}><FaCheck /></CellCheck>;
	if (value === false)
		return <CellCross><FaTimes /></CellCross>;
	return <CellText $highlight={highlight}>{value}</CellText>;
};

const ImmoSuite = () => {
	return (
		<div id="top">
			<Head>
				<title>
					Immo Suite - Immobilien-Plugin fuer WordPress mit OpenImmo, Finanzrechner und Exposé
				</title>
				<meta
					name="description"
					content="Immo Suite: die Immobilien-Komplettlösung fuer WordPress. OpenImmo-Autoimport, Kaufnebenkostenrechner, Infrastruktur-Score, PDF-Exposé, AJAX-Filter, Kartenansicht. Ab 499 EUR."
				/>
				<link rel="canonical" href={`${SITE_URL}/apps/immo-suite`} />
				<meta
					property="og:title"
					content="Immo Suite - Immobilien-Plugin fuer WordPress"
				/>
				<meta
					property="og:description"
					content="OpenImmo-Import, Finanzrechner, Infrastruktur-Score, PDF-Exposé. Die Immobilien-Komplettlösung fuer WordPress."
				/>
				<meta property="og:url" content={`${SITE_URL}/apps/immo-suite`} />
				<meta property="og:type" content="website" />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(immoSuiteSchema),
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
							<span>Immo Suite</span>
						</Breadcrumb>
						<HeroIconRow>
							<HeroIcon
								src="/apps/icons/immosuite-app.svg"
								alt="Immo Suite"
							/>
							<Eyebrow>WordPress-Plugin</Eyebrow>
						</HeroIconRow>
						<Title>Immo Suite</Title>
						<Tagline>
							Mehr Anfragen pro Objekt. Nicht nur eine hübsche Listenansicht.
						</Tagline>
						<Intro>
							Andere Immobilien-Plugins zeigen deine Objekte auf einer
							Archivseite. Die Immo Suite macht aus jeder Detailseite
							eine Verkaufsmaschine: Finanzierungsrechner, Infrastruktur-Score,
							Energiekosten, Kaufnebenkosten, druckfertiges Exposé und ein
							Kontaktmodal, das Leads qualifiziert. Dazu OpenImmo-Autoimport,
							AJAX-Filter, Kartenansicht. Kein PageBuilder, kein Google-API-Key,
							keine Objektlimits.
						</Intro>
						<HeroActions>
							<PriceBadge>499 EUR / Jahr</PriceBadge>
							<PrimaryButton
								href="https://github.com/dbwmedia/Immo-Suite"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaGithub /> GitHub
							</PrimaryButton>
						</HeroActions>
					</Hero>
					<GradientDivider />
				</HeroWrapper>

				{/* 6 Säulen */}
				<Section>
					<PillarGrid>
						{pillars.map((p) => (
							<PillarCard key={p.title}>
								<PillarIcon>{p.icon}</PillarIcon>
								<PillarTitle>{p.title}</PillarTitle>
								<PillarDesc>{p.desc}</PillarDesc>
							</PillarCard>
						))}
					</PillarGrid>
				</Section>

				{/* Wow-Features */}
				<Section>
					<SectionHeading>Was kein anderes Plugin kann</SectionHeading>
					<SectionSub>
						WP-ImmoMakler kostet bis zu 7.999 EUR und hat keines dieser
						Features. Frymo auch nicht. immonex auch nicht.
					</SectionSub>
					<WowGrid>
						{wowFeatures.map((f) => (
							<WowCard key={f.title}>
								<WowTitle>{f.title}</WowTitle>
								<WowDesc>{f.desc}</WowDesc>
							</WowCard>
						))}
					</WowGrid>
				</Section>

				{/* Alle Features */}
				<Section>
					<SectionHeading>Alles drin, was ein Makler braucht</SectionHeading>
					<FeatureList>
						{allFeatures.map((item) => (
							<FeatureItem key={item}>
								<FeatureIcon>
									<FaCheck />
								</FeatureIcon>
								<span>{item}</span>
							</FeatureItem>
						))}
					</FeatureList>
				</Section>

				{/* Vergleichstabelle */}
				<Section>
					<SectionHeading>
						Immo Suite vs. WP-ImmoMakler, immonex und Frymo
					</SectionHeading>
					<CompareWrapper>
						<CompareTable>
							<thead>
								<tr>
									<Th></Th>
									<ThHighlight>Immo Suite</ThHighlight>
									<Th>WP-ImmoMakler</Th>
									<Th>immonex</Th>
									<Th>Frymo</Th>
								</tr>
							</thead>
							<tbody>
								{compareRows.map((row) => (
									<tr key={row.feature}>
										<TdFeature>{row.feature}</TdFeature>
										<TdHighlight>
											<CellValue value={row.immo} highlight />
										</TdHighlight>
										<Td>
											<CellValue value={row.wpImmo} />
										</Td>
										<Td>
											<CellValue value={row.immonex} />
										</Td>
										<Td>
											<CellValue value={row.frymo} />
										</Td>
									</tr>
								))}
							</tbody>
						</CompareTable>
					</CompareWrapper>
				</Section>

				{/* Voraussetzungen */}
				<Section>
					<SectionHeading>Voraussetzungen</SectionHeading>
					<ReqGrid>
						<ReqItem>
							<ReqLabel>WordPress</ReqLabel>
							<ReqValue>6.4+</ReqValue>
						</ReqItem>
						<ReqItem>
							<ReqLabel>PHP</ReqLabel>
							<ReqValue>8.1+</ReqValue>
						</ReqItem>
						<ReqItem>
							<ReqLabel>Import</ReqLabel>
							<ReqValue>OpenImmo</ReqValue>
						</ReqItem>
						<ReqItem>
							<ReqLabel>Preis</ReqLabel>
							<ReqValue>499 EUR/J.</ReqValue>
						</ReqItem>
					</ReqGrid>
				</Section>

				<FinalCTA />
			</PageContent>
			<Footer />
		</div>
	);
};

export default ImmoSuite;

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
	padding-top: 160px;
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
	max-width: 640px;
	margin: 0;

	@media screen and (max-width: 768px) {
		font-size: 1.05rem;
	}
`;

const HeroActions = styled.div`
	display: flex;
	align-items: center;
	gap: 1rem;
	margin-top: 0.5rem;
	flex-wrap: wrap;
`;

const PriceBadge = styled.span`
	display: inline-flex;
	align-items: center;
	padding: 0.75rem 1.5rem;
	font-size: 1.1rem;
	font-weight: 800;
	color: #111;
	background: linear-gradient(135deg, rgba(234, 43, 31, 0.1), rgba(126, 86, 255, 0.1));
	border: 2px solid rgba(126, 86, 255, 0.3);
	border-radius: 999px;
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

/* ── Sections (dunkel) ── */

const Section = styled.section`
	max-width: calc(1200px + 8rem);
	width: 100%;
	margin: 0 auto;
	padding: 5rem 4rem;

	@media screen and (max-width: 768px) {
		padding: 3rem 1.5rem;
	}
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

/* ── Pillars (2x3 Grid) ── */

const PillarGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1.5rem;

	@media (max-width: 1024px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 600px) {
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

/* ── Wow Features (2x2 mit Gradient-Border) ── */

const WowGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1.5rem;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

const WowCard = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	padding: 2rem;
	background: ${(props) => props.theme.bgCard};
	border-radius: 1.25rem;
	border: 1px solid transparent;
	background-clip: padding-box;
	position: relative;

	&::before {
		content: "";
		position: absolute;
		inset: -1px;
		border-radius: 1.35rem;
		padding: 1px;
		background: linear-gradient(135deg, #ea2b1f, #ff3c6f, #ff4fdd, #7e56ff, #00b2ff);
		-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
		-webkit-mask-composite: xor;
		mask-composite: exclude;
		pointer-events: none;
	}
`;

const WowTitle = styled.h3`
	font-size: 1.15rem;
	font-weight: 700;
	color: ${(props) => props.theme.text};
	margin: 0;
`;

const WowDesc = styled.p`
	font-size: 0.9rem;
	line-height: 1.65;
	color: ${(props) => props.theme.textSecondary};
	margin: 0;
`;

/* ── Feature-Liste ── */

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

const CompareWrapper = styled.div`
	overflow-x: auto;
	margin-top: 1.5rem;
	border: 1px solid ${(props) => props.theme.borderCard};
	border-radius: 1.25rem;
`;

const CompareTable = styled.table`
	width: 100%;
	border-collapse: collapse;
	min-width: 700px;
`;

const Th = styled.th`
	text-align: center;
	padding: 1.25rem 1rem;
	font-size: 0.8rem;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 0.06em;
	color: ${(props) => props.theme.textMuted};
	border-bottom: 1px solid ${(props) => props.theme.borderCard};

	&:first-child {
		text-align: left;
		padding-left: 1.5rem;
	}
`;

const ThHighlight = styled(Th)`
	color: #fff;
	background: ${(props) => props.theme.accent};
`;

const Td = styled.td`
	text-align: center;
	padding: 1rem;
	font-size: 0.9rem;
	color: ${(props) => props.theme.textSecondary};
	border-bottom: 1px solid ${(props) => props.theme.borderCard};

	tr:last-child & {
		border-bottom: none;
	}
`;

const TdFeature = styled(Td)`
	text-align: left;
	padding-left: 1.5rem;
	font-weight: 500;
	color: ${(props) => props.theme.text};
`;

const TdHighlight = styled(Td)`
	background: rgba(126, 86, 255, 0.06);
`;

const CellCheck = styled.span`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 1.6rem;
	height: 1.6rem;
	border-radius: 50%;
	font-size: 0.7rem;
	color: #fff;
	background: ${(props) =>
		props.$highlight
			? "linear-gradient(135deg, #ea2b1f, #ff3c6f, #7e56ff)"
			: "#22c55e"};
`;

const CellCross = styled.span`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 1.6rem;
	height: 1.6rem;
	border-radius: 50%;
	font-size: 0.7rem;
	color: ${(props) => props.theme.textMuted};
	background: ${(props) => props.theme.bgCard};
	border: 1px solid ${(props) => props.theme.borderCard};
`;

const CellText = styled.span`
	font-size: 0.85rem;
	font-weight: ${(props) => (props.$highlight ? "700" : "400")};
	color: ${(props) =>
		props.$highlight ? props.theme.accent : props.theme.textSecondary};
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
