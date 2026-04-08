import React from "react"

const About = () => {
  return (
    <section className="bg-[#0a0a0a] text-white min-h-screen pt-32 pb-24 relative overflow-hidden">

      {/* BACKGROUND WORD */}
      <h1 className="absolute top-20 left-[-40px] text-[140px] md:text-[220px] font-heading text-white/[0.03]">
        MANIFESTO
      </h1>

      <div className="max-w-6xl mx-auto px-6 relative">

        {/* HERO */}
        <div className="mb-32 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-6">
            About
          </p>

          <h1 className="text-5xl md:text-7xl font-heading leading-tight mb-10">
            A Platform For Sound, Culture & Emerging Voices
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed">
            Welcome to The Chordifiers Studio — a space where artists, producers, and creators converge to shape the future of sound through collaboration, experimentation, and storytelling.
          </p>
        </div>

        {/* SECTION 1 */}
        <div className="grid md:grid-cols-2 gap-20 mb-32">

          <div>
            <h2 className="text-3xl md:text-4xl font-heading mb-6">
              The Magazine
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6">
              This platform exists to spotlight artists — both signed and independent — presenting their work through a visual and editorial lens.
            </p>

            <p className="text-gray-400 leading-relaxed">
              We believe music is more than sound — it is identity, culture, and expression.
            </p>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-heading mb-6">
              The Label
            </h2>

            <p className="text-gray-400 leading-relaxed mb-6">
              Beyond the magazine, The Chordifiers Studio operates as an independent record label, supporting artists through production, distribution, and long-term creative direction.
            </p>

            <p className="text-gray-400 leading-relaxed">
              From studio sessions to visual storytelling, we build complete artistic journeys.
            </p>
          </div>

        </div>

        {/* HIGHLIGHT */}
        <div className="mb-32 border-t border-gray-800 pt-16">

          <p className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-6">
            Recognition
          </p>

          <h2 className="text-3xl md:text-5xl font-heading mb-6 max-w-3xl">
            Recognised for Excellence in Creative Production
          </h2>

          <p className="text-gray-400 max-w-2xl">
            Awarded at WBIFF 2025, our work reflects a commitment to quality, innovation, and meaningful storytelling across music, film, and digital media.
          </p>

        </div>

        {/* REGION */}
        <div>

          <p className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-6">
            Community
          </p>

          <h2 className="text-3xl md:text-5xl font-heading mb-6 max-w-3xl">
            Rooted in North Bengal, Connected Everywhere
          </h2>

          <p className="text-gray-400 max-w-2xl">
            From Darjeeling to Siliguri to Sikkim, we collaborate with artists, brands, and creators — building a growing creative ecosystem across regions.
          </p>

        </div>

      </div>
    </section>
  )
}

export default About