import React from 'react'
import { Link } from "react-router-dom"
const Artists = () => {
	const artists = [
  {
    name: "Aryan Shaikh",
    image: "/images/ARYAN.png",
    slug: "aryan-shaikh",
  },
  {
    name: "Mayank Jain",
    image: "/images/mayank.png",
    slug: "mayank-jain",
  },
   {
    name: "Dhruv",
    image: "/images/dhruv.png",
    slug: "dhruv",
  },
  {
    name: "Sweta",
    image: "/images/sweta.png",
    slug: "sweta",
  },
   {
    name: "Diyaan",
    image: "/images/diyaan.png",
    slug: "diyaan",
  },
  {
    name: "Mizzie",
    image: "/images/mizzie.png",
    slug: "mizzie",
  }
]
	return (
		<div>
		<section className="bg-[#0a0a0a] text-white py-32">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl md:text-7xl font-heading mb-16">
          Artists
        </h1>

        <div className="grid md:grid-cols-3 gap-12">

          {artists.map((artist, i) => (
            <Link
              key={i}
              to={`/artists/${artist.slug}`}
              className="group"
            >

              <div className="bg-[#111] p-3 transition group-hover:-translate-y-2">

                <img
                  src={artist.image}
                  className="w-full object-contain"
                />

              </div>

              <h3 className="mt-4 text-lg font-heading">
                {artist.name}
              </h3>

            </Link>
          ))}

        </div>

      </div>
    </section>	
		</div>
	)
}

export default Artists