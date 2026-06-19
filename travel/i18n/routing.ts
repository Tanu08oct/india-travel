import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'fr'], // Added French ('fr')
  defaultLocale: 'en'
});