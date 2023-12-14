import React, { useEffect, useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import useStyles from "./style";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { createPost, getPosts } from "../../redux/action/posts";
const Form = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const fullStore = useSelector((store) => store);

  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  useEffect(() => {
    console.log("all store values in form :", fullStore);

    dispatch(getPosts());
  }, []);

  const onHandleSubmit = (e) => {
    e.preventDefault();

    dispatch(createPost(postData));
  };

  const onSubmitClick = (e) => {
    console.log("submit clicking :");
  };

  const onClearAll = () => {
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={onHandleSubmit}
      >
        <Typography variant="h6">Creating a post</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="creators"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
          className={classes.textInput}
        />
        <TextField
          name="title"
          variant="outlined"
          label="title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
          className={classes.textInput}
        />
        <TextField
          name="message"
          variant="outlined"
          label="message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
          className={classes.textInput}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
          className={classes.textInput}
        />

        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          // onClick={onSubmitClick}
          fullWidth
        >
          Submit
        </Button>

        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="secondary"
          size="small"
          onClick={onClearAll}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
