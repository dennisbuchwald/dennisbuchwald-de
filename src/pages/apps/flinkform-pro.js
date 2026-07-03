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
	FaCreditCard,
	FaCalculator,
} from "react-icons/fa";

const SITE_URL = "https://www.dennisbuchwald.de";

const proModules = [
	{
		icon: <FaCreditCard />,
		title: "Stripe Payments",
		desc: "Zahlungen direkt im Formular: Kreditkarte, SEPA-Lastschrift, Apple Pay, Google Pay und Link über das Stripe Payment Element. Fester Betrag oder Produktauswahl, serverseitige Verifizierung, Zahlungsstatus direkt in der Einreichung. Kartendaten berühren nie deinen Server.",
	},
	{
		icon: <FaCalculator />,
		title: "Berechnungsfelder",
		desc: "Angebotsrechner und Konfiguratoren direkt im Formular: Formeln wie (Menge × 49,90) + Setup rechnen live, während der Besucher tippt. Felder per Dropdown einfügen, serverseitig sicher nachgerechnet.",
	},
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
		desc: "Besucher können Dateien an Formulare anhängen — auf Wunsch mehrere pro Feld (bis zu 10, ideal für Bewerbungen). Dateitypen und Maximalgröße konfigurierbar, Größen-Check schon vor dem Absenden. Content-Sniffing, randomisierte Dateinamen, geschützter Upload-Ordner, DSGVO-Löschkaskade.",
	},
	{
		icon: <FaNewspaper />,
		title: "Newsletter-Anbindung",
		desc: "Brevo, Mailchimp und CleverReach direkt integriert. Double-Opt-in, Pflicht-Einwilligungsfeld und asynchroner Versand. Kein Extra-Plugin, keine Zapier-Umwege.",
	},
	{
		icon: <FaFileExport />,
		title: "CSV-Export",
		desc: "Gefilterte Einreichungen als CSV exportieren, inklusive Datumsbereich und Zahlungsdaten (Status, Betrag, Währung). Excel-kompatibel, direkt aus dem WordPress-Admin, ein Klick.",
	},
	{
		icon: <FaPaintBrush />,
		title: "Custom CSS",
		desc: "Per-Formular CSS direkt im Editor schreiben. Für Pixel-perfekte Anpassungen, die über die Theme-Einstellungen hinausgehen.",
	},
];

const highlights = [
	"Stripe Payments: Kreditkarte, SEPA-Lastschrift, Apple Pay, Google Pay, Link",
	"Fester Betrag oder Produktauswahl mit individuellen Preisen",
	"Zahlungsstatus, Betrag und Zahlart direkt in der Einreichung sichtbar",
	"Automatische Stripe-Quittung per E-Mail an den Zahlenden",
	"Berechnungsfelder: Angebotsrechner mit Live-Vorschau, serverseitig verifiziert",
	"Mehrfach-Upload: bis zu 10 Dateien pro Feld, Größen-Check vor dem Absenden",
	"SMTP mit 7 Provider-Presets und verschlüsselten Credentials",
	"Webhooks mit Retry-Logik und vollständigem Delivery-Log",
	"Newsletter-Anbindung: Brevo, Mailchimp, CleverReach",
	"CSV-Export mit Datumsbereich und Zahlungsspalten",
	"Custom CSS pro Formular im Editor",
	"Doppelklick-Schutz: keine doppelten Einreichungen, Mails oder Zahlungen",
	"SSRF-gehärtet: Webhook-Requests werden gegen unsichere URLs geprüft",
	"AES-256-Verschlüsselung für alle gespeicherten Zugangsdaten",
	"Komplette DSGVO-Abdeckung: Privacy-Tools, Eraser-Kaskaden, Daten-Export",
	"Saubere Bridge-Architektur: Pro verändert keine Core-Dateien",
];

