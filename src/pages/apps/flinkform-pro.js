import { useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import FinalCTA from "../../../components/FinalCTA";
import {
	FaEnvelope,
	FaCheck,
	FaTimes,
	FaCloud,
	FaExchangeAlt,
	FaFileExport,
	FaPaintBrush,
	FaCloudUploadAlt,
	FaNewspaper,
	FaShieldAlt,
	FaPlug,
	FaWordpress,
} from "react-icons/fa";

const SITE_URL = "https://www.dennisbuchwald.de";

const proModules = [
	{
		icon: <FaCloud />,
		title: "SMTP-Versand",
		desc: "Alle Formular-Mails gehen zuverlässig raus. 7 Provider-Presets (Gmail, Outlook, SendGrid, Mailgun, Brevo, Postmark, Amazon SES), AES-256-verschlüsselte Zugangsdaten, vollständiges Sende-Log mit Fehlerdiagnose.",
	},
	{
		icon: <FaExchangeAlt />,
		title: "Webhooks",
		desc: "Einreichungen automatisch an dein CRM, Projektmanagement oder jeden beliebigen Endpoint senden. JSON- oder URL-encoded-Payloads, individuelle Header, Field-Mapping, Retry-Logik und ein komplettes Delivery-Log.",
	},
	{
		icon: <FaCloudUploadAlt />,
		title: "Datei-Upload",
		desc: "Besucher können Dateien an Formulare anhängen. Erlaubte Dateitypen und Maximalgröße pro Feld konfigurierbar. Content-Sniffing, randomisierte Dateinamen, geschützter Upload-Ordner. Dateien werden mit der Einreichung gelöscht.",
	},
	{
		icon: <FaNewspaper />,
		title: "Newsletter-Anbindung",
		desc: "Brevo, Mailchimp und CleverReach direkt integriert. Double-Opt-in, Pflicht-Einwilligungsfeld und asynchroner Versand. Kein Extra-Plugin, keine Zapier-Umwege.",
	},
	{
		icon: <FaFileExport />,
		title: "CSV-Export",
		desc: "Gefilterte Einreichungen als CSV exportieren. Direkt aus dem WordPress-Admin, ein Klick.",
	},
	{
		icon: <FaPaintBrush />,
		title: "Custom CSS",
		desc: "Per-Formular CSS direkt im Editor schreiben. Für Pixel-perfekte Anpassungen, die über die Theme-Einstellungen hinausgehen.",
	},
];

const highlights = [
	"SMTP mit 7 Provider-Presets und verschlüsselten Credentials",
	"Webhooks mit Retry-Logik und vollständigem Delivery-Log",
	"Datei-Upload mit Content-Sniffing und DSGVO-konformer Löschkaskade",
	"Newsletter-Anbindung: Brevo, Mailchimp, CleverReach",
	"CSV-Export aus dem Submissions-Dashboard",
	"Custom CSS pro Formular im Editor",
	"SSRF-gehärtet: Webhook-Requests werden gegen unsichere URLs geprüft",
	"AES-256-Verschlüsselung für alle gespeicherten Zugangsdaten",
	"Komplette DSGVO-Abdeckung: Privacy-Tools, Eraser-Kaskaden, Daten-Export",
	"Saubere Bridge-Architektur: Pro verändert keine Core-Dateien",
];

const compareRows = [
	{ feature: "SMTP-Versand", pro: true, manual: "Separates Plugin" },
	{ feature: "Sende-Log mit Fehlerdiagnose", pro: true, manual: false },
	{ feature: "Webhooks mit Retry-Logik", pro: true, manual: "Zapier o.Ä." },
	{ feature: "Webhook Delivery-Log", pro: true, manual: false },
	{ feature: "Datei-Upload (sicher)", pro: true, manual: "Separates Plugin" },
	{ feature: "Newsletter-Integration", pro: true, manual: "Separates Plugin" },
	{ feature: "CSV-Export", pro: true, manual: false },
	{ feature: "Custom CSS pro Formular", pro: true, manual: "Theme-Code" },
	{ feature: "Verschlüsselte Credentials", pro: true, manual: false },
	{ feature: "Alles aus einer Hand", pro: true, manual: false },
];

const faqs = [
	{
		q: "Brauche ich Flinkform (kostenlos), um Pro zu nutzen?",
		a: "Ja. Flinkform Pro ist ein Add-on, das auf dem kostenlosen Flinkform-Plugin aufbaut. Du installierst zuerst das kostenlose Plugin und aktivierst dann Pro als Erweiterung. Alle Free-Features bleiben erhalten.",
	},
	{
		q: "Was passiert mit meinen Daten, wenn ich Pro deaktiviere?",
		a: "Nichts. Deine Webhooks, SMTP-Einstellungen und Upload-Dateien bleiben gespeichert. Erst bei einer kompletten Deinstallation werden die Pro-Datenbanktabellen und Upload-Dateien entfernt.",
	},
	{
		q: "Kann ich meinen bestehenden SMTP-Provider weiternutzen?",
		a: "Ja. Flinkform Pro erkennt, wenn bereits ein anderes SMTP-Plugin aktiv ist, und zeigt einen Hinweis. Du kannst den eingebauten SMTP-Versand nutzen oder bei deinem bestehenden Setup bleiben.",
	},
	{
		q: "Wie sicher ist der Datei-Upload?",
		a: "Dreifach abgesichert: Dateityp-Prüfung per Extension und Content-Sniffing, randomisierte Dateinamen und ein geschützter Upload-Ordner mit .htaccess. Dateien werden automatisch gelöscht, wenn die Einreichung gelöscht wird.",
	},
	{
		q: "Ist Flinkform Pro DSGVO-konform?",
		a: "Ja. Alle Pro-Module sind in die WordPress-Privacy-Tools integriert: Datenexport, Datenlöschung und Privacy-Policy-Hinweise. Zugangsdaten werden AES-256-verschlüsselt gespeichert. Das Sende-Log speichert keine Mail-Inhalte.",
	},
	{
		q: "Wie kommen Updates?",
		a: "Flinkform Pro wird über eine Lizenz mit automatischen Updates ausgeliefert. Details zur Lizenzierung folgen in Kürze.",
	},
];

const flinkformProSchema = {
	"@context": "https://schema.org",
	"@type": "SoftwareApplication",
	name: "Flinkform Pro",
	description:
		"Premium Add-on für Flinkform: SMTP, Webhooks, Datei-Upload, Newsletter-Anbindung, CSV-Export und Custom CSS. Für professionelle WordPress-Formulare.",
	applicationCategory: "Plugin",
	operatingSystem: "WordPress",
	url: `${SITE_URL}/apps/flinkform-pro`,
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

const CellValue = ({ value }) => {
	if (value === true) return <CellCheck><FaCheck /></CellCheck>;
	if (value === false) return <CellCross><FaTimes /></CellCross>;
	return <CellText>{value}</CellText>;
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

const FlinkformPro = () => {
	return (
		<div id="top">
			<Head>
				<title>
					Flinkform Pro - SMTP, Webhooks, Uploads und mehr für dein WordPress-Formular
				</title>
				<meta
					name="description"
					content="Flinkform Pro: SMTP-Versand, Webhooks, Datei-Upload, Newsletter-Anbindung, CSV-Export und Custom CSS. Das Premium Add-on fuer professionelle WordPress-Formulare."
				/>
				<link rel="canonical" href={`${SITE_URL}/apps/flinkform-pro`} />
				<meta property="og:title" content="Flinkform Pro - Premium Add-on für WordPress-Formulare" />
				<meta property="og:description" content="SMTP, Webhooks, Datei-Upload, Newsletter, CSV-Export: alles in einem Add-on. Baut auf dem kostenlosen Flinkform auf." />
				<meta property="og:url" content={`${SITE_URL}/apps/flinkform-pro`} />
				<meta property="og:type" content="website" />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify([flinkformProSchema, faqSchema]) }}
				/>
			</Head>
			<Header />
			<PageContent>
				{/* -- HERO -- */}
				<HeroWrapper>
					<Hero>
						<Breadcrumb>
							<BreadcrumbLink href="/apps">Apps & Plugins</BreadcrumbLink>
							<span>/</span>
							<BreadcrumbLink href="/apps/flinkform">Flinkform</BreadcrumbLink>
							<span>/</span>
							<span>Pro</span>
						</Breadcrumb>
						<HeroIconRow>
							<HeroIcon src="/apps/icons/flinkform-app.svg" alt="Flinkform Pro" />
							<Eyebrow>Premium Add-on</Eyebrow>
						</HeroIconRow>
						<Title>
							Webhooks, SMTP, Uploads. Für die, die mehr brauchen.
						</Title>
						<Intro>
							Flinkform deckt alles ab, was ein gutes Formular braucht.
							Aber wenn Einreichungen automatisch ins CRM fliessen sollen,
							Mails zuverlässig über deinen eigenen SMTP-Server rausgehen
							und Besucher Dateien hochladen können: dafür gibt es Pro.
						</Intro>
						<HeroActions>
							<PrimaryButton
								href="/kontakt"
							>
								<FaEnvelope /> Jetzt anfragen
							</PrimaryButton>
							<SecondaryButton
								href="/apps/flinkform"
							>
								<FaPlug /> Zum kostenlosen Plugin
							</SecondaryButton>
						</HeroActions>
					</Hero>
					<GradientDivider />
				</HeroWrapper>

				{/* -- PROBLEM / STORY -- */}
				<Section>
					<ProblemText>
						<SectionHeading>
							Dein Formular funktioniert. Und dann?
						</SectionHeading>
						<ProblemDesc>
							Kontaktformular eingerichtet, Spam-Schutz läuft,
							Einreichungen kommen an. Aber dann brauchst du mehr:
						</ProblemDesc>
						<NeedsList>
							<NeedItem>
								<NeedIcon><FaCloud /></NeedIcon>
								<span>Der Hoster verschluckt Mails. Du brauchst SMTP.</span>
							</NeedItem>
							<NeedItem>
								<NeedIcon><FaExchangeAlt /></NeedIcon>
								<span>Einreichungen sollen automatisch ins CRM. Du brauchst Webhooks.</span>
							</NeedItem>
							<NeedItem>
								<NeedIcon><FaCloudUploadAlt /></NeedIcon>
								<span>Kunden sollen Dateien mitsenden. Du brauchst einen sicheren Upload.</span>
							</NeedItem>
							<NeedItem>
								<NeedIcon><FaNewspaper /></NeedIcon>
								<span>Newsletter-Anmeldung im Formular. Du brauchst eine Anbindung.</span>
							</NeedItem>
						</NeedsList>
						<ProblemDesc>
							Normalerweise heisst das: vier weitere Plugins installieren.
							Vier Konfigurationen, vier Update-Zyklen, vier potenzielle
							Konflikte.
						</ProblemDesc>
						<ProblemDesc>
							<strong>Flinkform Pro packt das alles in ein Add-on.</strong> Nahtlos
							integriert, aus einer Hand, mit einer Konfiguration.
						</ProblemDesc>
					</ProblemText>
				</Section>

				{/* -- 6 MODULE -- */}
				<Section>
					<SectionHeading>
						Sechs Module. Ein Add-on.
					</SectionHeading>
					<ModuleGrid>
						{proModules.map((m) => (
							<ModuleCard key={m.title}>
								<ModuleIcon>{m.icon}</ModuleIcon>
								<ModuleTitle>{m.title}</ModuleTitle>
								<ModuleDesc>{m.desc}</ModuleDesc>
							</ModuleCard>
						))}
					</ModuleGrid>
				</Section>

				{/* -- HIGHLIGHTS -- */}
				<Section>
					<SectionHeading>Im Detail.</SectionHeading>
					<SectionSub>
						Alles, was Flinkform Pro mitbringt - zusätzlich zu den
						13 Feldtypen, Multi-Step, bedingter Logik und dem Spam-Schutz
						des kostenlosen Plugins.
					</SectionSub>
					<FeatureList>
						{highlights.map((item) => (
							<FeatureItem key={item}>
								<FeatureIcon><FaCheck /></FeatureIcon>
								<span>{item}</span>
							</FeatureItem>
						))}
					</FeatureList>
				</Section>

				{/* -- VERGLEICH -- */}
				<Section>
					<SectionHeading>
						Ein Add-on vs. vier separate Plugins
					</SectionHeading>
					<CompareWrapper>
						<CompareTable>
							<thead>
								<tr>
									<Th></Th>
									<ThHighlight>Flinkform Pro</ThHighlight>
									<Th>Manuell / Einzelplugins</Th>
								</tr>
							</thead>
							<tbody>
								{compareRows.map((row) => (
									<tr key={row.feature}>
										<TdFeature>{row.feature}</TdFeature>
										<TdHighlight><CellValue value={row.pro} /></TdHighlight>
										<Td><CellValue value={row.manual} /></Td>
									</tr>
								))}
							</tbody>
						</CompareTable>
					</CompareWrapper>
				</Section>

				{/* -- WIE ES FUNKTIONIERT -- */}
				<Section>
					<SectionHeading>So funktioniert es</SectionHeading>
					<StepsGrid>
						<StepItem>
							<StepNum>1</StepNum>
							<StepTitle>Flinkform installieren</StepTitle>
							<StepDesc>
								Das kostenlose Plugin aus dem WordPress.org-Verzeichnis.
								13 Feldtypen, Multi-Step, bedingte Logik, Spam-Schutz.
							</StepDesc>
						</StepItem>
						<StepItem>
							<StepNum>2</StepNum>
							<StepTitle>Pro aktivieren</StepTitle>
							<StepDesc>
								Flinkform Pro als zweites Plugin installieren und
								aktivieren. Pro dockt sich automatisch an den Free Core an.
							</StepDesc>
						</StepItem>
						<StepItem>
							<StepNum>3</StepNum>
							<StepTitle>Module konfigurieren</StepTitle>
							<StepDesc>
								SMTP, Webhooks, Newsletter: alles direkt im WordPress-Admin.
								Pro-Panels erscheinen automatisch im Block-Editor.
							</StepDesc>
						</StepItem>
					</StepsGrid>
				</Section>

				{/* -- FAQ -- */}
				<Section>
					<SectionHeading>Häufige Fragen</SectionHeading>
					<FaqList>
						{faqs.map((faq) => (
							<AccordionItem key={faq.q} question={faq.q} answer={faq.a} />
						))}
					</FaqList>
				</Section>

				{/* -- VORAUSSETZUNGEN -- */}
				<Section>
					<SectionHeading>Voraussetzungen</SectionHeading>
					<ReqGrid>
						<ReqItem><ReqLabel>WordPress</ReqLabel><ReqValue>6.5+</ReqValue></ReqItem>
						<ReqItem><ReqLabel>PHP</ReqLabel><ReqValue>8.1+</ReqValue></ReqItem>
						<ReqItem><ReqLabel>Flinkform</ReqLabel><ReqValue>1.0.0+</ReqValue></ReqItem>
						<ReqItem><ReqLabel>Lizenz</ReqLabel><ReqValue>Erforderlich</ReqValue></ReqItem>
					</ReqGrid>
				</Section>

				<FinalCTA />
			</PageContent>
			<Footer />
		</div>
	);
};

export default FlinkformPro;

/* ===================================
   STYLES
   =================================== */

const PageContent = styled.main`
	flex-grow: 1;
`;

/* -- Hero -- */

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
	background: linear-gradient(135deg, #7e56ff, #00b2ff);
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

const SecondaryButton = styled(Link)`
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
	padding: 0.85rem 1.75rem;
	background: transparent;
	color: #111;
	font-size: 1rem;
	font-weight: 600;
	border-radius: 999px;
	text-decoration: none;
	border: 1.5px solid #ddd;
	transition: all 0.2s ease;
	&:hover { border-color: #111; transform: translateY(-2px); }
`;

/* -- Sections -- */

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

/* -- Problem / Story -- */

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

const NeedsList = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	padding: 1rem 0;
`;

const NeedItem = styled.div`
	display: flex;
	align-items: center;
	gap: 0.75rem;
	font-size: 1rem;
	color: ${(p) => p.theme.textSecondary};
	line-height: 1.5;
`;

const NeedIcon = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2rem;
	height: 2rem;
	border-radius: 0.5rem;
	font-size: 0.8rem;
	color: #fff;
	background: ${(p) => p.theme.gradient};
	flex-shrink: 0;
`;

/* -- Module Cards (3x2) -- */

const ModuleGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1.5rem;
	margin-top: 1.5rem;
	@media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
	@media (max-width: 600px) { grid-template-columns: 1fr; }
`;

const ModuleCard = styled.div`
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

const ModuleIcon = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 2.5rem;
	height: 2.5rem;
	border-radius: 0.65rem;
	font-size: 1.1rem;
	color: #fff;
	background: linear-gradient(135deg, #7e56ff, #00b2ff);
`;

const ModuleTitle = styled.h3`
	font-size: 1.05rem;
	font-weight: 700;
	color: ${(p) => p.theme.text};
	margin: 0;
`;

const ModuleDesc = styled.p`
	font-size: 0.85rem;
	line-height: 1.6;
	color: ${(p) => p.theme.textSecondary};
	margin: 0;
`;

/* -- Features -- */

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

/* -- Compare Table -- */

const CompareWrapper = styled.div`
	overflow-x: auto;
	margin-top: 1.5rem;
	border: 1px solid ${(p) => p.theme.borderCard};
	border-radius: 1.25rem;
`;

const CompareTable = styled.table`
	width: 100%;
	border-collapse: collapse;
	min-width: 540px;
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

const CellCheck = styled.span`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 1.6rem;
	height: 1.6rem;
	border-radius: 50%;
	font-size: 0.7rem;
	color: #fff;
	background: linear-gradient(135deg, #7e56ff, #00b2ff);
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
	font-weight: 400;
	color: ${(p) => p.theme.textSecondary};
`;

/* -- Steps -- */

const StepsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1.5rem;
	margin-top: 1.5rem;
	@media (max-width: 768px) { grid-template-columns: 1fr; }
`;

const StepItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	padding: 1.75rem;
	background: ${(p) => p.theme.bgCard};
	border: 1px solid ${(p) => p.theme.borderCard};
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
	font-weight: 700;
	color: #fff;
	background: linear-gradient(135deg, #7e56ff, #00b2ff);
`;

const StepTitle = styled.h3`
	font-size: 1.05rem;
	font-weight: 700;
	color: ${(p) => p.theme.text};
	margin: 0;
`;

const StepDesc = styled.p`
	font-size: 0.85rem;
	line-height: 1.6;
	color: ${(p) => p.theme.textSecondary};
	margin: 0;
`;

/* -- FAQ Accordion -- */

const FaqList = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 800px;
	margin: 0 auto;
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

/* -- Requirements -- */

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
