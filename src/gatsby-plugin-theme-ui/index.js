//import baseTheme from 'gatsby-theme-blog/src/gatsby-plugin-theme-ui'
import { future } from '@theme-ui/presets'
//import rebass from '@rebass/preset'

export default {
    // useColorSchemeMediaQuery: true,
    // initialColorModeName: 'dark',
    initialColorMode: 'light',
  ...future,

  colors: {
     //...future.colors,
    text: "hsla(300, 6%, 2%, 0.65)",
    fontWeight:300,
    // background: 'fff',
 
    modes: {
        dark: {
          text: '#E5E5E5',
         background: '#000',
         fontWeight: 300
        }
      }
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: 'Georgia, serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64
  ],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
  },

  // styles : {
  //     root: {
  //         fontWeight :'body',
  //         // background : '#33e'
  //     },
  //     h1: {
  //       fontSize: 6,
  //       fontFamily: 'heading',
  //       fontWeight: 'heading',
  //       color: 'red',
  //       mt: 4,
  //       mb: 2,
  //     },
  //     body:{
  //         // background:'#33e'
  //     }
  // }
}