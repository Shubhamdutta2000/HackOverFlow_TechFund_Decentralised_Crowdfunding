import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '2rem',
    marginLeft: '2rem',
  },
  form: {
    width: '40rem',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      marginBottom: '2rem',
    },
  },
  textarea: {
    width: '36rem',
  },
  image: {
    width: '100%',
  },

  display: {
    display: 'none',
  },
  submit: {
    fontFamily: "'Euclid Circular A', sans-serif",
    borderRadius: "100rem",
    fontSize: "1.16vw",
    padding: "0.50vw 2.1vw",
    margin: theme.spacing(3, 0, 2),
    color: '#fff',
  },
}))
