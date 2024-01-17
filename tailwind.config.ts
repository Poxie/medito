import type { Config } from 'tailwindcss'
import containerQueries from '@tailwindcss/container-queries';

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './contexts/**/*.{js,ts,jsx,tsx,mdx}',
    './modals/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        main: 'var(--width-main)',
        donate: 'var(--donate-section-width)',
      },
      maxWidth: {
        main: 'var(--max-width-main)',
      },
      minWidth: {
        donate: 'var(--donate-section-width)',
      },
      backgroundColor: {
        primary: 'var(--bg-primary)',
        secondary: 'var(--bg-secondary)',
        tertiary: 'var(--bg-tertiary)',
        'c-primary': 'var(--color-primary)',
        'c-secondary': 'var(--color-secondary)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
      },
      color: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
      },
      borderColor: {
        primary: 'var(--border-primary)',
        secondary: 'var(--border-secondary)',
      },
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
}
export default config
