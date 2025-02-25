import { useReducer } from "react";

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.item]; // Add the new item
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.id); // Remove the item by ID
    default:
      return state;
  }
}

function ShoppingCart() {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const items = [
    // Sample product data
    { id: 1, name: "Shirt", price: 20 },
    { id: 2, name: "Pants", price: 30 },
    { id: 3, name: "Shoes", price: 50 },
  ];

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", item });
  };

  const removeFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", id });
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="container page-content shop">
      <div>
        <h2>Products</h2>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button className="add-btn" onClick={() => addToCart(item)}>
                Add to Cart
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Cart</h2>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              <button className="remove-from-cart-btn" onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>

        <h3>Total: ${calculateTotal()}</h3>
      </div>
    </div>
  );
}

export default ShoppingCart;
