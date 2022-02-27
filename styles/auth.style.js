import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  navLogo: {
    cursor: "pointer",
    position: "relative",
    marginLeft: "4.6vw",
    marginTop: "1.4rem",
    fontWeight: "700",
    fontSize: "1.3rem",
    [theme.breakpoints.down("sm")]: {
      width: "33vw",
      left: "4vw",
      top: "0.5vw",
    },
  },
  backBtn: {
    cursor: "pointer",
    textAlign: "right",
    marginRight: "4.6vw",
    marginTop: "1.2rem",
    fontWeight: "700",
    fontSize: "1.3rem",
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
