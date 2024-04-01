'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';


  
  // Call the function to display room availability when the page loads

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
    interface Room {
        RoomNo: number;
        Status: boolean;
      }
    
        const [room, setRoom] = useState<Room[]>([]);


      
        const fetchRooms = async () => {
          try {
            const response = await axios.get('/api/statusroom');
            setRoom(response.data);
          } catch (error) {
            console.log('Error fetching rooms:', error);
          }
        };
      
        useEffect(() => {
          fetchRooms();
          
        }, []);

        const [selectedRoom, setSelectedRoom] = useState<Room | undefined>(undefined);

        const checkRoomAvailability = async (date: Date) => {
            try {
                const response = await axios.get('/api/checkdate', {
                    params: { date: date.toISOString() }
                });
                const isAvailable = response.data.isAvailable;
                if (isAvailable) {
                    // หากห้องว่าง คุณสามารถเลือกห้องได้ตามเงื่อนไขที่คุณต้องการ
                    const availableRooms: Room[] = response.data.availableRooms;
                    // ยกเลิกค่า selectedRoom เก่า และเลือกห้องใหม่
                    setSelectedRoom(availableRooms[0]); // เลือกห้องแรกที่ว่างออกมา
                } else {
                    // กรณีห้องไม่ว่าง
                    setSelectedRoom(undefined); // ไม่มีห้องที่เลือก
                }
            } catch (error) {
                console.error('Error checking room availability:', error);
                // ดำเนินการเมื่อเกิดข้อผิดพลาด
            }
        };
        

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
    const handleDateClick = async (date: Date, isCurrentMonth: boolean) => {
        try {
            const isCurrentMonthValue = isCurrentMonth;
            if (!state.checkInDate) {
                setState((prevState) => ({
                    ...prevState,
                    checkInDate: date,
                }));
            } else if (!state.checkOutDate) {
                if (isCurrentMonthValue && date > state.checkInDate) {
                    setState((prevState) => ({
                        ...prevState,
                        checkOutDate: date,
                    }));
                } else if (!isCurrentMonthValue) {
                    setState((prevState) => ({
                        ...prevState,
                        checkOutDate: date,
                    }));
                }
            } else {
                setState((prevState) => ({
                    ...prevState,
                    checkInDate: date,
                    checkOutDate: null,
                }));
            }
    
            const response = await axios.get('/api/checkdate', {
                params: { date: date.toISOString() }
            });
            const isAvailable = response.data.isAvailable;
            if (!isAvailable) {
                // แสดง Popup ห้องไม่ว่าง
                alert('ขออภัย ห้องไม่ว่างในวันที่เลือก');
            } else {
                // ถ้าห้องว่าง กำหนด selectedRoom ให้เป็นห้องที่ว่างออกมาและตั้งค่า checkOutDate ให้เป็น null
                const availableRooms: Room[] = response.data.availableRooms;
                setSelectedRoom(availableRooms[0]); // เลือกห้องแรกที่ว่างออกมา
                setState((prevState) => ({
                    ...prevState,
                    checkOutDate: null,
                }));
            }
        } catch (error) {
            console.error('Error checking room availability:', error);
            // ดำเนินการเมื่อเกิดข้อผิดพลาด
        }
    };
    
    const isCurrentMonth = (date: Date) => {
        const currentMonth = state.currentMonth.getMonth();
        const dateMonth = date.getMonth();
        return currentMonth === dateMonth;
    };

    const handleDateClickSafely = (clickedDate: Date | null, isCurrentMonth: boolean) => {
        if (clickedDate) {
            handleDateClick(clickedDate, isCurrentMonth);
        }
    };

    const generateDates = (selectedDate: Date): (Date | { date: Date, isCurrentMonth: boolean, isToday: boolean })[] => {
        const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1);
        const lastDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0);
        const dates: (Date | { date: Date, isCurrentMonth: boolean, isToday: boolean })[] = [];
        let currentDate = new Date(firstDayOfMonth.getFullYear(), firstDayOfMonth.getMonth(), 1 - firstDayOfMonth.getDay());
        const today = new Date(); // Get today's date

        while (currentDate <= lastDayOfMonth) {
            const date = new Date(currentDate);
            const isCurrentMonth = date.getMonth() === selectedDate.getMonth();
            const isToday = date.toDateString() === today.toDateString(); // Check if the date is today's date
            dates.push(isCurrentMonth ? date : { date, isCurrentMonth, isToday });
            currentDate.setDate(currentDate.getDate() + 1);
        }

        return dates;
    };


    const dates = generateDates(state.currentMonth);

    const generateNextMonthDates = (selectedDate: Date): Date[] => {
        const nextMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1);
        const lastDayOfNextMonth = new Date(nextMonth.getFullYear(), nextMonth.getMonth() + 1, 0);
        const dates: Date[] = [];
        let currentDate = new Date(nextMonth.getFullYear(), nextMonth.getMonth(), 1 - nextMonth.getDay());
        while (currentDate <= lastDayOfNextMonth) {
            dates.push(new Date(currentDate));
            currentDate.setDate(currentDate.getDate() + 1);
        }
        return dates;
    };
    const nextMonthDates = generateNextMonthDates(state.currentMonth);

    return (
        <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
                {/* <div className="flex"> */}
                <button
                    onClick={handlePrevMonth}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded"
                >
                    <span className="text-2xl">&lt;</span>
                </button>
                <div className="text-2xl font-bold ">
                    {state.currentMonth.toLocaleDateString('en-US', { year: 'numeric' })}
                </div>
                {/* </div> */}
                {/* <div className="flex"> */}
                <button
                    onClick={handleNextMonth}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded"
                >
                    <span className="text-2xl">&gt;</span>
                </button>
                {/* </div> */}
            </div>
            <div className="flex justify-between items-center mb-2">
                <div className="text-lg font-bold">
                    {state.currentMonth.toLocaleDateString('en-US', { month: 'long' })}
                </div>

                <div className="text-lg font-bold text-gray-400">
                    {new Date(state.currentMonth.getFullYear(), state.currentMonth.getMonth() + 1, 1).toLocaleDateString('en-US', { month: 'long' })}
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <div className="grid grid-cols-7 gap-1 mb-2 text-sm font-bold text-gray-800">
                        <span className="text-center">SUN</span>
                        <span className="text-center">MON</span>
                        <span className="text-center">TUE</span>
                        <span className="text-center">WED</span>
                        <span className="text-center">THU</span>
                        <span className="text-center">FRI</span>
                        <span className="text-center">SAT</span>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-sm">
                        {dates.map((dateOrObj, index) =>
                            dateOrObj instanceof Date ? (
                                <div
                                    key={index}
                                    onClick={() => handleDateClickSafely(dateOrObj, true)}
                                    className={`text-center py-2 rounded cursor-pointer ${state.checkInDate && dateOrObj.getTime() === state.checkInDate.getTime()
                                        ? 'bg-blue-500 text-white'
                                        : dateOrObj.toDateString() === new Date().toDateString() // Check if the date is today's date
                                            ? 'bg-lime-300 text-black' // Apply lime background for today's date
                                            : dateOrObj >= new Date() // Check if the date is after today
                                                ? 'bg-lime-300 text-black' // Apply lime background for future dates
                                                : ''
                                        } ${state.checkOutDate && dateOrObj.getTime() === state.checkOutDate.getTime()
                                            ? 'bg-red-500 text-white'
                                            : ''
                                        } ${state.checkInDate &&
                                            state.checkOutDate &&
                                            dateOrObj > state.checkInDate &&
                                            dateOrObj < state.checkOutDate
                                            ? 'bg-yellow-300'
                                            : ''
                                        }`}
                                >
                                    <span>{dateOrObj.getDate()}</span>
                                </div>
                            ) : (
                                <div
                                    key={index}
                                    onClick={() => handleDateClickSafely(dateOrObj.date, true)}
                                    className={`text-center py-2 rounded cursor-pointer text-gray-400 ${state.checkInDate && dateOrObj.date.getTime() === state.checkInDate.getTime()
                                        ? 'bg-blue-500 text-white'
                                        : dateOrObj.isToday // Check if the date is today's date
                                            ? 'bg-lime-300 text-black' // Apply green background for today's date
                                            : dateOrObj.date >= new Date() // Check if the date is after today
                                                ? 'bg-lime-300 text-black' // Apply lime background for future dates
                                                : ''
                                        } ${state.checkOutDate && dateOrObj.date.getTime() === state.checkOutDate.getTime()
                                            ? 'bg-red-500 text-white'
                                            : ''
                                        } ${state.checkInDate &&
                                            state.checkOutDate &&
                                            dateOrObj.date > state.checkInDate &&
                                            dateOrObj.date < state.checkOutDate
                                            ? 'bg-yellow-300 text-black'
                                            : ''
                                        }`}
                                >
                                    <span>{dateOrObj.date.getDate()}</span>
                                </div>
                            )
                        )}
                    </div>
                </div>
                <div>
                    <div className="grid grid-cols-7 gap-1 mb-2 text-sm font-bold text-gray-400">
                        <span className="text-center">SUN</span>
                        <span className="text-center">MON</span>
                        <span className="text-center">TUE</span>
                        <span className="text-center">WED</span>
                        <span className="text-center">THU</span>
                        <span className="text-center">FRI</span>
                        <span className="text-center">SAT</span>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-sm">
                        {nextMonthDates.map((date) => (
                            <div
                                key={date.getTime()}
                                onClick={() => handleDateClick(date, false)}
                                className={`text-center py-2 rounded cursor-pointer text-gray-400 ${state.checkInDate && date.getTime() === state.checkInDate.getTime() && isCurrentMonth(date) === false
                                        ? 'bg-blue-500 text-white'
                                        : ''
                                    } ${state.checkOutDate && date.getTime() === state.checkOutDate.getTime()
                                        ? 'bg-red-500 text-white'
                                        : ''
                                    } ${state.checkInDate &&
                                        state.checkOutDate &&
                                        date > state.checkInDate &&
                                        date < state.checkOutDate
                                        ? 'bg-yellow-300 text-black'
                                        : ''
                                    } ${date >= new Date() && // Check if the date is today or after
                                        new Date(date.getFullYear(), date.getMonth() + 1, 0) >= new Date() // Check if the date is in the next month
                                        ? 'bg-lime-200 text-gray-400' // Apply lime background for today's date and future dates in the next month
                                        : ''
                                    }`}
                            >
                                <span>{date.getDate()}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            <div className="mt-4 flex justify-between items-center">
                <div>
                    <div className="flex items-center mb-2">
                        <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                        <span className="text-sm">Check-in</span>
                    </div>
                    <div className="flex items-center mb-2">
                        <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
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
