import { useState } from "react";

export default function EcommerceApp() {
  const products = [
    { id: 1, name: "Wireless Headphones", price: 2999 },
    { id: 2, name: "Smart Watch", price: 4999 },
    { id: 3, name: "Bluetooth Speaker", price: 1999 },
    { id: 4, name: "Laptop Backpack", price: 1499 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">E-Commerce Store</h1>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {/* Product List */}
        <div className="md:col-span-2 grid sm:grid-cols-2 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-2xl shadow"
            >
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600 mb-3">₹{product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Cart */}
        <div className="bg-white p-4 rounded-2xl shadow">
          <h2 className="text-xl font-semibold mb-3">Shopping Cart</h2>

          {cart.length === 0 && (
            <p className="text-gray-500">Your cart is empty</p>
          )}

          <ul className="space-y-2">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center border p-2 rounded-lg"
              >
                <span>{item.name}</span>
                <div className="flex items-center gap-2">
                  <span>₹{item.price}</span>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="text-red-600 text-sm"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {cart.length > 0 && (
            <div className="mt-4 font-semibold text-right">
              Total: ₹{totalPrice}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
