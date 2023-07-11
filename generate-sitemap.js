const sitemap = require("nextjs-sitemap-generator");

sitemap({
	baseUrl: "https://www.dennisbuchwald.de",
	pagesDirectory: __dirname + "/pages",
	targetDirectory: "public/",
});

console.log(`✅ sitemap.xml generated!`);
