import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: "2rem",
    marginLeft: "2rem",
  },
  form: {
    marginLeft: "3rem",
    width: "40rem",
    padding: "2rem",
    paddingTop: "0",
    display: "flex",
    flexDirection: "column",
    "& > *": {
      margin: "2rem 0 2rem 0",
    },
  },
  textarea: {
    width: "36rem",
  },
  image: {
    width: "100%",
  },
  formLabel: {
    marginBottom: "0",
    fontSize: "1.2rem",
    fontWeight: "600",
    fontFamily: "'Euclid Circular A', sans-serif",
  },

  display: {
    display: "none",
  },
  btn: {
    width: "24rem",
    padding: "1rem",
    borderRadius: "53px",
    color: "white",
    fontSize: "16px",
    textTransform: "none",
    fontFamily: "Euclid Circular A",
    fontSize: "20px",
  },
}));
