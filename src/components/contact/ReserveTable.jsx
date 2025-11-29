import React from 'react'

const ReserveTable = () => {
    return (
        <div className="py-10">
            <form className="w-full max-w-4xl mx-auto space-y-6 font-display">

  <div className="text-center">
    <h2 className="text-2xl font-heading font-bold text-primary tracking-wide">
      RESERVE YOUR TABLE
    </h2>
    <p className="mt-1 text-sm text-white">
      Your Perfect Meal Begins With a Simple Booking
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <input
      type="text"
      placeholder="Name"
      className="w-full border border-primary bg-transparent px-4 py-2 text-white placeholder-white outline-none"
    />
    <input
      type="email"
      placeholder="Email"
      className="w-full border border-primary bg-transparent px-4 py-2 text-white placeholder-white outline-none"
    />
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <input
      type="text"
      placeholder="Phone"
      className="w-full border border-primary bg-transparent px-4 py-2 text-white placeholder-white outline-none"
    />
    <select
      className="w-full border border-primary bg-transparent px-4 py-2 text-white placeholder-white outline-none"
      defaultValue=""
    >
      <option value="" disabled className="text-black">Events</option>
      <option className="text-black">Wedding</option>
      <option className="text-black">Corporate Party</option>
      <option className="text-black">Birthday Celebration</option>
    </select>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <input
      type="date"
      className="w-full border border-primary bg-transparent px-4 py-2 text-white placeholder-white outline-none"
    />
    <input
      type="time"
      className="w-full border border-primary bg-transparent px-4 py-2 text-white placeholder-white outline-none"
    />
  </div>

  <textarea
    rows="5"
    placeholder="Message"
    className="w-full border border-primary bg-transparent px-4 py-2 text-white placeholder-white outline-none"
  ></textarea>

  {/* Button */}
  <div className="text-center">
    <button
      type="submit"
      className="px-8 py-2 border border-primary font-primary bg-primary rounded-sm"
    >
      Book Now
    </button>
  </div>
</form>

        </div>
    )
}

export default ReserveTable