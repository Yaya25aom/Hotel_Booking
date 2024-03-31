'use client'
import React, { useState } from 'react';

interface EnhancementModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void; // เพิ่มฟังก์ชัน onOpen เพื่อเปิดโมดัล
}

const EnhancementModal: React.FC<EnhancementModalProps> = ({ isOpen, onClose, onOpen }) => {
  const [numAdults, setNumAdults] = useState(1);
  const [menuOption, setMenuOption] = useState('Sea Set Menu');

  const handleNumAdultsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumAdults(parseInt(event.target.value, 10));
  };

  const handleMenuOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMenuOption(event.target.value);
  };

  return (
    <div>
      {isOpen && ( // เพิ่มเงื่อนไขการแสดงโมดัล
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg w-96">
            <div className="flex justify-between items-center mb-4">
              <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h2 className="text-xl font-bold">Enhancement Details</h2>
            </div>
            <div className="mb-4">
              <h3 className="text-lg font-semibold">Enhance Your Stay</h3>
              <p className="text-sm">Enhancements &gt;&gt; SaT Restaurant</p>
              <p className="text-sm">Available at our MICHELIN-recommended restaurant. Seafood at Trisara SaT, refines homestyle dining celebrating Southern Thai heritage recipes using local ingredients, highlighting flavours from the land and sea.</p>
              <p className="text-sm">From USD 106.00 Per Adult</p>
            </div>
            <div className="mb-4 flex justify-between items-center">
              <input
                type="number"
                value={numAdults}
                onChange={handleNumAdultsChange}
                min="1"
                className="w-1/2 px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
              />
              <select
                value={menuOption}
                onChange={handleMenuOptionChange}
                className="w-1/2 px-3 py-2 border rounded-md border-gray-300 focus:outline-none focus:border-blue-500"
              >
                <option value="Sea Set Menu">Sea Set Menu</option>
                {/* Add more menu options here */}
              </select>
            </div>
            <p className="text-sm mb-4">Enhancement total: USD {numAdults * 106}.00</p>
            <div className="flex justify-end">
              <button onClick={onClose} className="mr-2 px-4 py-2 bg-gray-200 text-gray-600 rounded-md hover:bg-gray-300 focus:outline-none focus:bg-gray-300">CANCEL</button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">SAVE AND RETURN TO ENHANCEMENTS</button>
            </div>
          </div>
        </div>
      )}
      <button onClick={onOpen} className='text-white py-2 px-4' style={{ backgroundColor: '#725a5a' }}> ADD ENHANCEMENT</button> {/* เมื่อคลิกที่ปุ่มนี้จะเปิดโมดัล */}
    </div>
  );
};

export default EnhancementModal;
