import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import FinalCTA from "../../../components/FinalCTA";
import { FaGithub, FaWordpress, FaCheck } from "react-icons/fa";

const SITE_URL = "https://www.dennisbuchwald.de";

const features = [
	{
		title: "Endlos-Loop ohne Ruckler",
		desc: "Nahtlose, unterbrechungsfreie Animation. Pausiert automatisch bei Hover und Touch.",
	},
	{
		title: "Mehrere Reihen",
		desc: "Bis zu 4 Reihen mit alternierenden Laufrichtungen und individuellen Geschwindigkeiten.",
	},
	{
		title: "Capsule-Styling",
		desc: "Filled, Outline oder Glow-Effekt. Checkerboard-Pattern, individuelle Rundung und Padding.",
	},
	{
		title: "Ohne jQuery, lazy-loaded",
		desc: "Reines JavaScript, Lazy Loading für Bilder, width/height-Attribute gegen Layout Shift.",
	},
	{
		title: "Links pro Logo",
		desc: "Individuelle URL, Target, Rel-Attribute (nofollow, sponsored) und Title-Tooltips.",
	},
	{
		title: "Responsiv und barrierefrei",
		desc: "Responsive Logo-Höhe via CSS clamp(), Touch-Support, prefers-reduced-motion wird respektiert.",
	},
];

const highlights = [
	"Speed-Presets (Slow, Medium, Fast) oder Custom-Wert",
	"Logo-Spacing: Small, Medium, Large",
	"Logo-Höhe: 30-150 px mit responsive Skalierung",
	"Edge-Overlay mit konfigurierbarer Farbe",
	"Black-Logos-Modus für einheitliche Optik",
	"Kompatibel mit Elementor (Block Widget) und Divi (Block Module)",
	"Deutsch und Englisch",
	"Offiziell auf WordPress.org, 5-Sterne-Bewertung",
];

const logoSliderSchema = {
	"@context": "https://schema.org",
	"@type": "SoftwareApplication",
	name: "Logo Slider - Infinite Carousel Block",
	description:
		"Gutenberg-Block fuer endlos scrollende Logo-Carousels. Mehrreihig, responsiv, ohne jQuery.",
	applicationCategory: "Plugin",
	operatingSystem: "WordPress",
	url: `${SITE_URL}/apps/logo-slider`,
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

const LogoSlider = () => {
	return (
		<div id="top">
			<Head>
				<title>
					Logo Slider - Infinite Carousel Block fuer WordPress
				</title>
				<meta
					name="description"
					content="Gutenberg-Block fuer endlos scrollende Logo-Carousels: mehrreihig, responsive, ohne jQuery. Capsule-Styling, Glow-Effekte, Links pro Logo. Kostenlos auf WordPress.org."
				/>
				<link rel="canonical" href={`${SITE_URL}/apps/logo-slider`} />
				<meta
					property="og:title"
					content="Logo Slider - Infinite Carousel Block fuer WordPress"
				/>
				<meta
					property="og:description"
					content="Endlos scrollende Logo-Carousels als Gutenberg-Block. Ohne jQuery, responsive, mit Capsule-Styling. Kostenlos."
				/>
				<meta property="og:url" content={`${SITE_URL}/apps/logo-slider`} />
				<meta property="og:type" content="website" />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify(logoSliderSchema),
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
							<span>Logo Slider</span>
						</Breadcrumb>
						<HeroIconRow>
							<HeroIcon
								src="/apps/icons/logoslider-app.svg"
								alt="Logo Slider"
							/>
							<Eyebrow>WordPress.org Plugin</Eyebrow>
						</HeroIconRow>
						<Title>Logo Slider.</Title>
						<Tagline>Endlos laufende Logo-Carousels als Gutenberg-Block.</Tagline>
						<Intro>
							Kundenlogos, Partnerlogos, Zertifikate: einfach Bilder reinwerfen,
							Style wählen, fertig. Der Block läuft nahtlos im Loop, pausiert
							bei Hover und sieht auf jedem Gerät gut aus.
						</Intro>
						<HeroActions>
							<PrimaryButton
								href="https://wordpress.org/plugins/infinite-logo-carousel-block/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaWordpress /> Auf WordPress.org
							</PrimaryButton>
							<SecondaryButton
								href="https://github.com/dbwmedia/Infinite-Logo-Carousel-Block"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaGithub /> GitHub
							</SecondaryButton>
						</HeroActions>
					</Hero>
					<GradientDivider />
				</HeroWrapper>

				{/* Features */}
				<Section>
					<SectionInner>
						<SectionHeading>Was der Block kann</SectionHeading>
						<FeatureGrid>
							{features.map((feature) => (
								<FeatureCard key={feature.title}>
									<FeatureTitle>{feature.title}</FeatureTitle>
									<FeatureDesc>{feature.desc}</FeatureDesc>
								</FeatureCard>
							))}
						</FeatureGrid>
					</SectionInner>
				</Section>

				{/* Highlights */}
				<Section>
					<SectionInner>
						<SectionHeading>Und ausserdem</SectionHeading>
						<HighlightList>
							{highlights.map((item) => (
								<HighlightItem key={item}>
									<HighlightIcon>
										<FaCheck />
									</HighlightIcon>
									<span>{item}</span>
								</HighlightItem>
							))}
						</HighlightList>
					</SectionInner>
				</Section>

				{/* Voraussetzungen */}
				<Section>
					<SectionInner>
						<SectionHeading>Voraussetzungen</SectionHeading>
						<ReqGrid>
							<ReqItem>
								<ReqLabel>WordPress</ReqLabel>
								<ReqValue>5.8+</ReqValue>
							</ReqItem>
							<ReqItem>
								<ReqLabel>PHP</ReqLabel>
								<ReqValue>7.2+</ReqValue>
							</ReqItem>
							<ReqItem>
								<ReqLabel>Editor</ReqLabel>
								<ReqValue>Gutenberg</ReqValue>
							</ReqItem>
							<ReqItem>
								<ReqLabel>Preis</ReqLabel>
								<ReqValue>Kostenlos</ReqValue>
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

export default LogoSlider;

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
	margin: 0 0 2.5rem;

	@media screen and (max-width: 768px) {
		font-size: 1.6rem;
	}
`;

/* ── Feature Grid ── */

const FeatureGrid = styled.div`
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

const FeatureCard = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	padding: 1.75rem;
	background: ${(props) => props.theme.bgCard};
	border: 1px solid ${(props) => props.theme.borderCard};
	border-radius: 1.25rem;
	transition: border-color 0.2s ease, transform 0.2s ease;

	&:hover {
		border-color: ${(props) => props.theme.borderCardHover};
		transform: translateY(-3px);
	}
`;

const FeatureTitle = styled.h3`
	font-size: 1.05rem;
	font-weight: 700;
	color: ${(props) => props.theme.text};
	margin: 0;
`;

const FeatureDesc = styled.p`
	font-size: 0.9rem;
	line-height: 1.6;
	color: ${(props) => props.theme.textSecondary};
	margin: 0;
`;

/* ── Highlights ── */

const HighlightList = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1.25rem;

	@media (max-width: 700px) {
		grid-template-columns: 1fr;
	}
`;

const HighlightItem = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 0.75rem;
	font-size: 0.95rem;
	color: ${(props) => props.theme.textSecondary};
	line-height: 1.5;
`;

const HighlightIcon = styled.span`
	color: ${(props) => props.theme.accent};
	font-size: 0.75rem;
	margin-top: 0.3rem;
	flex-shrink: 0;
`;

/* ── Voraussetzungen ── */

const ReqGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 1.5rem;

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
