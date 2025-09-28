import { Countdown } from "./components/Countdown";
import { DayProgram } from "./components/DayProgram";
import { DressCode } from "./components/DressCode";
import { RSVPForm } from "./components/RSVPForm";
import { VenueLocation } from "./components/VenueLocation";
import { WeddingDate } from "./components/WeddingDate";
import { WeddingInvitation } from "./components/WeddingInvitation";

export const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-red-50 overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-999999">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute z-100 animate-pulse opacity-20 text-4xl ${
              i % 4 === 0
                ? "text-orange-400"
                : i % 4 === 1
                ? "text-red-400"
                : i % 4 === 2
                ? "text-yellow-400"
                : "text-amber-400"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          >
            🍂
          </div>
        ))}
      </div>
      {/* Приглашение */}
      <WeddingInvitation />

      {/* Дата свадьбы */}
      <WeddingDate />

      {/* Место торжества */}
      <VenueLocation />

      {/* Программа дня */}
      <DayProgram />

      {/* Дресс-код */}
      <DressCode />

      {/* Countdown */}
      <Countdown />

      {/* RSVP форма */}
      <RSVPForm />
    </div>
  );
};
