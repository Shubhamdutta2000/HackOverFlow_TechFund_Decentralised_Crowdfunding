import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    button: {
      main: '#333CFF',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    heading: {
      fontFamily: "'Circular Std','Shizuru', sans-serif",
    },
    description: {
      fontFamily: "'Euclid Circular A','Shizuru', sans-serif",
    },
    h2: {
      fontFamily: 'Circular Std',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '72px',
      lineHeight: '107%',
    },
    body2: {
      fontFamily: 'Euclid Circular A',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '27px',
      lineHeight: '107%',
      color: '#252525',
    },
    ideaStats: {
      fontFamily: 'Euclid Circular A',
      fontStyle: 'normal',
      fontWeight: '500',
      fontSize: '27px',
      lineHeight: '107%',
      color: 'white',
    },
  },
})

export default theme
