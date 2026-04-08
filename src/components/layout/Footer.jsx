import React from "react"
import { Link } from "react-router-dom"
import { FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="bg-black text-white py-20 border-t border-gray-800">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-16">

        {/* LEFT - BRAND */}
        <div>
          <h1 className="text-3xl md:text-4xl font-heading mb-6">
            The Chordifiers Studio
          </h1>

          <p className="text-gray-500 text-sm mb-8 max-w-xs">
            An award-winning music production studio and independent record label based in North Bengal.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4">
            <div className="border border-white p-3 rounded-full hover:bg-white hover:text-black transition">
              <FaInstagram size={16} />
            </div>

            <div className="border border-white p-3 rounded-full hover:bg-white hover:text-black transition">
              <FaYoutube size={16} />
            </div>

            <div className="border border-white p-3 rounded-full hover:bg-white hover:text-black transition">
              <FaTwitter size={16} />
            </div>
          </div>
        </div>

        {/* CENTER - ARTISTS */}
        <div>
          <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-6">
            Artists
          </h3>

          <ul className="space-y-4 text-sm">
            <li><Link to="/artists" className="hover:text-gray-400">All Artists</Link></li>
            <li><Link to="/artists" className="hover:text-gray-400">Signed Artists</Link></li>
            <li><Link to="/artists" className="hover:text-gray-400">Independent Artists</Link></li>
            <li><Link to="/submit" className="hover:text-gray-400">Submit Your Work</Link></li>
          </ul>
        </div>

        {/* RIGHT - COMPANY */}
        <div>
          <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-6">
            Company
          </h3>

          <ul className="space-y-4 text-sm">
            <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
            <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
            <li><Link to="/" className="hover:text-gray-400">Magazine</Link></li>
          </ul>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="mt-16 border-t border-gray-800 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} The Chordifiers Studio. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer