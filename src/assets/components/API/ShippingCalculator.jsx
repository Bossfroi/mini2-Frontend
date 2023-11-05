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

      
      const shippingFeePlaceholder = 0.10;
      const fee = distance * shippingFeePlaceholder;

      setShippingFee(fee);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-center">Shipping Fee Calculator</h1>
        <input
          type="text"
          placeholder="Pickup Location"
          className="w-full p-2 border rounded mb-4"
          value={pickupLocation}
          onChange={(e) => setPickupLocation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Delivery Location"
          className="w-full p-2 border rounded mb-4"
          value={deliveryLocation}
          onChange={(e) => setDeliveryLocation(e.target.value)}
        />
        <button
          onClick={calculateShippingFee}
          className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600"
        >
          Calculate Shipping Fee
        </button>
        {shippingFee !== null && (
          <div className="mt-4">
            <p className="text-lg font-semibold text-center">
              Shipping Fee: ${shippingFee.toFixed(2)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShippingCalculator;
