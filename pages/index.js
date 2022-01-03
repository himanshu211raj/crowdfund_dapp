import * as React from "react";
import Button from "@mui/material/Button";
import BasicCard from "../components/cards";
import FormDialog from "../components/dialog";
import Typography from "@mui/material/Typography";

const data = [
  {
    title: "React",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    time: "10 days",
    status: "Ongoing",
    totalAmount: 100,
    amountRaised: 50,
  },
  {
    title: "Next",
    description: "A JavaScript library for building user interfaces.",
    time: "10 days",
    status: "Ongoing",
    totalAmount: 100,
    amountRaised: 50,
  },
  {
    title: "React",
    description: "A JavaScript library for building user interfaces.",
    time: "10 days",
    status: "Ongoing",
    totalAmount: 100,
    amountRaised: 50,
  },
];

export default function Home() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="pt-8 px-10">
        <div className="flex items-center justify-center ">
          <Typography variant="h3" component="div" sx={{ flexGrow: 1 }}>
            Crowdfund dapp
          </Typography>
          <Button variant="outlined">Connect Wallet</Button>
        </div>

        <div className="my-5 w-full text-center ">
          <Button variant="outlined" onClick={() => setOpen(true)}>
            Start Project
          </Button>
        </div>

        <div className="py-10">
          <h1 className=" text-2xl font-bold ">Projects</h1>
        </div>
        <div className="flex flex-wrap">
          {data.map((item, index) => (
            <BasicCard {...item} key={index} />
          ))}
        </div>
      </div>
      {open && <FormDialog open={open} handleClose={handleClose} />}
    </>
  );
}
