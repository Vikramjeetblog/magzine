import React from "react"
import { Link } from "react-router-dom"
import { artists } from "../../data/artists"

const RelatedArtists = ({ currentSlug }) => {

  // remove current artist
  const filteredArtists = artists.filter(
    (artist) => artist.slug !== currentSlug
  )

  return (
    <section className="bg-[#0a0a0a] text-white py-32">

      <div className="max-w-7xl mx-auto px-6">

        <p className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-10">
          You May Also Like
        </p>

        <div className="flex gap-10 overflow-x-auto no-scrollbar">

          {filteredArtists.map((artist) => (
            <Link
              key={artist.slug}
              to={`/artists/${artist.slug}`}
              className="min-w-[220px] group"
            >

              {/* COVER */}
              <div className="bg-[#111] p-3 transition duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_30px_80px_rgba(0,0,0,0.6)]">

                <img
                  src={artist.image}
                  className="w-full object-contain"
                  alt={artist.name}
                />

              </div>

              {/* NAME */}
              <h4 className="mt-4 text-sm font-heading">
                {artist.name}
              </h4>

            </Link>
          ))}

        </div>

      </div>
    </section>
  )
}

export default RelatedArtists