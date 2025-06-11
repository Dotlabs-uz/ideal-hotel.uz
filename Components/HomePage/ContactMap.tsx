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
      <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3072.3022960978033!2d66.95212147667097!3d39.64291077157456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d18d4cfbc4ab3%3A0xd2985f3c7126c6b!2sIdeal%20Hotel!5e0!3m2!1sru!2s!4v1749284234235!5m2!1sru!2s" width="600" height="450" loading="lazy"></iframe>

      {/* Блок с контактами */}
      <div className="w-[1200px] mx-auto bg-amber-200">
        <div className="absolute top-10 left-10 bg-[#02798C] text-white p-6 rounded-lg shadow-lg max-w-[300px] w-full">
            <h3 style={{fontFamily: 'Monrope, sans-serif', fontWeight: 300}} className="text-sm mb-2">{translation.contactsMap.contact}</h3>
            <p style={{fontFamily: 'Monrope, sans-serif', fontWeight: 500}} className="text-lg font-semibold leading-tight">
            Samarkand st. <br /> Otakhojaeva 10
            </p>

            <p style={{fontFamily: 'Monrope, sans-serif', fontWeight: 500}} className="mt-4 px-2 py-1 bg-[#015B6A] rounded-md font-medium text-base inline-block">
            +998 66 233 11 07
            </p>

            <p style={{fontFamily: 'Monrope, sans-serif', fontWeight: 300}} className="mt-3 text-[18px]">info@idealhotel.uz</p>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Ideal+Hotel+Samarkand"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontFamily: 'Monrope, sans-serif', fontWeight: 300 }}
              className="mt-6 w-full py-2 border border-white rounded text-white hover:bg-white hover:text-[#02798C] transition duration-200 text-center block"
            >
              {translation.contactsMap.route}
            </a>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
