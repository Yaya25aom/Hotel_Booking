import React from 'react';

const ReservationForm = () => {
  return (
    <div className="flex items- mb-4" style={{paddingTop:'8rem'}}>
      <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md mr-4 mb-4 md:mb-0">
        <YourReservation />
      </div>
      <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md mr-4 mb-4 md:mb-0">
        <GuestInformation />
      </div>
      <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md">
        <PaymentMethod />
      </div>
    </div>
  );
};

const YourReservation = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Your Reservation</h2>
      <div className="mb-4">
        <span className="text-gray-600">Stay Longer and Save More</span>
        <i className="fas fa-info-circle text-gray-400 ml-1"></i>
      </div>
      <div className="mb-4">
        <p className="text-gray-800 font-bold">3 Bedroom Ocean Front Residence (Villa Sawani) - 1 room</p>
        <p className="text-gray-600">USD 101,120.00</p>
      </div>
      <div className="mb-4">
        <i className="fas fa-calendar-alt text-gray-400 mr-2"></i>
        <span className="text-gray-600">8 nights</span>
        <i className="fas fa-user-friends text-gray-400 ml-4 mr-2"></i>
        <span className="text-gray-600">20 adults, 4 children</span>
      </div>
      <ul className="list-none">
        {/* Loop through dates and prices */}
        <li className="flex justify-between mb-2">
          <span className="text-gray-600">Fri, Apr 12, 2024</span>
          <span className="text-gray-800 font-bold">USD 15,800.00</span>
        </li>
        {/* ... */}
      </ul>
      <hr className="border-gray-300 mb-4" />
      <div className="flex justify-between font-bold">
        <span className="text-gray-600">Subtotal</span>
        <span className="text-gray-800">USD 101,120.00</span>
      </div>
      <div className="mt-4">
        <span className="text-gray-600 mr-2">Tax:</span>
        <span className="text-gray-800 font-bold">USD 8,797.44</span>
      </div>
      <div className="mt-2">
        <span className="text-gray-600 mr-2">Service Charges:</span>
        <span className="text-gray-800 font-bold">USD 10,112.00</span>
      </div>
      <div className="mt-4 font-bold">
        <span className="text-gray-600">Total:</span>
        <span className="text-gray-800">USD 120,029.44</span>
      </div>
    </div>
  );
};

const GuestInformation = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Guest Information</h2>
      <div className="mb-4">
        <label htmlFor="salutation" className="block text-gray-700 font-bold mb-2">
          Salutation/Title
        </label>
        <select id="salutation" className="border border-gray-400 p-2 w-full">
          <option>Mr.</option>
          <option>Ms.</option>
          <option>Mrs.</option>
        </select>
      </div>
      <div className="mb-3">
        <label htmlFor="firstName" className="block text-gray-700 font-bold mb-1">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          className="border border-gray-400 p-2 w-full"
          // placeholder="Enter your first name"
        />
        <label htmlFor="lastname" className="block text-gray-700 font-bold mb-1">
          Last Name
        </label>
        <input
          type="text"
          id="lastname"
          className="border border-gray-400 p-2 w-full"
          // placeholder="Enter your last name"
        />
        <label htmlFor="email" className="block text-gray-700 font-bold mb-1">
          Email Address
        </label>
        <input
          type="text"
          id="email"
          className="border border-gray-400 p-2 w-full"
          // placeholder="Enter your Email Address"
        />
        <label htmlFor="phone" className="block text-gray-700 font-bold mb-1">
          Phone Number
        </label>
        <input
          type="text"
          id="phone"
          className="border border-gray-400 p-2 w-full"
          // placeholder="Enter your phone number"
        />
        <label htmlFor="address" className="block text-gray-700 font-bold mb-1">
          Address
        </label>
        <input
          type="text"
          id="address"
          className="border border-gray-400 p-2 w-full"
          // placeholder="Enter your address"
        />
        <label htmlFor="city" className="block text-gray-700 font-bold mb-1">
          City
        </label>
        <input
          type="text"
          id="city"
          className="border border-gray-400 p-2 w-full"
          // placeholder="Enter your address"
        />
        <label htmlFor="country" className="block text-gray-700 font-bold mb-1">
          Country
        </label>
        <input
          type="text"
          id="country"
          className="border border-gray-400 p-2 w-full"
          // placeholder="Enter your address"
        />
      </div>
      {/* Add more form fields for last name, email, phone number, address, etc. */}
    </div>
  );
};

const PaymentMethod = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Payment Method</h2>
      <div className="mb-4">
        <div className="flex items-center mb-2">
          <img src="/assets/image/visa1.png" alt="Visa" className="h-20 mr-2" />
          <img src="/assets/image/mastercard.png" alt="Mastercard" className="h-20 mr-2" />
          <img src="/assets/image/unionpay.png" alt="Unionpay" className="h-12 mr-2" />
          <img src="/assets/image/qr.png" alt="qrcode" className="h-20 mr-2" />
        </div>
        <label htmlFor="cardNumber" className="block text-gray-700 font-bold mb-2">
          Card Number
        </label>
        <input
          type="text"
          id="cardNumber"
          className="border border-gray-400 p-2 w-full"
          placeholder="Enter your card number"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="nameOnCard" className="block text-gray-700 font-bold mb-2">
          Name on Card
        </label>
        <input
          type="text"
          id="nameOnCard"
          className="border border-gray-400 p-2 w-full"
          placeholder="Enter name on card"
        />
      </div>
      <div className="flex mb-4">
        <div className="mr-4">
          <label htmlFor="expiryMonth" className="block text-gray-700 font-bold mb-2">
            Expiry Month
          </label>
          <select id="expiryMonth" className="border border-gray-400 p-2">
            <option>01</option>
            <option>02</option>
            {/* Add more options for months */}
          </select>
        </div>
        <div>
          <label htmlFor="expiryYear" className="block text-gray-700 font-bold mb-2">
            Expiry Year
          </label>
          <select id="expiryYear" className="border border-gray-400 p-2">
            <option>2023</option>
            <option>2024</option>
            {/* Add more options for years */}
          </select>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex items-center">
          <input type="checkbox" id="sameAddress" className="mr-2" />
          <label htmlFor="sameAddress" className="text-gray-700">
            Use the same address as contact information
          </label>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex items-center">
          <input type="checkbox" id="offers" className="mr-2" />
          <label htmlFor="offers" className="text-gray-700">
            Notify me about special offers
          </label>
        </div>
      </div>
      <div className="mb-4">
        <div className="flex items-center">
          <input type="checkbox" id="terms" className="mr-2" />
          <label htmlFor="terms" className="text-gray-700">
            I have read and agree to the{' '}
            <a href="#" className="text-blue-500 underline">
              Terms & Conditions
            </a>{' '}
            and{' '}
            <a href="#" className="text-blue-500 underline">
              Privacy Policy
            </a>
          </label>
        </div>
      </div>
      <button className="bg-brown-500 text-white py-2 px-4 rounded">
        COMPLETE RESERVATION
      </button>
    </div>
  );
};

export default ReservationForm;