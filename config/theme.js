import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'
// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#333CFF',
    },
    alternate: {
      main: '#fff',
    },
    secondary: {
      main: '#19857b',
    },
    button: {
      main: '#333CFF',
    },
    error: {
      main: '#F8485E',
    },
    background: {
      primary: '#fff',
      secondary: '#141414',
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
      fontSize: '20px',
      lineHeight: '100%',
      color: 'white',
    },
    modalHeader: {
      fontFamily: 'Euclid Circular A',
      fontStyle: 'normal',
      fontWeight: 500,
      fontSize: '40px',
      lineHeight: '107%',
      textAlign: 'center',
      color: '#333CFF',
    },
    modalDesc: {
      fontFamily: 'Euclid Circular A',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '21px',
      lineHeight: '107%',
      textAlign: 'center',
      color: '#000000',
    },
  },
})

export default theme
