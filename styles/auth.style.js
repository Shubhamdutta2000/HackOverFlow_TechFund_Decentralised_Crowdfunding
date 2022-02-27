import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    // height: '100vh',
    width: '100%',
  },
  image2: {
    marginTop: '35vh',
    // height: '100vh',
    width: '100%',
  },
  display: {
    display: 'none',
  },
  paper: {
    padding: theme.spacing(10),
    margin: theme.spacing(2, 12, 4, 12),
    display: 'flex',
    flexDirection: 'column',
    // alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
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
