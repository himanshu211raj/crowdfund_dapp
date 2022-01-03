import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog({ open, handleClose, handleSubmit }) {
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Project creation form</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create a new project to be funded, please fill out the form.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="title"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Description"
            type="description"
            fullWidth
            variant="standard"
          />
          <TextField
            id="outlined-number"
            label="Amount (in ETH)"
            type="number"
            className="mt-5 mr-5"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="outlined-number"
            label="Duration (in days)"
            type="number"
            className="mt-5"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
