import { useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import FinalCTA from "../../../components/FinalCTA";
import {
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
	FaUniversalAccess,
	FaWordpress,
} from "react-icons/fa";

const SITE_URL = "https://www.dennisbuchwald.de";

const steps = [
	{
		num: "1",
		title: "Wir richten alles ein",
		desc: "Einmal-Setup durch uns: wir verbinden deine Maklersoftware mit der Website. Du musst nichts Technisches machen. Danach läuft alles automatisch.",
	},
	{
		num: "2",
		title: "Objekte erscheinen automatisch",
		desc: "Neue Objekte tauchen auf der Website auf, geänderte werden aktualisiert, verkaufte wandern automatisch in deine Referenzen-Seite. Inklusive aller Bilder, Grundrisse und Kontaktdaten.",
	},
	{
		num: "3",
		title: "Anfragen kommen rein",
		desc: "Jede Detailseite wird zur Verkaufsmaschine: Finanzrechner, Exposé, Kontaktmodal, WhatsApp. Der Interessent findet alles und meldet sich direkt bei dir.",
	},
];

const software = [
	{ name: "OnOffice", desc: "Du arbeitest mit OnOffice? Wir verbinden deine Objekte direkt mit WordPress. Alles synchronisiert sich automatisch." },
	{ name: "FlowFact", desc: "FlowFact-Nutzer: Objekte, Bilder und Kontaktdaten werden vollständig auf die Website übernommen." },
	{ name: "JustImmo", desc: "JustImmo von Immo United: wir richten die Verbindung ein, danach läuft der Abgleich von allein." },
	{ name: "Propstack", desc: "Propstack-Nutzer profitieren von der automatischen Synchronisation. Wir kümmern uns um die Einrichtung." },
	{ name: "Andere Software", desc: "Deine Software ist nicht dabei? Kein Problem. Wir unterstützen den offenen Branchenstandard, den alle gängigen Produkte sprechen." },
];

const pillars = [
	{
		icon: <FaCalculator />,
		title: "Kaufnebenkostenrechner",
		desc: "Grunderwerbsteuer nach Bundesland (PLZ-basiert), Notar, Grundbuch, Provision. Plus interaktiver Finanzierungsrechner mit Eigenkapital, Zinssatz und Tilgung.",
	},
	{
		icon: <FaChartBar />,
		title: "Infrastruktur-Score",
		desc: "ÖPNV, Shopping, Bildung, Gastronomie, Verkehr: 5 gewichtete Kategorien als SVG-Ring. Aufklappbare Entfernungsdetails pro Kategorie.",
	},
	{
		icon: <FaFileAlt />,
		title: "PDF-Exposé zum Drucken",
		desc: "Professionelles A4-Exposé: Cover, Key-Facts, Ausstattung, Lage, Energieausweis, Galerie, Grundrisse, Ansprechpartner. Direkt aus dem Browser drucken.",
	},
	{
		icon: <FaSearch />,
		title: "Filter und Kartenansicht",
		desc: "Drei Ansichten (Kacheln, Liste, Karte) mit Live-Switcher. Preisslider, Autocomplete, aktive Filter-Chips. Alles ohne Neuladen der Seite.",
	},
	{
		icon: <FaWhatsapp />,
		title: "WhatsApp-Integration",
		desc: "Sidebar-Button, Floating-Button und Mobile Sticky Bar. Vorgefüllte Nachricht mit Objekt-Titel und Ansprechpartner. Durchdacht integriert, nicht aufgesetzt.",
	},
	{
		icon: <FaMapMarkerAlt />,
		title: "Karte ohne Google",
		desc: "Interaktive Karte ohne Google Maps: keine laufenden Kosten, kein Cookie-Banner nötig. Datenschutz-Platzhalter ist eingebaut.",
	},
	{
		icon: <FaShieldAlt />,
		title: "DSGVO von Grund auf",
		desc: "Keine externen Dienste, keine Tracking-Cookies, keine IP-Speicherung. Die Merkliste funktioniert ohne Benutzerkonten. Datenschutzkonform ohne Zusatzaufwand.",
	},
	{
		icon: <FaUniversalAccess />,
		title: "Du/Sie-Umschaltung",
		desc: "Ein Toggle im Backend ändert alle Texte im gesamten Plugin: Formulare, Modals, Mails, Buttons. Respektiert deutsche Grammatik, kein Regex-Hack.",
	},
];

const wowFeatures = [
	{
		title: "Kontaktmodal, das Leads qualifiziert",
		desc: "Erst wählt der Interessent seinen Intent (Besichtigung, Infos, Preisauskunft, Rückruf), dann kommen passende Felder. Objekt-Preview im Header, Fortschrittsbalken, animierter Erfolgsscreen.",
	},
	{
		title: "Energiekostenrechner",
		desc: "Was kostet das Heizen? Automatische Schätzung aus dem Energieausweis. 9 Energieträger, konfigurierbarer Preis-Slider. Hält Interessenten auf der Seite.",
	},
	{
		title: "Preis-pro-qm-Vergleich",
		desc: "Kaufpreis geteilt durch Wohnfläche, verglichen mit dem Standort-Durchschnitt aus dem eigenen Portfolio. Zeigt sofort, ob der Preis fair ist.",
	},
	{
		title: "View Transitions",
		desc: "Das Objektbild morpht nahtlos von der Listenansicht zur Detailseite. Modernes UI-Pattern, das professionelle Websites von Standard-Plugins unterscheidet.",
	},
];

const seoFeatures = [
	"Schema.org JSON-LD auf jeder Detailseite (RealEstateListing mit Preis, Fläche, Zimmern, Koordinaten)",
	"BreadcrumbList-Markup auf Archiv- und Detailseiten",
	"RealEstateAgent-Schema seitenweit (Firmeninfos aus den Einstellungen)",
	"Open Graph und Twitter Cards automatisch aus Objektdaten generiert",
	"Canonical Tags auf gefilterten Archivseiten gegen Duplicate Content",
	"Saubere URL-Struktur mit konfigurierbarem CPT-Slug",
	"Kompatibel mit Yoast SEO und RankMath (keine doppelte Ausgabe)",
	"Responsive Images mit srcset, fetchpriority und Lazy Loading",
	"Conditional Asset Loading: CSS/JS nur auf Immobilienseiten",
];

const allFeatures = [
	"Galerie-Slider mit Thumbnails, Lightbox und Image Counter",
	"Sticky Section-Navigation mit Scroll-Spy und Lesefortschritt",
	"Merkliste per localStorage (DSGVO-konform, ohne Accounts)",
	"Energieausweis-Skala mit visueller Pfeilanzeige (EnEV A+ bis H)",
	"Referenzen-System: Verkauft, Reserviert, Referenz mit Statusschutz",
	"7-Tab-Property-Editor (Basis, Preise, Flächen, Ausstattung, Technik, Kontakt, Import)",
	"Import-Dashboard: Status, manueller Import, Verlauf der letzten Importe",
	"25+ Design-Optionen: Farben, Sichtbarkeit, Layout direkt im Customizer",
	"Fertige Blöcke für den WordPress-Editor: Immobilien-Grid und Referenzen",
	"Stadtseiten: zeige nur Objekte aus einem bestimmten Ort",
	"Floating Action Buttons: Zurück, Teilen, Exposé, Grundrisse",
	"Ähnliche Objekte mit 3-stufiger Fallback-Logik",
	"Honeypot und Rate Limiting für alle Formulare",
	"Stündlicher automatischer Abgleich mit deiner Maklersoftware",
	"Intelligente Duplikaterkennung (unveränderte Objekte werden übersprungen)",
];

const compareRows = [
	{ feature: "OpenImmo-XML-Import", immo: true, wpImmo: true, immonex: true, frymo: true },
	{ feature: "Kaufnebenkostenrechner (PLZ)", immo: true, wpImmo: false, immonex: false, frymo: false },
	{ feature: "Finanzierungsrechner", immo: true, wpImmo: false, immonex: false, frymo: false },
	{ feature: "Infrastruktur-Score", immo: true, wpImmo: false, immonex: false, frymo: false },
	{ feature: "Energiekostenrechner", immo: true, wpImmo: false, immonex: false, frymo: false },
	{ feature: "Preis/qm-Vergleich", immo: true, wpImmo: false, immonex: false, frymo: false },
	{ feature: "PDF-Exposé (druckfertig)", immo: true, wpImmo: "Ab PLUS", immonex: "Add-on", frymo: false },
	{ feature: "Kontaktmodal mit Intent", immo: true, wpImmo: false, immonex: false, frymo: false },
	{ feature: "WhatsApp-Integration", immo: true, wpImmo: false, immonex: false, frymo: false },
	{ feature: "Karte ohne API-Key", immo: true, wpImmo: false, immonex: "Teilweise", frymo: false },
	{ feature: "Merkliste (DSGVO-safe)", immo: true, wpImmo: true, immonex: false, frymo: false },
	{ feature: "Schema.org JSON-LD", immo: true, wpImmo: false, immonex: true, frymo: true },
	{ feature: "Gutenberg-Blöcke nativ", immo: true, wpImmo: false, immonex: false, frymo: false },
	{ feature: "Kein PageBuilder nötig", immo: true, wpImmo: false, immonex: true, frymo: false },
	{ feature: "DSGVO (keine ext. Dienste)", immo: true, wpImmo: false, immonex: "Teilweise", frymo: false },
	{ feature: "Unbegrenzte Objekte", immo: true, wpImmo: false, immonex: true, frymo: "Ab Pro" },
	{ feature: "Preis", immo: "499 EUR/J.", wpImmo: "Ab 649 EUR", immonex: "Auf Anfrage", frymo: "Ab 348 EUR/J." },
];

const faqSchema = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity: [
		{
			"@type": "Question",
			name: "Muss ich meine Objekte doppelt pflegen?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Nein. Du pflegst alles in deiner Maklersoftware wie bisher. Die Immo Suite holt sich die Daten automatisch und haelt deine Website immer aktuell.",
			},
		},
		{
			"@type": "Question",
			name: "Wie viele Objekte kann ich anzeigen?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Unbegrenzt. Es gibt kein Objektlimit. Egal ob 10 oder 500 Immobilien.",
			},
		},
		{
			"@type": "Question",
			name: "Brauche ich technisches Wissen?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Nein. Wir richten die Immo Suite komplett fuer dich ein. Du musst nichts installieren, konfigurieren oder programmieren.",
			},
		},
		{
			"@type": "Question",
			name: "Ist die Website DSGVO-konform?",
			acceptedAnswer: {
				"@type": "Answer",
				text: "Ja. Keine externen Dienste, keine Tracking-Cookies, keine IP-Speicherung. Die Karte laeuft ohne Google Maps.",
			},
		},
	],
};

const immoSuiteSchema = {
	"@context": "https://schema.org",
	"@type": "SoftwareApplication",
	name: "Immo Suite",
	description:
		"WordPress Immobilien-Plugin mit OpenImmo-Import, Kaufnebenkostenrechner, Infrastruktur-Score und PDF-Exposé. Die Komplettlösung fuer Makler und Hausverwaltungen.",
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
					WordPress Immobilien-Plugin mit OpenImmo-Import - Immo Suite
				</title>
				<meta
					name="description"
					content="Immo Suite: WordPress Immobilien-Plugin mit automatischem OpenImmo-Import aus OnOffice, FlowFact und JustImmo. Kaufnebenkostenrechner, Infrastruktur-Score, PDF-Exposé, AJAX-Filter und Kartenansicht. Ab 499 EUR/Jahr."
				/>
				<link rel="canonical" href={`${SITE_URL}/apps/immo-suite`} />
				<meta
					property="og:title"
					content="WordPress Immobilien-Plugin mit OpenImmo-Import - Immo Suite"
				/>
				<meta
					property="og:description"
					content="Objekte automatisch importieren, professionell präsentieren, mehr Anfragen generieren. Die Komplettlösung fuer Makler und Hausverwaltungen."
				/>
				<meta property="og:url" content={`${SITE_URL}/apps/immo-suite`} />
				<meta property="og:type" content="website" />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify([immoSuiteSchema, faqSchema]),
					}}
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
							<span>Immo Suite</span>
						</Breadcrumb>
						<HeroIconRow>
							<HeroIcon src="/apps/icons/immosuite-app.svg" alt="Immo Suite" />
							<Eyebrow>WordPress Immobilien-Plugin</Eyebrow>
						</HeroIconRow>
						<Title>
							Wie ImmoScout und Kleinanzeigen, nur auf deiner eigenen Website.
						</Title>
						<Intro>
							Stell dir vor, du veröffentlichst ein neues Objekt in deiner
							Maklersoftware und es erscheint im selben Moment auf deiner
							Website. Mit Finanzierungsrechner, Lage-Bewertung,
							druckfertigem Exposé und einem Kontaktformular, das direkt
							Anfragen bringt. Genau das macht die Immo Suite.
						</Intro>
						<HeroActions>
							<PrimaryButton href="#anfrage">
								Unverbindlich anfragen
							</PrimaryButton>
							<SecondaryButton
								href="https://immo-suite-demo.dbw-development.de/immobilien/"
								target="_blank"
								rel="noopener noreferrer"
							>
								Live-Demo ansehen
							</SecondaryButton>
						</HeroActions>
					</Hero>
					<GradientDivider />
				</HeroWrapper>

				{/* ── PROBLEM ── */}
				<Section>
					<ProblemGrid>
						<ProblemText>
							<SectionHeading>
								Du veröffentlichst auf ImmoScout. Warum nicht auch auf deiner eigenen Seite?
							</SectionHeading>
							<ProblemDesc>
								Wenn du ein Objekt in deiner Maklersoftware freigibst,
								geht es an ImmoScout, Kleinanzeigen, Immowelt. Aber
								deine eigene Website? Die hinkt hinterher. Veraltete
								Daten, kein Exposé, keine Anfragen. Oder noch schlimmer:
								du pflegst die Objekte manuell auf der Website und machst
								alles doppelt.
							</ProblemDesc>
							<ProblemDesc>
								Dabei ist deine Website der einzige Kanal, der dir
								wirklich gehört. Keine Konkurrenz links und rechts neben
								deinen Objekten. Keine Provision pro Anfrage. Keine
								Abhängigkeit von Portalen, die morgen die Regeln ändern.
							</ProblemDesc>
							<ProblemDesc>
								<strong>Mit der Immo Suite wird deine Website zum
								eigenen Portal.</strong> Objekte erscheinen automatisch,
								Detailseiten generieren Anfragen. Alles unter deiner
								Kontrolle.
							</ProblemDesc>
						</ProblemText>
					</ProblemGrid>
				</Section>

				{/* ── 3 SCHRITTE ── */}
				<Section>
					<SectionHeading>
						Einmal einrichten, dann läuft es
					</SectionHeading>
					<StepGrid>
						{steps.map((step) => (
							<StepCard key={step.num}>
								<StepNum>{step.num}</StepNum>
								<StepTitle>{step.title}</StepTitle>
								<StepDesc>{step.desc}</StepDesc>
							</StepCard>
						))}
					</StepGrid>
				</Section>

				{/* ── KOMPATIBLE SOFTWARE ── */}
				<Section>
					<SectionHeading>
						Funktioniert mit deiner Maklersoftware
					</SectionHeading>
					<SectionSub>
						Egal welche Software du nutzt: wir verbinden sie mit deiner
						WordPress-Website. Einmal einrichten, danach synchronisiert
						sich alles automatisch.
					</SectionSub>
					<SoftwareGrid>
						{software.map((sw) => (
							<SoftwareCard key={sw.name}>
								<SoftwareName>{sw.name}</SoftwareName>
								<SoftwareDesc>{sw.desc}</SoftwareDesc>
							</SoftwareCard>
						))}
					</SoftwareGrid>
				</Section>

				{/* ── FEATURES (8 Pillars) ── */}
				<Section>
					<SectionHeading>
						Was die Immo Suite deiner Website gibt
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

				{/* ── WAS KEIN ANDERER KANN ── */}
				<Section>
					<SectionHeading>Was kein anderes Immobilien-Plugin kann</SectionHeading>
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

				{/* ── SEO ── */}
				<Section>
					<SectionHeading>
						SEO für Immobilien: strukturierte Daten und saubere Technik
					</SectionHeading>
					<SectionSub>
						Deine Objekte sollen nicht nur gut aussehen, sondern auch
						gefunden werden. Die Immo Suite liefert alles, was Google
						und andere Suchmaschinen brauchen.
					</SectionSub>
					<FeatureList>
						{seoFeatures.map((item) => (
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
										<Td><CellValue value={row.wpImmo} /></Td>
										<Td><CellValue value={row.immonex} /></Td>
										<Td><CellValue value={row.frymo} /></Td>
									</tr>
								))}
							</tbody>
						</CompareTable>
					</CompareWrapper>
				</Section>

				{/* ── ALLE FEATURES ── */}
				<Section>
					<SectionHeading>Alles drin, was ein Makler braucht</SectionHeading>
					<FeatureList>
						{allFeatures.map((item) => (
							<FeatureItem key={item}>
								<FeatureIcon><FaCheck /></FeatureIcon>
								<span>{item}</span>
							</FeatureItem>
						))}
					</FeatureList>
				</Section>

				{/* ── VORAUSSETZUNGEN ── */}
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

				{/* ── ANFRAGE ── */}
				<InquirySection id="anfrage">
					<InquiryCard>
						<InquiryHeading>
							Bereit, mehr aus deinen Objektseiten rauszuholen?
						</InquiryHeading>
						<InquiryDesc>
							Mehr Anfragen pro Objekt, bessere User Experience,
							professionelle Detailseiten mit Finanzrechner und Exposé.
							Sag mir kurz, welche Maklersoftware du nutzt und wo
							deine Website steht. Ich schaue mir das an und melde
							mich persönlich bei dir.
						</InquiryDesc>
						<InquiryForm
							onSubmit={(e) => {
								e.preventDefault();
								const form = e.target;
								const firma = form.firma.value;
								const sw = form.software.value;
								const website = form.website.value;
								const subject = encodeURIComponent(
									`Immo Suite Anfrage - ${firma}`
								);
								const body = encodeURIComponent(
									`Firma: ${firma}\nMaklersoftware: ${sw}\nWebsite: ${website}`
								);
								window.location.href = `mailto:dennis@dbw-media.de?subject=${subject}&body=${body}`;
							}}
						>
							<FormField>
								<FormLabel htmlFor="firma">Firma</FormLabel>
								<FormInput
									id="firma"
									name="firma"
									type="text"
									placeholder="Mustermann Immobilien GmbH"
									required
								/>
							</FormField>
							<FormField>
								<FormLabel htmlFor="software">
									Welche Maklersoftware nutzt du?
								</FormLabel>
								<FormSelect id="software" name="software" required>
									<option value="">Bitte wählen</option>
									<option value="OnOffice">OnOffice</option>
									<option value="FlowFact">FlowFact</option>
									<option value="JustImmo">JustImmo</option>
									<option value="Propstack">Propstack</option>
									<option value="OpenImmo (andere)">OpenImmo (andere Software)</option>
									<option value="Noch keine">Noch keine</option>
								</FormSelect>
							</FormField>
							<FormField>
								<FormLabel htmlFor="website">
									Link zu deiner aktuellen Website
								</FormLabel>
								<FormInput
									id="website"
									name="website"
									type="text"
									placeholder="www.deine-website.de"
								/>
							</FormField>
							<SubmitButton type="submit">
								Anfrage absenden
							</SubmitButton>
						</InquiryForm>
					</InquiryCard>
				</InquirySection>

				{/* ── FAQ ── */}
				<Section>
					<SectionHeading>Häufige Fragen</SectionHeading>
					<FaqList>
						{[
							{
								q: "Muss ich meine Objekte doppelt pflegen?",
								a: "Nein. Du pflegst alles in deiner Maklersoftware wie bisher. Die Immo Suite holt sich die Daten automatisch und hält deine Website immer aktuell.",
							},
							{
								q: "Wie viele Objekte kann ich anzeigen?",
								a: "Unbegrenzt. Es gibt kein Objektlimit. Egal ob 10 oder 500 Immobilien.",
							},
							{
								q: "Brauche ich technisches Wissen?",
								a: "Nein. Wir richten die Immo Suite komplett für dich ein. Du musst nichts installieren, konfigurieren oder programmieren.",
							},
							{
								q: "Was passiert, wenn ein Objekt verkauft wird?",
								a: "Sobald du das Objekt in deiner Maklersoftware als verkauft markierst, wird es auf der Website automatisch archiviert oder in den Referenzen angezeigt.",
							},
							{
								q: "Funktioniert das mit meinem WordPress-Theme?",
								a: "Ja. Die Immo Suite bringt eigene Templates mit und passt sich über den Customizer an dein Design an. Kein PageBuilder nötig.",
							},
							{
								q: "Ist die Website DSGVO-konform?",
								a: "Ja. Keine externen Dienste, keine Tracking-Cookies, keine IP-Speicherung. Die Karte läuft ohne Google Maps. Datenschutz-Platzhalter sind eingebaut.",
							},
						].map((faq) => (
							<AccordionItem key={faq.q} question={faq.q} answer={faq.a} />
						))}
					</FaqList>
				</Section>

				{/* ── SEO KEYWORD SEKTIONEN ── */}
				<Section>
					<FaqGrid>
						<FaqItem>
							<FaqTitle>OnOffice mit WordPress verbinden</FaqTitle>
							<FaqText>
								Du nutzt OnOffice und willst deine Objekte automatisch auf
								deiner WordPress-Website anzeigen? Die Immo Suite übernimmt
								den kompletten Abgleich: neue Objekte erscheinen sofort,
								Änderungen werden synchronisiert, verkaufte Objekte
								automatisch archiviert. Wir richten die Verbindung für dich ein.
							</FaqText>
						</FaqItem>
						<FaqItem>
							<FaqTitle>FlowFact mit WordPress verbinden</FaqTitle>
							<FaqText>
								FlowFact-Nutzer profitieren von der automatischen
								Synchronisation mit WordPress. Alle Objektdaten, Bilder
								und Grundrisse werden übernommen. Einmal einrichten,
								danach läuft der Abgleich ohne dein Zutun.
							</FaqText>
						</FaqItem>
						<FaqItem>
							<FaqTitle>JustImmo mit WordPress verbinden</FaqTitle>
							<FaqText>
								JustImmo von Immo United lässt sich nahtlos mit der Immo
								Suite verbinden. Deine Objekte landen automatisch auf der
								Website, inklusive aller Details und Medien.
							</FaqText>
						</FaqItem>
						<FaqItem>
							<FaqTitle>Propstack mit WordPress verbinden</FaqTitle>
							<FaqText>
								Propstack-Nutzer können ihre Objekte direkt mit WordPress
								synchronisieren. Die Immo Suite übernimmt den Import
								und hält deine Website immer auf dem aktuellen Stand.
							</FaqText>
						</FaqItem>
					</FaqGrid>
				</Section>

				<FinalCTA />
			</PageContent>
			<Footer />
		</div>
	);
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

