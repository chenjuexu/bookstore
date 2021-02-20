import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";
import Addbook from "./components/Addbook";
import Mainpage from "./components/Mainpage";
import PropTypes from "prop-types";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit">BLAZESOFT</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function App({ store }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline>
        <header>
          <Addbook store={store} />
          <br />
        </header>

        <main
          style={{
            marginTop: "150px",
            marginBottom: "50px",
            marginRight: "150px",
            marginLeft: "80px",
          }}
        >
          <Typography variant="h2" gutterBottom>
            BookList
          </Typography>
          <Mainpage store={store} /> 
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            SHOWCASE END
          </Typography>
          <Copyright />
        </footer>
        {/* End footer */}
      </CssBaseline>
    </React.Fragment>
  );
}
App.PropType = {
  store: PropTypes.object,
};
