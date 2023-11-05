import React from 'react';
const [userData, setUserData] = useState(null);
const [userData1, setUserData1] = useState(null);
 // UseEffect para sa pagkuha ng user data mula sa local storage
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = localStorage.getItem('userData');
        if (userData) {
          const parsedUser = JSON.parse(userData);
          setUserData(parsedUser);
          setFormData((prevData) => ({ ...prevData, email: parsedUser.email }));
        }
      } catch (error) {
        console.error('Error parsing user data from localStorage:', error);
      }
    };

    fetchUserData();
  }, []);


 // UseEffect para sa pagkuha ng user data mula sa local storage
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData1 = localStorage.getItem('userData1');
        if (userData1) {
          const parsedUser = JSON.parse(userData1);
          setUserData1(parsedUser);
          setFormData1((prevData) => ({ ...prevData, email: parsedUser.email }));
        }
      } catch (error) {
        console.error('Error parsing user data from localStorage:', error);
      }
    };

    fetchUserData();
  }, []);


 // UseEffect to localdata para sa pagkuha ng user data mula sa local storage

export default function PaymentMethod() {
  return (

    
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <img src="/src/assets/components/images/Logo.png" alt="Logo" className="h-40 mx-auto" />
        <h1 className="text-3xl text-center mt-8">Payment Method</h1>
        <div className="flex mt-8">
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
                  placeholder="First Name"
                  required
                  value={userData.name}
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
                  placeholder="Last Name"
                  required
                  value={userData.given_name}
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
                  placeholder="Address"
                  required
                  value={userData1.companyaddress}
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
                  placeholder="Phone Number"
                  required
                  value={userData1.companynumber}
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
                  Country:
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
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Country:</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter your country"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Items:</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter the items you want to order"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Price:</label>
                <input
                  type="number"
                  step="0.01"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter the total price of items"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Shipping Fee:</label>
                <input
                  type="number"
                  step="0.01"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter the shipping fee"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Total:</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
                  readOnly
                />
              </div>
              <button
                type="submit"
                className="mt-4 bg-blue-500 text-white p-2 rounded w-full"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
