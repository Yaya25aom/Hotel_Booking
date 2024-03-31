import React, { useState } from 'react';

interface EnhancementModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const EnhancementModal: React.FC<EnhancementModalProps> = ({ isOpen, onClose }) => {
  const [numAdults, setNumAdults] = useState(1);
  const [menuOption, setMenuOption] = useState('Sea Set Menu');

  const handleNumAdultsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumAdults(parseInt(event.target.value, 10));
  };

  const handleMenuOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMenuOption(event.target.value);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg w-96">
            {/* โมดัลเนื้อหาที่ต้องการ */}
          </div>
        </div>
      )}
    </>
  );
};

export default EnhancementModal;