export default ImmoSuite;

/* ═══════════════════════════════════════════
   STYLES
   ═══════════════════════════════════════════ */

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

	@media screen and (max-width: 768px) {
		font-size: 2rem;
	}
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

const SecondaryButton = styled.a`
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
	padding: 0.85rem 1.75rem;
	background: transparent;
	color: #111;
	font-size: 1rem;
	font-weight: 600;
	border: 1.5px solid #ddd;
	border-radius: 999px;
	text-decoration: none;
	transition: all 0.2s ease;
	&:hover { border-color: #999; transform: translateY(-2px); }
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
		font-size: 1.5rem;
	}
`;

const SectionSub = styled.p`
	font-size: 1.05rem;
	color: ${(props) => props.theme.textSecondary};
	margin: 0 0 2.5rem;
	max-width: 620px;
`;

/* ── Problem ── */

const ProblemGrid = styled.div`
	max-width: 700px;
`;

const ProblemText = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
`;

const ProblemDesc = styled.p`
	font-size: 1.05rem;
	line-height: 1.7;
	color: ${(props) => props.theme.textSecondary};
	margin: 0;

	strong {
		color: ${(props) => props.theme.text};
		font-weight: 600;
	}
`;

/* ── 3-Schritte ── */

const StepGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1.5rem;
	margin-top: 1.5rem;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

const StepCard = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	padding: 2rem;
	background: ${(props) => props.theme.bgCard};
	border: 1px solid ${(props) => props.theme.borderCard};
	border-radius: 1.25rem;
`;

