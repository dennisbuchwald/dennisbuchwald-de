import { useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import FinalCTA from "../../../components/FinalCTA";
import {
	FaWordpress,
	FaCheck,
	FaTimes,
	FaShieldAlt,
	FaCubes,
	FaBolt,
	FaUniversalAccess,
	FaPuzzlePiece,
	FaInbox,
} from "react-icons/fa";

const SITE_URL = "https://www.dennisbuchwald.de";

const pluginStack = [
	"Contact Form 7",
	"Flamingo (Einreichungen speichern)",
	"CF7 Conditional Fields",
	"CF7 Multi-Step Forms",
	"WP Mail SMTP",
	"reCAPTCHA-Plugin",
];

const pillars = [
	{
		icon: <FaPuzzlePiece />,
		title: "Ein Plugin statt sechs",
		desc: "Multi-Step, bedingte Logik, Spam-Schutz, Submissions-Dashboard, E-Mail-Benachrichtigungen: alles eingebaut. Keine Add-ons, keine Kompatibilitätsprobleme.",
	},
	{
		icon: <FaCubes />,
		title: "Nativ im Block-Editor",
		desc: "Jedes Feld ist ein Gutenberg-Block. Kein separater Formular-Builder, kein Shortcode. Flinkform erbt Farben, Typografie und Abstände direkt aus deinem Theme.",
	},
	{
		icon: <FaShieldAlt />,
		title: "DSGVO ohne Kompromisse",
		desc: "Spam-Schutz läuft komplett auf deinem Server. Kein reCAPTCHA, kein Akismet, keine IP-Speicherung. Einwilligungsfeld, automatische Datenlöschung und WordPress-Privacy-Tools sind eingebaut.",
	},
	{
		icon: <FaBolt />,
		title: "Unter 15 KB, ohne jQuery",
		desc: "Das gesamte Frontend-JavaScript bleibt unter 15 KB gzipped. Kein jQuery-Ballast. Server-Side Rendering sorgt dafür, dass Formulare sofort sichtbar sind.",
	},
	{
		icon: <FaInbox />,
		title: "Submissions-Dashboard",
		desc: "Alle Einreichungen direkt in WordPress: Suche, Filter, Sortierung, Bulk-Aktionen, gelesen/ungelesen. Kein separates Plugin, kein Flamingo.",
	},
	{
		icon: <FaUniversalAccess />,
		title: "Barrierefrei (WCAG 2.1 AA)",
		desc: "Volle Tastaturnavigation, Screenreader-Support, Fokus-Management bei Multi-Step. Respektiert prefers-reduced-motion.",
	},
];

const features = [
	"13 Feldtypen: Text, E-Mail, Textarea, Nummer, Datum, URL, Telefon, Select, Radio, Checkbox, Toggle, Hidden, Einwilligung",
	"Multi-Step-Formulare mit Fortschrittsanzeige und Step-Skipping",
	"Bedingte Logik: Felder und Steps ein-/ausblenden, Submit-Button sperren",
	"Spam-Schutz: Honeypot + Time-Check + Proof-of-Work",
	"Admin- und Bestätigungs-Mails mit Merge-Tags",
	"Automatische Datenlöschung nach konfigurierbarer Aufbewahrungsfrist",
	"Datenexport und Datenlöschung über WordPress-Privacy-Tools",
	"Theme-aware Styling: 4 Feld-Styles, Label-Position, Button-Style",
	"Redirect nach Absenden mit Conversion-Tracking (GA4, Meta Pixel)",
	"Gebaut mit der WordPress Interactivity API",
];

const compareRows = [
	{ feature: "Multi-Step (kostenlos)", flinkform: true, cf7: false, wpforms: false, gravity: false, fluent: false },
	{ feature: "Bedingte Logik (kostenlos)", flinkform: true, cf7: false, wpforms: false, gravity: false, fluent: true },
	{ feature: "Submissions-Dashboard (kostenlos)", flinkform: true, cf7: false, wpforms: false, gravity: false, fluent: true },
	{ feature: "Spam ohne ext. Dienst", flinkform: true, cf7: false, wpforms: false, gravity: false, fluent: false },
	{ feature: "Keine IP-Speicherung", flinkform: true, cf7: false, wpforms: false, gravity: false, fluent: false },
	{ feature: "Block-Editor nativ", flinkform: true, cf7: false, wpforms: false, gravity: false, fluent: false },
	{ feature: "theme.json Support", flinkform: true, cf7: false, wpforms: false, gravity: false, fluent: false },
	{ feature: "jQuery-frei", flinkform: true, cf7: false, wpforms: false, gravity: false, fluent: true },
	{ feature: "Frontend unter 15 KB", flinkform: true, cf7: false, wpforms: false, gravity: false, fluent: false },
	{ feature: "Aktive Weiterentwicklung", flinkform: true, cf7: "Feature Freeze", wpforms: true, gravity: true, fluent: true },
	{ feature: "Preis (alles inkl.)", flinkform: "Kostenlos", cf7: "Kostenlos*", wpforms: "Ab 49 $/J.", gravity: "Ab 59 $/J.", fluent: "Ab 63 $/J." },
];

const faqs = [
	{
		q: "Ist Flinkform wirklich komplett kostenlos?",
		a: "Ja. Multi-Step, bedingte Logik, Submissions-Dashboard, Spam-Schutz: alles im Free Core. Keine künstlichen Limits, kein Crippled Trial.",
	},
	{
		q: "Warum nicht einfach Contact Form 7?",
		a: "Contact Form 7 ist seit 2026 im Feature Freeze. Version 6.2 ist die letzte Feature-Version. Für Multi-Step, bedingte Logik oder ein Submissions-Dashboard brauchst du bei CF7 drei bis vier zusätzliche Plugins. Flinkform hat das alles eingebaut.",
	},
	{
		q: "Was unterscheidet Flinkform von WPForms oder Gravity Forms?",
		a: "WPForms und Gravity Forms nutzen einen eigenen, separaten Formular-Builder. Flinkform lebt direkt im WordPress-Block-Editor. Ausserdem kosten Multi-Step und bedingte Logik bei WPForms ab 199 Dollar pro Jahr. Bei Flinkform ist das kostenlos.",
	},
	{
		q: "Brauche ich reCAPTCHA für den Spam-Schutz?",
		a: "Nein. Flinkform bringt einen eigenen Spam-Schutz mit, der komplett auf deinem Server läuft: Honeypot, Time-Check und Proof-of-Work. Keine externen Dienste, keine Cookie-Banner, keine Datenweitergabe.",
	},
	{
		q: "Kann ich meine Contact-Form-7-Formulare migrieren?",
		a: "Aktuell gibt es keinen automatischen Importer. Aber: ein einfaches Kontaktformular in Flinkform zu bauen dauert unter 5 Minuten. Du baust es direkt im Editor, wie einen normalen WordPress-Beitrag.",
	},
	{
		q: "Ist Flinkform DSGVO-konform?",
		a: "Ja. Kein reCAPTCHA, kein Akismet, keine IP-Speicherung, keine externen Dienste. Einwilligungsfeld, automatische Datenlöschung und WordPress-Privacy-Tools (Datenexport und Löschung) sind eingebaut.",
	},
];

const flinkformSchema = {
	"@context": "https://schema.org",
	"@type": "SoftwareApplication",
	name: "Flinkform",
	description:
		"Kostenloses WordPress Formular-Plugin mit Multi-Step, bedingter Logik und Spam-Schutz. Block-Editor nativ, DSGVO-konform, ohne jQuery.",
	applicationCategory: "Plugin",
	operatingSystem: "WordPress",
	url: `${SITE_URL}/apps/flinkform`,
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
			<AccordionTrigger onClick={() => setOpen(!open)} $open={open}>
				<span>{question}</span>
				<AccordionIcon $open={open}>+</AccordionIcon>
			</AccordionTrigger>
			<AccordionContent $open={open}>
				<AccordionText>{answer}</AccordionText>
			</AccordionContent>
		</AccordionWrapper>
	);
};

