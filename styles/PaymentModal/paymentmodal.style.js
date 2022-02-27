import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    display: 'flex',
    flexDirection: 'column',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    background: '#FFFFFF',
    boxShadow: '4px 4px 10px rgba(0, 0, 0, 0.15)',
    borderRadius: '21px',
    padding: '4rem',
  },
  modalDesc: {
    marginTop: '2rem',
  },
  fieldWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  field: {
    marginTop: '2rem',
    width: '20rem',
  },
  eth: {
    margin: '2rem 0 0 2rem',
    fontFamily: 'Euclid Circular A',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '28px',
    lineHeight: '107%',
    color: '#333CFF',
  },
  btnWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    marginTop: '2rem',
    width: '20rem',
    padding: '1rem 0 1rem 0',
    borderRadius: '53px',
    color: 'white',
    fontSize: '16px',
    textTransform: 'none',
    fontFamily: 'Euclid Circular A',
    fontSize: '20px',
  },
}))
