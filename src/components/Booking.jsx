import React, { useState } from 'react'

const Booking = ({ apartment, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const message = `
            Hello, I would like to book the ${apartment.name}.

            Name: ${formData.name}
            Phone: ${formData.phone}
            Check-in: ${formData.checkIn}
            Check-out: ${formData.checkOut}
            Guests: ${formData.guests}
                `

            const whatsappNumber = '2347034736069'
            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`

            window.open(whatsappURL, '_blank')
        }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-xl w-full max-w-md p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 text-xl"
        >
          ×
        </button>

        <h2 className="text-2xl font-semibold mb-4">
          Book {apartment.name}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                Check-in Date
            </label>
            <input
                type="date"
                name="checkIn"
                required
                onChange={handleChange}
                className="w-full border rounded px-4 py-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                Check-out Date
            </label>
            <input
                type="date"
                name="checkOut"
                required
                onChange={handleChange}
                className="w-full border rounded px-4 py-2"
            />
          </div>

          <input
            type="number"
            name="guests"
            placeholder="Number of Guests"
            required
            onChange={handleChange}
            className="w-full border rounded px-4 py-2"
          />

          <button
            type="submit"
            className="w-full bg-[#FF6700] text-white py-3 rounded-lg font-medium hover:opacity-90"
          >
            Continue to WhatsApp
          </button>
        </form>
      </div>
    </div>
  )
}

export default Booking
