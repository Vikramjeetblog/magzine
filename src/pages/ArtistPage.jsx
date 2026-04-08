import { useParams } from "react-router-dom"
import { motion } from "framer-motion"
import { artists } from "../data/artists"
import RelatedArtists from "../components/artist/RelatedArtists"

// Animation wrapper
const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
)

const ArtistPage = () => {
  const { slug } = useParams()
  const artist = artists.find(a => a.slug === slug)

  if (!artist) {
    return <div className="text-white p-10">Artist not found</div>
  }

  return (
    <div className="bg-[#0a0a0a] text-white relative overflow-hidden">

      {/* ================= HERO ================= */}
      <section className="relative h-screen flex items-center justify-center text-center">

        <img
          src={artist.image}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="relative z-10 max-w-4xl px-6">
          <FadeIn>
            <p className="text-xs tracking-[0.5em] text-gray-400 mb-6">
              LABEL ARTIST
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="text-6xl md:text-8xl font-heading mb-6">
              {artist.name}
            </h1>
          </FadeIn>

          <FadeIn delay={0.4}>
            <p className="text-lg text-gray-300">
              {artist.role}
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <p className="text-sm text-gray-500 mt-4">
              {artist.location}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ================= STORY ================= */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <FadeIn>
            <div>
              <p className="text-xs tracking-[0.5em] text-gray-500 mb-6">
                EDITORIAL FEATURE
              </p>

              <h2 className="text-5xl font-heading mb-6">
                The Story
              </h2>

              <p className="text-gray-300 leading-relaxed mb-6">
                {artist.bio}
              </p>

              <p className="text-xl italic text-white">
                “Art is controlled chaos.”
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <img
              src={artist.image}
              className="w-full h-[500px] object-cover"
            />
          </FadeIn>

        </div>
      </section>

      {/* ================= AUDIO ================= */}
      {artist.audio && (
        <section className="py-24 border-y border-white/10">
          <div className="max-w-4xl mx-auto px-6">

            <FadeIn>
              <p className="text-xs tracking-[0.5em] text-gray-500 mb-6">
                LISTEN
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="text-3xl font-heading mb-6">
                {artist.trackTitle || "Featured Track"}
              </h2>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-white/5 p-6 border border-white/10">
                <audio controls className="w-full">
                  <source src={artist.audio} type="audio/mpeg" />
                </audio>
              </div>
            </FadeIn>

          </div>
        </section>
      )}

      {/* ================= STATS ================= */}
      <section className="py-24 border-y border-white/10">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-3 text-center">

          <FadeIn>
            <div>
              <p className="text-3xl font-bold">
                {artist.stats?.projects || "—"}
              </p>
              <p className="text-gray-500 text-sm">Projects</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>
              <p className="text-3xl font-bold">
                {artist.stats?.followers || "—"}
              </p>
              <p className="text-gray-500 text-sm">Followers</p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div>
              <p className="text-3xl font-bold">
                {artist.stats?.years || "—"}
              </p>
              <p className="text-gray-500 text-sm">Years Active</p>
            </div>
          </FadeIn>

        </div>
      </section>

      {/* ================= VIDEO ================= */}
      {artist.youtube && (
        <section className="py-32">
          <div className="max-w-6xl mx-auto px-6">

            <FadeIn>
              <h2 className="text-4xl md:text-5xl font-heading mb-12 text-center">
                Featured Release
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="aspect-video w-full overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src={artist.youtube}
                  title="YouTube video"
                  allowFullScreen
                ></iframe>
              </div>
            </FadeIn>

          </div>
        </section>
      )}

      {/* ================= GALLERY ================= */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-6">

          <FadeIn>
            <h2 className="text-4xl md:text-5xl font-heading mb-12 text-center">
              Selected Works
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-6">
            {(artist.gallery || [artist.image, artist.image, artist.image]).map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden"
              >
                <img
                  src={img}
                  className="w-full h-[400px] object-cover"
                />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= SCROLL TEXT ================= */}
      <section className="py-32 text-center">
        <h2 className="text-6xl font-heading opacity-10">
          SOUND • VISION • CULTURE
        </h2>
      </section>

      {/* ================= CONNECT ================= */}
      <section className="py-32 border-t border-white/10 relative">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <FadeIn>
            <div>
              <p className="text-xs tracking-[0.5em] text-gray-500 mb-6">
                CONNECT
              </p>

              <h2 className="text-4xl font-heading mb-6">
                Let’s Build Something Together
              </h2>

              <p className="text-gray-400 mb-8">
                Available for collaborations, features, and creative projects.
              </p>

              <button className="border px-8 py-4 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition">
                Contact Artist
              </button>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 gap-6">

            {artist.spotify && (
              <FadeIn>
                <a href={artist.spotify} className="p-6 border border-white/10 hover:bg-white hover:text-black transition">
                  <p className="text-sm text-gray-500 mb-2">Streaming</p>
                  <p className="text-lg">Spotify</p>
                </a>
              </FadeIn>
            )}

            {artist.youtubeLink && (
              <FadeIn delay={0.2}>
                <a href={artist.youtubeLink} className="p-6 border border-white/10 hover:bg-white hover:text-black transition">
                  <p className="text-sm text-gray-500 mb-2">Video</p>
                  <p className="text-lg">YouTube</p>
                </a>
              </FadeIn>
            )}

            {artist.instagram && (
              <FadeIn delay={0.4}>
                <a href={artist.instagram} className="p-6 border border-white/10 hover:bg-white hover:text-black transition col-span-2">
                  <p className="text-sm text-gray-500 mb-2">Social</p>
                  <p className="text-lg">Instagram</p>
                </a>
              </FadeIn>
            )}

          </div>

        </div>

      </section>

      {/* ================= RELATED ================= */}
      <RelatedArtists currentSlug={artist.slug} />

    </div>
  )
}

export default ArtistPage