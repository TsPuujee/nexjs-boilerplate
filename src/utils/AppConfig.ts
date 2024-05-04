import type { LocalePrefix } from 'node_modules/next-intl/dist/types/src/shared/types';

const localePrefix: LocalePrefix = 'as-needed';

// FIXME: Update this configuration file based on your project information
export const AppConfig = {
  name: 'TOKTOK',
  locales: ['en', 'mn'],
  localesJson: [{
    name: 'English',
    locale: 'en',
    logo: 'us'
  }, {
    name: 'Монгол',
    locale: 'mn',
    logo: 'mn'
  }],
  defaultLocale: 'mn',
  localePrefix,
};
