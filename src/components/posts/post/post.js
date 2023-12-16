import React from "react";
import useStyles from "./styles";
import {
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
  CardActions,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizonIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
const Post = ({ post }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.title}
      >
        <div className={classes.overlay}>
          <Typography variant="h6">{post.creator}</Typography>
          <Typography variant="body2">
            {moment(post.createdAt).fromNow()}
          </Typography>
        </div>

        <div className={classes.overlay2}>
          <Button style={{ color: "white" }} size="small" onClick={() => {}}>
            <MoreHorizonIcon fontSize="default" />
          </Button>
        </div>

        <div className={classes.details}>
          <Typography variant="body2" color="secondary">
            {post.tags.map((tag) => `#${tag}`)}
          </Typography>
        </div>
        <Typography className={classes.title} variant="h5" gutterBottom>
          {post.title}
        </Typography>

        <CardContent>
          <Typography variant="body2" color="secondary" component="p">
            {post.message}
          </Typography>
        </CardContent>

        <CardActions className={classes.cardAction}>
          <Button size="small" color="primary" onClick={() => {}}>
            <ThumbUpAltIcon fontSize="small" />
            Like &nbsp; {post.likeCount}
          </Button>

          <Button size="small" color="primary" onClick={() => {}}>
            <DeleteIcon fontSize="small" />
            Delete
          </Button>
        </CardActions>
      </CardMedia>
    </Card>
  );
};

export default Post;
