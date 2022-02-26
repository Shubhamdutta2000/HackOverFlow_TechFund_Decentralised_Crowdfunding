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
  btn: {
    width: '16rem',
    borderRadius: '50%',
    fontSize: '16px',
    margin: theme.spacing(3, 0, 2),
    color: '#fff',
  },
}))
