import React, { useState } from "react"

const Submit = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    link: "",
    message: ""
  })

  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Handle Change
  const handleChange = (e) => {
    const { name, value } = e.target

    // Block numbers/special chars in name
    if (name === "name") {
      if (/[^a-zA-Z\s]/.test(value)) return
    }

    setFormData({
      ...formData,
      [name]: value
    })

    // clear error while typing
    setErrors(prev => ({
      ...prev,
      [name]: ""
    }))
  }

  // Validation
  const validate = () => {
    let newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter valid email address"
    }

    if (!formData.link.trim()) {
      newErrors.link = "Work link is required"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (loading || submitted) return

    if (!validate()) return

    setLoading(true)
    setSuccess(false)

    try {
      await fetch("YOUR_GOOGLE_SCRIPT_URL", {
        method: "POST",
        body: JSON.stringify(formData)
      })

      setSuccess(true)
      setSubmitted(true)

      setFormData({
        name: "",
        email: "",
        link: "",
        message: ""
      })

    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="bg-[#0a0a0a] text-white min-h-screen pt-32 pb-24 relative overflow-hidden">

      <h1 className="absolute top-20 left-[-40px] text-[160px] md:text-[240px] font-heading text-white/[0.03]">
        SUBMIT
      </h1>

      <div className="max-w-7xl mx-auto px-6 relative">

        <div className="mb-24 max-w-3xl">
          <p className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-6">
            Submission
          </p>

          <h1 className="text-5xl md:text-7xl font-heading leading-tight mb-8">
            Submit Your Work As an Independent Artist
          </h1>

          <p className="text-gray-400 text-lg leading-relaxed">
            This submission is open for independent artists who are not currently signed under The Chordifiers Studio.  
            If your work carries identity, originality, and strong artistic vision, our team will review it for potential feature.
          </p>

          <div className="mt-10 border-l border-white/20 pl-6">
            <p className="text-gray-300 leading-relaxed">
              This platform features work from both our signed artists and a curated selection of independent artists.
            </p>

            <p className="text-gray-500 text-sm mt-3">
              Submission does not guarantee publication. Only selected artists will be featured.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-20 items-start">

          {/* LEFT */}
          <div className="space-y-16">
            <div>
              <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">
                What We Look For
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Artists with a strong voice, unique sound, and a clear identity.  
                We prioritise originality over trends.
              </p>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">
                Formats
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Spotify, YouTube, SoundCloud, Google Drive — any format that best represents your work.
              </p>
            </div>

            <div>
              <h3 className="text-sm uppercase tracking-widest text-gray-500 mb-4">
                What Happens Next
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Our editorial and label team carefully reviews each submission.  
                If your work aligns with our vision, you may be featured in the magazine or contacted for further collaboration.
              </p>
            </div>

            <div className="border-l border-white/20 pl-6">
              <p className="text-lg font-heading leading-relaxed">
                “We don’t follow sound.  
                We discover it.”
              </p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="relative">

            <div className="hidden md:block absolute left-[-40px] top-0 h-full w-[1px] bg-white/10"></div>

            <form className="space-y-10" onSubmit={handleSubmit}>

              {/* NAME */}
              <div>
                <label className="text-xs uppercase tracking-widest text-gray-500">
                  Artist Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b py-3 focus:outline-none transition ${
                    errors.name ? "border-red-500" : "border-gray-600"
                  }`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-2">{errors.name}</p>}
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-xs uppercase tracking-widest text-gray-500">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b py-3 focus:outline-none transition ${
                    errors.email ? "border-red-500" : "border-gray-600"
                  }`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-2">{errors.email}</p>}
              </div>

              {/* LINK */}
              <div>
                <label className="text-xs uppercase tracking-widest text-gray-500">
                  Work Link (Spotify / YouTube / Drive)
                </label>
                <input
                  type="text"
                  name="link"
                  value={formData.link}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b py-3 focus:outline-none transition ${
                    errors.link ? "border-red-500" : "border-gray-600"
                  }`}
                />
                {errors.link && <p className="text-red-500 text-xs mt-2">{errors.link}</p>}
              </div>

              {/* MESSAGE */}
              <div>
                <label className="text-xs uppercase tracking-widest text-gray-500">
                  Tell Us About Your Work
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full bg-transparent border-b py-3 focus:outline-none transition resize-none ${
                    errors.message ? "border-red-500" : "border-gray-600"
                  }`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs mt-2">{errors.message}</p>}
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading || submitted}
                className="border border-white px-10 py-3 text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-black transition"
              >
                {loading
                  ? "Submitting..."
                  : success
                  ? "Submitted ✓"
                  : "Submit Work"}
              </button>

            </form>

            <p className="text-gray-500 text-xs mt-10 max-w-sm">
              This submission form is intended for independent artists only. We review all entries, but due to volume, only selected artists will be contacted or featured.
            </p>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Submit