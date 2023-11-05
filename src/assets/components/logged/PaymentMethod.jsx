import React, { useState, useEffect } from 'react';
import Logo from '../images/mediaLogo/Logo.png'; // Update the path to your actual logo
import { useLocation } from 'react-router-dom';
import Cart from './Cart';

export default function PaymentMethod() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const subtotal = queryParams.get('subtotal');

  const [userData, setUserData] = useState({
    name: '',
    given_name: '',
  });

  const [userData1, setUserData1] = useState({
    companyaddress: '',
    companynumber: '',
  });

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phoneNumber: '',
    city: '',
    zipCode: '',
    country: '',
    paymentMethod: '',
    items: '',
    price: 0,
    shippingFee: 0,
  });

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = JSON.parse(localStorage.getItem('userData')) || {};
        setUserData(userData);
      } catch (error) {
        console.error('Error parsing user data from localStorage:', error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchUserData1 = async () => {
      try {
        const userData1 = JSON.parse(localStorage.getItem('userData1')) || {};
        setUserData1(userData1);
      } catch (error) {
        console.error('Error parsing user data from localStorage:', error);
      }
    };

    fetchUserData1();
  }, []);

  const handlePaymentMethodChange = (e) => {
    const selectedPaymentMethod = e.target.value;
    setFormData({ ...formData, paymentMethod: selectedPaymentMethod });
  };

  const handleTotalCalculation = () => {
    // Calculate the total based on your specific logic here
    const itemsPrice = parseFloat(formData.price) || 0;
    const shippingFee = parseFloat(formData.shippingFee) || 0;
    const totalAmount = itemsPrice + shippingFee;
    setTotal(totalAmount);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the form data here. For simplicity, we're assuming all fields are required.
    if (
      formData.firstName &&
      formData.lastName &&
      formData.address &&
      formData.phoneNumber &&
      formData.city &&
      formData.zipCode &&
      formData.country &&
      formData.paymentMethod &&
      formData.items &&
      formData.price &&
      formData.shippingFee
    ) {
      // Form is valid, you can submit the data or perform other actions here.
      console.log('Form data submitted:', formData);
    } else {
      alert('Please fill in all required fields.');
    }
  };

  return (
  
    <div className="flex flex-col items-center justify-center min-h-fit bg-gray-100 mt-2">
      <div className="bg-gray p-8 rounded-lg shadow-lg">
        <img src={Logo} className="w-35 h-24" alt="Logo" />
        <h1 className="text-3xl text-center ">Payment Method</h1>
        <form className="flex mt-8" onSubmit={handleSubmit}>
        <Cart/>
          <div className="w-1/2 pr-4">
            <h1 className="text-2xl pb-4">Payment Details</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label htmlFor="firstName" className="block text-gray-700 text-sm font-bold">
                  First Name:
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full p-2 border rounded-md"
                  required
                  placeholder={userData.name}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="lastName" className="block text-gray-700 text-sm font-bold">
                  Last Name:
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full p-2 border rounded-md"
                  required
                  placeholder={userData.given_name}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="address" className="block text-gray-700 text-sm font-bold">
                  Address:
                </label>
                <input
                  type="text"
                  id="address"
                  className="w-full p-2 border rounded-md"
                  required
                  placeholder={userData1.companyaddress}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="phoneNumber" className="block text-gray-700 text-sm font-bold">
                  Phone Number:
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  className="w-full p-2 border rounded-md"
                  required
                  placeholder={userData1.companynumber}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="city" className="block text-gray-700 text-sm font-bold">
                  City:
                </label>
                <input
                  type="text"
                  id="city"
                  className="w-full p-2 border rounded-md"
                  placeholder="City"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="zipCode" className="block text-gray-700 text-sm font-bold">
                  Zip Code:
                </label>
                <input
                  type="text"
                  id="zipCode"
                  className="w-full p-2 border rounded-md"
                  placeholder="Zip Code"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="country" className="block text-gray-700 text-sm font-bold">
                  Address1
                </label>
                <input
                  type="text"
                  id="country"
                  className="w-full p-2 border rounded-md"
                  placeholder="Country"
                  required
                />
              </div>
           
              <div className="mb-4">
                <label htmlFor="paymentMethod" className="block text-gray-700 text-sm font-bold">
                  Payment Method:
                </label>
                <div className="relative">
                  <select
                    id="paymentMethod"
                    className="w-full p-2 border rounded-md pr-10"
                    required
                    onChange={handlePaymentMethodChange}
                  >
                    <option value="" disabled>Select Payment Method</option>
                    <option value="creditCard">Credit Card</option>
                    <option value="paypal">PayPal</option>
                    </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    
                    <img
                      src="/src/assets/components/images/credit.png"
                      alt="Credit Card Logo"
                      className="w-8 h-8 mr-2"
                    />
                    
                    <img
                      src="/src/assets/components/images/paypal.png"
                      alt="PayPal Logo"
                      className="w-8 h-8"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>  

          <div className="w-1/2 pl-4">
            <h1 className="text-2xl pb-4">Your Order:</h1>
            <div className="mb-4">
              <label className="block text-gray-700">Name of Representative</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Name"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Items:</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Enter the items you want to order"
                value={formData.items}
                onChange={(e) => setFormData({ ...formData, items: e.target.value })}
              />
              
            </div>
            <p className="text-lg text-green-600 font-semibold">Total Fee: ${subtotal}</p>
            <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded w-full">
              Place Order
            </button>
          </div>
        </form>
        
      </div>
      
    </div>
    
  );
}
