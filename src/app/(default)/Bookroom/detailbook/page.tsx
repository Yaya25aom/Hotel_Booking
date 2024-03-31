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
<div className='flex '>  
<div className="flex">
<svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      
    >
      <path d="M14 0H2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
      <path d="M6.5 7a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm-9 3a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2zm3 0a1 1 0 100-2 1 1 0 000 2z" />
    </svg>

  <span className="text-gray-600">8 nights</span>
  </div>
  <div className='flex'>
  <svg
    fill="currentColor"
    viewBox="0 0 16 16"
    height="1em"
    width="1em"
    className="text-gray-400 ml-4 mr-2"
  >
    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 017 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 01-.014.002H7.022zM11 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0zM6.936 9.28a5.88 5.88 0 00-1.23-.247A7.35 7.35 0 005 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 015 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 004 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 116 0 3 3 0 01-6 0zm3-2a2 2 0 100 4 2 2 0 000-4z" />
  </svg>
  <span className="text-gray-600">20 adults, 4 children</span>
</div>
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