const ContentSecurityPolicy = `
  default-src 'self' *.gouv.fr;
  img-src 'self' data: *.gouv.fr https://dummyimage.com/;
  script-src 'self' *.gouv.fr ${
    process.env.NODE_ENV !== "production" && "'unsafe-eval' 'unsafe-inline'"
  };
  frame-src 'self' *.gouv.fr;
  style-src 'self' 'unsafe-inline';
  font-src 'self' data: blob:;
`;

module.exports = ContentSecurityPolicy;
