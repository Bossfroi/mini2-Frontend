import React, { useState } from 'react';
import axios from 'axios';

function ShippingCalculator() {
  const [pickupLocation, setPickupLocation] = useState('');
  const [deliveryLocation, setDeliveryLocation] = useState('');
  const [shippingFee, setShippingFee] = useState(null);

  const calculateShippingFee = async () => {
    try {
      const response = await axios.get(
        `http://www.mapquestapi.com/directions/v2/route?key=8s9Nl0hLy75fYzsOR1biq2LSYxEYprTQ&from=${pickupLocation}&to=${deliveryLocation}`
      );

      const distance = response.data.route.distance;

      
      const shippingFeePlaceholder = 1000;
      const fee = distance * shippingFeePlaceholder;

      setShippingFee(fee);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 min-h-screen flex justify-center">
  <div className="bg-white p-8 rounded-lg shadow-lg h-3/4 w-4/5 mt-20">
    <h1 className="text-3xl font-bold mb-4 text-center">Shipping Fee Calculator</h1>
    <input
      type="text"
      placeholder="Enter Pickup Location"
      className="w-full px-4 py-2 border rounded mb-4 focus:outline-none focus:ring focus:border-blue-500"
      value={pickupLocation}
      onChange={(e) => setPickupLocation(e.target.value)}
    />
    <input
      type="text"
      placeholder="Enter Delivery Location"
      className="w-full px-4 py-2 border rounded mb-4 focus:outline-none focus:ring focus:border-blue-500"
      value={deliveryLocation}
      onChange={(e) => setDeliveryLocation(e.target.value)}
    />
    <button
      onClick={calculateShippingFee}
      className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
    >
      Calculate Shipping Fee
    </button>
    {shippingFee !== null && (
      <div className="mt-4">
        <p className="text-lg font-semibold text-center">
          Shipping Fee: {shippingFee.toFixed(2)} pesos
        </p>
      </div>
    )}
  </div>
</div>

  );
}

export default ShippingCalculator;
