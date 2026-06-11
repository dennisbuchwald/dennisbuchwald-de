import styled from "styled-components";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AppsGrid from "../../components/AppsGrid";
import FinalCTA from "../../components/FinalCTA";
import { apps } from "../../components/appsData";

const SITE_URL = "https://www.dennisbuchwald.de";

const appsSchema = {
	"@context": "https://schema.org",
	"@type": "ItemList",
	name: "Apps & WordPress-Plugins von Dennis Buchwald",
	itemListElement: apps.map((app, index) => ({
		"@type": "ListItem",
		position: index + 1,
		item: {
			"@type": "SoftwareApplication",
			name: app.name,
			description: app.description,
			applicationCategory: app.schema.category,
			operatingSystem: "WordPress",
			url: app.links[0]?.href,
			author: {
				"@type": "Person",
				name: "Dennis Buchwald",
				url: SITE_URL,
			},
			...(app.schema.price !== undefined && {
				offers: {
					"@type": "Offer",
					price: app.schema.price,
					priceCurrency: "EUR",
				},
			}),
		},
	})),
};

const Apps = () => {
	return (
		<div id="top">
			<Head>
				<title>Apps & WordPress-Plugins - Dennis Buchwald</title>
				<meta
					name="description"
					content="Eigenentwicklungen von Dennis Buchwald: WordPress-Plugins wie PerForm Forms, die dbw Immo Suite und der Logo Slider Block. Kostenlos und kommerziell."
				/>
				<link rel="canonical" href={`${SITE_URL}/apps`} />
				<meta
					property="og:title"
					content="Apps & WordPress-Plugins - Dennis Buchwald"
				/>
				<meta
					property="og:description"
					content="Eigenentwicklungen von Dennis Buchwald: WordPress-Plugins wie PerForm Forms, die dbw Immo Suite und der Logo Slider Block."
				/>
				<meta property="og:url" content={`${SITE_URL}/apps`} />
				<meta
					name="twitter:title"
					content="Apps & WordPress-Plugins - Dennis Buchwald"
				/>
				<meta
					name="twitter:description"
					content="Eigenentwicklungen von Dennis Buchwald: WordPress-Plugins wie PerForm Forms, die dbw Immo Suite und der Logo Slider Block."
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(appsSchema) }}
				/>
			</Head>
			<Header />
			<PageContent>
				<HeroWrapper>
					<Hero>
						<Eyebrow>Eigenentwicklungen</Eyebrow>
						<Title>Apps & Plugins.</Title>
						<Intro>
							Jede dieser Apps ist aus einem echten Kundenproblem entstanden.
							Bei <strong>dbw media</strong> bauen wir individuelle Websites
							auf WordPress-Basis. Und wenn dieselbe Herausforderung immer
							wieder auftaucht, wird aus der Lösung ein Produkt. Vom
							kostenlosen WordPress.org-Plugin bis zur kommerziellen
							Komplettlösung.
						</Intro>
					</Hero>
					<GradientDivider />
				</HeroWrapper>
				<Section>
					<AppsGrid />
				</Section>
				<FinalCTA />
			</PageContent>
			<Footer />
		</div>
	);
};

export default Apps;

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

const Eyebrow = styled.span`
	display: inline-block;
	align-self: flex-start;
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
	font-size: 3rem;
	font-weight: 800;
	color: #111;
	line-height: 1.15;
	margin: 0;

	@media screen and (max-width: 768px) {
		font-size: 2.2rem;
	}
`;

const Intro = styled.p`
	font-size: 1.15rem;
	line-height: 1.7;
	color: #444;
	max-width: 620px;
	margin: 0;

	strong {
		color: #111;
		font-weight: 600;
	}

	@media screen and (max-width: 768px) {
		font-size: 1.05rem;
	}
`;

const Section = styled.section`
	max-width: calc(1200px + 8rem);
	width: 100%;
	margin: 0 auto;
	padding: 6rem 4rem 3rem;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 2.5rem;

	@media screen and (max-width: 768px) {
		padding: 4rem 1.5rem 2rem;
	}
`;

