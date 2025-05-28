'use client';

interface Props {
  translation: {
    contactsMap: {
      contact: string,
      route: string
    }
  };
}

const ContactMap = ({ translation }: Props) => {
  return (
    <section className="relative h-[350px] lg:h-[600px]">
      {/* Карта */}
      <iframe
        className="w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.8977616112195!2d66.95588551545483!3d39.656897079458274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d19e3c25c1a4b%3A0xdea042b4cded7263!2z0KHQtdC80LXQvdGC0LjQtSDQk9Cw0LTQuNC80LDRgNCwINC-0YHRgtCw0L3RgdC60LjQuSDQo9C00LrQsNGI0LXQstGB0LrQuNC5!5e0!3m2!1sru!2s!4v1680000000000!5m2!1sru!2s"
        loading="lazy"
        allowFullScreen
      ></iframe>

      {/* Блок с контактами */}
      <div className="w-[1200px] mx-auto bg-amber-200">
        <div className="absolute top-10 left-10 bg-[#02798C] text-white p-6 rounded-lg shadow-lg max-w-[300px] w-full">
            <h3 className="text-sm mb-2">{translation.contactsMap.contact}</h3>
            <p className="text-lg font-semibold leading-tight">
            Samarkand st. <br /> Mirzo-Ulugbek 52
            </p>

            <p className="mt-4 px-2 py-1 bg-[#015B6A] rounded-md font-medium text-base inline-block">
            +998 11 222 12 34
            </p>

            <p className="mt-3 text-base">info@idealhotel.uz</p>

            <button className="mt-6 w-full py-2 border border-white rounded text-white hover:bg-white hover:text-[#02798C] transition duration-200">
              {translation.contactsMap.route}
            </button>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
