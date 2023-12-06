const ContentSecurityPolicy = `default-src 'none';
connect-src 'self' https://*.gouv.fr ${process.env.CARTE_VERTE_ENV === "preprod" ? "https://vercel.live" : ""};
font-src 'self';
media-src 'self';
img-src 'self' data:;
script-src 'self' 'unsafe-inline' https://stats.beta.gouv.fr ${
  process.env.CARTE_VERTE_ENV === "preprod" ? "https://vercel.live" : ""
} ${process.env.NODE_ENV === "development" ? "'unsafe-eval'" : ""};
style-src 'self' 'unsafe-inline';
frame-ancestors 'self';
base-uri 'self' https://*.gouv.fr;
form-action 'self' https://*.gouv.fr;
block-all-mixed-content;
upgrade-insecure-requests;`.replace(/\n/g, " ");

module.exports = ContentSecurityPolicy;
