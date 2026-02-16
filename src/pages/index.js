import styled from "styled-components";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Start from "../../components/Start";
import UeberMich from "../../components/UeberMich";
import Projekte from "../../components/Projekte";
import Youtube from "../../components/Youtube";
import Kontakt from "../../components/Kontakt";

const Home = () => {
	return (
		<div id="top">
			<Head>
				<title>
					Dennis Buchwald – Webentwickler & Gründer dbw media | Heilbronn
				</title>
				<meta
					name="description"
					content="Dennis Buchwald – Webentwickler und Gründer von dbw media. Digitalagentur für Webdesign, SEO und Online-Marketing in Heilbronn."
				/>
				<link rel="canonical" href="https://www.dennisbuchwald.de" />
				<meta
					property="og:title"
					content="Dennis Buchwald – Webentwickler & Gründer dbw media"
				/>
				<meta
					property="og:description"
					content="Webentwickler und Gründer von dbw media. Digitalagentur für Webdesign, SEO und Online-Marketing in Heilbronn."
				/>
				<meta property="og:url" content="https://www.dennisbuchwald.de" />
				<meta
					name="twitter:title"
					content="Dennis Buchwald – Webentwickler & Gründer dbw media"
				/>
				<meta
					name="twitter:description"
					content="Webentwickler und Gründer von dbw media. Digitalagentur für Webdesign, SEO und Online-Marketing in Heilbronn."
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify({
							"@context": "https://schema.org",
							"@type": "Person",
							name: "Dennis Buchwald",
							url: "https://www.dennisbuchwald.de",
							jobTitle: "Webentwickler & Gründer",
							worksFor: {
								"@type": "Organization",
								name: "dbw media",
								url: "https://dbw-media.de",
							},
							address: {
								"@type": "PostalAddress",
								addressLocality: "Heilbronn",
								addressCountry: "DE",
							},
							sameAs: [
								"https://dbw-media.de",
								"https://github.com/dennisbuchwald",
								"https://www.linkedin.com/in/dennisbuchwald/",
								"https://www.youtube.com/@dennisbuchwald",
							],
						}),
					}}
				/>
			</Head>
			<Header />
			<PageContent>
				<HeroSection>
					<Start />
				</HeroSection>
				<Section>
					<UeberMich />
				</Section>
				<Section>
					<Projekte />
				</Section>
				<Section>
					<Youtube />
				</Section>
				<Section>
					<Kontakt />
				</Section>
			</PageContent>
			<Footer />
		</div>
	);
};

export default Home;

const PageContent = styled.main`
	flex-grow: 1;
`;

const HeroSection = styled.section`
	margin: 0 auto;
	padding: 2rem 4rem;
	padding-top: 120px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: 100vh;
	max-width: 1200px;

	@media screen and (max-width: 768px) {
		padding: 2rem 1.5rem;
		padding-top: 100px;
	}
`;

const Section = styled.section`
	margin: 0 auto;
	padding: 6rem 4rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	max-width: 1200px;

	@media screen and (max-width: 768px) {
		padding: 4rem 1.5rem;
	}
`;
