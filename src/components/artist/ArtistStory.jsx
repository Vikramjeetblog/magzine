import React from "react"

const ArtistStory = ({ artist }) => {
  return (
    <section className="bg-[#0a0a0a] text-white py-32">

      <div className="max-w-5xl mx-auto px-6">

        {/* SECTION LABEL */}
        <p className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-6">
          Feature Story
        </p>

        {/* TITLE */}
        <h2 className="text-4xl md:text-6xl font-heading leading-tight mb-10">
          The Journey Behind {artist.name}
        </h2>

        {/* STORY GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT PARAGRAPH */}
          <p className="text-gray-400 leading-relaxed text-lg">
            {artist.bio}
          </p>

          {/* RIGHT PARAGRAPH */}
          <p className="text-gray-500 leading-relaxed">
            Emerging from a new wave of independent music, {artist.name} blends
            raw emotion with modern production. Their work reflects personal
            experiences, cultural influences, and a deep connection to sound.
            This journey is not just about music — it’s about identity, growth,
            and artistic expression.
          </p>

        </div>

        {/* EDITORIAL DIVIDER */}
        <div className="mt-16 border-t border-gray-800 w-20"></div>

      </div>

    </section>
  )
}

export default ArtistStory