const StepNum = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 50%;
	font-size: 1.1rem;
	font-weight: 800;
	color: #fff;
	background: ${(props) => props.theme.gradient};
`;

const StepTitle = styled.h3`
	font-size: 1.1rem;
	font-weight: 700;
	color: ${(props) => props.theme.text};
	margin: 0;
`;

const StepDesc = styled.p`
	font-size: 0.9rem;
	line-height: 1.65;
	color: ${(props) => props.theme.textSecondary};
	margin: 0;
`;

/* ── Software-Kompatibilität ── */

const SoftwareGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	gap: 1rem;

	@media (max-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (max-width: 600px) {
		grid-template-columns: 1fr;
	}
`;

const SoftwareCard = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	padding: 1.5rem;
	background: ${(props) => props.theme.bgCard};
	border: 1px solid ${(props) => props.theme.borderCard};
	border-radius: 1rem;
	transition: border-color 0.2s ease;

	&:hover {
		border-color: ${(props) => props.theme.borderCardHover};
	}
`;

const SoftwareName = styled.h3`
	font-size: 1rem;
	font-weight: 700;
	color: ${(props) => props.theme.text};
	margin: 0;
`;

const SoftwareDesc = styled.p`
	font-size: 0.8rem;
	line-height: 1.55;
	color: ${(props) => props.theme.textMuted};
	margin: 0;
