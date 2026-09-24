import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Prompt', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
        title: ['Prompt', 'sans-serif'],
        prompt: ['Prompt', 'sans-serif'],
      },
      colors: {
        pantone: {
          292: '#69B3E7',
          2945: '#004C97',
        },
        cfa: {
          // EXCLUSIVE BRAND PALETTE: #FFFFFF, Pantone 292 C (#69B3E7), Pantone 2945 C (#004C97), #0B2559
          navy: '#0B2559',         // Rich Corporate Navy Blue (vibrant, saturated, zero gray)
          midnight: '#071A40',     // Deep Midnight Royal Blue
          deepBlue: '#004C97',     // Pantone 2945 C (Vibrant Corporate Blue)
          cyan: '#004C97',         // Pantone 2945 C
          light: '#69B3E7',        // Pantone 292 C (Luminous Sky Blue)
          steel: '#69B3E7',        // Pantone 292 C
          softBlue: '#69B3E7',     // Pantone 292 C
          paleSky: '#95CBF2',      // Clean Sky Blue
          iceBlue: '#EBF5FC',      // Crisp Pure Icy Blue (light blue, no gray)
          cream: '#FFFFFF',        // Pure White
          grayLight: '#F2F8FD',    // Clean bright light blue surface
          graySlate: '#D8EDFA',    // Sky blue tint
          grayBorder: '#69B3E7',   // Pantone 292 C
          grayText: '#0B2559',     // Rich Navy text
          grayDark: '#0B2559',     // Rich Navy text
        }
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(32, 45, 74, 0.08)',
        'elevated': '0 10px 30px -5px rgba(32, 45, 74, 0.12)',
        'floating': '0 20px 40px -5px rgba(0, 76, 151, 0.22)',
      }
    },
  },
  plugins: [],
}
export default config

