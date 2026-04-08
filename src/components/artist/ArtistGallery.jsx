import React from 'react'

const ArtistGallery = () => {
	return (
		<div>
			<section className="bg-[#0a0a0a] text-white py-32">

      <div className="max-w-7xl mx-auto px-6">

        <p className="text-xs uppercase tracking-[0.5em] text-gray-500 mb-10">
          Visual Work
        </p>

        <div className="grid md:grid-cols-3 gap-10">

          <img src="/images/ARYAN.png" className="w-full object-contain bg-[#111] p-3" />
          <img src="/images/ARYAN.png" className="w-full object-contain bg-[#111] p-3 translate-y-10" />
          <img src="/images/ARYAN.png" className="w-full object-contain bg-[#111] p-3" />

        </div>

      </div>
    </section>
		</div>
	)
}

export default ArtistGallery