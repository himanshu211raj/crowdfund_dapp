import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { Link } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard({
  title,
  time,
  description,
  status,
  totalAmount,
  amountRaised,
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Card sx={{ Width: 275 }} className="my-3">
        <CardContent>
          <Typography className="font-bold text-3xl">{title}</Typography>
          <Typography noWrap component="div">
            {description}
          </Typography>
          <Link className="cursor-pointer" onClick={() => setIsOpen(true)}>
            Show more
          </Link>
          <Typography className="py-2">Duration:{time}</Typography>
          <Typography
            sx={{ mb: 1.5 }}
            color="text.secondary"
            className="bg-sky-600 hover:bg-sky-700"
          >
            Status: {status}
          </Typography>
          <Typography variant="body2" className="font-bold">
            Goal Amount {totalAmount} ETH
          </Typography>
          <div className="flex items-center p-5">
            <TextField
              id="outlined-number"
              label="Amount (in ETH)"
              type="number"
              className="mt-5"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button
              variant="contained text-white bg-[#000000] hover:bg-[#6e695c]"
              className="ml-5 mt-5"
            >
              Fund
            </Button>
          </div>

          <div className="flex items-center justify-center px-5">
            <Typography
              className="text-center font-semibold"
              sx={{ width: "10%" }}
            >
              {amountRaised} ETH
            </Typography>
            <LinearProgress
              className="mx-20 my-4"
              variant="determinate"
              value={(amountRaised / totalAmount) * 100}
              sx={{
                borderRadius: "10px",
                width: "80%",
                height: "10px",
                marginTop: "5px",
                backgroundColor: "rgba(0,0,0,0.1)",
              }}
            />
            <Typography className="font-semibold">{totalAmount} ETH</Typography>
          </div>
        </CardContent>
      </Card>
      {isOpen && (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle>{title}</DialogTitle>
          <DialogContent>
            <DialogContentText>{description}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
}
