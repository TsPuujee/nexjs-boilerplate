import type { LocalePrefix } from "node_modules/next-intl/dist/types/src/shared/types";

const localePrefix: LocalePrefix = "as-needed";

// FIXME: Update this configuration file based on your project information
export const AppConfig = {
  name: "Butcher",
  locales: ["en"],
  localesJson: [
    {
      name: "English",
      locale: "en",
      logo: "us",
    },
  ],
  defaultLocale: "en",
  localePrefix,
};
