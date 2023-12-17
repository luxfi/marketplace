import {
  crimson,
  slate,
  crimsonDark,
  violetDark,
  slateDark,
  greenDark,
  iris,
  irisDark,
  gray,
  green,
  violetDarkA,
  whiteA,
  redDark,
  red,
  blackA,
  violet,
  violetA,
  indigo,
} from '@radix-ui/colors'
import { createStitches } from '@stitches/react'
import type * as Stitches from '@stitches/react'
import { reset } from 'utils/css/reset'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
})

// CONFIGURABLE: Here you can update all your theming (outside of ReservoirKit which can be configured in the app.tsx)
// The theme colors are all already hooked up to stitches scales, so you just need to swap them.
// Don't forget to check the dark mode themes below.
// More on Stitches theme tokens: https://stitches.dev/docs/tokens
// More on Radix color scales: https://www.radix-ui.com/docs/colors/palette-composition/the-scales

export const { createTheme, keyframes, styled, globalCss, getCssText } =
  createStitches({
    theme: {
      colors: {
        ...gray,
        ...crimson,
        ...violet,
        ...violetA,
        ...slate,
        ...red,
        ...whiteA,
        ...blackA,
        ...iris,
        ...green,
        ...indigo,

        //Aliases
        primary1: '#151718',
        primary2: '#1a1d1e',
        primary3: '#202425',
        primary4: '#26292b',
        primary5: '#2b2f31',
        primary6: '#313538',
        primary7: '#3a3f42',
        primary8: '#000',
        primary9: '#000',
        primary10: '#333',
        primary11: '#9ba1a6',
        primary12: '#ecedee',

          // Secondary == slate
        secondary1: '#fbfcfd',
        secondary2: '#f8f9fa',
        secondary3: '#f1f3f5',
        secondary4: '#eceef0',
        secondary5: '#e6e8eb',
        secondary6: '#dfe3e6',
        secondary7: '#d7dbdf',
        secondary8: '#c1c8cd',
        secondary9: '#889096',
        secondary10: '#7e868c',
        secondary11: '#687076',
        secondary12: '#11181c',

        //Gray
        gray1: '$slate1',
        gray2: '$slate2',
        gray3: '$slate3',
        gray4: '$slate4',
        gray5: '$slate5',
        gray6: '$slate6',
        gray7: '$slate7',
        gray8: '$slate8',
        gray9: '$slate9',
        gray10: '$slate10',
        gray11: '$slate11',
        gray12: '$slate12',

        //Red
        red1: '$crimson1',
        red2: '$crimson2',
        red3: '$crimson3',
        red4: '$crimson4',
        red5: '$crimson5',
        red6: '$crimson6',
        red7: '$crimson7',
        red8: '$crimson8',
        red9: '$crimson9',
        red10: '$crimson10',
        red11: '$crimson11',
        red12: '$crimson12',

        neutralBg: 'white',
        neutralBgSubtle: '#eee',
        panelShadow: 'rgba(0,0,0,0.1)',
        panelBg: '$gray2',
        panelBorder: 'transparent',
        dropdownBg: 'white',
        sidebarOverlay: 'black',
      },
      space: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '32px',
        6: '64px',
      },
      fontSizes: {},
      fontWeights: {},
      fonts: {
        body: inter.style.fontFamily,
        button: '$body',
      },
      lineHeights: {},
      letterSpacings: {},
      sizes: {},
      radii: {},
      shadows: {},
      transitions: {},
      breakpoints: {
        sm: 100,
      },
    },
    utils: {
      // MARGIN
      m: (value: Stitches.PropertyValue<'margin'>) => ({
        margin: value,
      }),
      mx: (value: Stitches.PropertyValue<'margin'>) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (value: Stitches.PropertyValue<'margin'>) => ({
        marginTop: value,
        marginBottom: value,
      }),
      mt: (value: Stitches.PropertyValue<'margin'>) => ({
        marginTop: value,
      }),
      mb: (value: Stitches.PropertyValue<'margin'>) => ({
        marginBottom: value,
      }),
      ml: (value: Stitches.PropertyValue<'margin'>) => ({
        marginLeft: value,
      }),
      mr: (value: Stitches.PropertyValue<'margin'>) => ({
        marginRight: value,
      }),

      // PADDING
      p: (value: Stitches.PropertyValue<'padding'>) => ({
        padding: value,
      }),
      px: (value: Stitches.PropertyValue<'padding'>) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (value: Stitches.PropertyValue<'padding'>) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
      pt: (value: Stitches.PropertyValue<'padding'>) => ({
        paddingTop: value,
      }),
      pb: (value: Stitches.PropertyValue<'padding'>) => ({
        paddingBottom: value,
      }),
      pl: (value: Stitches.PropertyValue<'padding'>) => ({
        paddingLeft: value,
      }),
      pr: (value: Stitches.PropertyValue<'padding'>) => ({
        paddingRight: value,
      }),
      // DIMENSIONS
      w: (value: Stitches.PropertyValue<'width'>) => ({
        width: value,
      }),
      h: (value: Stitches.PropertyValue<'height'>) => ({
        height: value,
      }),
      size: (value: Stitches.PropertyValue<'width'>) => ({
        width: value,
        height: value,
      }),
      // GRID
      colSpan: (value: number | 'full') => {
        if (value === 'full') {
          return {
            gridColumn: '1 / -1',
          }
        }
        return {
          gridColumn: `span ${value} / span ${value}`,
        }
      },
    },
    media: {
      sm: '(min-width: 600px)',
      md: '(min-width: 900px)',
      lg: '(min-width: 1200px)',
      xl: '(min-width: 1820px)',
      bp300: '(min-width: 300px)',
      bp400: '(min-width: 400px)',
      bp500: '(min-width: 500px)',
      bp600: '(min-width: 600px)',
      bp700: '(min-width: 700px)',
      bp800: '(min-width: 800px)',
      bp900: '(min-width: 900px)',
      bp1000: '(min-width: 1000px)',
      bp1100: '(min-width: 1100px)',
      bp1200: '(min-width: 1200px)',
      bp1300: '(min-width: 1300px)',
      bp1400: '(min-width: 1400px)',
      bp1500: '(min-width: 1500px)',
      motion: '(prefers-reduced-motion)',
      hover: '(any-hover: hover)',
      dark: '(prefers-color-scheme: dark)',
      light: '(prefers-color-scheme: light)',
    },
  })

