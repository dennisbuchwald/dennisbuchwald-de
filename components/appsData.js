// Central data source for all self-developed apps & plugins.
// Used by the home page teaser, the /apps page and its JSON-LD schema.

export const apps = [
	{
		slug: "flinkform",
		icon: "/apps/icons/flinkform-app.svg",
		detailPage: "/apps/flinkform",
		name: "Flinkform",
		tagline: "Das letzte Formular-Plugin, das du installieren wirst.",
		description:
			"Block-basiertes Formular-Plugin für WordPress: nativ im Editor, schlank, ohne jQuery und mit eingebautem Spam-Schutz. 13 Feldtypen, Multi-Step, bedingte Logik, Submissions-Dashboard.",
		badges: ["Bald auf WordPress.org", "Kostenlos"],
		tags: ["WordPress", "Gutenberg", "Formulare"],
		links: [
			{
				label: "GitHub",
				href: "https://github.com/dbwmedia/flinkform",
				type: "github",
			},
		],
		schema: {
			price: "0",
			category: "Plugin",
		},
	},
	{
		slug: "dbw-immo-suite",
		icon: "/apps/icons/immosuite-app.svg",
		name: "dbw Immo Suite",
		tagline: "Die Immobilien-Komplettlösung für WordPress.",
		description:
			"Immobilien präsentieren und verwalten: automatischer OpenImmo-Import, Filter, Karten, Exposé-PDFs und Referenzen-System. Im Einsatz bei Maklern und Hausverwaltungen.",
		badges: ["Kommerziell", "Lizenz"],
		tags: ["WordPress", "OpenImmo", "Immobilien"],
		links: [
			{
				label: "GitHub",
				href: "https://github.com/dbwmedia/dbw-immo-suite",
				type: "github",
			},
		],
		schema: {
			category: "Plugin",
		},
	},
	{
		slug: "infinite-logo-carousel-block",
		icon: "/apps/icons/logoslider-app.svg",
		name: "Logo Slider - Infinite Carousel",
		tagline: "Logos im endlos laufenden Carousel.",
		description:
			"Gutenberg-Block für endlos scrollende Logo-Carousels: mehrreihig, responsiv, ohne jQuery. Offiziell im WordPress.org Plugin-Verzeichnis, 5-Sterne-Bewertung.",
		badges: ["WordPress.org", "Kostenlos"],
		tags: ["WordPress", "Gutenberg Block", "Logo Carousel"],
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
