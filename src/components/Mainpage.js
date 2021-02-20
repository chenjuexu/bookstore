import * as React from "react";
import { useState, useCallback } from "react";
import PropTypes from "prop-types";
import Popper from "@material-ui/core/Popper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import { deleteBook, editeBook } from "../redux/actions";

export default function Mainpage({ store }) {
  const rows = store.getState();
  const handleDelete = (event, id) => {
    store.dispatch(deleteBook(id));
  };
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [introduction, setIntroduction] = useState();
  const handleEdit = (event, id) => {
    store.dispatch(editeBook(id, name, price, category, introduction));
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleModal = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;

  return (
    <div>
      <table
        style={{
          fontFamily: "Arial Helvetica sans-serif",
          borderCollapse: "collapse",
          width: "100%",
          border: "1px solid #ddd",
          padding: "8px",
        }}
      >
        <thead
          style={{
            paddingTop: "12px",
            paddingBottom: "12px",
            textAlign: "left",
            backgroundColor: "#4CAF50",
            color: "white",
          }}
        >
          <tr>
            <th></th>
            <th>Book Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>PIntroduction</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            return (
              <tr
                key={row.id.toString()}
                style={{
                  border: "1px solid #ddd",
                  padding: "18px",
                }}
              >
                <td>
                  <button
                    onClick={(event) => handleDelete(event, row.id)}
                    style={{
                      width: "56px",
                    }}
                  >
                    Delete
                  </button>
                  <br />
                  <button
                    onClick={handleModal}
                    style={{
                      width: "56px",
                    }}
                  >
                    Edit
                  </button>
                  <Popper
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    disablePortal={false}
                    style={{
                      position: "fixed",
                      marginLeft: "200px",
                      marginBottom: "100px",
                    }}
                  >
                    <div
                      style={{
                        border: "1px solid",
                        backgroundColor: "#f9fbe7",
                      }}
                    >
                      <form
                        noValidate
                        autoComplete="off"
                        style={{ padding: "40px" }}
                      >
                        <TextField
                          id="standard-basic"
                          label="Book Name"
                          defaultValue={row.name}
                          onChange={(event) => setName(event.target.value)}
                        />
                        <br />
                        <TextField
                          id="standard-basic"
                          label="Price"
                          onChange={(event) => setPrice(event.target.value)}
                        />
                        <br />
                        <FormControl style={{ minWidth: 120 }}>
                          <InputLabel id="demo-simple-select-label">
                            Category
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            onChange={(event) =>
                              setCategory(event.target.value)
                            }
                          >
                            <MenuItem value={"computer"}>computer</MenuItem>
                            <MenuItem value={"newspaper"}>newspaper</MenuItem>
                            <MenuItem value={"magazine"}>magazine</MenuItem>
                            <MenuItem value={"novel"}>novel</MenuItem>
                            <MenuItem value={"biography"}>biography</MenuItem>
                            <MenuItem value={"audibook"}>audibook</MenuItem>
                          </Select>
                        </FormControl>
                        <br />
                        <TextField
                          id="standard-basic"
                          label="Introduction"
                          rows="4"
                          multiline
                          cols="50"
                          placeholder="Max 200 characters"
                          onChange={(event) =>
                            setIntroduction(event.target.value)
                          }
                        />
                        <br />
                        <br />

                        <Button
                          variant="outlined"
                          onClick={(event) => handleEdit(event, row.id)}
                          style={{ margin: "10px", width: "60px" }}
                        >
                          Save
                        </Button>
                        <Button
                          variant="outlined"
                          onClick={handleModal}
                          style={{ margin: "10px", width: "60px" }}
                        >
                          Close
                        </Button>
                      </form>
                    </div>
                  </Popper>

                  <br />
                </td>
                <td>{row.name}</td>
                <td>{row.price}</td>
                <td>{row.category}</td>
                <td>{row.introduction}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

Mainpage.propTypes = {
  store: PropTypes.object,
  select: PropTypes.array,
};
