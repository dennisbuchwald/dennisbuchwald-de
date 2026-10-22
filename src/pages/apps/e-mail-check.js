import { useState } from "react";
import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import FinalCTA from "../../../components/FinalCTA";
import { FaGithub, FaCheck, FaTimes, FaArrowRight } from "react-icons/fa";

const SITE_URL = "https://www.dennisbuchwald.de";
const APP_URL = "https://e-mail-check.de/";
const REPO_URL = "https://github.com/dennisbuchwald/e-mail-check.de";

const stations = [
	{
		title: "01 · SPF: Absender",
		desc: "Darf dein Server überhaupt Mails für deine Domain verschicken? Das steht im SPF-Eintrag, und genau den prüft der Test zuerst.",
	},
	{
		title: "02 · DKIM: Unterschrift",
		desc: "Ist deine Mail digital unterschrieben und unterwegs unverändert geblieben? Fehlt die Unterschrift, werden Gmail und Outlook misstrauisch.",
	},
	{
		title: "03 · DMARC: Schutzregel",
		desc: "Was passiert mit gefälschten Mails, die so tun, als kämen sie von dir? Ohne DMARC entscheidet das jeder Empfänger selbst.",
	},
	{
		title: "04 · Sperrlisten & rDNS: Server-Ruf",
		desc: "Die IP deines Servers wird gegen zehn Sperrlisten wie Spamhaus und SpamCop geprüft, dazu Positivlisten und ein sauberer Rückwärts-Name.",
	},
	{
		title: "05 · TLS: Transport",
		desc: "Kam deine Mail verschlüsselt an, und über welche Server lief sie? Der Weg der Mail wird Station für Station sichtbar.",
	},
	{
		title: "06 · Spamfilter & Inhalt: Posteingang",
		desc: "Wie viele Spam-Punkte sammelt deine Mail, und was löst sie aus? Derselbe Blick, den der Spamfilter beim Empfänger hat.",
	},
];

const extras = [
	{
		title: "Vom Befund zur Lösung",
		desc: "Jeder rote Prüfpunkt kommt mit dem fertigen DNS-Eintrag zum Kopieren. Der Test erkennt, wo deine Domain liegt, und zeigt die passende Anleitung.",
	},
	{
		title: "Anleitungen für deinen Anbieter",
		desc: "Schritt für Schritt für IONOS, STRATO, ALL-INKL, Hetzner, Google Workspace und Microsoft 365. Ohne Fachchinesisch, mit dem Wert, der wirklich ins Feld gehört.",
	},
	{
		title: "Jetzt prüfen per Live-DNS",
		desc: "Eintrag gesetzt? Ein Klick fragt den DNS live ab und zeigt sofort, ob die Änderung schon sichtbar ist. Kein Warten auf die nächste Testmail.",
	},
	{
		title: "Bericht für Kunden teilen",
		desc: "Das Ergebnis lässt sich als Link verschicken, 7 Tage gültig. Gemacht für alle, die Mails für Kunden einrichten und den Beweis gleich mitschicken wollen.",
	},
	{
		title: "Checks ohne Testmail",
		desc: "SPF-Check, DKIM-Check (auch ohne Selektor) und DMARC-Check direkt im Browser. Domain eintippen, fertig.",
	},
	{
		title: "Datenschutz, der den Namen verdient",
		desc: "Server in Deutschland, keine Cookies, kein Konto. Die Testmail wird nur im Arbeitsspeicher ausgewertet und sofort gelöscht, die Zusammenfassung nach 7 Tagen.",
	},
];

