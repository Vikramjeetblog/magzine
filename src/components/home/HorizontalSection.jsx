import { Link } from "react-router-dom"

const artists = [
  {
    name: "Aryan Shaikh",
    role: "Artist",
    image: "/images/ARYAN.png",
  },
  {
    name: "Mayank Jain",
    role: "Artist",
    image: "/images/mayank.png",
  },
  {
    name: "Dhruv",
    role: "Artist",
    image: "/images/dhruv.png",
  },
  {
    name: "Sweta",
    role: "Artist",
    image: "/images/sweta.png",
  },
  {
    name: "Diyaan",
    role: "Artist",
    image: "/images/diyaan.png",
  },
  {
    name: "MizzieLmb",
    role: "Artist",
    image: "/images/mizzie.png",
  },
]

export default function HorizontalSection() {
  return (
    <section className="bg-[#0a0a0a] text-white py-32">

      {/* HEADER */}
      <div className="px-6 mb-16">
        <p className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-4">
          Label Roster
        </p>

        <h2 className="text-4xl md:text-6xl font-heading">
          Signed Artists
        </h2>
      </div>

      {/* SCROLL STRIP */}
      <div className="flex gap-12 overflow-x-auto px-6 no-scrollbar">

        {artists.map((artist, i) => (
          <Link
            to={`/artists/${artist.name.toLowerCase().replace(/\s+/g, "-")}`}
            key={i}
            className={`group ${
              i === 0 ? "min-w-[300px]" : "min-w-[220px]"
            }`}
          >

            {/* CARD */}
            <div className="relative">

              {/* IMAGE FRAME */}
              <div className="bg-[#111] p-3">

                <div className={`overflow-hidden ${
                  i === 0 ? "aspect-[3/4]" : "aspect-[2/3]"
                }`}>

                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 transition duration-500 group-hover:scale-105"
                  />

                </div>

              </div>

              {/* LABEL */}
              <span className="absolute top-4 right-4 text-[10px] bg-white text-black px-2 py-1 tracking-widest">
                LABEL
              </span>

            </div>

            {/* INFO */}
            <div className="mt-4">

              <h3 className="text-sm font-heading group-hover:opacity-70 transition">
                {artist.name}
              </h3>

              <p className="text-xs text-gray-500">
                {artist.role}
              </p>

            </div>

          </Link>
        ))}

      </div>

    </section>
  )
}