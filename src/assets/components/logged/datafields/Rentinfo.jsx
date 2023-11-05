import React from 'react';

export default function RentInfo() {
  // Sample data for rent information
  const rentDetails = {
    Project: "123 Main St",
    city: "Anytown",
    state: "Example State",
    rentAmount: "$1500",
    trucks: 2,
    powertools: 1,
  };

  return (
    <div className="w-full md:w-3/3 p-4 md:p-1 justify-center text-center flex">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center animate__animated animate__fadeIn">
        <h2 className="text-2xl font-bold mb-4">Rent Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-lg">
              <span className="font-bold">Project:</span> {rentDetails.Project}
            </p>
            <p className="text-lg">
              <span className="font-bold">City:</span> {rentDetails.city}
            </p>
            <p className="text-lg">
              <span className="font-bold">State:</span> {rentDetails.state}
            </p>
          </div>
          <div>
            <p className="text-lg">
              <span className="font-bold">Rent Amount:</span> {rentDetails.rentAmount}
            </p>
            <p className="text-lg">
              <span className="font-bold">trucks:</span> {rentDetails.trucks}
            </p>
            <p className="text-lg">
              <span className="font-bold">powertools:</span> {rentDetails.powertools}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
