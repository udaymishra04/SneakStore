import React from "react";
import CartContext from "./CartContext";
import * as faker from '@faker-js/faker';

const CartProvider = ({ children }) => {
  const products = [...Array(20)].map(() => ({
    id: faker.faker.datatype.uuid(),
    name: faker.faker.commerce.productName(),
    price: faker.faker.commerce.price(),
    brand: faker.faker.company.name(),
    img: faker.faker.image.imageUrl(640, 480, 'fashion', true),
    rating: faker.faker.datatype.number({ min: 1, max: 5 }),
  }))

  return (
    <CartContext.Provider>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider