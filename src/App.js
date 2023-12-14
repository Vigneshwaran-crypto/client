import React from "react";
import {
  Container,
  AppBar,
  Typography,
  Grow,
  Grid,
  colors,
} from "@material-ui/core";
import charm from "./images/charm.jpeg";
import Posts from "./components/posts/posts";
import Form from "./components/form/form";
import useStyles from "./styles";
const App = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Instaverse
        </Typography>

        <img
          className={classes.image}
          src={charm}
          alt="Instaverse"
          height={60}
        />
      </AppBar>

      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={4}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>

            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
