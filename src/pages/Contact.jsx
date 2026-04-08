import React from "react"

const Contact = () => {
  return (
    <section className="bg-[#0a0a0a] text-white min-h-screen pt-32 pb-24 relative overflow-hidden">

      {/* BIG BACKGROUND TEXT */}
      <h1 className="absolute top-20 left-[-40px] text-[140px] md:text-[220px] font-heading text-white/[0.03] leading-none pointer-events-none">
        CONTACT
      </h1>

      <div className="max-w-7xl mx-auto px-6 relative">

        {/* HEADER */}
        <div className="mb-24 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-6">
            Get In Touch
          </p>

          <h1 className="text-5xl md:text-7xl font-heading leading-tight mb-6">
            Let’s Build Something Through Sound
          </h1>

          {/* subtle divider */}
          <div className="w-16 h-[1px] bg-white/30"></div>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-20">

          {/* LEFT - INFO */}
          <div className="space-y-14">

            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                Studio
              </p>
              <p className="text-xl font-heading">
                The Chordifiers Studio
              </p>
              <p className="text-gray-400 text-sm">
                North Bengal, India
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                Email
              </p>
              <p className="text-xl">
        team@thechordifiers.studio
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                Submissions
              </p>
              <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
                We’re always looking for new voices. Submit your demos, collaborations, or editorial features and be part of the label.
              </p>
            </div>

          </div>

          {/* RIGHT - FORM */}
          <form className="space-y-10">

            {/* NAME */}
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-gray-500">
                Your Name
              </label>
              <input
                type="text"
                className="bg-transparent border-b border-gray-600 py-3 focus:outline-none focus:border-white transition"
              />
            </div>

            {/* EMAIL */}
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-gray-500">
                Your Email
              </label>
              <input
                type="email"
                className="bg-transparent border-b border-gray-600 py-3 focus:outline-none focus:border-white transition"
              />
            </div>

            {/* MESSAGE */}
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-gray-500">
                Message
              </label>
              <textarea
                rows="5"
                className="bg-transparent border-b border-gray-600 py-3 focus:outline-none focus:border-white transition resize-none"
              ></textarea>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="border border-white px-10 py-3 text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-black transition duration-300"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  )
}

export default Contact