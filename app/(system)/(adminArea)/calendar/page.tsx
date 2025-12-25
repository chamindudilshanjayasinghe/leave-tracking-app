'use client';
import { ChevronLeft, ChevronRight } from "lucide-react";

const CalendarView = () => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  // Demo for October 2023. 1st is Sunday.
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
           <h2 className="text-2xl font-bold text-gray-800">Team Calendar</h2>
           <p className="text-gray-500 text-sm">View leave schedules and holidays</p>
        </div>
        <div className="flex gap-2 bg-white p-1 rounded-lg border border-gray-200 shadow-sm self-start sm:self-auto">
           <button className="px-3 py-1.5 text-sm font-medium bg-indigo-50 text-indigo-700 rounded-md shadow-sm">Month</button>
           <button className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-md">Week</button>
           <button className="px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded-md">Day</button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Calendar Header */}
        <div className="p-4 flex items-center justify-between border-b border-gray-200">
           <div className="flex items-center gap-4">
             <h3 className="font-bold text-lg text-gray-800">October 2023</h3>
             <div className="flex gap-1">
               <button className="p-1 hover:bg-gray-100 rounded-full text-gray-500"><ChevronLeft className="w-5 h-5" /></button>
               <button className="p-1 hover:bg-gray-100 rounded-full text-gray-500"><ChevronRight className="w-5 h-5" /></button>
             </div>
           </div>
           <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">Today</button>
        </div>
        
        {/* Weekday Headers */}
        <div className="grid grid-cols-7 border-b border-gray-200 bg-gray-50">
          {days.map(day => (
            <div key={day} className="py-3 text-center text-xs font-semibold text-gray-500 uppercase tracking-wide border-r border-gray-100 last:border-0">
              {day}
            </div>
          ))}
        </div>

        {/* Days Grid */}
        <div className="grid grid-cols-7 auto-rows-[minmax(120px,auto)] bg-gray-100 gap-px border-b border-gray-200">
           {daysInMonth.map(day => (
             <div key={day} className="bg-white p-2 relative group hover:bg-gray-50 transition-colors flex flex-col gap-1">
                <div className="flex justify-between items-start">
                  <span className={`text-sm font-medium w-7 h-7 flex items-center justify-center rounded-full ${day === 24 ? 'bg-indigo-600 text-white shadow-sm' : 'text-gray-700'}`}>
                    {day}
                  </span>
                </div>
                
                {/* Mock Events */}
                <div className="flex flex-col gap-1 mt-1">
                   {day === 24 && (
                     <div className="px-2 py-1 text-[10px] leading-tight font-medium bg-indigo-50 text-indigo-700 border-l-2 border-indigo-500 rounded-r truncate">
                       Sarah - Annual
                     </div>
                   )}
                   {day === 24 && (
                     <div className="px-2 py-1 text-[10px] leading-tight font-medium bg-orange-50 text-orange-700 border-l-2 border-orange-500 rounded-r truncate">
                       Michael - Sick
                     </div>
                   )}
                   {(day === 2 || day === 3) && (
                     <div className="px-2 py-1 text-[10px] leading-tight font-medium bg-purple-50 text-purple-700 border-l-2 border-purple-500 rounded-r truncate">
                        Emma - Remote
                     </div>
                   )}
                   {day === 15 && (
                      <div className="px-2 py-1 text-[10px] leading-tight font-medium bg-emerald-50 text-emerald-700 border-l-2 border-emerald-500 rounded-r truncate">
                        Holiday
                      </div>
                   )}
                </div>
             </div>
           ))}
           {/* Add a few blank cells to complete grid visually for the demo */}
           <div className="bg-gray-50 p-2 min-h-30"></div>
           <div className="bg-gray-50 p-2 min-h-30"></div>
           <div className="bg-gray-50 p-2 min-h-30"></div>
           <div className="bg-gray-50 p-2 min-h-30"></div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;