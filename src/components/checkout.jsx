import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getPaymet } from "../api/apiServices";
import { Axios } from "../api/api";

export default function CheckOut() {
  const loaction = useParams();
  const tableId = +loaction.tableId;

  const handleClick = () => {
    Axios.post("/generate-receipt/", { table_id: tableId })
      .then((res) => console.log("Success:", res.data))
      .catch((err) => console.log(err));
  };

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

  return (
    <div className="container">
      <div className="receipt">
        <h1>Arnaud's Restaurant</h1>
        {/* <div className="details">
            813 Rue Bienville<br>
            New Orleans, LA 70112<br>
            (504) 523-5433
        </div> */}

        {checkout?.map((item, i) => (
          <div key={i}>
            <table className="items">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Price</th>
                </tr>
              </thead>
              {item.products.map((product, i) => (
                <tbody key={i}>
                  <tr>
                    <td>{product.name}</td>
                    <td>{product.price} sum</td>
                  </tr>
                </tbody>
              ))}
            </table>
            <div className="line"></div>
            <div className="summary">
              <div>
                <span>Food</span>
                <span>19 000 sum</span>
              </div>
              <div>
                <span>Liquor</span>
                <span>78 000 sum</span>
              </div>
              <div>
                <span>Misc.</span>
                <span>14 000 sum</span>
              </div>
              <div>
                <span>Tax</span>
                <span>27 000 sum</span>
              </div>
              <div className="total">
                <span>Total</span>
                <span>31 000 sum</span>
              </div>
            </div>
          </div>
        ))}
        <button onClick={() => handleClick()} className="checkout-btn">
          checkout
        </button>
      </div>
    </div>
  );
}
