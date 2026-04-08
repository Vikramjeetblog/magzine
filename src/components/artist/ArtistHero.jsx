import React from "react"

const ArtistHero = ({ artist }) => {
  return (
    <section className="bg-[#0a0a0a] text-white min-h-screen relative overflow-hidden pt-28 flex items-center">

      {/* BIG FADED BACKGROUND TEXT */}
      <h1 className="absolute top-10 left-[-40px] text-[120px] md:text-[200px] font-heading text-white/[0.03] leading-none pointer-events-none select-none">
        {artist.name.split(" ")[0]}
      </h1>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center relative">

        {/* ================= TEXT ================= */}
        <div>

          {/* META */}
          <p className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-6">
            Label Artist
          </p>

          {/* NAME */}
          <h2 className="text-5xl md:text-7xl font-heading leading-[1.05] mb-6">
            {artist.name}
          </h2>

          {/* ROLE */}
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
            {artist.role}
          </p>

          {/* BIO */}
          <p className="text-gray-400 max-w-md leading-relaxed mb-8">
            {artist.bio}
          </p>

          {/* LOCATION */}
          <p className="text-xs text-gray-600 tracking-wide">
            {artist.location}
          </p>

        </div>

        {/* ================= IMAGE ================= */}
        <div className="relative flex justify-center">

          {/* GLOW */}
          <div className="absolute w-[300px] md:w-[420px] h-[300px] md:h-[420px] bg-white/5 blur-3xl rounded-full"></div>

          {/* GHOST IMAGE */}
          <img
            src={artist.image}
            alt="ghost"
            className="absolute w-[280px] md:w-[420px] opacity-10 scale-105 rotate-[-6deg] blur-[2px]"
          />

          {/* SHADOW */}
          <div className="absolute top-6 left-6 w-[280px] md:w-[420px] h-full bg-black opacity-40 blur-2xl"></div>

          {/* MAIN IMAGE */}
          <img
            src={artist.image}
            alt={artist.name}
            className="relative w-[280px] md:w-[420px] rotate-[-2deg] object-contain"
          />

        </div>

      </div>
    </section>
  )
}

export default ArtistHero