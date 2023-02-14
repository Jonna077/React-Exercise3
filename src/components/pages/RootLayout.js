import React from "react";
import Header from "../Layout/Header";
import { Outlet, useNavigation } from "react-router-dom";
import CartProvider from "../../store/CartProvider";
import { Typography } from "@mui/material";

const RootLayout = () => {
  // const navigation = useNavigation();

  return (
    <CartProvider>
      <Header />
      {/* {navigation.state === "loading" && <Typography>Loading ...</Typography>} */}
      <Outlet />
    </CartProvider>
  );
};

export default RootLayout;
