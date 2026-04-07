import styled from "styled-components";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Start from "../../components/Start";
import UeberMich from "../../components/UeberMich";
import Projekte from "../../components/Projekte";
import Youtube from "../../components/Youtube";
import WordCamp from "../../components/WordCamp";
import DBWMedia from "../../components/DBWMedia";
import FinalCTA from "../../components/FinalCTA";

const Home = () => {
	return (
		<div id="top">
			<Head>
				<title>
					Dennis Buchwald – Webentwickler, Speaker & Gründer dbw media
				</title>
				<meta
					name="description"
					content="Dennis Buchwald – Webentwickler, Speaker und Gründer von dbw media. Ich helfe Unternehmen, online sichtbar zu werden. Digitalagentur für Webdesign, SEO und Online-Marketing in Heilbronn."
				/>
				<link rel="canonical" href="https://www.dennisbuchwald.de" />
				<meta
					property="og:title"
					content="Dennis Buchwald – Webentwickler, Speaker & Gründer dbw media"
				/>
				<meta
					property="og:description"
					content="Webentwickler, Speaker und Gründer von dbw media. Ich helfe Unternehmen, online sichtbar zu werden – mit Webdesign, SEO und Online-Marketing aus Heilbronn."
				/>
				<meta property="og:url" content="https://www.dennisbuchwald.de" />
				<meta
					name="twitter:title"
					content="Dennis Buchwald – Webentwickler, Speaker & Gründer dbw media"
				/>
				<meta
					name="twitter:description"
					content="Webentwickler, Speaker und Gründer von dbw media. Ich helfe Unternehmen, online sichtbar zu werden – mit Webdesign, SEO und Online-Marketing aus Heilbronn."
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify([
							{
								"@context": "https://schema.org",
								"@type": "Person",
								name: "Dennis Buchwald",
								url: "https://www.dennisbuchwald.de",
								jobTitle: ["Webentwickler", "Gründer", "Speaker"],
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
									"https://www.instagram.com/dennisbuchwald/",
								],
							},
							{
								"@context": "https://schema.org",
								"@type": "Event",
								name: "Schluss mit Was kostet eine Website? - WordCamp Wien 2026",
								startDate: "2026-04-11T12:00:00+02:00",
								location: {
									"@type": "Place",
									name: "WordCamp Vienna 2026",
									address: {
										"@type": "PostalAddress",
										addressLocality: "Wien",
										addressCountry: "AT",
									},
								},
								organizer: {
									"@type": "Organization",
									name: "WordCamp Vienna",
									url: "https://vienna.wordcamp.org/2026/",
								},
								performer: {
									"@type": "Person",
									name: "Dennis Buchwald",
									url: "https://www.dennisbuchwald.de",
								},
								url: "https://vienna.wordcamp.org/2026/",
								eventStatus: "https://schema.org/EventScheduled",
								eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
							},
						]),
					}}
				/>
			</Head>
			<Header />
			<PageContent>
				<HeroWrapper>
					<HeroSection>
						<Start />
					</HeroSection>
					<GradientDivider />
				</HeroWrapper>
				<WordCamp />
				<Section>
					<UeberMich />
				</Section>
				<SliderSection>
					<Projekte />
				</SliderSection>
				<SliderSection>
					<Youtube />
				</SliderSection>
				<FinalCTA />
				<DBWMedia />
			</PageContent>
			<Footer />
		</div>
	);
};

export default Home;

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

const HeroSection = styled.section`
	max-width: calc(1200px + 8rem);
	width: 100%;
	margin: 0 auto;
	padding: 2rem 4rem;
	padding-top: 120px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	min-height: calc(100vh - 8px);

	@media screen and (max-width: 768px) {
		padding: 2rem 1.5rem;
		padding-top: 100px;
	}
`;

const Section = styled.section`
	/* max-width includes horizontal padding so inner content = 1200px on wide screens */
	max-width: calc(1200px + 8rem);
	width: 100%;
	margin: 0 auto;
	padding: 6rem 4rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 768px) {
		padding: 4rem 1.5rem;
	}
`;

/* Full-width wrapper for slider sections — no horizontal padding so cards bleed to viewport edge */
const SliderSection = styled.section`
	width: 100%;
	padding: 6rem 0;

	@media screen and (max-width: 768px) {
		padding: 4rem 0;
	}
`;
