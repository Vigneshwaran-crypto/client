import React, { useEffect } from "react";
import Post from "./post/post";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { CircularProgress, Grid } from "@material-ui/core";

const Posts = () => {
  const classes = useStyles();

  const posts = useSelector((state) => state?.allPosts);

  useEffect(() => {
    console.log("posts data :", posts);
  }, [posts]);
  return (
    // <>
    //   <h1>Posts</h1>

    //   <Post />
    //   <Post />
    // </>

    !posts?.length ? (
      <CircularProgress />
    ) : (
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {posts.map((post) => (
          <Grid item key={post._id} xs={12} sm={6}>
            <Post post={post} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;
