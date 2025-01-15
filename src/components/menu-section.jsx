import { useState } from "react";

const menuItems = [
  { id: "1", name: "Caesar Salad", price: 8.99, category: "Starters" },
  { id: "2", name: "Tomato Soup", price: 6.99, category: "Starters" },
  { id: "3", name: "Grilled Chicken", price: 14.99, category: "Main Course" },
  { id: "4", name: "Beef Steak", price: 19.99, category: "Main Course" },
  { id: "5", name: "Vegetarian Pasta", price: 12.99, category: "Main Course" },
  { id: "6", name: "Chocolate Cake", price: 6.99, category: "Desserts" },
  { id: "7", name: "Ice Cream", price: 4.99, category: "Desserts" },
];

export default function MenuSection({ onOrderComplete }) {
  const [order, setOrder] = useState({});

  const addToOrder = (itemId) => {
    setOrder((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const removeFromOrder = (itemId) => {
    setOrder((prev) => {
      const newOrder = { ...prev };
      if (newOrder[itemId] > 1) {
        newOrder[itemId]--;
      } else {
        delete newOrder[itemId];
      }
      return newOrder;
    });
  };

  const calculateTotal = () => {
    return Object.entries(order).reduce((total, [itemId, quantity]) => {
      const item = menuItems.find((item) => item.id === itemId);
      return total + (item ? item.price * quantity : 0);
    }, 0);
  };

  const handleOrderComplete = () => {
    onOrderComplete(calculateTotal());
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-4">Menu</h2>
      {menuItems.map((item) => (
        <div key={item.id} className="flex justify-between items-center">
          <div>
            <p className="font-medium">{item.name}</p>
            <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => removeFromOrder(item.id)}
              disabled={!order[item.id]}
              variant="outline"
              size="sm"
            >
              -
            </button>
            <span>{order[item.id] || 0}</span>
            <button
              onClick={() => addToOrder(item.id)}
              variant="outline"
              size="sm"
            >
              +
            </button>
          </div>
        </div>
      ))}
      <div className="mt-6">
        <p className="text-xl font-semibold">Total: ${calculateTotal().toFixed(2)}</p>
        <button
          onClick={handleOrderComplete}
          className="w-full mt-4"
          disabled={Object.keys(order).length === 0}
        >
          Complete Order
        </button>
      </div>
    </div>
  );
}
