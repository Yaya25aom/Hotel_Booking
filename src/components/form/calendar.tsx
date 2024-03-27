'use client'
import React, { useState, useEffect } from 'react';

interface CalendarProps {
  // ...props
}

type State = {
  selectedDate: Date;
  checkInDate: Date | null;
  checkOutDate: Date | null;
  currentMonth: Date;
};

const CalendarComponent: React.FC<CalendarProps> = () => {
  const [state, setState] = useState<State>({
    selectedDate: new Date(),
    checkInDate: null,
    checkOutDate: null,
    currentMonth: new Date(),
  });

  const handlePrevMonth = () => {
    setState((prevState) => ({
      ...prevState,
      currentMonth: new Date(prevState.currentMonth.getFullYear(), prevState.currentMonth.getMonth() - 1, 1),
    }));
  };

  const handleNextMonth = () => {
    setState((prevState) => ({
      ...prevState,
      currentMonth: new Date(prevState.currentMonth.getFullYear(), prevState.currentMonth.getMonth() + 1, 1),
    }));
  };

  const handleDateClick = (date: Date) => {
    if (!state.checkInDate) {
      setState((prevState) => ({
        ...prevState,
        checkInDate: date,
      }));
    } else if (!state.checkOutDate && date > state.checkInDate) {
      setState((prevState) => ({
        ...prevState,
        checkOutDate: date,
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        checkInDate: date,
        checkOutDate: null,
      }));
    }
  };

  const generateDates = (selectedDate: Date): Date[] => {
    const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
    const lastDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
    const dates: Date[] = [];
    let currentDate = new Date(firstDayOfMonth);
    while (currentDate <= lastDayOfMonth) {
      dates.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  };

  const dates = generateDates(state.currentMonth);

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={handlePrevMonth}
          className="text-gray-500 hover:text-gray-700 font-bold"
        >
          <span className="text-2xl">&lt;</span>
        </button>
        <div className="text-lg font-bold">
          {state.currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </div>
        <button
          onClick={handleNextMonth}
          className="text-gray-500 hover:text-gray-700 font-bold"
        >
          <span className="text-2xl">&gt;</span>
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-2">
        <span className="text-xs text-gray-500 font-bold text-center">Su</span>
        <span className="text-xs text-gray-500 font-bold text-center">Mo</span>
        <span className="text-xs text-gray-500 font-bold text-center">Tu</span>
        <span className="text-xs text-gray-500 font-bold text-center">We</span>
        <span className="text-xs text-gray-500 font-bold text-center">Th</span>
        <span className="text-xs text-gray-500 font-bold text-center">Fr</span>
        <span className="text-xs text-gray-500 font-bold text-center">Sa</span>
      </div>
      <div className="grid grid-cols-7 gap-1 text-sm">
        {dates.map((date) => (
          <div
            key={date.getTime()}
            onClick={() => handleDateClick(date)}
            className={`text-center py-2 rounded cursor-pointer ${
              state.checkInDate && date.getTime() === state.checkInDate.getTime()
                ? 'bg-blue-500 text-white'
                : ''
            } ${state.checkOutDate && date.getTime() === state.checkOutDate.getTime() ? 'bg-green-500 text-white' : ''} ${
              state.checkInDate &&
              state.checkOutDate &&
              date > state.checkInDate &&
              date < state.checkOutDate
                ? 'bg-yellow-300'
                : ''
            } ${
              date.getMonth() !== state.currentMonth.getMonth()
                ? 'text-gray-300 cursor-default'
                : ''
            }`}
          >
            <span>{date.getDate()}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div>
          <div className="flex items-center mb-2">
            <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
            <span className="text-sm">Check-in</span>
          </div>
          <div className="flex items-center mb-2">
            <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
            <span className="text-sm">Check-out</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-yellow-300 rounded-full mr-2"></div>
            <span className="text-sm">Selected dates</span>
          </div>
        </div>
        <div>
          <div className="flex items-center mb-2">
            <span className="text-sm font-bold mr-2">THB</span>
            <span className="text-2xl font-bold">31,330</span>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent;