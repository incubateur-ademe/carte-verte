export const config = {
  host: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  name: "Carte Verte",
  tagline: "La solution de paiement de l'ADEME qui récompense vos achats durables",
  env: process.env.CARTE_VERTE_ENV || "dev",
  matomo: {
    siteId: process.env.NEXT_PUBLIC_MATOMO_SITE_ID || "0000",
    url: process.env.NEXT_PUBLIC_MATOMO_URL || "http://localhost:3000",
  },
  appVersion: process.env.NEXT_PUBLIC_APP_VERSION || "0.0.0",
  appVersionCommit: process.env.NEXT_PUBLIC_APP_VERSION_COMMIT || "0000000",
  repositoryUrl: process.env.NEXT_PUBLIC_REPOSITORY_URL || "https://github.com/incubateur-ademe/carte-verte",
};
