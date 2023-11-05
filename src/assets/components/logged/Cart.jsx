import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Cart() {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const ids = Array.from({ length: 20 }, (_, index) => index + 1);

    const data = ids.map((id) => {
      const storedData = localStorage.getItem(`cartuserdata ${id}`);
          if (storedData !== null) {
        return JSON.parse(storedData);
      } else {
        return { message: "No data found" };
      }
    });

    setCartData(data);
  }, []);

  const removeFromCart = (id) => {
    // Remove the item from local storage
    localStorage.removeItem(`cartuserdata ${id}`);
    
    // Update the cart data state
    setCartData((prevCartData) => prevCartData.filter(item => item.id !== id));
  };

  // Calculate subtotal and total
  const subtotal = cartData
    .filter(item => item.message !== "No data found")
    .reduce((acc, item) => acc + (item.rentalAmount * item.rentdays || 0), 0);
  
  return (
    
    <div className="bg-gray-100 ">
      <div className="container mx-auto p-4 ">
        <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 ">
          {cartData
            .filter(item => item.message !== "No data found")
            .map((item, index) => (
              <CartItem key={index} item={item} removeFromCart={removeFromCart} />
            ))}

          
        <CartSummary subtotal={subtotal} />
        
        </div>
      </div>
    </div>
  );
}




    function CartItem({ item, removeFromCart }) {
      return (
        <div className="w-full md:w-auto bg-white p-4 rounded-md shadow-md  ">
       <div className="flex flex-wrap sm:flex-no-wrap lg:flex-no-wrap justify-center items-center">
       <img
            src={item.picture}
             alt="Product Image"
             className="w-16 h-10 md:w-10 md:h-10 lg:w-20 lg:h-20 rounded-lg object-cover shadow-lg border border-gray-200"
/>
            <div className="ml-4 md:ml-6 sm:ml-8">
              <h2 className="text-sm font-semibold">{item.title}</h2>
              <p className="text-green-600">Price: ${item.rentalAmount || 0}</p>
            </div>
            <div className="ml-4 md:ml-6 sm:ml-8 ">
              <h2 className="text-sm font-semibold">Rent Date</h2>
              <p className="text-gray-600">{item.startDate}</p>
            </div>
            <div className="ml-4 md:ml-6 sm:ml-8">
              <h2 className="text-sm font-semibold">End Date</h2>
              <p className="text-blue-600">{item.endDate}</p>
            </div>
            <div className="ml-4 md:ml-6 sm:ml-8">
              <h2 className="text-sm font-semibold">Days</h2>
              <p className="text-orange-600">{item.rentdays}</p>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <button
              onClick={() => removeFromCart(item.id)}
              className="ml-2 bg-red-500 text-white py-2 px-4 rounded-md"
            >
              Remove
            </button>
          </div>
        </div>
      );
    }
    
    function CartSummary({ subtotal }) {
      return (
        <div className="md:col-span-2 w-full md:w-auto bg-white p-4 rounded-md shadow-md">
          <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
          <div className="flex justify-between mb-4">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>Total:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <span className="flex justify-between mb-4"></span>
          <Link to={`/PaymentMethod?subtotal=${subtotal}`} className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out">
            Proceed to Payment
          </Link>
        </div>
      );
    }
    