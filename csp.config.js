const ContentSecurityPolicy = `default-src 'self' https://*.gouv.fr;
connect-src 'self' https://*.gouv.fr;
font-src 'self' data: blob:;
media-src 'self' https://*.gouv.fr;
img-src 'self' data: https://*.gouv.fr https://raw.githubusercontent.com/;
script-src 'self' ${process.env.NODE_ENV === "development" ? "'unsafe-eval' 'unsafe-inline'" : ""};
frame-src 'self' https://*.gouv.fr;
style-src 'self' https://*.gouv.fr 'unsafe-inline';
frame-ancestors 'self' https://*.gouv.fr;
object-src 'none';
base-uri 'self' https://*.gouv.fr;
form-action 'self' https://*.gouv.fr;
block-all-mixed-content;
upgrade-insecure-requests;
${
  process.env.NODE_ENV === "development"
    ? ""
    : `require-trusted-types-for 'script';
        trusted-types react-dsfr react-dsfr-asap nextjs#bundler matomo-next;`
}`.replace(/\n/g, " ");

module.exports = ContentSecurityPolicy;
