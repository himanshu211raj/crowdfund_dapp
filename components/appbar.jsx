import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <div className="flex items-center justify-around px-5 bg-white">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Crowdfund dapp
            </Typography>
            <Button variant="outlined">Connect Wallet</Button>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
