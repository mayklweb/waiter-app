import { useRef, useState } from "react";
import { jsPDF } from "jspdf";
import useCartStore from "../store";
import html2canvas from "html2canvas";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { getPaymet } from "../api/apiServices";

export default function CheckOut() {
  const { cart, getTotalPrice } = useCartStore();

  const totalPrice = getTotalPrice();
  const loaction = useParams();
  const roomId = +loaction.roomId;
  const tableId = +loaction.tableId;

  const [filteredProducts, setFilteredProducts] = useState([]);
  const {
    data: pay,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["payment"],
    queryFn: getPaymet,
  });

  const checkout = pay?.filter((item) => item.table === tableId);
  console.log(checkout);

  const contentRef = useRef();

  const generatePdf = () => {
    const doc = new jsPDF();
  
    doc.setFontSize(16);
    doc.text("Order Details", 10, 10); // Title
    let y = 20;
  
    if (checkout?.length > 0) {
      checkout.forEach((item, index) => {
        doc.setFontSize(12);
        doc.text(`Table: ${tableId}, Order #${index + 1}`, 10, y);
        y += 10;
  
        item.products.forEach((product, i) => {
          doc.text(
            `${i + 1}.Name: ${product.name}, Quantity: ${item.qty}, Price: ${product.price} so'm`,
            10,
            y
          );
          y += 10;
        });
  
        y += 5; // Add some space between orders
      });
  
      doc.text(
        `Total Price: ${getTotalPrice()?.toLocaleString()} so'm`,
        10,
        y + 10
      );
    } else {
      doc.text("No orders available for this table.", 10, y);
    }
  
    doc.save("api-data.pdf");
  };
  

  return (
    <div className="container">
      <div ref={contentRef} className="card">
        <div className="card-header">
          <h2 className="card-title">Order Details</h2>
        </div>
        <div className="card-content">
          {cart?.length === 0 ? (
            <p className="no-orders">No orders for this table.</p>
          ) : (
            <>
              <ul className="order-list">
                {checkout?.map((item, index) => (
                  <li key={index} className="order-item">
                    {item.products.map((product, i) => (
                      <span key={i}>
                        <span>
                          {product.name} x{item.qty}
                        </span>
                        <span>{product.price} so'm</span>
                      </span>
                    ))}
                  </li>
                ))}
              </ul>
              <div className="total">
                {getTotalPrice()?.toLocaleString()} so'm
              </div>
            </>
          )}

          <button onClick={generatePdf} className="checkout-btn">
            CHECK
          </button>
        </div>
      </div>
    </div>
  );
}
