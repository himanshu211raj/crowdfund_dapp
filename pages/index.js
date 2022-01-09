import React, { useState } from "react";
import Button from "@mui/material/Button";
import Cards from "../components/Cards";
import FormDialog from "../components/dialog";
import Typography from "@mui/material/Typography";
import { ethers } from "ethers";

// import crowdfundInstance from "../contracts/crowdfundInstance";
// import crowdfundProject from "../contracts/crowdfundProjectInstance";
// import web3 from "../contracts/web3";

const data = [
  {
    title: "React",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    duration: "Fri Jan 14 2022 11:59:59 GMT+5:30 (IST)",
    status: "Ongoing",
    goalAmount: 100,
    raisedAmount: 50,
  },
  {
    title: "Next",
    description: "A JavaScript library for building user interfaces.",
    duration: "Sat Jan 15 2022 11:59:59 GMT+5:30 (IST)",
    status: "Ongoing",
    goalAmount: 100,
    raisedAmount: 50,
  },
  {
    title: "React",
    description: "A JavaScript library for building user interfaces.",
    duration: "Sun Jan 16 2022 11:59:59 GMT+5:30 (IST)",
    status: "Ongoing",
    goalAmount: 100,
    raisedAmount: 50,
  },
];

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const [connectButtonText, setConnectButtonText] = useState("Connect Wallet");
  const handleClose = () => {
    setOpen(false);
  };

  const connectWalletHandler = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((result) => {
          accountChangedHandler(result[0]);
        });
    } else {
      setErrorMessage("Please install MetaMask");
    }
  };

  const accountChangedHandler = (newAccount) => {
    setDefaultAccount(newAccount);
    getUserBalance(newAccount.toString());
    console.log(newAccount);
  };
  const getUserBalance = (address) => {
    window.ethereum
      .request({ method: "eth_getBalance", params: [address, "latest"] })
      .then((balance) => {
        setUserBalance(ethers.utils.formatEther(balance));
        console.log(ethers.utils.formatEther(balance));
      });
  };

  const chainChangedHandler = () => {
    window.location.reload();
  };
  // window.ethereum.on("accountsChanged", accountChangedHandler);
  // window.ethereum.on("chainChanged", chainChangedHandler);
  return (
    <>
      <div className="pt-8 px-10 text-align: center;">
        <div className="flex items-center justify-center ">
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            Crowdfund dapp
          </Typography>
          <div className="flex flex-col ">
            <Button
              onClick={connectWalletHandler}
              variant="outlined"
              className="min-w-fit"
            >
              {connectButtonText}
            </Button>
            <h>Address: {defaultAccount}</h>
            <h>Balance: {userBalance}</h>
            {errorMessage}
          </div>
        </div>

        <div className="my-5 w-full text-center ">
          <Button variant="outlined" onClick={() => setOpen(true)}>
            Start Project
          </Button>
        </div>

        <h1 className=" text-2xl font-bold ">Projects</h1>

        <div className="flex flex-wrap">
          {data.map((item, index) => (
            <Cards {...item} key={index} />
          ))}
        </div>
      </div>
      {open && <FormDialog open={open} handleClose={handleClose} />}
    </>
  );
}