const compareRows = [
	{ feature: "Kostenlose Tests", ours: "ohne Tageslimit", others: "3 in 24 Stunden" },
	{ feature: "Konto nötig", ours: false, others: false },
	{ feature: "Sprache", ours: "Deutsch, Klartext", others: "20+ Sprachen, Start Englisch" },
	{ feature: "Anleitung je Anbieter", ours: true, others: false },
	{ feature: "DNS-Eintrag zum Kopieren", ours: true, others: false },
	{ feature: "Ergebnis als Link teilen", ours: "7 Tage", others: "7 Tage" },
	{ feature: "SPF-, DKIM-, DMARC-Check ohne Testmail", ours: true, others: "SPF, DKIM" },
	{ feature: "Serverstandort", ours: "Deutschland", others: "nicht angegeben" },
	{ feature: "Quellcode", ours: "Open Source", others: "nicht öffentlich" },
];

const deepLinks = [
	{ label: "Mail-Tester starten", href: "https://e-mail-check.de/" },
	{ label: "SPF-Check", href: "https://e-mail-check.de/spf-check" },
	{ label: "DKIM-Check", href: "https://e-mail-check.de/dkim-check" },
	{ label: "DMARC-Check", href: "https://e-mail-check.de/dmarc-check" },
	{ label: "Mail-Tester-Alternative", href: "https://e-mail-check.de/mail-tester-alternative" },
	{ label: "Warum Mails im Spam landen", href: "https://e-mail-check.de/wissen/mails-landen-im-spam" },
	{ label: "SPF, DKIM und DMARC erklärt", href: "https://e-mail-check.de/wissen/spf-dkim-dmarc" },
	{ label: "Anleitungen für alle Anbieter", href: "https://e-mail-check.de/anleitung" },
];

const faqs = [
	{
		q: "Was ist ein Mail-Tester?",
		a: "Ein Mail-Tester ist eine Testadresse, die deine Mail empfängt wie ein ganz normales Postfach. Dabei prüft er, ob deine Domain den Absender bestätigt (SPF), ob die Mail unterschrieben ist (DKIM), ob es eine Schutzregel gibt (DMARC), ob dein Server auf einer Sperrliste steht und wie der Inhalt auf Spamfilter wirkt. Daraus entsteht ein Score von 0 bis 10.",
	},
	{
		q: "Ist e-mail-check.de wirklich kostenlos?",
		a: "Ja, ohne Tageslimit und ohne Konto. Damit niemand den Dienst mit Massen-Anfragen lahmlegt, sind höchstens 10 Tests pro Stunde möglich. Beim normalen Ablauf aus Testen, Ändern und erneut Testen kommst du da nicht hin.",
	},
	{
		q: "Was passiert mit meiner Testmail?",
		a: "Der Inhalt wird nur im Arbeitsspeicher ausgewertet und direkt danach gelöscht. Gespeichert wird nur die Zusammenfassung mit Score und Prüfpunkten, und auch die verschwindet nach 7 Tagen. Die Server stehen in Deutschland.",
	},
	{
		q: "Kann ich auch ein Kontaktformular oder Newsletter-Tool testen?",
		a: "Ja. Trag die Testadresse einfach als Empfänger im Formular oder im Newsletter-Tool ein. Gerade WordPress-Formulare verschicken oft über den Webserver statt über das echte Postfach, und genau das zeigt der Test.",
	},
	{
		q: "Warum noch ein Mail-Tester?",
		a: "Weil die bekannten Tools für Techniker gebaut sind. Sie zeigen Regelnamen des Spamfilters, aber nicht, wo man bei IONOS klicken muss. e-mail-check.de übersetzt jeden Befund in einen konkreten nächsten Schritt.",
	},
	{
		q: "Ist der Code öffentlich?",
		a: "Ja, der Quellcode liegt auf GitHub unter der AGPL-3.0. Wer prüfen will, was mit seiner Testmail passiert, kann es nachlesen.",
	},
];

