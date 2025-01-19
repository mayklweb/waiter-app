import React, { useEffect } from "react";
import { useMutation } from "react-query";
import { Axios } from "../../../api/api";
import useCartStore from "../../../store";

function Footer() {
  const { getTotalPrice, cart, clearCart } = useCartStore();
  const totalPrice = getTotalPrice();
  // const tg = window.Telegram?.WebApp;
  // const userJSON = tg.initDataUnsafe?.user;
  // const user = JSON.stringify(userJSON);

  // useEffect(() => {
  //   if (typeof Telegram !== "undefined" && Telegram.WebApp) {
  //     Telegram.WebApp.ready();
  //   } else {
  //     console.error("Telegram WebApp is not available.");
  //   }
  // }, []);

  const postOrder = useMutation(async (orderData) => {
    const response = await Axios.post("/save-order/", orderData);
    return response.data;
  });

  const handleSubmit = () => {
   
    const orderData = [
      {
        tg_ID: userJSON.id,
        products: [...cart],
        price: totalPrice,
      },
    ];

    postOrder.mutate(orderData, {
      onSuccess: (data) => {
        if (Telegram?.WebApp) {
          console.log("Order successful:", data);
          Telegram.WebApp.close();
          clearCart();
        }
      },
      onError: (error) => {
        console.error("Order failed:", error);
      },
    });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-r">
          {/* <p className="order-price">{`${totalPrice.toLocaleString()} so'm`}</p> */}
          <button onClick={handleSubmit} className="order-btn">
          {`${totalPrice.toLocaleString()} so'm`}
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