`;

/* ── Pillars (4 Spalten) ── */

const PillarGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 1.5rem;
	margin-top: 1.5rem;

	@media (max-width: 1200px) {
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

const PillarIcon = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 0.65rem;
	font-size: 1.1rem;
	color: #fff;
	background: ${(props) => props.theme.gradient};
`;

const PillarTitle = styled.h3`
	font-size: 1.05rem;
	font-weight: 700;
	color: ${(props) => props.theme.text};
	margin: 0;
`;

const PillarDesc = styled.p`
	font-size: 0.85rem;
	line-height: 1.6;
	color: ${(props) => props.theme.textSecondary};
	margin: 0;
`;

/* ── Wow Features (Gradient Border) ── */

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
	font-size: 1.1rem;
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
	&:first-child { text-align: left; padding-left: 1.5rem; }
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
	tr:last-child & { border-bottom: none; }
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

/* ── FAQ Akkordeon ── */

const FaqList = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 800px;
`;

const AccordionWrapper = styled.div`
	border-bottom: 1px solid ${(props) => props.theme.borderCard};

	&:first-child {
		border-top: 1px solid ${(props) => props.theme.borderCard};
	}
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
	color: ${(props) => props.theme.text};
	transition: color 0.2s ease;

	&:hover {
		color: ${(props) => props.theme.accent};
	}