const appSchema = {
	"@context": "https://schema.org",
	"@type": "WebApplication",
	name: "e-mail-check.de",
	alternateName: "Mail-Tester von e-mail-check.de",
	description:
		"Deutscher Mail-Tester: Testmail schicken und in 30 Sekunden einen Score von 0 bis 10 bekommen. Prüft SPF, DKIM, DMARC, Sperrlisten, TLS und Spamfilter, mit Anleitung für den eigenen Anbieter. Kostenlos, ohne Konto, Server in Deutschland, Open Source.",
	applicationCategory: "UtilitiesApplication",
	operatingSystem: "Web",
	inLanguage: "de-DE",
	url: APP_URL,
	sameAs: [REPO_URL],
	license: "https://www.gnu.org/licenses/agpl-3.0.html",
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

const breadcrumbSchema = {
	"@context": "https://schema.org",
	"@type": "BreadcrumbList",
	itemListElement: [
		{ "@type": "ListItem", position: 1, name: "Apps & Plugins", item: `${SITE_URL}/apps` },
		{ "@type": "ListItem", position: 2, name: "e-mail-check.de", item: `${SITE_URL}/apps/e-mail-check` },
	],
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

const EmailCheck = () => {
	return (
		<div id="top">
			<Head>
				<title>e-mail-check.de - Mail-Tester: Landen deine E-Mails im Spam?</title>
				<meta
					name="description"
					content="e-mail-check.de ist der deutsche Mail-Tester von Dennis Buchwald: Testmail schicken, Score von 0 bis 10, SPF, DKIM, DMARC und Sperrlisten in Klartext, mit Anleitung für deinen Anbieter. Kostenlos, ohne Konto, Server in Deutschland."
				/>
				<link rel="canonical" href={`${SITE_URL}/apps/e-mail-check`} />
				<meta property="og:title" content="e-mail-check.de - der deutsche Mail-Tester" />
				<meta property="og:description" content="Landen deine Mails im Spam? Testmail schicken, in 30 Sekunden Score und Klartext-Anleitung bekommen. Kostenlos, ohne Konto, Server in Deutschland." />
				<meta property="og:url" content={`${SITE_URL}/apps/e-mail-check`} />
				<meta property="og:type" content="website" />
				<meta property="og:image" content="https://e-mail-check.de/og.png" />
				<meta name="twitter:title" content="e-mail-check.de - der deutsche Mail-Tester" />
				<meta name="twitter:description" content="SPF, DKIM, DMARC und Sperrlisten in Klartext prüfen. Kostenlos und ohne Konto." />
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify([appSchema, faqSchema, breadcrumbSchema]) }}
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
							<span>e-mail-check.de</span>
						</Breadcrumb>
						<HeroIconRow>
							<HeroIcon src="/apps/icons/emailcheck-app.svg" alt="e-mail-check.de" />
							<Eyebrow>Neu · Web-App</Eyebrow>
						</HeroIconRow>
						<Title>Landen deine Mails im Spam? In 30 Sekunden weißt du es.</Title>
						<Intro>
							<a href={APP_URL}>e-mail-check.de</a> ist ein kostenloser
							Mail-Tester auf Deutsch. Du schickst eine ganz normale Mail an
							eine Testadresse und bekommst einen Score von 0 bis 10, dazu
							jeden Befund in Klartext und den Weg zur Lösung.
						</Intro>
						<HeroActions>
							<PrimaryButton href={APP_URL}>
								Mail-Tester öffnen <FaArrowRight />
							</PrimaryButton>
							<SecondaryButton href={REPO_URL} target="_blank" rel="noopener noreferrer">
								<FaGithub /> Quellcode auf GitHub
							</SecondaryButton>
						</HeroActions>
					</Hero>
					<GradientDivider />
				</HeroWrapper>

				{/* ── PROBLEM ── */}
				<Section>
					<ProblemText>
						<SectionHeading>„DKIM fail“ hilft niemandem weiter</SectionHeading>
						<ProblemDesc>
							Die Frage kommt immer wieder: Warum landen meine Mails im Spam?
							Die Antwort steckt fast immer in drei DNS-Einträgen, SPF, DKIM
							und DMARC. Nur zeigen die bekannten Mail-Tester das in der
							Sprache von Mail-Technikern, auf Englisch, und nach drei Tests
							am Tag ist Schluss.
						</ProblemDesc>
						<ProblemDesc>
							Wer gerade etwas repariert, will aber nach jeder Änderung neu
							testen. Und wer kein Techniker ist, will nicht wissen, wie die
							Regel im Spamfilter heißt, sondern wo er bei seinem Anbieter
							klicken muss.
						</ProblemDesc>
						<ProblemDesc>
							<strong>
								Deshalb übersetzt e-mail-check.de jeden Befund in einen
								konkreten nächsten Schritt.
							</strong>{" "}
							Mit fertigem DNS-Eintrag zum Kopieren, Anleitung für den
							eigenen Anbieter und einem Knopf, der sofort prüft, ob die
							Änderung schon wirkt.
						</ProblemDesc>
					</ProblemText>
				</Section>

				{/* ── STATIONEN ── */}
				<Section>
					<SectionHeading>Sechs Stationen bis ins Postfach</SectionHeading>
					<SectionSub>
						Jede Testmail läuft durch dieselben Prüfungen wie beim Empfänger.
						Der Test zeigt, an welcher Station sie hängen bleibt.
					</SectionSub>
					<FeatureGrid>
						{stations.map((f) => (
							<FeatureCard key={f.title}>
								<FeatureTitle>{f.title}</FeatureTitle>
								<FeatureDesc>{f.desc}</FeatureDesc>
							</FeatureCard>
						))}
					</FeatureGrid>
				</Section>

				{/* ── EXTRAS ── */}
				<Section>
					<SectionHeading>Mehr als eine Zahl</SectionHeading>
					<FeatureGrid>
						{extras.map((f) => (
							<FeatureCard key={f.title}>
								<FeatureTitle>{f.title}</FeatureTitle>
								<FeatureDesc>{f.desc}</FeatureDesc>
							</FeatureCard>
						))}
					</FeatureGrid>
				</Section>

				{/* ── VERGLEICH ── */}
				<Section>
					<SectionHeading>e-mail-check.de und mail-tester.com</SectionHeading>
					<CompareWrapper>
						<CompareTable>
							<thead>
								<tr>
									<Th></Th>
									<ThHighlight>e-mail-check.de</ThHighlight>
									<Th>mail-tester.com</Th>
								</tr>
							</thead>
							<tbody>
								{compareRows.map((row) => (
									<tr key={row.feature}>
										<TdFeature>{row.feature}</TdFeature>
										<TdHighlight><CellValue value={row.ours} highlight /></TdHighlight>
										<Td><CellValue value={row.others} /></Td>
									</tr>
								))}
							</tbody>
						</CompareTable>
					</CompareWrapper>
					<TableNote>
						Stand der Angaben zu mail-tester.com: 21.10.2026, laut deren FAQ.
						Fair bleibt fair: mail-tester.com ist etabliert und prüft gründlich.
						Den ausführlichen Vergleich gibt es auf der Seite{" "}
						<a href="https://e-mail-check.de/mail-tester-alternative">
							Mail-Tester-Alternative
						</a>
						.
					</TableNote>
				</Section>

				{/* ── ECKDATEN ── */}
				<Section>
					<SectionHeading>Eckdaten</SectionHeading>
					<ReqGrid>
						<ReqItem><ReqLabel>Preis</ReqLabel><ReqValue>Kostenlos</ReqValue></ReqItem>
						<ReqItem><ReqLabel>Ergebnis</ReqLabel><ReqValue>30 Sek.</ReqValue></ReqItem>
						<ReqItem><ReqLabel>Konto</ReqLabel><ReqValue>Keins</ReqValue></ReqItem>
						<ReqItem><ReqLabel>Server</ReqLabel><ReqValue>Deutschland</ReqValue></ReqItem>
						<ReqItem><ReqLabel>Lizenz</ReqLabel><ReqValue>AGPL-3.0</ReqValue></ReqItem>
					</ReqGrid>
				</Section>

				{/* ── DIREKT ZU DEN TOOLS ── */}
				<Section>
					<SectionHeading>Direkt zu den Tools</SectionHeading>
					<DeepLinkGrid>
						{deepLinks.map((l) => (
							<DeepLink key={l.href} href={l.href}>
								{l.label} <FaArrowRight />
							</DeepLink>
						))}
					</DeepLinkGrid>
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

				{/* ── SEO KEYWORD SEKTIONEN ── */}
				<Section>
					<KeywordGrid>
						<KeywordItem>
							<KeywordTitle>E-Mails landen im Spam: was tun?</KeywordTitle>
							<KeywordText>
								Erst messen, dann reparieren. Eine Testmail zeigt, ob SPF, DKIM
								oder DMARC fehlen, ob der Server auf einer Sperrliste steht
								oder ob der Inhalt den Spamfilter reizt. Meist ist es ein
								fehlender DNS-Eintrag, und der ist in fünf Minuten gesetzt.
							</KeywordText>
						</KeywordItem>
						<KeywordItem>
							<KeywordTitle>SPF, DKIM und DMARC prüfen</KeywordTitle>
							<KeywordText>
								Die drei Einträge entscheiden, ob Gmail, Outlook und GMX deiner
								Mail vertrauen. Mit dem Mail-Tester prüfst du alle drei an einer
								echten Mail, mit den Schnell-Checks auch ohne Testmail direkt
								über die Domain.
							</KeywordText>
						</KeywordItem>
						<KeywordItem>
							<KeywordTitle>Mail-Tester auf Deutsch</KeywordTitle>
							<KeywordText>
								Durchgehend Deutsch, durchgehend Klartext: Jeder Prüfpunkt hat
								eine Ampel, eine verständliche Erklärung und den Fachbegriff
								nur klein darunter. Gemacht für Selbstständige, Vereine und
								kleine Firmen, nicht für Postmaster.
							</KeywordText>
						</KeywordItem>
						<KeywordItem>
							<KeywordTitle>Kontaktformular und Newsletter testen</KeywordTitle>
							<KeywordText>
								Die Testadresse funktioniert überall, wo du einen Empfänger
								eintragen kannst. So siehst du, ob das WordPress-Formular oder
								das Newsletter-Tool sauber über deine Domain verschickt, oder
								ob es heimlich am Postfach vorbei sendet.
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

export default EmailCheck;

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
	font-size: 2.75rem; font-weight: 800; color: #111; line-height: 1.15; max-width: 760px; margin: 0;
	@media screen and (max-width: 768px) { font-size: 2rem; }
`;

const Intro = styled.p`
	font-size: 1.15rem; line-height: 1.7; color: #444; max-width: 640px; margin: 0;
	a { color: #111; font-weight: 600; text-decoration-color: #ff3c6f; text-underline-offset: 3px; }
	@media screen and (max-width: 768px) { font-size: 1.05rem; }
`;

const HeroActions = styled.div` display: flex; gap: 1rem; margin-top: 0.5rem; flex-wrap: wrap; `;

const PrimaryButton = styled.a`
	display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.85rem 1.75rem;
	background: #111; color: #fff; font-size: 1rem; font-weight: 600; border-radius: 999px;
	text-decoration: none; transition: all 0.2s ease;
	&:hover { background: #333; transform: translateY(-2px); }
`;

const SecondaryButton = styled.a`
	display: inline-flex; align-items: center; gap: 0.5rem; padding: 0.85rem 1.75rem;
	background: transparent; color: #111; font-size: 1rem; font-weight: 600; border-radius: 999px;
	border: 1.5px solid #ddd; text-decoration: none; transition: all 0.2s ease;
	&:hover { border-color: #111; transform: translateY(-2px); }
`;

const DeepLinkGrid = styled.div`
	display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem;
	@media (max-width: 1024px) { grid-template-columns: repeat(2, 1fr); }
	@media (max-width: 500px) { grid-template-columns: 1fr; }
`;

const DeepLink = styled.a`
	display: flex; justify-content: space-between; align-items: center; gap: 0.75rem;
	padding: 1.1rem 1.25rem; font-size: 0.95rem; font-weight: 600; text-decoration: none;
	color: ${(p) => p.theme.text}; background: ${(p) => p.theme.bgCard};
	border: 1px solid ${(p) => p.theme.borderCard}; border-radius: 1rem;
	transition: border-color 0.2s ease, transform 0.2s ease;
	svg { font-size: 0.7rem; color: ${(p) => p.theme.accent}; flex-shrink: 0; }
	&:hover { border-color: ${(p) => p.theme.borderCardHover}; transform: translateY(-2px); }
`;

const Section = styled.section`
	max-width: calc(1200px + 8rem); width: 100%; margin: 0 auto; padding: 5rem 4rem;
	@media screen and (max-width: 768px) { padding: 3rem 1.5rem; }
`;

const SectionHeading = styled.h2`
	font-size: 2rem; font-weight: 700; color: ${(p) => p.theme.text}; margin: 0 0 1.5rem;
	@media screen and (max-width: 768px) { font-size: 1.5rem; }
`;

const SectionSub = styled.p`
	font-size: 1.05rem; line-height: 1.7; color: ${(p) => p.theme.textSecondary};
	max-width: 700px; margin: -0.75rem 0 1.75rem;
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

const FeatureTitle = styled.h3` font-size: 1.05rem; font-weight: 700; color: ${(p) => p.theme.text}; margin: 0 0 0.5rem; `;
const FeatureDesc = styled.p` font-size: 0.9rem; line-height: 1.6; color: ${(p) => p.theme.textSecondary}; margin: 0; `;

const CompareWrapper = styled.div`
	overflow-x: auto; margin-top: 1.5rem;
	border: 1px solid ${(p) => p.theme.borderCard}; border-radius: 1.25rem;
`;

const CompareTable = styled.table` width: 100%; border-collapse: collapse; min-width: 560px; `;

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

const TableNote = styled.p`
	font-size: 0.85rem; line-height: 1.6; color: ${(p) => p.theme.textMuted};
	max-width: 700px; margin: 1rem 0 0;
	a { color: ${(p) => p.theme.accent}; }
`;

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
	max-height: ${(p) => (p.$open ? "320px" : "0")}; overflow: hidden; transition: max-height 0.3s ease;
`;

const AccordionText = styled.p`
	font-size: 0.95rem; line-height: 1.65; color: ${(p) => p.theme.textSecondary}; margin: 0; padding-bottom: 1.25rem;
`;

const ReqGrid = styled.div`
	display: grid; grid-template-columns: repeat(5, 1fr); gap: 1.5rem; margin-top: 1.5rem;
	@media (max-width: 1024px) { grid-template-columns: repeat(3, 1fr); }
	@media (max-width: 700px) { grid-template-columns: repeat(2, 1fr); }
`;

const ReqItem = styled.div`
	display: flex; flex-direction: column; gap: 0.25rem; padding: 1.5rem;
	background: ${(p) => p.theme.bgCard}; border: 1px solid ${(p) => p.theme.borderCard};
	border-radius: 1rem; text-align: center;
`;

const ReqLabel = styled.span` font-size: 0.8rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: ${(p) => p.theme.textMuted}; `;
const ReqValue = styled.span` font-size: 1.25rem; font-weight: 700; color: ${(p) => p.theme.text}; `;

const KeywordGrid = styled.div`
	display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem;
	@media (max-width: 768px) { grid-template-columns: 1fr; }
`;

const KeywordItem = styled.div` display: flex; flex-direction: column; gap: 0.5rem; `;
const KeywordTitle = styled.h3` font-size: 1.1rem; font-weight: 700; color: ${(p) => p.theme.text}; margin: 0; `;
const KeywordText = styled.p` font-size: 0.95rem; line-height: 1.7; color: ${(p) => p.theme.textSecondary}; margin: 0; `;
