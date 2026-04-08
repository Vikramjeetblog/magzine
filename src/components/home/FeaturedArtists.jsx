import React from 'react'

const FeaturedArtists = () => {
  return (
    <section className="bg-[#0a0a0a] text-white py-32">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-24">
          <p className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-4">
            Latest Features
          </p>

          <h2 className="text-4xl md:text-6xl font-heading">
            Editorial Picks
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-16 items-start">

          {/* ================= LEFT - MAIN FEATURE ================= */}
          <div className="md:col-span-2">

            <div className="bg-[#111] p-4">

              {/* IMAGE */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src="/images/mayank.png"
                  className="w-full h-full object-cover object-top hover:scale-105 transition duration-500"
                />
              </div>

            </div>

            {/* META */}
            <div className="mt-6 flex items-center gap-4 text-xs text-gray-500 tracking-widest">
              <span>FEATURE</span>
              <span>•</span>
              <span>MARCH 2026</span>
            </div>

            {/* TITLE */}
            <h3 className="mt-4 text-2xl md:text-3xl font-heading leading-snug max-w-lg">
              Inside The Sound Revolution
            </h3>

          </div>

          {/* ================= RIGHT - LIST ================= */}
          <div className="flex flex-col gap-16">

            {/* ITEM */}
            <div className="group flex gap-5 items-start cursor-pointer">

              <div className="w-[90px] h-[120px] overflow-hidden bg-[#111] p-1">
                <img
                  src="/images/mayank.png"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div>
                <p className="text-[10px] text-gray-500 tracking-widest mb-2">
                  FEATURE • FEB 2026
                </p>

                <h4 className="text-sm font-heading leading-snug group-hover:opacity-70 transition">
                  Rising Indie Voices
                </h4>
              </div>

            </div>

            {/* ITEM */}
            <div className="group flex gap-5 items-start cursor-pointer">

              <div className="w-[90px] h-[120px] overflow-hidden bg-[#111] p-1">
                <img
                  src="/images/mayank.png"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <div>
                <p className="text-[10px] text-gray-500 tracking-widest mb-2">
                  FEATURE • JAN 2026
                </p>

                <h4 className="text-sm font-heading leading-snug group-hover:opacity-70 transition">
                  Studio Sessions Uncovered
                </h4>
              </div>

            </div>

          </div>

        </div>

        

      </div>

    </section>
  )
}

export default FeaturedArtists