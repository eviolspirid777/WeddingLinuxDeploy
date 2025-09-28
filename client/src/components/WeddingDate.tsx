import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Flower,
  Heart,
} from "lucide-react";
import { useState } from "react";

export const WeddingDate = () => {
  const weddingDate = new Date(2025, 10, 8);
  const [currentMonth, setCurrentMonth] = useState(weddingDate.getMonth());
  const [currentYear, setCurrentYear] = useState(weddingDate.getFullYear());

  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDay = getFirstDayOfMonth(currentMonth, currentYear);
    const days = [];

    // Добавляем пустые ячейки для дней предыдущего месяца
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="w-10 h-10"></div>);
    }

    // Добавляем дни текущего месяца
    for (let day = 1; day <= daysInMonth; day++) {
      const isWeddingDay =
        currentMonth === weddingDate.getMonth() &&
        currentYear === weddingDate.getFullYear() &&
        day === weddingDate.getDate();

      days.push(
        <div
          key={day}
          className={`w-10 h-10 flex items-center justify-center rounded-full transition-all cursor-default select-none duration-300 ${
            isWeddingDay
              ? "bg-gradient-to-br from-pink-400 to-amber-400 text-white font-bold shadow-lg scale-110 animate-pulse"
              : "text-gray-700 hover:bg-pink-100"
          }`}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  const navigateMonth = (direction: "prev" | "next") => {
    if (direction === "prev") {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
    } else {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
    }
  };

  return (
    <section className="relative py-16 bg-gradient-to-b from-white to-pink-50">
      {/*Left flowers */}
      <div className="z-1">
        <div className="absolute bottom-0 left-40 animate-bounce opacity-30">
          <Flower className="w-10 h-10 text-amber-400" />
        </div>
        <div className="absolute bottom-0 left-80 animate-bounce opacity-30">
          <Heart className="w-10 h-10 text-pink-400 animate-bounce" />
        </div>
        <div
          className={`absolute bottom-30 left-80 animate-bounce opacity-30 may-be-hidden`}
        >
          <Flower className="w-10 h-10 text-amber-400" />
        </div>
        <div
          className={`absolute bottom-30 left-40 animate-bounce opacity-30 may-be-hidden`}
        >
          <Heart className="w-10 h-10 text-pink-400 animate-bounce" />
        </div>
        <div
          className={`absolute bottom-60 left-40 animate-bounce opacity-30 may-be-hidden`}
        >
          <Flower className="w-10 h-10 text-yellow-400" />
        </div>
        <div
          className={`absolute bottom-60 left-80 animate-bounce opacity-30 may-be-hidden`}
        >
          <Heart className="w-10 h-10 text-pink-400 animate-bounce" />
        </div>
        <div
          className={`absolute bottom-90 left-80 animate-bounce opacity-30 may-be-hidden`}
        >
          <Flower className="w-10 h-10 text-yellow-400" />
        </div>
        <div
          className={`absolute bottom-90 left-40 animate-bounce opacity-30 may-be-hidden`}
        >
          <Heart className="w-10 h-10 text-pink-400 animate-bounce" />
        </div>
        <div
          className={`absolute bottom-120 left-40 animate-bounce opacity-30 may-be-hidden`}
        >
          <Flower className="w-10 h-10 text-yellow-400" />
        </div>
        <div
          className={`absolute bottom-120 left-80 animate-bounce opacity-30 may-be-hidden`}
        >
          <Heart className="w-10 h-10 text-pink-400 animate-bounce" />
        </div>
      </div>
      {/*Right flowers */}
      <div>
        <div className="absolute bottom-0 right-40 animate-bounce opacity-30">
          <Flower className="w-10 h-10 text-amber-400" />
        </div>
        <div className="absolute bottom-0 right-80 animate-bounce opacity-30">
          <Heart className="w-10 h-10 text-pink-400 animate-bounce" />
        </div>
        <div className="absolute bottom-30 right-80 animate-bounce opacity-30 may-be-hidden">
          <Flower className="w-10 h-10 text-amber-400" />
        </div>
        <div className="absolute bottom-30 right-40 animate-bounce opacity-30 may-be-hidden">
          <Heart className="w-10 h-10 text-pink-400 animate-bounce" />
        </div>
        <div className="absolute bottom-60 right-40 animate-bounce opacity-30 may-be-hidden">
          <Flower className="w-10 h-10 text-yellow-400" />
        </div>
        <div className="absolute bottom-60 right-80 animate-bounce opacity-30 may-be-hidden">
          <Heart className="w-10 h-10 text-pink-400 animate-bounce" />
        </div>
        <div className="absolute bottom-90 right-80 animate-bounce opacity-30 may-be-hidden">
          <Flower className="w-10 h-10 text-yellow-400" />
        </div>
        <div className="absolute bottom-90 right-40 animate-bounce opacity-30 may-be-hidden">
          <Heart className="w-10 h-10 text-pink-400 animate-bounce" />
        </div>
        <div className="absolute bottom-120 right-40 animate-bounce opacity-30 may-be-hidden">
          <Flower className="w-10 h-10 text-yellow-400" />
        </div>
        <div className="absolute bottom-120 right-80 animate-bounce opacity-30 may-be-hidden">
          <Heart className="w-10 h-10 text-pink-400 animate-bounce" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Calendar className="w-12 h-12 text-pink-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Дата торжества
          </h2>
          <p className="text-xl text-gray-600">Отметьте в своем календаре</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md mx-auto border border-pink-100 z-2">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => navigateMonth("prev")}
              className="p-2 rounded-full hover:bg-pink-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <h3 className="text-xl font-semibold text-gray-800">
              {months[currentMonth]} {currentYear}
            </h3>
            <button
              onClick={() => navigateMonth("next")}
              className="p-2 rounded-full hover:bg-pink-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 mb-4">
            {["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"].map((day) => (
              <div
                key={day}
                className="w-10 h-8 flex items-center justify-center text-sm font-medium text-gray-500"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">{renderCalendar()}</div>

          <div className="mt-6 text-center">
            <p className="text-lg font-semibold text-gray-800">8 ноября 2025</p>
            <p className="text-sm text-gray-600">Суббота</p>
          </div>
        </div>
      </div>
    </section>
  );
};
