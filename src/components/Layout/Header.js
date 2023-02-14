import React from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  Badge,
  Button,
  ListItem,
  List,
} from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useContext } from "react";
import CartContext from "../../store/cart-context";
import { Link, NavLink } from "react-router-dom";

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Legit Gadget Shop
          </Typography>

          <List sx={{ display: "flex" }}>
            <ListItem>
              <NavLink
                to="/"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                Home
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink
                to="/products/new"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                Add Product
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink
                to="/products/:productId/edit"
                style={{
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                Edit Product
              </NavLink>
            </ListItem>
          </List>

          <Badge badgeContent={numberOfCartItems} color="error">
            <Link to="/cart-items">
              <ShoppingCartOutlinedIcon
                onClick={props.onShowCart}
                sx={{ color: "white" }}
              >
                Cart
              </ShoppingCartOutlinedIcon>
            </Link>
          </Badge>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
