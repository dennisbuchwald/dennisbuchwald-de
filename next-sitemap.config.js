module.exports = {
  siteUrl: "https://dennisbuchwald.de",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ["/server-sitemap.xml"],
  robotsTxtOptions: {
    additionalSitemaps: ["https://dennisbuchwald.de/server-sitemap.xml"],
  },
};
