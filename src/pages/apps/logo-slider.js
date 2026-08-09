import { useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import FinalCTA from "../../../components/FinalCTA";
import { FaWordpress, FaCheck, FaTimes } from "react-icons/fa";

const SITE_URL = "https://www.dennisbuchwald.de";

const features = [
	{
		title: "Endlos-Loop ohne Ruckler",
		desc: "Nahtlose, unterbrechungsfreie CSS-Animation. Pausiert bei Hover und Touch. Kein Flackern, kein Sprung.",
	},
	{
		title: "Text-Marquee-Block (neu in 2.0)",
		desc: "Zweiter Block inklusive: endlos laufender Text-Ticker für Bewertungen, Badges oder Angebote. Mit Trennzeichen, Farben und eigener Textgrösse.",
	},
	{
		title: "Mehrere Reihen",
		desc: "Bis zu 4 Reihen mit alternierenden Laufrichtungen. Für grosse Logo-Sammlungen.",
	},
	{
		title: "Capsule-Styling",
		desc: "Filled, Outline oder Glow-Effekt. Checkerboard-Pattern, individuelle Rundung und Padding.",
	},
	{
		title: "Ausgewogene Logo-Grössen",
		desc: "Breite Wortmarken und kompakte Logos wirken gleich stark: optionaler Flächen-Ausgleich statt starrer Einheitshöhe.",
	},
	{
		title: "Logo-Farbmodi",
		desc: "Original, Schwarz, Weiss, eigene Farbe oder Graustufen, die beim Hover wieder farbig werden.",
	},
	{
		title: "Mobile Logo-Höhe",
		desc: "Logos verkleinern sich auf dem Handy automatisch. Oder du setzt einen festen eigenen Wert für Bildschirme unter 600 px.",
	},
	{
		title: "Barrierefrei",
		desc: "Optionaler Pause-Button (WCAG 2.2.2), prefers-reduced-motion wird respektiert, Alt-Texte pro Logo, Touch-Support.",
	},
	{
		title: "Ohne jQuery",
		desc: "Reines JavaScript, width/height-Attribute gegen Layout-Shift. Kein jQuery-Ballast, gut für Core Web Vitals.",
	},
];

const highlights = [
	"Speed-Presets (Slow, Medium, Fast) oder Custom-Wert",
	"Logo-Höhe 30-150 px, auf dem Handy separat einstellbar",
	"Abstände bis Extra gross oder als freier Pixelwert (Logos und Reihen)",
	"Links pro Logo mit Target, Rel-Attributen und Tooltip",
	"Edge-Overlay mit konfigurierbarer Farbe",
	"Live-Vorschau direkt im Editor: du siehst das laufende Karussell beim Bearbeiten",
	"Breit- und Vollbreit-Ausrichtung im Editor",
	"Komplett auf Deutsch, inklusive Plugin-Beschreibung",
	"Kompatibel mit Elementor (Block Widget) und Divi (Block Module)",
	"5-Sterne-Bewertung auf WordPress.org",
	"Konsistente Scroll-Geschwindigkeit, egal wie viele Logos",
];

const compareRows = [
	{ feature: "Gutenberg-Block nativ", ours: true, gs: false, shaped: false, awesome: true },
	{ feature: "Endlos-Loop (CSS)", ours: true, gs: "jQuery", shaped: "jQuery", awesome: true },
	{ feature: "Multi-Row (bis 4)", ours: true, gs: false, shaped: false, awesome: false },
	{ feature: "Capsule-Styling + Glow", ours: true, gs: false, shaped: false, awesome: false },
	{ feature: "Text-Marquee-Block inklusive", ours: true, gs: false, shaped: false, awesome: false },
	{ feature: "Ausgewogene Logo-Grössen", ours: true, gs: false, shaped: false, awesome: false },
	{ feature: "Custom Color Tint", ours: true, gs: false, shaped: "Pro", awesome: false },
	{ feature: "Links pro Logo", ours: true, gs: true, shaped: true, awesome: true },
	{ feature: "jQuery-frei", ours: true, gs: false, shaped: false, awesome: true },
	{ feature: "Kein Shortcode nötig", ours: true, gs: false, shaped: false, awesome: true },
	{ feature: "Preis", ours: "Kostenlos", gs: "Free + Pro", shaped: "Free + Pro", awesome: "Kostenlos" },
];

const faqs = [
	{
		q: "Brauche ich Elementor oder einen Page Builder?",
		a: "Nein. Der Logo Slider ist ein nativer Gutenberg-Block. Du fügst ihn direkt im WordPress-Editor ein. Falls du Elementor oder Divi nutzt, funktioniert er trotzdem über das Block Widget bzw. Block Module.",
	},
	{
		q: "Wie viele Logos kann ich hinzufügen?",
		a: "So viele du willst. Die Scroll-Geschwindigkeit bleibt konstant, egal ob 5 oder 50 Logos.",
	},
	{
		q: "Kann ich die Logos verlinken?",
		a: "Ja. Jedes Logo kann eine eigene URL, ein Link-Target (neues Fenster/gleiches Fenster) und Rel-Attribute (nofollow, sponsored) bekommen.",
	},
	{
		q: "Wird die Seite langsamer?",
		a: "Nein. Der Slider lädt kein jQuery und setzt width/height-Attribute für alle Bilder gegen Layout-Shift. Gut für Core Web Vitals.",
	},
	{
		q: "Was ist der Text-Marquee-Block?",
		a: "Ein zweiter Block, der seit Version 2.0 dabei ist: ein endlos laufender Text-Ticker für Bewertungen, Badges oder Angebote, z.B. '★ 5,0 Google Bewertungen ★ Seit 2015 ★'. Mit Trennzeichen, Farben, Textgrösse und Laufrichtung.",
	},
	{
		q: "Manche Logos wirken viel grösser als andere. Was tun?",
		a: "Aktiviere 'Ausgewogene Logo-Grössen' im Logo-Grösse-Panel. Breite Wortmarken werden dann automatisch etwas kleiner, kompakte Logos etwas grösser dargestellt, sodass alle ähnlich stark wirken.",
	},
	{
		q: "Kann ich die Logo-Grösse fürs Handy separat einstellen?",
		a: "Ja. Standardmässig verkleinern sich die Logos auf kleinen Bildschirmen automatisch. Alternativ aktivierst du 'Eigene Höhe auf Smartphones' und setzt einen festen Wert für Bildschirme unter 600 px.",
	},
];

const logoSliderSchema = {
	"@context": "https://schema.org",
	"@type": "SoftwareApplication",
	name: "Logo Slider - Infinite Carousel & Marquee Block",
	description: "Gutenberg-Blocks fuer endlos scrollende Logo-Carousels und Text-Marquees. Mehrreihig, responsive, barrierefrei, ohne jQuery. Kostenlos auf WordPress.org.",
	applicationCategory: "Plugin",
	operatingSystem: "WordPress",
	softwareVersion: "2.0.0",
	url: `${SITE_URL}/apps/logo-slider`,
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

const LogoSlider = () => {
	return (
		<div id="top">
			<Head>
				<title>Logo Slider - Endlos-Carousel als Gutenberg-Block fuer WordPress</title>
				<meta
					name="description"
					content="Logo Slider: Gutenberg-Blocks fuer endlos scrollende Logo-Carousels und Text-Marquees. Mehrreihig, Capsule-Styling, ausgewogene Logo-Groessen, ohne jQuery. Kostenlos auf WordPress.org."
				/>
				<link rel="canonical" href={`${SITE_URL}/apps/logo-slider`} />
				<meta property="og:title" content="Logo Slider - Endlos-Carousel als Gutenberg-Block" />
				<meta property="og:description" content="Kundenlogos endlos scrollen lassen. Gutenberg-Block, ohne jQuery, kostenlos." />
				<meta property="og:url" content={`${SITE_URL}/apps/logo-slider`} />
				<meta property="og:type" content="website" />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify([logoSliderSchema, faqSchema]) }}
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
							<span>Logo Slider</span>
						</Breadcrumb>
						<HeroIconRow>
							<HeroIcon src="/apps/icons/logoslider-app.svg" alt="Logo Slider" />
							<Eyebrow>WordPress.org Plugin</Eyebrow>
						</HeroIconRow>
						<Title>
							Logo-Carousel direkt im Editor. Ohne Shortcode, ohne jQuery.
						</Title>
						<Intro>
							Wir haben jahrelang für Kundenprojekte Logo-Slider von Hand
							gebaut. Irgendwann dachten wir: es muss doch einen modernen,
							kostenlosen Gutenberg-Block dafür geben. Gab es nicht. Also
							haben wir ihn gebaut.
						</Intro>
						<HeroActions>
							<PrimaryButton
								href="https://wordpress.org/plugins/infinite-logo-carousel-block/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaWordpress /> Kostenlos installieren
							</PrimaryButton>
						</HeroActions>
					</Hero>
					<GradientDivider />
				</HeroWrapper>

				{/* ── PROBLEM ── */}
				<Section>
					<ProblemText>
						<SectionHeading>
							Logo-Slider sollten kein Projekt sein
						</SectionHeading>
						<ProblemDesc>
							Die meisten Logo-Carousel-Plugins nutzen Shortcodes,
							laden jQuery, und für Multi-Row oder Styling-Optionen
							musst du auf Pro upgraden. Oder du bastelst es mit
							Custom CSS zusammen. Beides kostet Zeit und Nerven.
						</ProblemDesc>
						<ProblemDesc>
							<strong>Der Logo Slider Block macht es einfach:</strong> Bilder
							reinwerfen, Style wählen, fertig. Ein Gutenberg-Block, der
							alles mitbringt. Kostenlos, ohne Pro-Upsell.
						</ProblemDesc>
					</ProblemText>
				</Section>

				{/* ── FEATURES ── */}
				<Section>
					<SectionHeading>Was der Block kann</SectionHeading>
					<FeatureGrid>
						{features.map((f) => (
							<FeatureCard key={f.title}>
								<FeatureTitle>{f.title}</FeatureTitle>
								<FeatureDesc>{f.desc}</FeatureDesc>
							</FeatureCard>
						))}
					</FeatureGrid>
				</Section>

				{/* ── HIGHLIGHTS ── */}
				<Section>
					<SectionHeading>Und ausserdem</SectionHeading>
					<HighlightList>
						{highlights.map((item) => (
							<HighlightItem key={item}>
								<HighlightIcon><FaCheck /></HighlightIcon>
								<span>{item}</span>
							</HighlightItem>
						))}
					</HighlightList>
				</Section>

				{/* ── VERGLEICH ── */}
				<Section>
					<SectionHeading>
						Logo Slider vs. GS Logo Slider, Logo Carousel und Co.
					</SectionHeading>
					<CompareWrapper>
						<CompareTable>
							<thead>
								<tr>
									<Th></Th>
									<ThHighlight>Logo Slider</ThHighlight>
									<Th>GS Logo Slider</Th>
									<Th>Logo Carousel</Th>
									<Th>Awesome Logo</Th>
								</tr>
							</thead>
							<tbody>
								{compareRows.map((row) => (
									<tr key={row.feature}>
										<TdFeature>{row.feature}</TdFeature>
										<TdHighlight><CellValue value={row.ours} highlight /></TdHighlight>
										<Td><CellValue value={row.gs} /></Td>
										<Td><CellValue value={row.shaped} /></Td>
										<Td><CellValue value={row.awesome} /></Td>
									</tr>
								))}
							</tbody>
						</CompareTable>
					</CompareWrapper>
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
						<ReqItem><ReqLabel>WordPress</ReqLabel><ReqValue>6.0+</ReqValue></ReqItem>
						<ReqItem><ReqLabel>PHP</ReqLabel><ReqValue>7.2+</ReqValue></ReqItem>
						<ReqItem><ReqLabel>Editor</ReqLabel><ReqValue>Gutenberg</ReqValue></ReqItem>
						<ReqItem><ReqLabel>Preis</ReqLabel><ReqValue>Kostenlos</ReqValue></ReqItem>
					</ReqGrid>
				</Section>

				<FinalCTA />
			</PageContent>
			<Footer />
		</div>
	);
};

