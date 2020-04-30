import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: `${theme.spacing(3)}px 0`,
            display: "block",
        },
    },
}));
