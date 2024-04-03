'use client'
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";
import Link from "next/link";
import { DateRange, Range, RangeKeyDict } from "react-date-range";
import { addDays, format, isWeekend } from "date-fns";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";


import { useToast } from "@/components/ui/use-toast";
import clsx from "clsx";

const List = ({  }) => {
   
    const [selectedRateOption, setSelectedRateOption] = useState("limited-time-offer");
    const { toast } = useToast();

    const searchParams = useSearchParams();
    const totalGuests = searchParams.get('totalGuests');
    const Adults = searchParams.get('Adults');
    const Children = searchParams.get('Children');
    
    const handleRateOptionChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setSelectedRateOption(event.target.value);
    };
  
    const [isOpen, setIsOpen] = useState(null);
    const [hoveredRoom, setHoveredRoom] = useState(null);
    const [roomTypes, setRoomTypes] = useState([]);
    const [Enhanc, setEnhanc] = useState([]);
    const [loading, setLoading] = useState(false); // Add loading state
  
  
    interface Room {
      RoomNo: string;
      RoomType: RoomType | null;
      Status: boolean;
    }
    
    interface RoomType {
      RoomType_guest: number;
      RoomType_bed: string;
      RoomType_size: string;
      RoomType_name: string;
      RoomTypeDescrip: string;
      RoomPrice: number;
      DefalutRoomPrice: number;
    }
  
    interface Room {
      Status: boolean;
      // Add other properties as needed
    }
    
    const fetchRoomTypes = async () => {
      try {
        setLoading(true); // Set loading to true before fetching data
        const response = await axios.get("/api/statusroom");
        const totalGuestsNumber = parseInt(totalGuests || "0");
        if (!isNaN(totalGuestsNumber)) {
            setRoomTypes(response.data.filter((room: Room) => room.Status === true && room.RoomType?.RoomType_guest === totalGuestsNumber));
          }
      } catch (error) {
        toast({
            title: "Error",
            description: "Oops! Something went wrong",
            variant: 'destructive',
          });
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };
    const toggleCollapse = (RoomNo: any, event: React.MouseEvent<HTMLButtonElement>) => {
      setIsOpen(prevOpen => prevOpen === RoomNo ? null : RoomNo);
    };
    
    
  
    useEffect(() => {
      fetchRoomTypes();
      
    }, []);
    
    const [selectedDateRange, setSelectedDateRange] = useState<Range[]>([]);
    const [numDays, setNumDays] = useState<number>(0);
    const [initialStartDate, setInitialStartDate] = useState<Date | null>(null);
    
    // ตรวจสอบค่าเริ่มต้นของวันที่เลือกไว้
    useEffect(() => {
      if (selectedDateRange.length > 0 && selectedDateRange[0].startDate) {
        // กำหนดค่าเริ่มต้นของวันเริ่มต้นให้เป็นค่าที่เลือกไว้
        setInitialStartDate(selectedDateRange[0].startDate);
      }
    }, [selectedDateRange]);
    
    const [calendar, setCalendar] = useState({
        startDate: new Date(), // Set startDate to today's date
        endDate: addDays(new Date(), 0), // Set endDate to today's date initially
        key: "selection",
      });
    
    useEffect(() => {
      if (selectedDateRange.length > 0) {
        const { startDate, endDate } = selectedDateRange[0];
        if (startDate && endDate) {
          // คำนวณจำนวนวันที่เลือก
          const totalDays = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)) + 1;
          setNumDays(totalDays);
        }
      }
    }, [selectedDateRange]);
    
    const handleSelect = (ranges: RangeKeyDict) => {
      if (ranges && ranges.selection) {
        const { startDate, endDate } = ranges.selection;
        if (startDate && endDate) {
          setSelectedDateRange([ranges.selection]);
          setCalendar({
            startDate,
            endDate,
            key: "selection",
          });
        }
      }
    };
    
    
    
    const checkInDate = selectedDateRange && selectedDateRange.length > 0 && selectedDateRange[0].startDate ? selectedDateRange[0].startDate.toISOString() : '';
    const checkOutDate = selectedDateRange && selectedDateRange.length > 0 && selectedDateRange[0].endDate ? selectedDateRange[0].endDate.toISOString() : '';
    
    
    
    
    const customColorPointofDays = (e: Date | undefined) => {
      if (!e) return null; // Check if the date is undefined
    
      if (!calendar) return null; // Ensure calendar is not null or undefined
    
      if (calendar.startDate && new Date(e).toLocaleDateString() === new Date(calendar.startDate).toLocaleDateString()) {
        return (
          <>
            <div className="">
              <span className="z-10 bg-[#2563eb] absolute top-[2] right-[2] rounded-full w-3 h-3"></span>
              <div className="text-black">{new Date(e).getDate()}</div>
            </div>
          </>
        );
      }
    
      if (calendar.endDate && new Date(e).toLocaleDateString() === new Date(calendar.endDate).toLocaleDateString()) {
        return (
          <>
            <div className="">
              <span className="z-10 bg-[#9f1239] absolute top-[2] right-[2] rounded-full w-3 h-3"></span>
              <div className="text-black">{new Date(e).getDate()}</div>
            </div>
          </>
        );
      }
    
      return (
        <div className="text-black">{new Date(e).getDate()}</div>
      );
    };
    


    return (
      <div className="mt-24">
        <div className="w-[50%] p-3 bg-white shadow-xl mx-auto h-fit mb-[100px]">
          <div className="flex justify-center mt-3">
            <DateRange
              ranges={[calendar]}
              onChange={handleSelect}
              dayContentRenderer={customColorPointofDays}
              editableDateInputs={true}
              rangeColors={["#fcd34d"]}
              moveRangeOnFirstSelection={false}
              months={2}
              direction="horizontal"
            />
          </div>
          <div className="w-full flex justify-between px-5 pb-2 ">
            <div className="flex flex-col gap-2">
              <div className="indicator">
                <span className="indicator-item indicator-middle indicator-start badge bg-[#2563eb]"></span>
                <div className="ml-4 text-sm">Check-in</div>
              </div>
              <div className="indicator">
                <span className="indicator-item indicator-middle indicator-start badge bg-[#9f1239]"></span>
                <div className="ml-4 text-sm">Check-out</div>
              </div>
              <div className="indicator">
                <span className="indicator-item indicator-middle indicator-start badge bg-[#fcd34d]"></span>
                <div className="ml-4 text-sm">Selected Dates</div>
              </div>
            </div>
            <div className="">
              <div>
                THB <span className="font-bold text-xl">31,447</span>
              </div>
              {!loading && roomTypes.length > 0 ? (
                
                <Link
                href={{
                    pathname: "/Bookroom/showroomavai",
                    query: {
                        numDays: numDays.toString(),
                        totalGuests: totalGuests?.toString(),
                        Adults: Adults?.toString(),
                        Children: Children?.toString(),
                        checkInDate,
            checkOutDate,
                      },
                }}
                className="font-normal py-2 px-4"
                style={{
                    color: 'white',
                    textDecoration: 'none',
                    border: '1px solid #075985',
                    borderRadius: '5px',
                    padding: '5px 30px',
                    backgroundColor: '#075985',
                    fontFamily: 'Raleway, Roboto, sans-serif'
                }}
            >
                BOOK NOW
            </Link>
            
             
              ) : null}
            </div>
          </div>
      
        </div>
        {loading && <p>Loading...</p>}
        {!loading && roomTypes.length === 0 && (
          <div className="flex justify-center mt-4">
            <p>No available rooms for selected dates.</p>
          </div>
        )}
  </div>
  )}
  
  export default List;
  
