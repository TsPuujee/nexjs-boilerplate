import { withSentryConfig } from "@sentry/nextjs";
/* eslint-disable import/no-extraneous-dependencies, import/extensions */
import "./src/libs/Env.mjs";
import withBundleAnalyzer from "@next/bundle-analyzer";
import withNextIntl from "next-intl/plugin";

const withNextIntlConfig = withNextIntl("./src/libs/i18n.ts");

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
export default withSentryConfig(
  bundleAnalyzer(
    withNextIntlConfig({
      eslint: {
        dirs: ["."],
      },
      poweredByHeader: false,
      reactStrictMode: true,
      experimental: {
        serverComponentsExternalPackages: ["pino"],
      },
      webpack: (config) => {
        config.externals.push({
          bufferutil: "bufferutil",
          "utf-8-validate": "utf-8-validate",
        });
        return config;
      },
      images: {
        domains: [], // Add this line to include the domains configuration
      },
    })
  ),
  {
    silent: true,
    org: "nextjs-boilerplate-org",
    project: "nextjs-boilerplate",
  },
  {
    widenClientFileUpload: true,
    transpileClientSDK: true,
    tunnelRoute: "/monitoring",
    hideSourceMaps: true,
    disableLogger: true,
    automaticVercelMonitors: true,
  }
);
