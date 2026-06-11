// Central data source for all self-developed apps & plugins.
// Used by the home page teaser, the /apps page and its JSON-LD schema.

export const apps = [
	{
		slug: "perform-forms",
		name: "PerForm Forms",
		tagline: "Formulare, die performen.",
		description:
			"Block-basiertes Formular-Plugin für WordPress: nativ im Editor, schlank, ohne jQuery und mit eingebautem Spam-Schutz. Free Core plus Pro-Add-on für SMTP, Exporte und mehr.",
		badges: ["Bald auf WordPress.org", "Kostenlos + Pro"],
		tags: ["WordPress", "Gutenberg", "Formulare"],
		links: [
			{
				label: "GitHub",
				href: "https://github.com/dennisbuchwald/perform-forms",
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
