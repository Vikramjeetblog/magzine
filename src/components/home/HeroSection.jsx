import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="bg-[#0a0a0a] text-white min-h-screen relative overflow-hidden pt-24">

      {/* BACKGROUND GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

      {/* BIG BACK TEXT */}
      <h1 className="absolute top-10 left-[-40px] text-[80px] md:text-[180px] font-heading text-white/[0.02] tracking-tight leading-none pointer-events-none select-none">
        SOUND
      </h1>

      {/* CONTENT WRAPPER */}
      <div className="max-w-7xl mx-auto px-6 relative grid md:grid-cols-2 gap-16 items-center">

        {/* ================= LEFT TEXT ================= */}
        <div className="z-10">

          {/* META */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-6"
          >
            Featured Artist
          </motion.p>

          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-7xl font-heading leading-[1.05] max-w-xl mb-6"
          >
            The Rise of Independent Sound
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="text-gray-400 max-w-md mb-10 leading-relaxed"
          >
            Discover emerging artists redefining the music scene through raw creativity and bold expression.
          </motion.p>

          {/* BUTTON */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
          >
            <Link
              to="/artists"
              className="inline-block border border-white px-6 py-3 text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-black transition"
            >
              Explore Artists
            </Link>
          </motion.div>

        </div>

        {/* ================= RIGHT IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.3 }}
          className="relative flex justify-center md:justify-end mt-10 md:mt-0"
        >

          {/* GLOW */}
          <div className="absolute inset-0 bg-white/5 blur-3xl scale-125"></div>

          {/* IMAGE STACK */}
          <div className="relative">

            {/* GHOST */}
            <img
              src="/images/ARYAN.png"
              alt="ghost"
              className="absolute top-4 left-4 w-[220px] sm:w-[260px] md:w-[440px] opacity-10 scale-110 rotate-[-4deg] blur-[1px]"
            />

            {/* SHADOW */}
            <div className="absolute top-4 left-4 w-full h-full bg-black opacity-30 blur-2xl"></div>

            {/* MAIN IMAGE */}
            <img
              src="/images/ARYAN.png"
              alt="artist"
              className="relative w-[220px] sm:w-[260px] md:w-[440px] rotate-[-2deg] md:rotate-[-3deg] object-cover"
            />

            {/* FLOOR SHADOW */}
            <div className="absolute bottom-[-15px] left-6 w-[80%] h-[30px] bg-black/60 blur-2xl"></div>

          </div>

        </motion.div>

      </div>
    </section>
  )
}