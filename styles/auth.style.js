import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        background: theme.palette.primary.main
    },
    image: {
        // height: '100vh',
        width: "100%"
    },
    image2: {
        marginTop: '35vh',
        // height: '100vh',
        width: "100%"
    },
    display: {
        display: 'none',
    },
    paper: {
        padding: theme.spacing(10),
        margin: theme.spacing(15, 12),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

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
        margin: theme.spacing(3, 0, 2),
        color: "#fff"
    },
}));