export const globalReset = globalCss(reset)

export const darkTheme = createTheme({
  colors: {
    ...crimsonDark,
    ...violetDark,
    ...violetDarkA,
    ...slateDark,
    ...greenDark,
    ...irisDark,
    ...whiteA,
    ...redDark,
    ...blackA,

    //Aliases

    ////Primary
    //primary1: '$iris1',
    //primary2: '$iris2',
    //primary3: '$iris3',
    //primary4: '$iris4',
    //primary5: '$iris5',
    //primary6: '$iris6',
    //primary7: '$iris7',
    //primary8: '$iris8',
    //primary9: '$iris9',
    //primary10: '$iris10',
    //primary11: '$iris11',
    //primary12: '$iris12',

    ////Secondary
    //secondary1: '$violetA1',
    //secondary2: '$violetA2',
    //secondary3: '$violetA3',
    //secondary4: '$violetA4',
    //secondary5: '$violetA5',
    //secondary6: '$violetA6',
    //secondary7: '$violetA7',
    //secondary8: '$violetA8',
    //secondary9: '$violetA9',
    //secondary10: '$violetA10',
    //secondary11: '$violetA11',
    //secondary12: '$violetA12',

    ////Gray
    //gray1: '$slate1',
    //gray2: '$slate2',
    //gray3: '$slate3',
    //gray4: '$slate4',
    //gray5: '$slate5',
    //gray6: '$slate6',
    //gray7: '$slate7',
    //gray8: '$slate8',
    //gray9: '$slate9',
    //gray10: '$slate10',
    //gray11: '$slate11',
    //gray12: '$slate12',

    accent: 'black',

    // Primary == slate
    primary1: '#fbfcfd',
    primary2: '#f8f9fa',
    primary3: '#f1f3f5',
    primary4: '#eceef0',
    primary5: '#e6e8eb',
    primary6: '#dfe3e6',
    primary7: '#d7dbdf',
    primary8: '#111',
    primary9: '#222',
    primary10: '#7e868c',
    primary11: '#687076',
    primary12: '#11181c',

    // Secondary == slateDark
    secondary1: '#151718',
    secondary2: '#1a1d1e',
    secondary3: '#202425',
    secondary4: '#26292b',
    secondary5: '#2b2f31',
    secondary6: '#313538',
    secondary7: '#3a3f42',
    secondary8: '#4c5155',
    secondary9: '#697177',
    secondary10: '#787f85',
    secondary11: '#9ba1a6',
    secondary12: '#ecedee',

      // Custom greyDark:
      // First 4 according to current usage,
      // rest from radix.
      // Following https://www.radix-ui.com/docs/colors/palette-composition/understanding-the-scale
    gray1: '#000',
    gray2: '#0a0a0a',
    gray3: '#1a1a1a',
    gray4: '#222',
      // these are just grayDark from here
    gray5: '#2e2e2e',
    gray6: '#343434',
    gray7: '#3e3e3e',
    gray8: '#505050',
    gray9: '#707070',
    gray10: '#7e7e7e',
    gray11: '#a0a0a0',
    gray12: '#ededed',

    neutralBgSubtle: '#111',
    neutralBg: 'black',

    panelBg: '#111',
    panelBorder: 'black',
    panelShadow: 'transparent',
    dropdownBg: '$gray3',
    sidebarOverlay: 'black',
  },
})
