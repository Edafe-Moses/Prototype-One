'use client';

import { useState } from 'react';

interface InteractiveCalendarProps {
  size?: 'small' | 'medium' | 'large';
}

type ViewMode = 'calendar' | 'months' | 'years';

export function InteractiveCalendar({ size = 'large' }: InteractiveCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(15);
  const [viewMode, setViewMode] = useState<ViewMode>('calendar');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const shortMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const changeView = (newView: ViewMode) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setViewMode(newView);
      setIsTransitioning(false);
    }, 150);
  };

  const selectMonth = (monthIndex: number) => {
    setCurrentDate(prev => new Date(prev.getFullYear(), monthIndex, 1));
    changeView('calendar');
  };

  const selectYear = (year: number) => {
    setCurrentDate(prev => new Date(year, prev.getMonth(), 1));
    changeView('months');
  };

  const getYearRange = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = 2000; year <= currentYear + 10; year++) {
      years.push(year);
    }
    return years;
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const emptyDays = Array.from({ length: firstDay }, (_, i) => i);

  const sizeClasses = {
    small: {
      container: 'p-4',
      header: 'text-xs',
      dayHeader: 'text-xs',
      day: 'text-xs',
      gap: 'gap-1'
    },
    medium: {
      container: 'p-6',
      header: 'text-sm',
      dayHeader: 'text-xs',
      day: 'text-sm',
      gap: 'gap-2'
    },
    large: {
      container: 'p-8',
      header: 'text-sm',
      dayHeader: 'text-xs',
      day: 'text-sm',
      gap: 'gap-2'
    }
  };

  const classes = sizeClasses[size];

  return (
    <div className={`bg-[#3D3934] rounded-3xl ${classes.container}`}>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-[#E87722] rounded-full"></div>
          <button 
            onClick={() => changeView(viewMode === 'calendar' ? 'months' : viewMode === 'months' ? 'years' : 'months')}
            className={`text-white font-medium hover:text-[#E87722] transition-all duration-200 ${classes.header}`}
          >
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </button>
        </div>
        {viewMode === 'calendar' && (
          <div className="flex gap-1">
            <button
              onClick={() => navigateMonth('prev')}
              className="text-gray-400 hover:text-white transition-all duration-200 px-2 py-1 hover:scale-110"
            >
              ‹
            </button>
            <button
              onClick={() => navigateMonth('next')}
              className="text-gray-400 hover:text-white transition-all duration-200 px-2 py-1 hover:scale-110"
            >
              ›
            </button>
          </div>
        )}
      </div>

      <div className={`transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        {viewMode === 'calendar' && (
          <div className="animate-in slide-in-from-right-2 duration-300">
            <div className={`grid grid-cols-7 ${classes.gap} mb-4`}>
              {size === 'small' 
                ? ['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day) => (
                    <div key={day} className={`text-gray-400 text-center font-medium ${classes.dayHeader}`}>
                      {day}
                    </div>
                  ))
                : ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                    <div key={day} className={`text-gray-400 text-center font-medium ${classes.dayHeader}`}>
                      {day}
                    </div>
                  ))
              }
            </div>

            <div className={`grid grid-cols-7 ${classes.gap}`}>
              {emptyDays.map((_, index) => (
                <div key={`empty-${index}`} className="aspect-square"></div>
              ))}
              {days.map((day) => (
                <button
                  key={day}
                  onClick={() => setSelectedDate(day)}
                  className={`aspect-square flex items-center justify-center ${classes.day} rounded-lg transition-all duration-200 transform hover:scale-105 ${
                    day === selectedDate
                      ? 'bg-[#E87722] text-white font-bold'
                      : 'text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>
        )}

        {viewMode === 'months' && (
          <div className="animate-in slide-in-from-left-2 duration-300">
            <div className="grid grid-cols-3 gap-3">
              {shortMonthNames.map((month, index) => (
                <button
                  key={month}
                  onClick={() => selectMonth(index)}
                  className={`p-3 rounded-lg transition-all duration-200 transform hover:scale-105 ${
                    index === currentDate.getMonth()
                      ? 'bg-[#E87722] text-white font-bold'
                      : 'text-gray-300 hover:bg-gray-700'
                  } ${classes.day}`}
                >
                  {month}
                </button>
              ))}
            </div>
          </div>
        )}

        {viewMode === 'years' && (
          <div className="animate-in slide-in-from-bottom-2 duration-300">
            <div className="grid grid-cols-4 gap-2 max-h-48 overflow-y-auto custom-scrollbar">
              {getYearRange().map((year) => (
                <button
                  key={year}
                  onClick={() => selectYear(year)}
                  className={`p-2 rounded-lg transition-all duration-200 transform hover:scale-105 ${
                    year === currentDate.getFullYear()
                      ? 'bg-[#E87722] text-white font-bold'
                      : 'text-gray-300 hover:bg-gray-700'
                  } ${classes.day}`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #E87722 #3D3934;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #3D3934;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #E87722;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #d66a1e;
        }
      `}</style>
    </div>
  );
}