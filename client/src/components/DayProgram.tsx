import { Clock, Sparkles, MoonStar, Music } from "lucide-react";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const DayProgram = () => {
  const [ref1, inView1] = useInView({
    threshold: 0.9,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.9,
  });
  const [ref3, inView3] = useInView({
    threshold: 0.9,
  });
  const [ref4, inView4] = useInView({
    threshold: 0.9,
  });

  const [scales, setScales] = useState<boolean[]>([false, false, false, false]);

  useEffect(() => {
    if (!inView1) return;
    setScales((prevScales) => {
      const _newScales = [...prevScales];
      _newScales[0] = true;
      return _newScales;
    });
  }, [inView1]);

  useEffect(() => {
    if (!inView2) return;
    setScales((prevScales) => {
      const _newScales = [...prevScales];
      _newScales[1] = true;
      return _newScales;
    });
  }, [inView2]);

  useEffect(() => {
    if (!inView3) return;
    setScales((prevScales) => {
      const _newScales = [...prevScales];
      _newScales[2] = true;
      return _newScales;
    });
  }, [inView3]);

  useEffect(() => {
    if (!inView4) return;
    setScales((prevScales) => {
      const _newScales = [...prevScales];
      _newScales[3] = true;
      return _newScales;
    });
  }, [inView4]);

  const events = [
    {
      time: "12:30",
      title: "Юридическая романтика",
      description: "Официальная роспись в ЗАГСе на Солдате!",
      icon: Clock,
      color: `from-pink-400 to-rose-400`,
      ref: ref1,
    },
    {
      time: "16:00",
      title: "Сбор эскадрильи счастья",
      description: "Прибытие гостей на торжество!",
      icon: Sparkles,
      color: "from-amber-400 to-yellow-400",
      ref: ref2,
    },
    {
      time: "17:00–23:00",
      title: "Бал безумной любви",
      description: "Развлекательная программа в полном разгаре!",
      icon: Music,
      color: "from-purple-400 to-pink-400",
      ref: ref3,
    },
    {
      time: "23:00–24:00",
      title: "Звёздный эпилог",
      description: "Спокойная, душевная музыка под звёздами!",
      icon: MoonStar,
      color: "from-green-400 to-emerald-400",
      ref: ref4,
    },
  ];

  return (
    <section className="relative pt-16 pb-0 bg-gradient-to-b from-pink-50 to-white">
      <div>
        {/* Right */}
        <div className="absolute bottom-215 right-30 animate-bounce opacity-30 text-5xl text-orange-400 w-10 h-10 may-be-hidden">
          🍁
        </div>
        <div className="absolute bottom-155 right-30 animate-bounce opacity-30 text-5xl text-orange-400 w-10 h-10 may-be-hidden">
          🍁
        </div>
        <div className="absolute bottom-95 right-30 animate-bounce opacity-30 text-5xl text-orange-400 w-10 h-10 may-be-hidden">
          🍁
        </div>
        <div className="absolute bottom-35 right-30 animate-bounce opacity-30 text-5xl text-orange-400 w-10 h-10 may-be-hidden">
          🍁
        </div>
        {/* Left */}
        <div className="absolute bottom-215 left-30 animate-bounce opacity-30 text-5xl text-orange-400 w-10 h-10 may-be-hidden">
          🍁
        </div>
        <div className="absolute bottom-155 left-30 animate-bounce opacity-30 text-5xl text-orange-400 w-10 h-10 may-be-hidden">
          🍁
        </div>
        <div className="absolute bottom-95 left-30 animate-bounce opacity-30 text-5xl text-orange-400 w-10 h-10 may-be-hidden">
          🍁
        </div>
        <div className="absolute bottom-35 left-30 animate-bounce opacity-30 text-5xl text-orange-400 w-10 h-10 may-be-hidden">
          🍁
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Clock className="w-12 h-12 text-pink-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Программа свадебного дня
          </h2>
          <p className="text-xl text-gray-600">
            Расписание торжественных событий
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className={`absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-300 via-amber-300 to-purple-300 transform md:-translate-x-0.5 ${
              scales[0] && "-translate-x-0.5"
            }`}
          ></div>

          <div className="space-y-8">
            {events.map((event, index) => {
              const Icon = event.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  ref={event.ref}
                  className={`relative flex items-center ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-row`}
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-8 md:left-1/2 w-4 h-4 bg-white rounded-full border-4 border-pink-400 transform md:-translate-x-2 shadow-lg z-10 ${
                      scales[index] && "-translate-x-2"
                    }`}
                  ></div>

                  {/* Event card */}
                  <div
                    className={`flex-1 ml-20 md:ml-0 ${
                      isLeft ? "md:pr-8 md:text-right" : "md:pl-8"
                    }`}
                  >
                    <div
                      className={`bg-white rounded-2xl p-6 shadow-xl border border-pink-100 hover:shadow-2xl transition-transform duration-300 transform ${
                        scales[index] ? "scale-105" : "scale-100"
                      } hover:scale-105`}
                    >
                      <div
                        className={`flex items-center space-x-3 mb-3 ${
                          isLeft ? "md:justify-end" : "justify-start"
                        }`}
                      >
                        <div
                          className={`p-3 rounded-full bg-gradient-to-br ${event.color} shadow-lg`}
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-2xl font-bold text-gray-800">
                          {event.time}
                        </span>
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
