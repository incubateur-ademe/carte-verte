const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
});
const { version } = require("./package.json");

const ContentSecurityPolicy = require("./csp.config");

/** @type {import('next').NextConfig} */
const config = {
  poweredByHeader: false,
  swcMinify: true,
  webpack: config => {
    config.module.rules.push({
      test: /\.(woff2|webmanifest)$/,
      type: "asset/resource",
    });

    return config;
  },
  experimental: {
    typedRoutes: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_APP_VERSION: version,
    NEXT_PUBLIC_APP_VERSION_COMMIT: process.env.GITHUB_SHA || "unknown commit",
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: ContentSecurityPolicy,
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "no-referrer, strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "fullscreen=(), display-capture=(), camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Cross-Origin-Embedder-Policy",
            value: "credentialless",
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin",
          },
          {
            key: "Cross-Origin-Resource-Policy",
            value: "cross-origin",
          },
        ],
      },
    ];
  },
};

module.exports = withMDX(config);