export default LogoSlider;

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
	font-size: 2.75rem; font-weight: 800; color: #111; line-height: 1.15; max-width: 700px; margin: 0;
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

const FeatureTitle = styled.h3` font-size: 1.05rem; font-weight: 700; color: ${(p) => p.theme.text}; margin: 0; `;
const FeatureDesc = styled.p` font-size: 0.9rem; line-height: 1.6; color: ${(p) => p.theme.textSecondary}; margin: 0; `;

const HighlightList = styled.div`
	display: grid; grid-template-columns: repeat(2, 1fr); gap: 1.25rem;
	@media (max-width: 700px) { grid-template-columns: 1fr; }
`;

const HighlightItem = styled.div`
	display: flex; align-items: flex-start; gap: 0.75rem; font-size: 0.95rem;
	color: ${(p) => p.theme.textSecondary}; line-height: 1.5;
`;

const HighlightIcon = styled.span` color: ${(p) => p.theme.accent}; font-size: 0.75rem; margin-top: 0.3rem; flex-shrink: 0; `;

const CompareWrapper = styled.div`
	overflow-x: auto; margin-top: 1.5rem;
	border: 1px solid ${(p) => p.theme.borderCard}; border-radius: 1.25rem;
`;

const CompareTable = styled.table` width: 100%; border-collapse: collapse; min-width: 640px; `;

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
	max-height: ${(p) => (p.$open ? "200px" : "0")}; overflow: hidden; transition: max-height 0.3s ease;
`;

const AccordionText = styled.p`
	font-size: 0.95rem; line-height: 1.65; color: ${(p) => p.theme.textSecondary}; margin: 0; padding-bottom: 1.25rem;
`;

const ReqGrid = styled.div`
	display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; margin-top: 1.5rem;
	@media (max-width: 700px) { grid-template-columns: repeat(2, 1fr); }
`;

const ReqItem = styled.div`
	display: flex; flex-direction: column; gap: 0.25rem; padding: 1.5rem;
	background: ${(p) => p.theme.bgCard}; border: 1px solid ${(p) => p.theme.borderCard};
	border-radius: 1rem; text-align: center;
`;

const ReqLabel = styled.span` font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: ${(p) => p.theme.textMuted}; `;
const ReqValue = styled.span` font-size: 1.25rem; font-weight: 700; color: ${(p) => p.theme.text}; `;
