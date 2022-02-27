import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
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
      roleBackground: {
        display: 'flex',
        maxWidth: '170px',
        height: '49px',
        width: '170px',
        borderRadius: '54px',
        backgroundColor: 'rgba(211, 255, 208, 1)',
      },
      roleContent: {
        maxWidth: "101px",
        color: "rgba(0, 0, 0, 1)",
        fontSize: "22px",
        lineHeight: "107.00000524520874%",
        letterSpacing: "0%",
        textAlign: "center",
        fontFamily: "Euclid Circular A, sans-serif",
      }
}))