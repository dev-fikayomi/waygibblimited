"use client";

import React, { useState, useRef, useEffect } from "react";

interface DatePickerProps {
  id?: string;
  required?: boolean;
  className?: string;
  onChange?: (date: Date) => void;
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export default function DatePicker({ id, required, className, onChange }: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const popoverRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const todayDate = new Date();
  todayDate.setHours(0, 0, 0, 0);

  const currentYear = currentMonth.getFullYear();
  const currentMonthIndex = currentMonth.getMonth();

  const daysInMonth = getDaysInMonth(currentMonthIndex, currentYear);
  const firstDay = getFirstDayOfMonth(currentMonthIndex, currentYear);

  const isPrevMonthDisabled = currentYear < todayDate.getFullYear() || (currentYear === todayDate.getFullYear() && currentMonthIndex <= todayDate.getMonth());

  const prevMonth = () => {
    setCurrentMonth(new Date(currentYear, currentMonthIndex - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentYear, currentMonthIndex + 1, 1));
  };

  const handleSelectDate = (day: number) => {
    const newDate = new Date(currentYear, currentMonthIndex, day);
    setSelectedDate(newDate);
    setIsOpen(false);
    if (onChange) onChange(newDate);
  };

  const formatDate = (date: Date) => {
    const d = date.getDate().toString().padStart(2, '0');
    const m = (date.getMonth() + 1).toString().padStart(2, '0');
    const y = date.getFullYear();
    return `${m}/${d}/${y}`;
  };

  return (
    <div className="relative w-full" ref={popoverRef}>
      <div 
        className={`${className} flex items-center justify-between cursor-pointer`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={selectedDate ? "text-neutral-900" : "text-neutral-400"}>
          {selectedDate ? formatDate(selectedDate) : "MM/DD/YYYY"}
        </span>
        <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>

      {/* Hidden input to maintain native form behavior if needed */}
      <input 
        type="hidden" 
        id={id} 
        required={required && !selectedDate} 
        value={selectedDate ? selectedDate.toISOString() : ""} 
      />

      {isOpen && (
        <div className="absolute bottom-full mb-2 left-0 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-neutral-100 p-5 z-[60] animate-in fade-in zoom-in-95 duration-200">
          <div className="flex justify-between items-center mb-5">
            <button
              type="button"
              onClick={prevMonth}
              disabled={isPrevMonthDisabled}
              className={`p-1.5 rounded-full transition-colors ${isPrevMonthDisabled ? 'text-neutral-300 cursor-not-allowed' : 'hover:bg-neutral-100 text-neutral-600'}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="font-bold text-neutral-900">
              {MONTH_NAMES[currentMonthIndex]} {currentYear}
            </div>
            <button
              type="button"
              onClick={nextMonth}
              className="p-1.5 rounded-full hover:bg-neutral-100 transition-colors text-neutral-600"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 mb-2 text-center">
            {DAYS.map(day => (
              <div key={day} className="text-xs font-semibold text-neutral-400">
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1 text-center">
            {Array.from({ length: firstDay }).map((_, i) => (
              <div key={`empty-${i}`} className="h-8 w-8" />
            ))}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const dateObj = new Date(currentYear, currentMonthIndex, day);
              const isPast = dateObj < todayDate;
              const isSelected = selectedDate?.getDate() === day && selectedDate?.getMonth() === currentMonthIndex && selectedDate?.getFullYear() === currentYear;
              const isToday = todayDate.getDate() === day && todayDate.getMonth() === currentMonthIndex && todayDate.getFullYear() === currentYear;
              
              return (
                <button
                  key={day}
                  type="button"
                  onClick={() => !isPast && handleSelectDate(day)}
                  disabled={isPast}
                  className={`h-9 w-9 sm:h-10 sm:w-10 rounded-full text-sm font-medium transition-colors flex items-center justify-center mx-auto
                    ${isPast ? "text-neutral-300 cursor-not-allowed" : 
                      isSelected ? "bg-primary text-white shadow-md shadow-primary/20" : 
                      isToday ? "bg-primary/10 text-primary hover:bg-primary/20" : 
                      "text-neutral-700 hover:bg-neutral-100"}`}
                >
                  {day}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