`;

const AccordionIcon = styled.span`
	font-size: 1.4rem;
	font-weight: 300;
	color: ${(props) => props.theme.textMuted};
	transition: transform 0.3s ease;
	transform: ${(props) => (props.$open ? "rotate(45deg)" : "rotate(0)")};
	flex-shrink: 0;
	margin-left: 1rem;
`;

const AccordionContent = styled.div`
	max-height: ${(props) => (props.$open ? "200px" : "0")};
	overflow: hidden;
	transition: max-height 0.3s ease;
`;

const AccordionText = styled.p`
	font-size: 0.95rem;
	line-height: 1.65;
	color: ${(props) => props.theme.textSecondary};
	margin: 0;
	padding-bottom: 1.25rem;
`;

/* ── SEO Keyword Sektionen ── */

const FaqGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1.5rem;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

const FaqItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	padding: 1.75rem;
	background: ${(props) => props.theme.bgCard};
	border: 1px solid ${(props) => props.theme.borderCard};
	border-radius: 1rem;
`;

const FaqTitle = styled.h3`
	font-size: 1.05rem;
	font-weight: 700;
	color: ${(props) => props.theme.text};
	margin: 0;
`;

const FaqText = styled.p`
	font-size: 0.9rem;
	line-height: 1.6;
	color: ${(props) => props.theme.textSecondary};
	margin: 0;
`;