const compareRows = [
	{ feature: "Stripe Payments im Formular", pro: true, wpforms: "Ab 199 $/J.", gravity: "Add-on nötig", woo: true },
	{ feature: "SEPA, Apple Pay & Google Pay", pro: true, wpforms: "Teils", gravity: "Add-on", woo: "Plugin" },
	{ feature: "Kein Shop/Checkout nötig", pro: true, wpforms: true, gravity: true, woo: false },
	{ feature: "Berechnungsfelder", pro: true, wpforms: "Ab 199 $/J.", gravity: true, woo: false },
	{ feature: "Mehrfach-Datei-Upload", pro: true, wpforms: "Ab 49 $/J.", gravity: true, woo: false },
	{ feature: "Block-Editor nativ", pro: true, wpforms: false, gravity: false, woo: false },
	{ feature: "Webhooks mit Retry-Logik", pro: true, wpforms: "Ab 199 $/J.", gravity: "Add-on", woo: false },
	{ feature: "SMTP + Sende-Log", pro: true, wpforms: false, gravity: false, woo: false },
	{ feature: "Newsletter-Integration", pro: true, wpforms: "Ab 199 $/J.", gravity: "Add-on", woo: "Plugin" },
	{ feature: "DSGVO-konform (kein reCAPTCHA)", pro: true, wpforms: false, gravity: false, woo: false },
	{ feature: "Preis", pro: "Ab 59 €/J.", wpforms: "Ab 199 $/J.", gravity: "Ab 59 $/J.", woo: "Kostenlos*" },
];

const pricingPlans = [
	{
		name: "Single",
		price: "59",
		sites: "1 Website",
		perSite: "59 € pro Website",
		desc: "Für die eigene Website.",
		featured: false,
	},
	{
		name: "Studio",
		price: "99",
		sites: "3 Websites",
		perSite: "33 € pro Website",
		desc: "Für Freelancer mit den ersten Kundenprojekten.",
		featured: false,
	},
	{
		name: "Agency",
		price: "149",
		sites: "Bis zu 25 Websites",
		perSite: "Unter 6 € pro Website",
		desc: "Nur 50 € mehr als Studio - für 22 zusätzliche Websites. Eine Lizenz für alle Kundenprojekte.",
		featured: true,
	},
	{
		name: "Unlimited",
		price: "299",
		sites: "Unbegrenzte Websites",
		perSite: "Keine Limits",
		desc: "Für große Agenturen und Power-User.",
		featured: false,
	},
];

