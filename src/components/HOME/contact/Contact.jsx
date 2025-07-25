import React from 'react';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaInstagram,
  FaFacebook,
} from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 p-8 bg-white rounded-lg justify-center items-start">
      {/* Left Column with stacked boxes */}
      <div className="flex flex-col flex-1 gap-6">
        {/* Contact Details Section */}
        <div className="border border-gray-200 rounded-lg p-6 shadow-sm space-y-8 bg-white">
          <div>
            <h2 className="text-green-600 text-xl font-bold mb-4">Contact Details</h2>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-green-600 mt-1" />
              <p>
                Siddhanath Krushi Kendra, Main Road, Mangalwedha, Solapur District,
                Maharashtra, India - 413305
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-green-600" />
              <p>+91 85304 57607</p>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-green-600" />
              <p>info@siddhanathkrushi.com</p>
            </div>
          </div>

          <div>
            <h2 className="text-green-600 text-lg font-bold">Business Hours</h2>
            <div className="flex items-center gap-3 mt-2">
              <FaClock className="text-green-600" />
              <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
            </div>
            <div className="flex items-center gap-3">
              <FaClock className="text-gray-500" />
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* You Can Also Contact Us Section */}
        <div className="border border-gray-200 rounded-lg p-6 shadow-sm bg-white">
          <h2 className="text-green-600 text-xl font-bold mb-4">You Can Also Contact Us</h2>

          <div className="flex items-center gap-3 mb-3">
            <FaInstagram className="text-pink-600 text-xl" />
            <a
              href="https://www.instagram.com/siddhanath_official?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              siddhanath_official
            </a>
          </div>

          <div className="flex items-center gap-3">
            <FaFacebook className="text-blue-700 text-xl" />
            <a
              href="https://www.facebook.com/share/15zSaPR5t9/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline font-medium"
            >
              Siddhanath Facebook Page
            </a>
          </div>
        </div>

        {/* Final Line at Bottom */}
        <div className="text-center mt-4 text-green-800 text-xl font-semibold italic tracking-wide">
          We are looking forward to working with you... <span className="text-2xl"></span>
        </div>
      </div>

      {/* Right Column - Send Us a Message */}
      <div className="flex-1 border border-gray-200 rounded-lg p-6 shadow-sm bg-white self-stretch">
        <h2 className="text-green-600 text-xl font-bold mb-6">Send Us a Message</h2>
        <form className="space-y-4" onSubmit={e => {
          e.preventDefault();
          const form = e.target;
          const name = form.name.value;
          const email = form.email.value;
          const phone = form.phone.value;
          const subject = form.subject.value;
          const message = form.message.value;
          const whatsappMessage =
            `Hello, this is a message from Siddhanath.shop. I am interested in purchasing *${subject}*.
            Contact Details   Name: ${name} Email: ${email} Phone: ${phone} Additional Message: ${message}`;
          window.open(`https://wa.me/918530457607?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
        }}>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block font-medium mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                className="w-full border border-gray-200 rounded px-4 py-2"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block font-medium mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="john.doe@example.com"
                className="w-full border border-gray-200 rounded px-4 py-2"
                required
              />
            </div>
          </div>

          <div>
            <label className="block font-medium mb-1">Phone Number (Optional)</label>
            <input
              type="text"
              name="phone"
              placeholder="+91 XXXXX XXXXX"
              className="w-full border border-gray-200 rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Inquiry about Seeds"
              className="w-full border border-gray-200 rounded px-4 py-2"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1">Message</label>
            <textarea
              name="message"
              placeholder="Your message here..."
              className="w-full border border-gray-200 rounded px-4 py-2 h-32"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded flex items-center gap-2 hover:bg-green-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
