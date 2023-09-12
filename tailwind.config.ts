import type { Config } from 'tailwindcss'
const { nextui } = require('@nextui-org/react')

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            bgHeader: '#fffaf0',
            background: '#fff5e1',
            text: '#1A1A1A',
            border: '#0074e4',
            border1: '#800080',
            textDesc: '#3d3d3d',
            selection: '#fffa65',
            textHover: '#fdcb6e',
          },
        },
        dark: {
          colors: {
            bgHeader: '#070c1e',
            background: '#0d1224',
            text: '#fff',
            border: '#3498db',
            border1: '#505770',
            textDesc: '#d3d8e8',
            selection: '#d835a7',
            textHover: '#ff4bbe',
          },
        },
      },
    }),
  ],
}
export default config
