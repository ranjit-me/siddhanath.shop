import React from 'react';

function About() {
  return (
    <div className="bg-green-50 min-h-[70vh] py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-green-700 mb-4 text-center">About Siddhanath Krushi Kendra</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Welcome to <span className="font-semibold text-green-800">Siddhanath Krushi Kendra</span>, your trusted partner in agricultural excellence, located in Mangalwedha, Solapur District, Maharashtra. We are dedicated to empowering farmers and gardeners with the best products, expert advice, and reliable service.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-green-600 mb-2">Our Story</h2>
          <p className="text-gray-600">
            Established with a vision to support the farming community, Siddhanath Krushi Kendra has become a one-stop shop for all agricultural needs. From seeds and crop protection to nutrients, growth promoters, and organic solutions, we offer a wide range of products from leading brands to help you achieve better yields and sustainable growth.
          </p>
        </div>

        <div className="mb-8 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-green-600 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To provide high-quality agricultural products and expert guidance, enabling farmers to maximize productivity and embrace modern, sustainable practices.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-600 mb-2">Our Vision</h3>
            <p className="text-gray-600">
              To be the most trusted and innovative agri-solution provider in Maharashtra, fostering prosperity and growth for every farmer we serve.
            </p>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-green-600 mb-2">Why Choose Us?</h3>
          <ul className="list-disc pl-6 text-gray-600 space-y-1">
            <li>Wide range of genuine products from top brands</li>
            <li>Expert advice and personalized recommendations</li>
            <li>Transparent pricing and reliable service</li>
            <li>Focus on sustainable and organic farming solutions</li>
            <li>Strong community relationships and ongoing support</li>
          </ul>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-green-600 mb-2">Visit or Contact Us</h3>
          <p className="text-gray-600 mb-2">
            <span className="font-medium">Address:</span> Siddhanath Krushi Kendra, Main Road, Mangalwedha, Solapur District, Maharashtra, India - 413305
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-medium">Phone:</span> <a href="tel:+918530457607" className="text-green-700 hover:underline">+91 85304 57607</a>
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-medium">Email:</span> <a href="mailto:info@siddhanathkrushi.com" className="text-green-700 hover:underline">info@siddhanathkrushi.com</a>
          </p>
          <p className="text-gray-600">
            <span className="font-medium">Business Hours:</span> Monday - Saturday: 9:00 AM - 7:00 PM, Sunday: Closed
          </p>
        </div>

        <div className="mb-8 text-center">
          <iframe
            title="Siddhanath Krushi Kendra Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d636.6095952234992!2d75.44944049619491!3d17.509107889929375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc42708775c39a3%3A0x33a5646c14023adf!2sSiddhanath%20Krushi%20Kendra!5e1!3m2!1sen!2sin!4v1752841625539!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: '1rem' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="text-center mt-8">
          <a
            href="https://wa.me/918530457607?text=Hello, I would like to know more about your products and services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-xl shadow transition"
          >
            Chat with us on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;