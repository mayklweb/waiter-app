import { useRef } from "react";
import { jsPDF } from 'jspdf';
import useCartStore from "../store";
import html2canvas from "html2canvas";

export default function CheckOut() {
  const { cart, getTotalPrice } = useCartStore();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch data from an API
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const contentRef = useRef();

  const generatePdf = () => {
    const doc = new jsPDF();

    doc.text("API Data PDF", 10, 10); // Title

    data.forEach((user, index) => {
      doc.text(`${index + 1}. ${user.name} (${user.email})`, 10, 20 + index * 10);
    });

    doc.save("api-data.pdf");
  };



  return (
    <div className="container">
      <div ref={contentRef} className="card">
        <div className="card-header">
          <h2 className="card-title">Order Details</h2>
        </div>
        <div  className="card-content">
          {cart?.length === 0 ? (
            <p className="no-orders">No orders for this table.</p>
          ) : (
            <>
              <ul className="order-list">
                {cart?.map((item, index) => (
                  <li key={index} className="order-item">
                    <span>
                      {item.name} x{item.qty}
                    </span>
                    <span>{item.price.toLocaleString()} so'm</span>
                  </li>
                ))}
              </ul>
              <div className="total">{getTotalPrice()?.toLocaleString()} so'm</div>
            </>
          )}

          <button onClick={generatePdf} className="checkout-btn">CHECK</button>
        </div>
      </div>
    </div>
  );
}