const Flinkform = () => {
	return (
		<div id="top">
			<Head>
				<title>
					Flinkform - Kostenloses WordPress Formular-Plugin mit Multi-Step und bedingter Logik
				</title>
				<meta
					name="description"
					content="Flinkform: WordPress Formular-Plugin mit Multi-Step, bedingter Logik und Spam-Schutz. Kostenlos. Block-Editor nativ, DSGVO-konform, ohne jQuery. Die Contact Form 7 Alternative fuer 2026."
				/>
				<link rel="canonical" href={`${SITE_URL}/apps/flinkform`} />
				<meta property="og:title" content="Flinkform - Kostenloses WordPress Formular-Plugin" />
				<meta property="og:description" content="Multi-Step, bedingte Logik, Spam-Schutz: alles kostenlos. Die moderne Alternative zu Contact Form 7." />
				<meta property="og:url" content={`${SITE_URL}/apps/flinkform`} />
				<meta property="og:type" content="website" />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify([flinkformSchema, faqSchema]) }}
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
							<span>Flinkform</span>
						</Breadcrumb>
						<HeroIconRow>
							<HeroIcon src="/apps/icons/flinkform-app.svg" alt="Flinkform" />
							<Eyebrow>WordPress Formular-Plugin</Eyebrow>
						</HeroIconRow>
						<Title>
							Ein Plugin statt sechs. Und das auch noch kostenlos.
						</Title>
						<Intro>
							Contact Form 7 ist im Feature Freeze. WPForms will 199 Dollar
							pro Jahr für Multi-Step. Gravity Forms hat kein Free-Tier.
							Flinkform hat Multi-Step, bedingte Logik, Submissions-Dashboard
							und Spam-Schutz in einem einzigen, kostenlosen Plugin. Nativ
							im Block-Editor gebaut.
						</Intro>
						<HeroActions>
							<PrimaryButton
								href="https://wordpress.org/plugins/flinkform/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaWordpress /> Bald auf WordPress.org
							</PrimaryButton>
						</HeroActions>
					</Hero>
					<GradientDivider />
				</HeroWrapper>

				{/* ── PROBLEM / STORY ── */}
				<Section>
					<ProblemText>
						<SectionHeading>
							Wie viele Plugins brauchst du für ein Kontaktformular?
						</SectionHeading>
						<ProblemDesc>
							Wir haben jahrelang WordPress-Websites gebaut. Für jedes
							Projekt dasselbe Spiel: Contact Form 7 installieren, dann
							Flamingo für die Einreichungen, ein Plugin für bedingte
							Felder, eins für Multi-Step, WP Mail SMTP für den
							E-Mail-Versand, und am Ende noch reCAPTCHA gegen Spam.
						</ProblemDesc>
						<PluginStack>
							{pluginStack.map((p, i) => (
								<PluginBadge key={p}>
									<PluginNum>{i + 1}</PluginNum>
									{p}
								</PluginBadge>
							))}
						</PluginStack>
						<ProblemDesc>
							Sechs Plugins für ein Kontaktformular. Sechs potenzielle
							Konflikte, sechs Update-Zyklen, sechs Datenschutzerklärungen.
							Und seit der WordCamp Asia 2026 steht fest: Contact Form 7
							bekommt keine neuen Features mehr. Version 6.2 ist die letzte.
						</ProblemDesc>
						<ProblemDesc>
							<strong>Also haben wir Flinkform gebaut.</strong> Ein Plugin,
							das alles kann, was du brauchst. Nativ im WordPress-Editor,
							nicht als aufgesetztes System. Und komplett kostenlos.
						</ProblemDesc>
					</ProblemText>
				</Section>

				{/* ── 6 PILLARS ── */}
				<Section>
					<SectionHeading>
						Was Flinkform anders macht
					</SectionHeading>
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

				{/* ── FEATURES ── */}
				<Section>
					<SectionHeading>Alles drin. Alles kostenlos.</SectionHeading>
					<SectionSub>
						Multi-Step und bedingte Logik kosten bei WPForms ab 199 Dollar
						pro Jahr. Bei Gravity Forms ab 59 Dollar. Bei Flinkform: null.
					</SectionSub>
					<FeatureList>
						{features.map((item) => (
							<FeatureItem key={item}>
								<FeatureIcon><FaCheck /></FeatureIcon>
								<span>{item}</span>
							</FeatureItem>
						))}
					</FeatureList>
				</Section>

				{/* ── VERGLEICH ── */}
				<Section>
					<SectionHeading>
						Flinkform vs. Contact Form 7, WPForms, Gravity Forms und Fluent Forms
					</SectionHeading>
					<CompareWrapper>
						<CompareTable>
							<thead>
								<tr>
									<Th></Th>
									<ThHighlight>Flinkform</ThHighlight>
									<Th>CF7</Th>
									<Th>WPForms</Th>
									<Th>Gravity</Th>
									<Th>Fluent</Th>
								</tr>
							</thead>
							<tbody>
								{compareRows.map((row) => (
									<tr key={row.feature}>
										<TdFeature>{row.feature}</TdFeature>
										<TdHighlight><CellValue value={row.flinkform} highlight /></TdHighlight>
										<Td><CellValue value={row.cf7} /></Td>
										<Td><CellValue value={row.wpforms} /></Td>
										<Td><CellValue value={row.gravity} /></Td>
										<Td><CellValue value={row.fluent} /></Td>
									</tr>
								))}
							</tbody>
						</CompareTable>
					</CompareWrapper>
					<CompareNote>
						* CF7 kostenlos, aber Multi-Step, Submissions und bedingte Logik
						erfordern 3-4 zusätzliche Plugins.
					</CompareNote>
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
						<ReqItem><ReqLabel>WordPress</ReqLabel><ReqValue>6.5+</ReqValue></ReqItem>
						<ReqItem><ReqLabel>PHP</ReqLabel><ReqValue>8.1+</ReqValue></ReqItem>
						<ReqItem><ReqLabel>Editor</ReqLabel><ReqValue>Gutenberg</ReqValue></ReqItem>
						<ReqItem><ReqLabel>Preis</ReqLabel><ReqValue>Kostenlos</ReqValue></ReqItem>
					</ReqGrid>
				</Section>

				{/* ── SEO KEYWORD SEKTIONEN ── */}
				<Section>
					<KeywordGrid>
						<KeywordItem>
							<KeywordTitle>Contact Form 7 Alternative</KeywordTitle>
							<KeywordText>
								Contact Form 7 ist seit 2026 im Feature Freeze. Keine
								neuen Features mehr, der Nachfolger kommt frühestens 2028.
								Flinkform bietet alles, was CF7 kann, plus Multi-Step,
								bedingte Logik und ein Submissions-Dashboard. In einem
								Plugin, nicht in sechs.
							</KeywordText>
						</KeywordItem>
						<KeywordItem>
							<KeywordTitle>WPForms Alternative</KeywordTitle>
							<KeywordText>
								WPForms verlangt ab 199 Dollar pro Jahr für Multi-Step
								und bedingte Logik. Die Free-Version speichert keine
								Einreichungen. Flinkform bietet alle diese Features
								kostenlos und ist nativ im Block-Editor gebaut.
							</KeywordText>
						</KeywordItem>
						<KeywordItem>
							<KeywordTitle>Gravity Forms Alternative</KeywordTitle>
							<KeywordText>
								Gravity Forms hat kein Free-Tier. Der günstigste Plan
								kostet 59 Dollar pro Jahr. Flinkform ist komplett
								kostenlos und deckt alle Standard-Features ab: Multi-Step,
								bedingte Logik, Submissions, Spam-Schutz.
							</KeywordText>
						</KeywordItem>
						<KeywordItem>
							<KeywordTitle>DSGVO-konformes Kontaktformular</KeywordTitle>
							<KeywordText>
								Die meisten Formular-Plugins setzen auf reCAPTCHA oder
								Akismet für den Spam-Schutz. Beides sendet Besucherdaten
								an Server in den USA. Flinkform schützt Formulare
								komplett auf deinem Server: Honeypot, Time-Check und
								Proof-of-Work. Ohne externen Dienst.
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

