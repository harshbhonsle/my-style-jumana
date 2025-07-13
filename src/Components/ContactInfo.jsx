import { FaPhone, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = ({ contact, hours, location }) => {
  return (
    <div className="w-full bg-[#FAF7F0] py-16 px-6 md:px-24">
      <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden divide-y md:divide-y-0 md:divide-x divide-gray-300">

        {/* Contact */}
        <div className="flex-1 p-8 space-y-6 text-center flex flex-col items-center">
          <div className="flex items-center gap-3 justify-center">
            <FaPhone className="text-4xl text-[#B76E79]" />
            <h3 className="text-3xl font-playfair font-semibold text-[#8A4B53] tracking-wide uppercase">
              Contact
            </h3>
          </div>
          <ul className="text-base text-gray-700 leading-relaxed font-montserrat space-y-2 max-w-xs">
            {contact.map((item, index) => (
              <li key={index} className="capitalize tracking-wide">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Hours */}
        <div className="flex-1 p-8 space-y-6 text-center flex flex-col items-center">
          <div className="flex items-center gap-3 justify-center">
            <FaClock className="text-4xl text-[#B76E79]" />
            <h3 className="text-3xl font-playfair font-semibold text-[#8A4B53] tracking-wide uppercase">
              Hours
            </h3>
          </div>
          <ul className="text-base text-gray-700 leading-relaxed font-montserrat space-y-2 max-w-xs">
            {hours.map((item, index) => (
              <li key={index} className="capitalize tracking-wide">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Location */}
        <div className="flex-1 p-8 space-y-6 text-center flex flex-col items-center">
          <div className="flex items-center gap-3 justify-center">
            <FaMapMarkerAlt className="text-4xl text-[#B76E79]" />
            <h3 className="text-3xl font-playfair font-semibold text-[#8A4B53] tracking-wide uppercase">
              Location
            </h3>
          </div>
          <ul className="text-base text-gray-700 leading-relaxed font-montserrat space-y-2 max-w-xs">
            {location.map((item, index) => (
              <li key={index} className="capitalize tracking-wide">
                {item}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default ContactInfo;
