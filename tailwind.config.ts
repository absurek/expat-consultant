import { join } from 'path';
import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { skeleton } from '@skeletonlabs/tw-plugin';

import { colorfulModernTheme } from './themes/colorful-modern';
import { monochromeModernTheme } from './themes/monochrome-modern';

export default {
  darkMode: 'class',
  content: [
    './src/**/*.{html,js,svelte,ts}',
    join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}'),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    forms,
    typography,
    skeleton({
      themes: {
        custom: [colorfulModernTheme, monochromeModernTheme],
        preset: [
          {
            name: 'vintage',
            enhancements: true,
          },
        ],
      },
    }),
  ],
} satisfies Config;
