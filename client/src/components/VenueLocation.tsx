import { MapPin, ExternalLink } from "lucide-react";

export const VenueLocation = () => {
  const redirectOnMap = () =>
    window.open(
      "https://yandex.ru/maps/org/komsak_hall/134301218095/?ll=41.957054%2C45.051601&z=14",
      "_blank",
      "noopener,noreferrer"
    );

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <MapPin className="w-12 h-12 text-amber-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Место торжества
          </h2>
          <p className="text-xl text-gray-600">Где мы будем праздновать</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-gradient-to-br from-pink-50 to-amber-50 rounded-3xl p-8 shadow-xl border border-pink-100">
              <h3 className="text-3xl font-serif text-gray-800 mb-4">
                Ресторан «Комсак Hall»
              </h3>
              <div className="space-y-4 text-gray-600">
                <p className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  <span>ул. Кавалерийская ул., 25А, Ставрополь этаж 2</span>
                </p>
                <p className="text-lg leading-relaxed">
                  Элегантный ресторан в самом сердце города с потрясающими
                  интерьерами и изысканной кухней. Идеальное место для
                  незабываемого торжества.
                </p>
                <div className="pt-4">
                  <button
                    onClick={redirectOnMap}
                    className="inline-flex items-center space-x-2 cursor-pointer bg-gradient-to-r from-pink-400 to-amber-400 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Показать на карте</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative group">
              <img
                src="https://avatars.mds.yandex.net/get-altay/5298780/2a000001820006bb942b16ba93547274a976/orig?w=800"
                alt="Ресторан для свадьбы"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl transition-transform duration-500 group-hover:scale-105"></div>
              <div
                onClick={redirectOnMap}
                className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg cursor-pointer"
              >
                <MapPin className="w-6 h-6 text-amber-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
