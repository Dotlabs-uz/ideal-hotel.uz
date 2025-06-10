'use client';

import React, { useRef, useState } from 'react';
import axios from 'axios';
import { load } from 'recaptcha-v3';

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

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!;
const URL = `https://api.telegram.org/bot${process.env.NEXT_PUBLIC_TOKEN}/sendMessage`;

const ContactForm = ({ translation }: ContactFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);

    const formData = new FormData(e.currentTarget);
    const info: Record<string, string> = {};

    formData.forEach((value, key) => {
      info[key] = value.toString();
    });

    const msg = `
📬 Новая заявка:
👤 Имя: ${info.name}
📧 Email: ${info.email}
📝 Сообщение: ${info.message}
`;

    try {
      const recaptcha = await load(SITE_KEY);
      const token = await recaptcha.execute('submit');

      // const { data } = await axios.post('/api/verify-recaptcha', { token });

      // if (!data.success) {
      //   setSuccess(false);
      //   console.warn('❌ reCAPTCHA проверка не пройдена');
      //   return;
      // }

      const res = await axios.post(URL, {
        chat_id: process.env.NEXT_PUBLIC_CHAT_ID,
        parse_mode: 'HTML',
        text: msg,
      });

      if (res.status === 200 || res.status === 201) {
        setSuccess(true);
        formRef.current?.reset();
      } else {
        setSuccess(false);
      }
    } catch (error) {
      console.error('Ошибка при отправке:', error);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="md:max-w-[527px] mx-auto px-3 lg:px-6 py-[10px] bg-[#F8F8F8] rounded-lg shadow-md"
    >
      <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-medium text-[#17849A] mb-4">
        {translation.header}
      </h2>

      <p className="text-gray-600 text-[12px] mb-6">{translation.txt}</p>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-medium text-[#000] mb-1">
            {translation.name}
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
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
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
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
          required
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-[#17849A] cursor-pointer w-full text-white font-medium py-3 px-6 rounded-md"
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