export default Flinkform;

/* ═══════════════════════════════════════════
   STYLES
   ═══════════════════════════════════════════ */

const PageContent = styled.main`
	flex-grow: 1;
`;

/* ── Hero (hell) ── */

const HeroWrapper = styled.div`
	background: #fbfbfd;
	width: 100%;
`;

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
	span { color: #666; }
`;

const BreadcrumbLink = styled(Link)`
	color: #888;
	text-decoration: none;
	&:hover { color: #111; }
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
	background: linear-gradient(135deg, #ea2b1f, #ff3c6f, #ff4fdd, #7e56ff, #00b2ff);
`;

const Title = styled.h1`
	font-size: 2.75rem;
	font-weight: 800;
	color: #111;
	line-height: 1.15;
	max-width: 700px;
	margin: 0;
	@media screen and (max-width: 768px) { font-size: 2rem; }
`;

const Intro = styled.p`
	font-size: 1.15rem;
	line-height: 1.7;
	color: #444;
	max-width: 640px;
	margin: 0;
	@media screen and (max-width: 768px) { font-size: 1.05rem; }
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
	padding: 0.85rem 1.75rem;
	background: #111;
	color: #fff;
	font-size: 1rem;
	font-weight: 600;
	border-radius: 999px;
	text-decoration: none;
	transition: all 0.2s ease;
	&:hover { background: #333; transform: translateY(-2px); }
`;

/* ── Sections (dunkel) ── */

const Section = styled.section`
	max-width: calc(1200px + 8rem);
	width: 100%;
	margin: 0 auto;
	padding: 5rem 4rem;
	@media screen and (max-width: 768px) { padding: 3rem 1.5rem; }
`;

const SectionHeading = styled.h2`
	font-size: 2rem;
	font-weight: 700;
	color: ${(p) => p.theme.text};
	margin: 0 0 1rem;
	@media screen and (max-width: 768px) { font-size: 1.5rem; }
`;

const SectionSub = styled.p`
	font-size: 1.05rem;
	color: ${(p) => p.theme.textSecondary};
	margin: 0 0 2.5rem;
	max-width: 620px;
`;

/* ── Problem / Story ── */

const ProblemText = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
	max-width: 700px;
`;

const ProblemDesc = styled.p`
	font-size: 1.05rem;
	line-height: 1.7;
	color: ${(p) => p.theme.textSecondary};
	margin: 0;
	strong { color: ${(p) => p.theme.text}; font-weight: 600; }
`;

const PluginStack = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 0.6rem;
	padding: 1.5rem 0;
`;

const PluginBadge = styled.span`
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
	padding: 0.5rem 1rem;
	font-size: 0.85rem;
	font-weight: 500;
	color: ${(p) => p.theme.textSecondary};
	background: ${(p) => p.theme.bgCard};
	border: 1px solid ${(p) => p.theme.borderCard};
	border-radius: 999px;
`;

const PluginNum = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 1.4rem;
	height: 1.4rem;
	border-radius: 50%;
	font-size: 0.7rem;
	font-weight: 700;
	color: #fff;
	background: ${(p) => p.theme.accent};
`;

/* ── Pillars (3x2) ── */

const PillarGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1.5rem;
	margin-top: 1.5rem;
	@media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
	@media (max-width: 600px) { grid-template-columns: 1fr; }
`;

const PillarCard = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	padding: 1.75rem;
	background: ${(p) => p.theme.bgCard};
	border: 1px solid ${(p) => p.theme.borderCard};
	border-radius: 1.25rem;
	transition: border-color 0.2s ease, transform 0.2s ease;
	&:hover { border-color: ${(p) => p.theme.borderCardHover}; transform: translateY(-3px); }
`;

const PillarIcon = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 0.65rem;
	font-size: 1.1rem;
	color: #fff;
	background: ${(p) => p.theme.gradient};
`;

const PillarTitle = styled.h3`
	font-size: 1.05rem;
	font-weight: 700;
	color: ${(p) => p.theme.text};
	margin: 0;
`;

const PillarDesc = styled.p`
	font-size: 0.85rem;
	line-height: 1.6;
	color: ${(p) => p.theme.textSecondary};
	margin: 0;
`;

/* ── Features ── */

const FeatureList = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem;
	@media (max-width: 700px) { grid-template-columns: 1fr; }
`;

const FeatureItem = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 0.75rem;
	font-size: 0.95rem;
	color: ${(p) => p.theme.textSecondary};
	line-height: 1.5;
`;

const FeatureIcon = styled.span`
	color: ${(p) => p.theme.accent};
	font-size: 0.75rem;
	margin-top: 0.3rem;
	flex-shrink: 0;
`;

/* ── Vergleichstabelle ── */

const CompareWrapper = styled.div`
	overflow-x: auto;
	margin-top: 1.5rem;
	border: 1px solid ${(p) => p.theme.borderCard};
	border-radius: 1.25rem;
`;

const CompareTable = styled.table`
	width: 100%;
	border-collapse: collapse;
	min-width: 720px;
`;

const Th = styled.th`
	text-align: center;
	padding: 1.25rem 0.75rem;
	font-size: 0.8rem;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 0.06em;
	color: ${(p) => p.theme.textMuted};
	border-bottom: 1px solid ${(p) => p.theme.borderCard};
	&:first-child { text-align: left; padding-left: 1.5rem; }
`;

const ThHighlight = styled(Th)`
	color: #fff;
	background: ${(p) => p.theme.accent};
`;

const Td = styled.td`
	text-align: center;
	padding: 0.85rem 0.75rem;
	font-size: 0.9rem;
	color: ${(p) => p.theme.textSecondary};
	border-bottom: 1px solid ${(p) => p.theme.borderCard};
	tr:last-child & { border-bottom: none; }
`;

const TdFeature = styled(Td)`
	text-align: left;
	padding-left: 1.5rem;
	font-weight: 500;
	color: ${(p) => p.theme.text};
`;

const TdHighlight = styled(Td)`
	background: rgba(126, 86, 255, 0.06);
`;

const CompareNote = styled.p`
	font-size: 0.8rem;
	color: ${(p) => p.theme.textMuted};
	margin: 1rem 0 0;
	font-style: italic;
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
	background: ${(p) => p.$highlight ? "linear-gradient(135deg, #ea2b1f, #ff3c6f, #7e56ff)" : "#22c55e"};
`;

const CellCross = styled.span`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 1.6rem;
	height: 1.6rem;
	border-radius: 50%;
	font-size: 0.7rem;
	color: ${(p) => p.theme.textMuted};
	background: ${(p) => p.theme.bgCard};
	border: 1px solid ${(p) => p.theme.borderCard};
`;

const CellText = styled.span`
	font-size: 0.8rem;
	font-weight: ${(p) => (p.$highlight ? "700" : "400")};
	color: ${(p) => p.$highlight ? p.theme.accent : p.theme.textSecondary};
`;

/* ── FAQ Akkordeon ── */

const FaqList = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 800px;
`;

const AccordionWrapper = styled.div`
	border-bottom: 1px solid ${(p) => p.theme.borderCard};
	&:first-child { border-top: 1px solid ${(p) => p.theme.borderCard}; }
`;

const AccordionTrigger = styled.button`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding: 1.25rem 0;
	background: none;
	border: none;
	cursor: pointer;
	text-align: left;
	font-size: 1.05rem;
	font-weight: 600;
	color: ${(p) => p.theme.text};
	transition: color 0.2s ease;
	&:hover { color: ${(p) => p.theme.accent}; }
`;

const AccordionIcon = styled.span`
	font-size: 1.4rem;
	font-weight: 300;
	color: ${(p) => p.theme.textMuted};
	transition: transform 0.3s ease;
	transform: ${(p) => (p.$open ? "rotate(45deg)" : "rotate(0)")};
	flex-shrink: 0;
	margin-left: 1rem;
`;

const AccordionContent = styled.div`
	max-height: ${(p) => (p.$open ? "300px" : "0")};
	overflow: hidden;
	transition: max-height 0.3s ease;
`;

const AccordionText = styled.p`
	font-size: 0.95rem;
	line-height: 1.65;
	color: ${(p) => p.theme.textSecondary};
	margin: 0;
	padding-bottom: 1.25rem;
`;

/* ── SEO Keyword Sektionen ── */

const KeywordGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1.5rem;
	@media (max-width: 768px) { grid-template-columns: 1fr; }
`;

const KeywordItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	padding: 1.75rem;
	background: ${(p) => p.theme.bgCard};
	border: 1px solid ${(p) => p.theme.borderCard};
	border-radius: 1rem;
`;

const KeywordTitle = styled.h3`
	font-size: 1.05rem;
	font-weight: 700;
	color: ${(p) => p.theme.text};
	margin: 0;
`;

const KeywordText = styled.p`
	font-size: 0.9rem;
	line-height: 1.6;
	color: ${(p) => p.theme.textSecondary};
	margin: 0;
`;

/* ── Voraussetzungen ── */

const ReqGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 1.5rem;
	margin-top: 1.5rem;
	@media (max-width: 700px) { grid-template-columns: repeat(2, 1fr); }
`;

const ReqItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
	padding: 1.5rem;
	background: ${(p) => p.theme.bgCard};
	border: 1px solid ${(p) => p.theme.borderCard};
	border-radius: 1rem;
	text-align: center;
`;

const ReqLabel = styled.span`
	font-size: 0.8rem;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 0.08em;
	color: ${(p) => p.theme.textMuted};
`;

const ReqValue = styled.span`
	font-size: 1.25rem;
	font-weight: 700;
	color: ${(p) => p.theme.text};
`;
