import React from "react";
import { useState, useLayoutEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import logo from "../logo.png";
import PropTypes from "prop-types";
import { addBook } from "../redux/actions";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  icon: {
    position: "fixed",
    color: "white",
    right: 20,
  },
}));

export default function Addbook({ store }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [cate, setCate] = useState();
  const [intro, setIntro] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  /*useLayoutEffect(() => {
    console.log(name)
  }, [name])
  test for input
  */
  const handleBook = () => {
    store.dispatch(addBook(name, cate, intro, price));
  };

  return (
    <div>
      <AppBar>
        <Toolbar position="relative">
          <img src={logo} alt="Logo" />
          <Button className={classes.icon} onClick={handleOpen}>
            {" "}
            Add Book
          </Button>
        </Toolbar>
      </AppBar>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <form onSubmit={handleBook}>
              <label for="bname">Book name:</label>
              <input
                type="text"
                id="bname"
                size="15"
                autoComplete="on"
                autoFocus
                onChange={(e) => setName(e.target.value)}
              />
              <label for="bprice" style={{ paddingLeft: "40px" }}>
                Price:
              </label>
              <input
                type="text"
                id="bprice"
                size="5"
                autoComplete="on"
                max="1000"
                onChange={(e) => setPrice(e.target.value)}
              />
              <br />
              <br />
              <label for="category">Category:</label>
              <input
                list="category"
                name="category"
                autoComplete="on"
                onChange={(e) => setCate(e.target.value)}
              />
              <datalist id="category">
                <option value="computer" />
                <option value="newspaper" />
                <option value="magazine" />
                <option value="novel" />
                <option value="biography" />
                <option value="audibook" />
              </datalist>
              <br />
              <br />
              <label for="bintro" color="primary">
                Introduction:
              </label>
              <br />
              <textarea
                id="bintro"
                size="20"
                autoComplete="on"
                name="bintro"
                rows="4"
                cols="50"
                placeholder="Max 200 characters"
                onChange={(e) => setIntro(e.target.value)}
              />
              <br />
              <br />
              <button onClick={handleClose} type="submit">
                Save Book
              </button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
Addbook.propType = {
  store: PropTypes.object,
};
