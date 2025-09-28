import { Heart, Timer } from "lucide-react";
import { useState, useEffect } from "react";

export const Countdown = () => {
  const weddingDate = new Date(2025, 10, 8, 14, 0, 0); // 8 ноября 2025, 14:00
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate.getTime() - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: "дней", color: "from-pink-400 to-rose-400" },
    {
      value: timeLeft.hours,
      label: "часов",
      color: "from-amber-400 to-orange-400",
    },
    {
      value: timeLeft.minutes,
      label: "минут",
      color: "from-purple-400 to-indigo-400",
    },
    {
      value: timeLeft.seconds,
      label: "секунд",
      color: "from-emerald-400 to-teal-400",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-amber-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-purple-400 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="flex items-center space-x-2">
              <Timer className="w-12 h-12 text-pink-300" />
              <Heart className="w-8 h-8 text-pink-300 animate-pulse" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">
            До встречи осталось
          </h2>
          <p className="text-xl text-pink-200">Считаем дни до нашего счастья</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {timeUnits.map((unit, index) => (
            <div key={index} className="text-center">
              <div
                className={`bg-gradient-to-br ${unit.color} rounded-3xl p-6 shadow-2xl border border-white/20 backdrop-blur-sm transform hover:scale-105 transition-all duration-300`}
              >
                <div className="text-4xl md:text-6xl font-bold text-white mb-2">
                  {unit.value.toString().padStart(2, "0")}
                </div>
                <div className="text-sm md:text-base text-white/90 font-medium">
                  {unit.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 max-w-md mx-auto border border-white/20">
            <p className="text-white text-lg font-light leading-relaxed">
              Каждая секунда приближает нас к самому важному дню в нашей жизни.
              Спасибо, что будете рядом с нами!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
