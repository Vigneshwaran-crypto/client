import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  root: {
    "& .MuiTextField-root": {
      // margin: theme.spacing(1),
    },
  },
  paper: {
    // padding: theme.spacing(1),
    padding: 10,
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    // width: "100%",
    marginTop: 10,
    // marginBottom: 10,
  },
  textInput: {
    margin: "10px 0",
  },
}));
