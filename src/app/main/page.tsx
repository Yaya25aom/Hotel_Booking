
'use client'
import React, { useState } from 'react';

const Page = () => {
    const [items, setItems] = useState<string[]>([]); // กำหนดชนิดของ items เป็น string[]
  
    const addItem = () => {
      const newItem = `Item ${items.length + 1}`;
      setItems([...items, newItem]);
    };

    return (
        <div className="flex justify-center items-center h-screen">
       
          
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="textadult" style={{ fontFamily: 'Raleway, Roboto, sans-serif !important'}}>GUEST & ROOM</p>
          <div className="flex items-center">
          <select className="bg-gray-700  py-1 px-2 mr-2 border-b border-gray-700" style={{color: '#efa982', borderColor:'#90bdd7',backgroundColor:'rgb(55 65 81 / 0%)',paddingRight:'8rem'}}>
              <option value="1">1 Adult</option>
              <option value="2">2 Adults</option>
              <option value="3">3 Adults</option>
            </select>
            </div>
            <div className="flex items-center" style={{paddingLeft:'17rem', marginTop:'-35px'}}>
          <select className="bg-gray-700  py-1 px-2 mr-2 border-b border-gray-700" style={{color: '#efa982', borderColor:'#90bdd7',backgroundColor:'rgb(55 65 81 / 0%)',paddingRight:'8rem'}}>
              <option value="1">0 Children</option>
              <option value="2">1 Childrens</option>
              <option value="3">2 Chil</option>
            </select>
            </div>
            <div>
          <button className="btn" onClick={addItem}>Add a Room</button>
          {items.map((item, index) => (
            <p key={index} className="py-2">{item}</p>
          ))}
        </div>
            </div>
            </div>
            </div>

    );
  };
  
export default Page