const faqs = [
	{
		q: "Was kostet Flinkform Pro?",
		a: "Flinkform Pro kostet 59 Euro pro Jahr für eine Website, 99 Euro für 3 Websites (Studio), 149 Euro für bis zu 25 Websites (Agency) und 299 Euro ohne Site-Limit. Alle Pläne enthalten sämtliche Pro-Features - die Staffelung richtet sich nur nach der Anzahl der Websites. Dazu gibt es eine 14-Tage-Geld-zurück-Garantie.",
	},
	{
		q: "Welche Zahlungsarten unterstützt das Payment-Feld?",
		a: "Kreditkarte, SEPA-Lastschrift, Apple Pay, Google Pay und Stripe Link über das Stripe Payment Element. Welche Zahlarten deinen Besuchern angezeigt werden, steuerst du in deinem Stripe-Dashboard. SEPA-Zahlungen werden als 'in Bearbeitung' angenommen und automatisch bestätigt, sobald Stripe die Abbuchung meldet.",
	},
	{
		q: "Brauche ich ein Stripe-Konto?",
		a: "Ja, aber es ist kostenlos und in zwei Minuten erstellt. Du bekommst sofort Test-Keys zum Ausprobieren. Im Live-Betrieb gehen Zahlungen direkt auf dein Stripe-Konto, Flinkform Pro ist nie dazwischen.",
	},
	{
		q: "Sind die Zahlungen PCI-konform?",
		a: "Ja. Zahlungsdaten werden ausschliesslich von Stripe verarbeitet (Stripe Payment Element). Sie berühren nie deinen Server. Der Server verifiziert nur, ob die Zahlung bei Stripe bestätigt wurde und ob Betrag und Währung zum Formular passen, bevor die Einreichung gespeichert wird.",
	},
	{
		q: "Was passiert, wenn die Zahlung fehlschlägt?",
		a: "Das Formular wird nicht abgeschickt. Der Besucher sieht eine Fehlermeldung direkt am Kartenfeld und kann es erneut versuchen. Keine Einreichung ohne bestätigte Zahlung.",
	},
	{
		q: "Brauche ich Flinkform (kostenlos), um Pro zu nutzen?",
		a: "Ja. Flinkform Pro ist ein Add-on, das auf dem kostenlosen Flinkform-Plugin aufbaut. Du installierst zuerst das kostenlose Plugin und aktivierst dann Pro als Erweiterung. Alle Free-Features bleiben erhalten.",
	},
	{
		q: "Ist Flinkform Pro DSGVO-konform?",
		a: "Ja. Kartendaten laufen nur über Stripe, nicht über deinen Server. Alle Pro-Module sind in die WordPress-Privacy-Tools integriert: Datenexport, Datenlöschung, Privacy-Policy-Hinweise. API-Keys werden AES-256-verschlüsselt gespeichert.",
	},
	{
		q: "Was passiert mit meinen Daten, wenn ich Pro deaktiviere?",
		a: "Nichts. Deine Webhooks, SMTP-Einstellungen, Stripe-Keys und Upload-Dateien bleiben gespeichert. Erst bei einer kompletten Deinstallation werden die Pro-Datenbanktabellen und Upload-Dateien entfernt.",
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
		"Premium Add-on für Flinkform: Stripe Payments (Kreditkarte, SEPA, Apple Pay, Google Pay) direkt im Formular, Berechnungsfelder, Webhooks, Mehrfach-Datei-Upload, SMTP, Newsletter und Custom CSS. Für professionelle WordPress-Formulare.",
	applicationCategory: "Plugin",
	operatingSystem: "WordPress",
	url: `${SITE_URL}/apps/flinkform-pro`,
	offers: {
		"@type": "AggregateOffer",
		lowPrice: "59",
		highPrice: "299",
		priceCurrency: "EUR",
		offerCount: "4",
	},
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
					Flinkform Pro - Stripe-Zahlungen mit SEPA, Berechnungsfelder und Webhooks im WordPress-Formular
				</title>
				<meta
					name="description"
					content="Flinkform Pro: Stripe Payments mit Kreditkarte, SEPA, Apple Pay und Google Pay direkt im Formular. Berechnungsfelder, Webhooks ins CRM, Mehrfach-Upload, SMTP, Newsletter. Ab 59 Euro pro Jahr."
				/>
				<link rel="canonical" href={`${SITE_URL}/apps/flinkform-pro`} />
				<meta property="og:title" content="Flinkform Pro - Payments mit SEPA, Berechnungsfelder, Webhooks und mehr" />
				<meta property="og:description" content="Stripe-Zahlungen mit SEPA und Wallets, Berechnungsfelder, Webhooks ins CRM, SMTP, Mehrfach-Upload und Newsletter: ein Add-on statt fuenf Plugins. Ab 59 Euro pro Jahr." />
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
							Zahlungen, Webhooks, SMTP, Uploads. Ein Add-on statt fünf Plugins.
						</Title>
						<Intro>
							Flinkform deckt Formulare ab. Aber sobald es
							professionell wird, brauchst du mehr: Zahlungen direkt
							im Formular - per Kreditkarte, SEPA-Lastschrift oder
							Apple Pay -, Angebotsrechner mit Live-Berechnung,
							Einreichungen automatisch ins CRM, zuverlässigen
							Mailversand, Datei-Uploads und Newsletter-Anbindung.
							Flinkform Pro packt das alles in ein einziges Add-on.
						</Intro>
						<HeroActions>
							<PrimaryButton
								href="#anfrage"
							>
								<FaEnvelope /> Unverbindlich anfragen
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
							Ein Kontaktformular reicht? Nicht lange.
						</SectionHeading>
						<ProblemDesc>
							Flinkform löst das Formular-Problem. Aber dann kommen
							die echten Anforderungen:
						</ProblemDesc>
						<NeedsList>
							<NeedItem>
								<NeedIcon><FaCreditCard /></NeedIcon>
								<span>Buchungsformular mit Anzahlung. Der Kunde will direkt im Formular bezahlen - am liebsten per SEPA oder Apple Pay.</span>
							</NeedItem>
							<NeedItem>
								<NeedIcon><FaCalculator /></NeedIcon>
								<span>Angebotsrechner: Der Preis soll sich live aus Menge und Optionen berechnen.</span>
							</NeedItem>
							<NeedItem>
								<NeedIcon><FaExchangeAlt /></NeedIcon>
								<span>Einreichungen sollen automatisch ins CRM oder Projektmanagement fliessen.</span>
							</NeedItem>
							<NeedItem>
								<NeedIcon><FaCloud /></NeedIcon>
								<span>Der Hoster verschluckt Mails. Du brauchst einen eigenen SMTP-Server.</span>
							</NeedItem>
							<NeedItem>
								<NeedIcon><FaCloudUploadAlt /></NeedIcon>
								<span>Bewerbungsformular: Lebenslauf und Anschreiben als PDF hochladen.</span>
							</NeedItem>
							<NeedItem>
								<NeedIcon><FaNewspaper /></NeedIcon>
								<span>Newsletter-Anmeldung direkt im Kontaktformular. Ohne Zapier-Umwege.</span>
							</NeedItem>
						</NeedsList>
						<ProblemDesc>
							Normalerweise heisst das: fünf weitere Plugins installieren.
							Fünf Konfigurationen, fünf Update-Zyklen, fünf potenzielle
							Konflikte. Bei WPForms zahlst du für diese Features 199 Dollar
							pro Jahr.
						</ProblemDesc>
						<ProblemDesc>
							<strong>Flinkform Pro packt das alles in ein Add-on.</strong> Nahtlos
							integriert, DSGVO-konform, aus einer Hand.
						</ProblemDesc>
					</ProblemText>
				</Section>

				{/* -- 7 MODULE -- */}
				<Section>
					<SectionHeading>
						Acht Module. Ein Add-on.
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
						Flinkform Pro vs. WPForms, Gravity Forms und WooCommerce
					</SectionHeading>
					<CompareWrapper>
						<CompareTable>
							<thead>
								<tr>
									<Th></Th>
									<ThHighlight>Flinkform Pro</ThHighlight>
									<Th>WPForms</Th>
									<Th>Gravity</Th>
									<Th>Woo</Th>
								</tr>
							</thead>
							<tbody>
								{compareRows.map((row) => (
									<tr key={row.feature}>
										<TdFeature>{row.feature}</TdFeature>
										<TdHighlight><CellValue value={row.pro} /></TdHighlight>
										<Td><CellValue value={row.wpforms} /></Td>
										<Td><CellValue value={row.gravity} /></Td>
										<Td><CellValue value={row.woo} /></Td>
									</tr>
								))}
							</tbody>
						</CompareTable>
					</CompareWrapper>
					<CompareNote>
						* WooCommerce ist kostenlos, aber ein kompletter Shop. Für ein
						einzelnes Zahlungsformular brauchst du trotzdem ein Payment-Gateway-Plugin
						und eine Checkout-Konfiguration.
					</CompareNote>
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

				{/* -- PREISE -- */}
				<Section id="preise">
					<SectionHeading>Preise</SectionHeading>
					<SectionSub>
						Alle Pläne enthalten sämtliche Pro-Features - gestaffelt wird
						nur nach der Anzahl deiner Websites. Jährliche Abrechnung,
						inklusive Updates und Support.
					</SectionSub>
					<PricingGrid>
						{pricingPlans.map((plan) => (
							<PricingCard key={plan.name} $featured={plan.featured}>
								{plan.featured && <PricingBadge>Bestseller</PricingBadge>}
								<PricingName>{plan.name}</PricingName>
								<PricingPrice>
									{plan.price} €<PricingPeriod>/Jahr</PricingPeriod>
								</PricingPrice>
								<PricingSites>{plan.sites}</PricingSites>
								<PricingPerSite $featured={plan.featured}>{plan.perSite}</PricingPerSite>
								<PricingDesc>{plan.desc}</PricingDesc>
								<PricingFeatures>
									<PricingFeature><FaCheck /> Alle 8 Pro-Module</PricingFeature>
									<PricingFeature><FaCheck /> Updates & Support</PricingFeature>
								</PricingFeatures>
								<PricingButton href="#anfrage" $featured={plan.featured}>
									Anfragen
								</PricingButton>
							</PricingCard>
						))}
					</PricingGrid>
					<PricingTrustRow>
						<PricingTrustItem><FaCheck /> 14 Tage Geld-zurück-Garantie</PricingTrustItem>
						<PricingTrustItem><FaCheck /> Jeder Plan enthält alle Features</PricingTrustItem>
						<PricingTrustItem><FaCheck /> Jährlich kündbar</PricingTrustItem>
					</PricingTrustRow>
					<PricingNote>
						Zum Launch gibt es zusätzlich eine limitierte
						Lifetime-Lizenz (399 € einmalig, bis zu 25 Websites) - nur
						für kurze Zeit. Der Verkauf startet in Kürze; bis dahin
						kannst du dich unverbindlich vormerken lassen.
					</PricingNote>
				</Section>

				{/* -- ANFRAGE -- */}
				<InquirySection id="anfrage">
					<InquiryCard>
						<InquiryHeading>
							Interesse an Flinkform Pro?
						</InquiryHeading>
						<InquiryDesc>
							Sag mir kurz, wofür du Pro einsetzen willst und wo
							deine Website steht. Ich melde mich persönlich bei dir.
						</InquiryDesc>
						<InquiryForm
							onSubmit={(e) => {
								e.preventDefault();
								const form = e.target;
								const name = form.name.value;
								const website = form.website.value;
								const usecase = form.usecase.value;
								const subject = encodeURIComponent(
									`Flinkform Pro Anfrage - ${name}`
								);
								const body = encodeURIComponent(
									`Name: ${name}\nWebsite: ${website}\nEinsatzzweck: ${usecase}`
								);
								window.location.href = `mailto:dennis@dbw-media.de?subject=${subject}&body=${body}`;
							}}
						>
							<FormField>
								<FormLabel htmlFor="name">Name / Firma</FormLabel>
								<FormInput
									id="name"
									name="name"
									type="text"
									placeholder="Max Mustermann"
									required
								/>
							</FormField>
							<FormField>
								<FormLabel htmlFor="website">Website</FormLabel>
								<FormInput
									id="website"
									name="website"
									type="text"
									placeholder="www.deine-website.de"
								/>
							</FormField>
							<FormField>
								<FormLabel htmlFor="usecase">
									Wofür brauchst du Pro?
								</FormLabel>
								<FormSelect id="usecase" name="usecase" required>
									<option value="">Bitte wählen</option>
									<option value="Zahlungen (Stripe)">Zahlungen (Stripe, SEPA, Wallets)</option>
									<option value="Berechnungsfelder / Angebotsrechner">Berechnungsfelder / Angebotsrechner</option>
									<option value="Webhooks / CRM-Anbindung">Webhooks / CRM-Anbindung</option>
									<option value="SMTP / Mailversand">SMTP / Mailversand</option>
									<option value="Datei-Upload">Datei-Upload</option>
									<option value="Newsletter-Integration">Newsletter-Integration</option>
									<option value="Mehrere Features">Mehrere Features</option>
									<option value="Alles">Das komplette Paket</option>
								</FormSelect>
							</FormField>
							<SubmitButton type="submit">
								Anfrage absenden
							</SubmitButton>
						</InquiryForm>
					</InquiryCard>
				</InquirySection>

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
						<ReqItem><ReqLabel>Preis</ReqLabel><ReqValue>Ab 59 €/J.</ReqValue></ReqItem>
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

const CompareNote = styled.p`
	font-size: 0.8rem;
	color: ${(p) => p.theme.textMuted};
	margin: 1rem 0 0;
	font-style: italic;
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

/* -- Pricing -- */

const PricingGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 1.25rem;
	margin-top: 1.5rem;
	align-items: stretch;
	@media (max-width: 1100px) { grid-template-columns: repeat(2, 1fr); }
	@media (max-width: 600px) { grid-template-columns: 1fr; max-width: 420px; margin-left: auto; margin-right: auto; }
`;

const PricingCard = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	padding: 2.25rem 1.75rem 1.75rem;
	background: ${(p) => p.theme.bgCard};
	border: 1.5px solid ${(p) => (p.$featured ? "#7e56ff" : p.theme.borderCard)};
	border-radius: 1.25rem;
	box-shadow: ${(p) => (p.$featured ? "0 8px 32px rgba(126, 86, 255, 0.12)" : "none")};
`;

const PricingBadge = styled.span`
	position: absolute;
	top: -0.8rem;
	left: 50%;
	transform: translateX(-50%);
	padding: 0.3rem 1rem;
	font-size: 0.72rem;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 0.08em;
	color: #fff;
	white-space: nowrap;
	border-radius: 999px;
	background: linear-gradient(135deg, #7e56ff, #00b2ff);
`;

const PricingName = styled.h3`
	font-size: 1rem;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 0.08em;
	color: ${(p) => p.theme.textMuted};
	margin: 0;
`;

const PricingPrice = styled.div`
	font-size: 2.5rem;
	font-weight: 800;
	color: ${(p) => p.theme.text};
	line-height: 1.1;
`;

const PricingPeriod = styled.span`
	font-size: 1rem;
	font-weight: 500;
	color: ${(p) => p.theme.textMuted};
`;

const PricingSites = styled.div`
	font-size: 0.95rem;
	font-weight: 600;
	color: ${(p) => p.theme.text};
`;

const PricingPerSite = styled.div`
	display: inline-block;
	align-self: flex-start;
	padding: 0.2rem 0.6rem;
	font-size: 0.75rem;
	font-weight: 700;
	border-radius: 999px;
	${(p) =>
		p.$featured
			? `color: #fff; background: linear-gradient(135deg, #7e56ff, #00b2ff);`
			: `color: ${p.theme.textMuted}; background: ${p.theme.bg}; border: 1px solid ${p.theme.borderCard};`}
`;

const PricingTrustRow = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 1.5rem;
	justify-content: center;
	margin-top: 1.75rem;
`;

const PricingTrustItem = styled.span`
	display: inline-flex;
	align-items: center;
	gap: 0.45rem;
	font-size: 0.875rem;
	color: ${(p) => p.theme.textSecondary};
	svg { color: ${(p) => p.theme.accent}; font-size: 0.7rem; }
`;

const PricingDesc = styled.p`
	font-size: 0.875rem;
	line-height: 1.55;
	color: ${(p) => p.theme.textSecondary};
	margin: 0;
	flex-grow: 1;
`;

const PricingFeatures = styled.ul`
	list-style: none;
	margin: 0.75rem 0 0;
	padding: 0;
	display: flex;
	flex-direction: column;
	gap: 0.45rem;
`;

const PricingFeature = styled.li`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	font-size: 0.85rem;
	color: ${(p) => p.theme.textSecondary};
	svg { color: ${(p) => p.theme.accent}; font-size: 0.7rem; flex-shrink: 0; }
`;

const PricingButton = styled.a`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	margin-top: 1.25rem;
	padding: 0.75rem 1.5rem;
	font-size: 0.95rem;
	font-weight: 700;
	border-radius: 999px;
	text-decoration: none;
	transition: opacity 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
	${(p) =>
		p.$featured
			? `color: #fff; background: linear-gradient(135deg, #7e56ff, #00b2ff); border: none;`
			: `color: ${p.theme.text}; background: transparent; border: 1.5px solid ${p.theme.borderCard};`}
	&:hover { opacity: 0.9; transform: translateY(-2px); ${(p) => (p.$featured ? "" : "border-color: #7e56ff;")} }
`;

const PricingNote = styled.p`
	font-size: 0.9rem;
	color: ${(p) => p.theme.textSecondary};
	margin: 2rem 0 0;
	max-width: 640px;
`;

/* -- Inquiry Form -- */

const InquirySection = styled.section`
	max-width: calc(1200px + 8rem);
	width: 100%;
	margin: 0 auto;
	padding: 5rem 4rem;
	@media screen and (max-width: 768px) { padding: 3rem 1.5rem; }
`;

const InquiryCard = styled.div`
	max-width: 600px;
	margin: 0 auto;
	padding: 3rem;
	background: ${(p) => p.theme.bgCard};
	border: 1px solid ${(p) => p.theme.borderCard};
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
		background: linear-gradient(90deg, #7e56ff, #00b2ff);
	}
`;

const InquiryHeading = styled.h2`
	font-size: 1.75rem;
	font-weight: 700;
	color: ${(p) => p.theme.text};
	margin: 0 0 0.75rem;
`;

const InquiryDesc = styled.p`
	font-size: 1rem;
	line-height: 1.6;
	color: ${(p) => p.theme.textSecondary};
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
	color: ${(p) => p.theme.text};
`;

const FormInput = styled.input`
	padding: 0.75rem 1rem;
	font-size: 0.95rem;
	color: ${(p) => p.theme.text};
	background: ${(p) => p.theme.bg};
	border: 1px solid ${(p) => p.theme.borderCard};
	border-radius: 0.75rem;
	outline: none;
	transition: border-color 0.2s ease;
	&::placeholder { color: ${(p) => p.theme.textMuted}; }
	&:focus { border-color: ${(p) => p.theme.accent}; }
`;

const FormSelect = styled.select`
	padding: 0.75rem 1rem;
	font-size: 0.95rem;
	color: ${(p) => p.theme.text};
	background: ${(p) => p.theme.bg};
	border: 1px solid ${(p) => p.theme.borderCard};
	border-radius: 0.75rem;
	outline: none;
	cursor: pointer;
	&:focus { border-color: ${(p) => p.theme.accent}; }
`;

const SubmitButton = styled.button`
	padding: 0.85rem 1.5rem;
	font-size: 1rem;
	font-weight: 700;
	color: #fff;
	background: linear-gradient(135deg, #7e56ff, #00b2ff);
	border: none;
	border-radius: 999px;
	cursor: pointer;
	margin-top: 0.5rem;
	transition: opacity 0.2s ease, transform 0.2s ease;
	&:hover { opacity: 0.9; transform: translateY(-2px); }
`;
