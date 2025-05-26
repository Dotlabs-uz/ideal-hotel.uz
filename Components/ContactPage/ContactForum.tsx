import React from 'react';

interface contactForm {
    translation: {
        header: string,
        txt: string,
        name: string,
        mail: string,
        messages: string,
        btn: string,
    }
}

const ContactForm = ({translation}: contactForm ) => {
  return (
    <div className=" md:max-w-[527px] mx-auto p-6 bg-[#F8F8F8] rounded-lg shadow-md">
      <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-medium text-[#17849A] mb-4">{translation.header}</h2>
      
      <p className="text-gray-600 text-[10px] md:text-[12px] w-[250px] lg:w-[300px] lg:text-[14px] mb-6">
        {translation.txt}
      </p>
      
      <div className="mb-8">
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#000] mb-1">{translation.name}</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#17849A]"
              placeholder="Josade Printmann"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#000] mb-1">{translation.mail}</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#17849A]"
              placeholder="example@email.com"
            />
          </div>
        </div>
      </div>
      
      <div>        
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-[#000] mb-1">
            {translation.messages}
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#17849A]"
          ></textarea>
        </div>
        
        <button className="bg-[#17849A] w-full text-white font-medium py-3 px-6 rounded-md transition duration-300">
          {translation.btn}
        </button>
      </div>
    </div>
  );
};

export default ContactForm;