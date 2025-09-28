import { CheckCircle, Send, User, MessageCircle, CircleX } from "lucide-react";
import { useState } from "react";
import confetti from "canvas-confetti";
import axios from "axios";

export const RSVPForm = () => {
  const [formData, setFormData] = useState({
    names: [""],
    wishes: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    if (name.startsWith("name-")) {
      const personId = parseInt(name.split("-")[1]);
      const personIndex = basePersonsForms.indexOf(personId);

      setFormData((prev) => ({
        ...prev,
        names: prev.names.map((nameValue, index) =>
          index === personIndex ? value : nameValue
        ),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const [basePersonsForms, setBasePersonsForms] = useState<number[]>([0]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    console.log("Form submitted:", formData);
    console.log(import.meta.env);
    const API_URL = import.meta.env.VITE_BASE_URL || "http://localhost:5000";
    await axios.post(`${API_URL}/v1/api/Wedding/post-wedding-form`, formData);
    setIsSubmitted(true);
  };

  const renderInputFields = () =>
    basePersonsForms.map((personId, idx) => (
      <div key={personId} className="md:col-span-2">
        <label className="flex items-center space-x-2 text-gray-700 font-medium mb-3">
          <User className="w-5 h-5 text-pink-400" />
          <span>Имя*</span>
        </label>
        <div className="relative">
          <input
            type="text"
            name={`name-${personId}`}
            required
            value={formData.names[idx]}
            onChange={handleInputChange}
            className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-300"
            placeholder="Введите имя гостя"
          />
          {basePersonsForms.length > 1 && (
            <CircleX
              onClick={() => {
                const personIndex = basePersonsForms.indexOf(personId);
                setBasePersonsForms((prev) =>
                  prev.filter((id) => id !== personId)
                );
                setFormData((prev) => ({
                  ...prev,
                  names: prev.names.filter((_, index) => index !== personIndex),
                }));
              }}
              className="absolute bottom-4 right-3 text-red-600 cursor-pointer"
            />
          )}
        </div>
      </div>
    ));

  if (isSubmitted) {
    confetti({
      particleCount: 140,
      spread: 120,
      origin: { y: 0.6 },
    });
    return (
      <>
        <section className="py-16 bg-gradient-to-b from-white to-green-50">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="bg-white rounded-3xl p-12 shadow-2xl border border-green-100">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-green-500 rounded-full">
                  <CheckCircle className="w-12 h-12 text-white" />
                </div>
              </div>
              <h2 className="text-3xl font-serif text-gray-800 mb-4">
                Спасибо за ответ!
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ваша заявка принята. Мы очень рады, что вы разделите с нами этот
                особенный день. До встречи на свадьбе!
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <section className="relative py-16 bg-gradient-to-b from-white to-pink-50">
      <div>
        {/*Right */}
        <div className="absolute top-195 right-30 animate-bounce opacity-30 text-5xl text-orange-400 w-10 h-10 form-hidden">
          🍂
        </div>
        <div className="absolute top-165 right-60 animate-bounce opacity-30 text-5xl text-orange-400 w-10 h-10 form-hidden">
          🍂
        </div>
        <div className="absolute top-135 right-30 animate-bounce opacity-30 text-5xl text-orange-400 w-10 h-10 form-hidden">
          🍂
        </div>
        <div className="absolute top-105 right-60 animate-bounce opacity-30 text-5xl text-orange-400 w-10 h-10 form-hidden">
          🍂
        </div>
        <div className="absolute top-75 right-30 animate-bounce opacity-30 text-5xl text-orange-400 w-10 h-10 form-hidden">
          🍂
        </div>
        <div className="absolute top-45 right-60 animate-bounce opacity-30 text-5xl text-orange-400 w-10 h-10 form-hidden">
          🍂
        </div>
        <div className="absolute top-15 right-30 animate-bounce opacity-30 text-5xl text-orange-400 w-10 h-10 form-hidden">
          🍂
        </div>
        {/*Left */}
        <div className="absolute top-195 left-30 animate-bounce opacity-30 text-5xl text-orange-400 w-10 h-10 form-hidden">
          🍂
        </div>
        <div className="absolute top-165 left-60 animate-bounce opacity-30 text-5xl text-orange-400 w-10 h-10 form-hidden">
          🍂
        </div>
        <div className="absolute top-135 left-30 animate-bounce opacity-30 text-5xl text-orange-400 w-10 h-10 form-hidden">
          🍂
        </div>
        <div className="absolute top-105 left-60 animate-bounce opacity-30 text-5xl text-orange-400 w-10 h-10 form-hidden">
          🍂
        </div>
        <div className="absolute top-75 left-30 animate-bounce opacity-30 text-5xl text-orange-400 w-10 h-10 form-hidden">
          🍂
        </div>
        <div className="absolute top-45 left-60 animate-bounce opacity-30 text-5xl text-orange-400 w-10 h-10 form-hidden">
          🍂
        </div>
        <div className="absolute top-15 left-30 animate-bounce opacity-30 text-5xl text-orange-400 w-10 h-10 form-hidden">
          🍂
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Send className="w-12 h-12 text-pink-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif text-gray-800 mb-4">
            Подтверждение присутствия
          </h2>
          <p className="text-xl text-gray-600">
            Пожалуйста, заполните форму до 20 октября
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-2xl p-8 border border-pink-100"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* Имя */}
            {renderInputFields()}
            <span
              onClick={() => {
                setBasePersonsForms((prev) => [...prev, Math.max(...prev) + 1]);
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  names: [...prevFormData.names, ""],
                }));
              }}
              className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent cursor-pointer mx-3 w-fit"
            >
              Добавить человека +
            </span>

            {/* Сообщение */}
            <div className="md:col-span-2">
              <label className="flex items-center space-x-2 text-gray-700 font-medium mb-3">
                <MessageCircle className="w-5 h-5 text-blue-400" />
                <span>Пожелания молодоженам</span>
              </label>
              <textarea
                name="wishes"
                rows={4}
                value={formData.wishes}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-pink-300 focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Ваши теплые пожелания и слова поддержки..."
              ></textarea>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              type="submit"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-pink-400 to-purple-400 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <Send className="w-5 h-5" />
              <span>Отправить подтверждение</span>
            </button>
          </div>

          <div className="mt-6 text-center text-sm text-gray-500">
            Пожалуйста, подтвердите присутствие до 20 октября 2025 года
          </div>
        </form>
      </div>
    </section>
  );
};
