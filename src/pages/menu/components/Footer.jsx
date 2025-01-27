import { useMutation } from "react-query";
import { Axios } from "../../../api/api";
import useCartStore from "../../../store";
import { useParams } from "react-router-dom";

function Footer() {
  const { getTotalPrice, cart, clearCart } = useCartStore();
  const totalPrice = getTotalPrice();
  const loaction = useParams();
  const roomId = +loaction.roomId;
  const tableId = +loaction.tableId;

  const postOrder = useMutation(async (orderData) => {
    const response = await Axios.post("/save-order1/", orderData);
    return response.data;
  });

  const handleSubmit = () => {
    const orderData = [
      {
        user: "admin",
        products: [...cart],
        room_Id: roomId,
        table_Id: tableId,
      },
    ];

    postOrder.mutate(orderData, {
      onSuccess: () => {
        clearCart();
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
          <button
            disabled={!cart.length}
            onClick={handleSubmit}
            className="order-btn"
          >
            {`${totalPrice.toLocaleString()} so'm`}
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
