import useCartStore from "../store";

export default function CheckOut() {
  const { cart, getTotalPrice } = useCartStore();

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h2 className="card-title">Order Details</h2>
        </div>
        <div className="card-content">
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

          <button className="checkout-btn">CHECK</button>
        </div>
      </div>
    </div>
  );
}
