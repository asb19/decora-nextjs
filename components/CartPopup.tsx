import { MyProduct } from "@/pages/_app";
import React, { useState, useEffect, FunctionComponent } from "react";
import Stripe from "stripe";
import { getProductName } from "./computed";

type CartProps = {
    item: MyProduct
}

const CartPopup: FunctionComponent <CartProps> = ({ item }) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    console.log("POPUP",item)
    if (item) {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
  }, [item?.count]);

  return (
    <div
      className={`fixed bottom-0 left-0 w-full p-4 bg-orange-500 ${
        showPopup ? "block" : "hidden"
      }`}
      style={{ zIndex: 999 }}
    >
      <p className="text-center">Added {getProductName(item ? item.product.product : "")} to cart</p>
    </div>
  );
};

export default CartPopup;
