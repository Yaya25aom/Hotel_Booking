import React from 'react';

interface AddEnhancementButtonProps {
  onClick: () => void;
}

const AddEnhancementButton: React.FC<AddEnhancementButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className='text-white py-2 px-4' style={{ backgroundColor: '#725a5a' }}>
      ADD ENHANCEMENT
    </button>
  );
};

export default AddEnhancementButton;
