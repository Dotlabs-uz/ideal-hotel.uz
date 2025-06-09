'use client';
import React, { useState } from 'react';

interface ContactFormProps {
  translation: {
    header: string;
    txt: string;
    name: string;
    mail: string;
    messages: string;
    btn: string;
  };
}

const TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN!;
const CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID!;

const ContactForm = ({ translation }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    const text = `
📬 Новая заявка:
👤 Имя: ${formData.name}
📧 Email: ${formData.email}
📝 Сообщение: ${formData.message}
`;

    try {
      const res = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
          parse_mode: 'HTML',
        }),
      });

      if (!res.ok) throw new Error('Ошибка отправки');

      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error(error);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="md:max-w-[527px] mx-auto px-3 lg:px-6 bg-[#F8F8F8] rounded-lg shadow-md"
    >
      <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-medium text-[#17849A] mb-4">
        {translation.header}
      </h2>

      <p
        style={{ fontFamily: 'Monrope, sans-serif', fontWeight: 400 }}
        className="text-gray-600 text-[10px] md:text-[12px] w-[250px] lg:w-[300px] lg:text-[14px] mb-6"
      >
        {translation.txt}
      </p>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-[#000] mb-1">
            {translation.name}
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#17849A]"
            placeholder="Josade Printmann"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-[#000] mb-1">
            {translation.mail}
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#17849A]"
            placeholder="example@email.com"
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-[#000] mb-1">
          {translation.messages}
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#17849A]"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-[#17849A] w-full text-white font-medium py-3 px-6 rounded-md transition duration-300"
      >
        {loading ? 'Отправка...' : translation.btn}
      </button>

      {success === true && (
        <p className="text-green-600 mt-3">✅ Сообщение успешно отправлено!</p>
      )}
      {success === false && (
        <p className="text-red-600 mt-3">❌ Ошибка отправки. Попробуйте позже.</p>
      )}
    </form>
  );
};

export default ContactForm;
