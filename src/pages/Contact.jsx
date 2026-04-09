import React, { useState } from "react"

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })

  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // handle change
  const handleChange = (e) => {
    const { name, value } = e.target

    // block numbers in name
    if (name === "name") {
      if (/[^a-zA-Z\s]/.test(value)) return
    }

    setFormData({
      ...formData,
      [name]: value
    })

    // clear error on typing
    setErrors(prev => ({
      ...prev,
      [name]: ""
    }))
  }

  // validation
  const validate = () => {
    let newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter valid email"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // submit
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

          <div className="w-16 h-[1px] bg-white/30"></div>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-20">

          {/* LEFT */}
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

          {/* FORM */}
          <form className="space-y-10" onSubmit={handleSubmit}>

            {/* NAME */}
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-gray-500">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`bg-transparent border-b py-3 focus:outline-none transition ${
                  errors.name ? "border-red-500" : "border-gray-600"
                }`}
              />
              {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
            </div>

            {/* EMAIL */}
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-gray-500">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`bg-transparent border-b py-3 focus:outline-none transition ${
                  errors.email ? "border-red-500" : "border-gray-600"
                }`}
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
            </div>

            {/* MESSAGE */}
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-widest text-gray-500">
                Message
              </label>
              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={`bg-transparent border-b py-3 focus:outline-none transition resize-none ${
                  errors.message ? "border-red-500" : "border-gray-600"
                }`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading || submitted}
              className="border border-white px-10 py-3 text-xs uppercase tracking-[0.3em] hover:bg-white hover:text-black transition duration-300"
            >
              {loading
                ? "Sending..."
                : success
                ? "Sent "
                : "Send Message"}
            </button>

          </form>

        </div>

      </div>
    </section>
  )
}

export default Contact