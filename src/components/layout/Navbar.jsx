import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-router-dom"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="bg-white text-black w-full border-b border-gray-300 fixed top-0 left-0 z-50">

        {/* TOP BAR */}
        <div className="flex items-center justify-between px-6 py-4">

          {/* LEFT - MENU ICON */}
          <button onClick={() => setIsOpen(true)}>
            <FaBars size={18} />
          </button>

          {/* CENTER LOGO */}
          <Link to="/" className="text-center leading-tight">
            <h1 className="text-4xl md:text-5xl font-heading tracking-wide">
             SPOTLIGHT 
            </h1>
            <p className="text-[10px] tracking-[0.4em]">
              MAGAZINE
            </p>
          </Link>

          {/* RIGHT SIDE */}
          <div>
            <Link
              to="/submit"
              className="bg-black text-white px-4 py-1 text-xs tracking-wider hover:opacity-80 transition"
            >
              SUBMIT
            </Link>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex justify-center border-t border-gray-200">
          <ul className="flex space-x-10 py-3 text-xs uppercase tracking-widest">
            <li>
              <Link className="hover:text-gray-500 transition" to="/artists">
                Artists
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500 transition" to="/submit">
                Submit
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500 transition" to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:text-gray-500 transition" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* ================= FULLSCREEN MENU ================= */}
      {isOpen && (
        <div className="fixed inset-0 bg-white text-black z-[999] flex flex-col">

          {/* TOP BAR */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-300">

            <button onClick={() => setIsOpen(false)}>
              <FaTimes size={20} />
            </button>

            <div className="text-center">
              <h1 className="text-3xl font-heading tracking-wide">
                LABEL
              </h1>
              <p className="text-[10px] tracking-[0.4em]">
                RECORDS
              </p>
            </div>

            <div></div>
          </div>

          {/* MENU ITEMS */}
          <div className="flex-1 flex items-center">

            <ul className="space-y-10 px-16 text-xl uppercase tracking-[0.2em]">

              <li>
                <Link
                  to="/artists"
                  onClick={() => setIsOpen(false)}
                  className="hover:opacity-50 transition"
                >
                  Artists
                </Link>
              </li>

              <li>
                <Link
                  to="/submit"
                  onClick={() => setIsOpen(false)}
                  className="hover:opacity-50 transition"
                >
                  Submit
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className="hover:opacity-50 transition"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="hover:opacity-50 transition"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>
        </div>
      )}
    </>
  )
}