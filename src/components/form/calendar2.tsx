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
    const handleDateClickSafely = (clickedDate: Date | null) => {
        if (clickedDate) {
            handleDateClick(clickedDate);
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
                <div className="text-lg font-bold ">
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
                                    onClick={() => handleDateClickSafely(dateOrObj)}
                                    className={`text-center py-2 rounded cursor-pointer ${state.checkInDate && dateOrObj.getTime() === state.checkInDate.getTime()
                                        ? 'bg-blue-500 text-white'
                                        : dateOrObj.toDateString() === new Date().toDateString() // Check if the date is today's date
                                            ? 'bg-lime-400 text-black' // Apply lime background for today's date
                                            : dateOrObj >= new Date() // Check if the date is after today
                                                ? 'bg-lime-400 text-black' // Apply lime background for future dates
                                                : ''
                                        } ${state.checkOutDate && dateOrObj.getTime() === state.checkOutDate.getTime()
                                            ? 'bg-green-500 text-white'
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
                                    onClick={() => handleDateClickSafely(dateOrObj.date)}
                                    className={`text-center py-2 rounded cursor-pointer text-gray-400 ${state.checkInDate && dateOrObj.date.getTime() === state.checkInDate.getTime()
                                        ? 'bg-blue-500 text-white'
                                        : dateOrObj.isToday // Check if the date is today's date
                                            ? 'bg-lime-400 text-black' // Apply green background for today's date
                                            : dateOrObj.date >= new Date() // Check if the date is after today
                                                ? 'bg-lime-400 text-black' // Apply lime background for future dates
                                                : ''
                                        } ${state.checkOutDate && dateOrObj.date.getTime() === state.checkOutDate.getTime()
                                            ? 'bg-green-500 text-white'
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
                onClick={() => handleDateClick(date)}
                className={`text-center py-2 rounded cursor-pointer text-gray-400 ${state.checkInDate && date.getTime() === state.checkInDate.getTime()
                    ? 'bg-blue-500 text-white'
                    : ''
                    } ${state.checkOutDate && date.getTime() === state.checkOutDate.getTime()
                        ? 'bg-green-500 text-white'
                        : ''
                    } ${state.checkInDate &&
                        state.checkOutDate &&
                        date > state.checkInDate &&
                        date < state.checkOutDate
                        ? 'bg-yellow-300 text-black'
                        : ''
                    } ${date >= new Date() // Check if the date is today or after
                        ? 'bg-lime-300 text-gray-400' // Apply lime background for today's date and future dates
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
