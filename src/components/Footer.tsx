import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        
        {/* Brand */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold text-bg">Contact Us</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Let’s build your vision together. 
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col space-y-3">
          <p className="flex items-center gap-3 text-gray-300">
            <FaMapMarkerAlt className="text-bg" /> London, United Kingdom
          </p>
          <p className="flex items-center gap-3 text-gray-300">
            <FaPhoneAlt className="text-bg" /> +44 XXX XXX XX
          </p>
          <p className="flex items-center gap-3 text-gray-300">
            <FaEnvelope className="text-bg" /> info@helmbuild.co.uk
          </p>
        </div>

        
        <div className="flex flex-col space-y-4 col-span-full text-center">
          <p className="text-gray-300 leading-relaxed">
            Or simply fill out our quick online form and a member of our team will get back to you within 
            24 hours.
          </p>
          <p className="text-bg font-semibold">
            HelmBuild – Strong Foundations, Stronger Futures.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} HelmBuild. All rights reserved.
      </div>
    </footer>
  );
}
