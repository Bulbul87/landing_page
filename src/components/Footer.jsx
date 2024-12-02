import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className=" text-teal-400 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:border-green-400"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:border-green-400"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Message</label>
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded focus:outline-none focus:border-teal-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-2 bg-teal-500  border-2  hover:bg-white  hover:text-gray-950  hover:border-teal-400 rounded-full text-white font-semibold transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Footer Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-8 border-t border-teal-500 pt-4 text-center ">
          <p className="text-teal-500">
            &copy; 2024 Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
