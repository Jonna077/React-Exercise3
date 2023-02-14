import { Container, Stack } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./ProductList.module.css";

// export const ITEMS = [
//   {
//     id: 1,
//     image: "https://m.media-amazon.com/images/I/61bfdXk7nfL._AC_SL1500_.jpg",
//     name: "Samsung Flip 3",
//     price: 52990,
//   },
//   {
//     id: 2,
//     image: "https://m.media-amazon.com/images/I/619BkvKW35L._SL1500_.jpg",
//     name: "PlayStation 5",
//     price: 63689,
//   },
//   {
//     id: 3,
//     image: "https://m.media-amazon.com/images/I/716vTg39ddL._AC_SL1500_.jpg",
//     name: "Gaming Headset",
//     price: 10000,
//   },
//   {
//     id: 4,
//     image: "https://m.media-amazon.com/images/I/71NBQ2a52CL._SL1500_.jpg",
//     name: "XBox Series S",
//     price: 17750,
//   },
// ];

const ProductList = ({ products }) => {
  // const itemList = ITEMS.map((item) => (
  //   <ProductItem
  //     key={item.id}
  //     id={item.id}
  //     image={item.image}
  //     name={item.name}
  //     price={item.price}
  //   />
  // ));

  // const [items, setItems] = useState(ITEMS);
  // const addItemHandler = (item) => {
  //   setItems((prevItems) => {
  //     return [item, ...prevItems];
  //   });
  //   console.log(item);
  // };

  return (
    <Container sx={{ py: 8 }} maxWidth="md">
      {/* <NewItem onAddItem={addItemHandler}>{items.item}</NewItem> */}
      {/* <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ m: 5 }}
      >
        {itemList}
      </Stack> */}
      <ul className={classes.list}>
        {products.map((product) => (
          <li key={product.id} className={classes.item}>
            <Link to={product.id}>
              <img src={product.image} alt={product.title} />
              <div className={classes.content}>
                <h2>{product.title}</h2>
                <h1>{product.description}</h1>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default ProductList;