/* ── Anfrage ── */

const InquirySection = styled.section`
	max-width: calc(1200px + 8rem);
	width: 100%;
	margin: 0 auto;
	padding: 5rem 4rem;

	@media screen and (max-width: 768px) {
		padding: 3rem 1.5rem;
	}
`;

const InquiryCard = styled.div`
	max-width: 600px;
	margin: 0 auto;
	padding: 3rem;
	background: ${(props) => props.theme.bgCard};
	border: 1px solid ${(props) => props.theme.borderCard};
	border-radius: 1.5rem;
	position: relative;
	overflow: hidden;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 4px;
		background: linear-gradient(90deg, #ea2b1f, #ff3c6f, #ff4fdd, #7e56ff, #00b2ff);
	}

	@media screen and (max-width: 768px) {
		padding: 2rem 1.5rem;
	}
`;

const InquiryHeading = styled.h2`
	font-size: 1.75rem;
	font-weight: 700;
	color: ${(props) => props.theme.text};
	margin: 0 0 0.75rem;
`;

const InquiryDesc = styled.p`
	font-size: 1rem;
	line-height: 1.6;
	color: ${(props) => props.theme.textSecondary};
	margin: 0 0 2rem;
`;

const InquiryForm = styled.form`
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
`;

const FormField = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.4rem;
`;

const FormLabel = styled.label`
	font-size: 0.85rem;
	font-weight: 600;
	color: ${(props) => props.theme.text};
