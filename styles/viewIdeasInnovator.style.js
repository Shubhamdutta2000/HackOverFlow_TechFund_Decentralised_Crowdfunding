import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    container: {
        padding: '0 4rem 0 4rem',
    },
    ideaHeading: {
        position: "relative",
        fontWeight: "500",
        display: "block",
        fontSize: "3.6rem",
        marginTop: "2.5vw",
        color: theme.palette.primary.main,
    },
    ideaDescription: {
        position: "relative",
        fontWeight: "500",
        display: "block",
        width: "40%",
        fontSize: "1.4rem",
        margin: "0 0 5vw",
        color: "#000",
        lineHeight: "125%",
    },

}));
