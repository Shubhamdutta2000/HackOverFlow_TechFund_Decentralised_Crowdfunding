import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: '2rem',
    padding: '4rem',
  },
  body: {
    width: '693px',
  },
  statContainer: {
    marginTop: '2rem',
  },
  details: {
    backgroundColor: '#141414',
    borderRadius: '0.4rem',
    padding: '2rem',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  detailGroup: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      margin: '5px',
    },
  },
  greenText: {
    color: '#82ed68',
  },
  redText: {
    color: '#e9696d',
  },
  btn: {
    marginTop: '2rem',
    marginLeft: '15rem',
    width: '30rem',
    padding: '1rem',
    borderRadius: '53px',
    color: 'white',
    fontSize: '16px',
    textTransform: 'none',
    fontFamily: 'Euclid Circular A',
    fontSize: '20px',
  },
  btnMob: {
    marginTop: '2rem',
    width: '30rem',
    padding: '1rem',
    borderRadius: '53px',
    color: 'white',
    fontSize: '16px',
    textTransform: 'none',
    fontFamily: 'Euclid Circular A',
    fontSize: '20px',
  },

  img: {
    marginTop: '5rem',
  },
  storyContainer: {
    marginTop: '5rem',
    padding: '2rem',
  },
  storyHeader: {
    fontFamily: 'Euclid Circular A',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '48px',
    lineHeight: '107%',
    textAlign: 'center',
    color: '#000000',
  },
  vl: {
    border: '3px solid #000000',
    transform: 'rotate(180deg)',
    height: '7rem',
  },
  storyDesc: {
    marginTop: '2rem',
    marginLeft: '3rem',
  },

  reportBtnContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  reportBtn: {
    border: '5px solid #FF7B7B',
    boxSizing: 'border-box',
    borderRadius: '12px',
    backgroundColor: 'white',
    fontFamily: 'Euclid Circular A',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '22.9568px',
    lineHeight: '107%',
    textAlign: 'center',
    color: '#FF7B7B',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: 'white',
    },
  },
}))