`;

const FormInput = styled.input`
	padding: 0.75rem 1rem;
	font-size: 0.95rem;
	color: ${(props) => props.theme.text};
	background: ${(props) => props.theme.bg};
	border: 1px solid ${(props) => props.theme.borderCard};
	border-radius: 0.75rem;
	outline: none;
	transition: border-color 0.2s ease;
	&::placeholder { color: ${(props) => props.theme.textMuted}; }
	&:focus { border-color: ${(props) => props.theme.accent}; }
`;

const FormSelect = styled.select`
	padding: 0.75rem 1rem;
	font-size: 0.95rem;
	color: ${(props) => props.theme.text};
	background: ${(props) => props.theme.bg};
	border: 1px solid ${(props) => props.theme.borderCard};
	border-radius: 0.75rem;
	outline: none;
	cursor: pointer;
	&:focus { border-color: ${(props) => props.theme.accent}; }
`;

const SubmitButton = styled.button`
	padding: 0.85rem 1.5rem;
	font-size: 1rem;
	font-weight: 700;
	color: #fff;
	background: linear-gradient(135deg, #ea2b1f, #ff3c6f, #ff4fdd, #7e56ff, #00b2ff);
	border: none;
	border-radius: 999px;
	cursor: pointer;
	margin-top: 0.5rem;
	transition: opacity 0.2s ease, transform 0.2s ease;
	&:hover { opacity: 0.9; transform: translateY(-2px); }
`;
