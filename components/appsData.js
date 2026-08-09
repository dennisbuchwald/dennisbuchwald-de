// Central data source for all self-developed apps & plugins.
// Used by the home page teaser, the /apps page and its JSON-LD schema.

export const apps = [
	{
		slug: "flinkform",
		icon: "/apps/icons/flinkform-app.svg",
		detailPage: "https://flinkform.de/",
		name: "Flinkform",
		tagline: "Das letzte Formular-Plugin, das du installieren wirst.",
		description:
			"Block-basiertes Formular-Plugin für WordPress: nativ im Editor, schlank, ohne jQuery und mit eingebautem Spam-Schutz. 13 Feldtypen, Multi-Step, bedingte Logik, Submissions-Dashboard.",
		badges: ["WordPress.org", "Kostenlos"],
		tags: ["WordPress", "Gutenberg", "Formulare"],
		links: [
			{
				label: "WordPress.org",
				href: "https://wordpress.org/plugins/flinkform/",
				type: "wordpress",
			},
		],
		schema: {
			price: "0",
			category: "Plugin",
		},
	},
	{
		slug: "flinkform-pro",
		icon: "/apps/icons/flinkform-app.svg",
		detailPage: "https://flinkform.de/pro",
		name: "Flinkform Pro",
		tagline: "Das Formular, das Geld verdient.",
		description:
			"Besucher zahlen per SEPA, Apple Pay oder Karte direkt im Formular. Preise berechnen sich live, während sie tippen. Einreichungen landen automatisch im CRM. Ein Add-on statt fünf Plugins, DSGVO-konform aus Deutschland.",
		badges: ["Premium Add-on", "Ab 59 €/Jahr"],
		tags: ["WordPress", "Stripe & SEPA", "Berechnungen", "Webhooks"],
		links: [],
		schema: {
			price: "59",
			category: "Plugin",
		},
	},
	{
		slug: "dbw-immo-suite",
		icon: "/apps/icons/immosuite-app.svg",
		detailPage: "/apps/immo-suite",
		name: "Immo Suite",
		tagline: "Wie ImmoScout, nur auf deiner eigenen Website.",
		description:
			"Objekte erscheinen automatisch aus der Maklersoftware (OpenImmo), Detailseiten mit Finanzierungsrechner und PDF-Exposé sammeln Anfragen, und jeder Lead landet gesichert in der Anfragen-Inbox. Datenschutzfreundlich ohne externe Dienste.",
		badges: ["Kommerziell", "499 €/Jahr"],
		tags: ["WordPress", "OpenImmo", "Immobilien"],
		links: [],
		schema: {
			category: "Plugin",
		},
	},
	{
		slug: "infinite-logo-carousel-block",
		icon: "/apps/icons/logoslider-app.svg",
		detailPage: "/apps/logo-slider",
		name: "Logo Slider - Infinite Carousel & Marquee",
		tagline: "Logos und Text im endlos laufenden Carousel.",
		description:
			"Zwei Gutenberg-Blocks: endlos scrollende Logo-Carousels (mehrreihig, Capsule-Styling, ausgewogene Logo-Grössen) und ein Text-Marquee für Bewertungen und Badges. Ohne jQuery, barrierefrei mit Pause-Button. Offiziell im WordPress.org Plugin-Verzeichnis, 5-Sterne-Bewertung.",
		badges: ["WordPress.org", "Kostenlos"],
		tags: ["WordPress", "Gutenberg Block", "Logo Carousel", "Text Marquee"],
		links: [
			{
				label: "WordPress.org",
				href: "https://wordpress.org/plugins/infinite-logo-carousel-block/",
				type: "wordpress",
			},
		],
		schema: {
			price: "0",
			category: "Plugin",
		},
	},
];
