/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      xs: '480px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1400px',
      '3xl': '1600px',
      '4xl': '1800px'
    },
    extend: {
      container: {
        center: true,
        screens: {
          xs: '480px',
          sm: '576px',
          md: '768px',
          lg: '992px',
          xl: '1200px',
          '2xl': '1400px',
          '3xl': '1600px',
          '4xl': '1800px'
        },
        padding: {
          DEFAULT: '16px'
        }
      },
      fontFamily: {
        body: ['"Plus Jakarta Sans"', 'sans-serif'],
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        mont: ['"Montserrat Alternates"', 'sans-serif'],
        urban: ['"Urbanist"', 'sans-serif'],
        dm: ['"DM Serif Display"', 'serif'],
        fa: ['"Font Awesome 5 Pro"']
      },
      fontSize: {
        xs: ['12px', '1'],
        sm: ['14px', '1'],
        md: ['16px', '1'],
        lg: ['18px', '1'],
        xl: ['20px', '1'],
        10: '10px',
        11: '11px',
        12: '12px',
        13: '13px',
        14: '14px',
        15: '15px',
        16: '16px',
        18: '18px',
        20: '20px',
        22: '22px',
        24: '24px',
        26: '26px',
        28: '28px',
        30: '30px',
        32: '32px',
        34: '34px',
        36: '36px',
        38: '38px',
        40: '40px',
        44: '44px',
        48: '48px',
        56: '56px',
        60: '60px',
        64: '64px',
        72: '72px',
        80: '80px'
      },
      lineHeight: {
        DEFAULT: '1',
        1: '1',
        '1-1': '1.1',
        '1-2': '1.2',
        '1-3': '1.3',
        '1-4': '1.4',
        '1-5': '1.5',
        '1-6': '1.6',
        2: '2'
      },
      colors: {
        primary: {
          DEFAULT: '#000229'
        },
        white: {
          DEFAULT: '#ffffff'
        },
        black: {
          DEFAULT: '#000229',
          1: '#0D0D0D'
        },
        gray: {
          1: '#DEE2E6'
        },
        green: {
          DEFAULT: '#5FC33B',
          1: '#21B641'
        },
        orange: {
          DEFAULT: '#FF7A41'
        },
        purple: {
          DEFAULT: '#FF75F9'
        },
        yellow: {
          DEFAULT: '#FFAB0A',
          2: '#FFCE57',
          3: '#F8FF35',
          4: '#FFC530'
        },
        blue: {
          DEFAULT: '#6865FF',
          2: '#1117A0',
          3: '#600EE4',
          4: '#FFC530'
        },
        red: {
          DEFAULT: '#FF3C82'
        },
        grey: {
          1: '#5F6368',
          2: '#9A9DA7',
          3: '#F5F5F5',
          4: '#F2F3F5',
          5: '#888B95',
          6: '#EEEEF5',
          7: '#F6F5FA',
          8: '#F7F9FB'
        },
        body: {
          DEFAULT: '#5F6368'
        },
        theme: {
          1: '#6865FF',
          2: '#AEE87C',
          3: '#FFA8B8',
          4: '#F1A0AF'
        },
        border: {
          1: '#EDF5FA',
          2: '#EBECF0'
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(180deg, #028C47 0%, #74FFBA 100%)'
      },
      boxShadow: {
        1: '0px 4px 12px 0px rgba(132, 132, 132, 0.20)'
      }
    }
  },
  plugins: []
};

export default tailwindConfig;
