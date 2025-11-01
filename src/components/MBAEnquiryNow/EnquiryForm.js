"use client"
import React, { useState, useEffect } from "react"
import Select from "react-select"
import Modal from "react-modal"
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go"
import { Country, State, City } from "country-state-city"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    country: "IN", // Default to India
    state: "",
    city: "",
  })

  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({
    loading: false,
    success: null,
    message: "",
  })
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  // Set app element for react-modal accessibility
  useEffect(() => {
    if (typeof window !== "undefined") {
      Modal.setAppElement("body")
    }
  }, [])

  // Get selected country and state objects for filtering
  const selectedCountry = Country.getAllCountries().find(
    (c) => c.isoCode === formData.country
  )
  const selectedState = State.getStatesOfCountry(formData.country).find(
    (s) => s.isoCode === formData.state
  )

  // Get lists for dropdowns
  const countries = Country.getAllCountries()
  const states = formData.country
    ? State.getStatesOfCountry(formData.country)
    : []
  const cities =
    formData.country && formData.state
      ? City.getCitiesOfState(formData.country, formData.state)
      : []

  // Format options for react-select
  const countryOptions = countries.map((country) => ({
    value: country.isoCode,
    label: country.name,
  }))

  const stateOptions = states.map((state) => ({
    value: state.isoCode,
    label: state.name,
  }))

  const cityOptions = cities.map((city, index) => ({
    value: city.name,
    label: city.name,
  }))

  // Custom styles for react-select matching brand colors
  const customSelectStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: "#ffffff",
      borderColor: errors[state.selectProps.name]
        ? "#ef4444"
        : state.isFocused
        ? "#A22977"
        : "#e5e7eb",
      boxShadow: state.isFocused ? "0 0 0 1px #A22977" : "none",
      borderRadius: "0.5rem",
      padding: "2px 4px",
      minHeight: "48px",
      fontFamily:
        "var(--font-montserrat), ui-sans-serif, system-ui, sans-serif",
      fontSize: "16px",
      "&:hover": {
        borderColor: "#A22977",
      },
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected
        ? "#A22977"
        : state.isFocused
        ? "#f3f4f6"
        : "#ffffff",
      color: state.isSelected ? "#ffffff" : "#1b2950",
      fontFamily:
        "var(--font-montserrat), ui-sans-serif, system-ui, sans-serif",
      fontSize: "16px",
      cursor: "pointer",
      "&:active": {
        backgroundColor: "#A22977",
        color: "#ffffff",
      },
    }),
    placeholder: (base) => ({
      ...base,
      color: "#9ca3af",
      fontFamily:
        "var(--font-montserrat), ui-sans-serif, system-ui, sans-serif",
    }),
    singleValue: (base) => ({
      ...base,
      color: "#1b2950",
      fontFamily:
        "var(--font-montserrat), ui-sans-serif, system-ui, sans-serif",
    }),
    menu: (base) => ({
      ...base,
      borderRadius: "0.5rem",
      boxShadow:
        "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    }),
    menuList: (base) => ({
      ...base,
      padding: "4px",
    }),
  }

  // 🧠 Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target

    // For phone field, only allow numbers
    if (name === "phone") {
      const numericValue = value.replace(/[^0-9]/g, "") // Remove all non-numeric characters
      setFormData({ ...formData, [name]: numericValue })
    } else {
      setFormData({ ...formData, [name]: value })
    }

    setErrors({ ...errors, [name]: "" })
  }

  // 🧠 Handle select change
  const handleSelectChange = (selectedOption, actionMeta) => {
    const { name } = actionMeta

    // If country changes, reset state and city
    if (name === "country") {
      setFormData({
        ...formData,
        country: selectedOption?.value || "",
        state: "",
        city: "",
      })
    }
    // If state changes, reset city
    else if (name === "state") {
      setFormData({
        ...formData,
        state: selectedOption?.value || "",
        city: "",
      })
    }
    // Otherwise, update normally
    else {
      setFormData({
        ...formData,
        [name]: selectedOption?.value || "",
      })
    }

    setErrors({ ...errors, [name]: "" })
  }

  // ✅ Validate required fields
  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.phone.trim()) newErrors.phone = "Phone is required"
    else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits"
    }
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }
    if (!formData.country) newErrors.country = "Country is required"
    if (!formData.state) newErrors.state = "State is required"
    if (!formData.city) newErrors.city = "City is required"
    return newErrors
  }

  // 💾 Save to server JSON file as backup (silent, no errors shown to user)
  const saveToBackup = async (data) => {
    try {
      // Silently save backup - don't await or show any errors
      fetch("/api/backup-enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).catch(() => {
        // Silently fail - don't log or show anything to user
      })
    } catch (error) {
      // Completely silent - no errors shown to user
    }
  }

  // 🚀 Handle submit
  const handleSubmit = (e) => {
    e.preventDefault()

    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    // ⚙️ Prepare data for Google Sheets
    const googleSheetsData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      country: selectedCountry?.name || formData.country,
      state: selectedState?.name || formData.state,
      city: formData.city,
    }

    // Save to backup and Google Sheets in background (fire-and-forget)
    // Both calls happen asynchronously without blocking the UI
    saveToBackup(googleSheetsData)

    // Send to Google Sheets (fire-and-forget, no await)
    fetch(
      "https://script.google.com/macros/s/AKfycbwbLP5gvPkj8YVaSZ7Wx6ZKi7ojK8nAeokWX22qS0xzZ8rBrHowwOFmU3StqUCB1J_-/exec",
      {
        method: "POST",
        mode: "no-cors", // Bypass CORS - cannot use custom headers or read response
        redirect: "follow",
        body: JSON.stringify(googleSheetsData), // Send as JSON string
      }
    ).catch(() => {
      // Silently handle errors - data is already backed up
    })

    // Show success immediately - don't wait for API calls
    setStatus({
      loading: false,
      success: true,
      message: "",
    })

    // Clear all fields immediately
    setFormData({
      name: "",
      phone: "",
      email: "",
      country: "IN", // Reset to India
      state: "", // Clear state immediately
      city: "", // Clear city immediately
    })
    setErrors({})

    // Show success modal immediately
    setShowSuccessModal(true)
  }

  // Get selected values for react-select (null if empty)
  const selectedCountryOption = formData.country
    ? countryOptions.find((opt) => opt.value === formData.country)
    : null
  const selectedStateOption = formData.state
    ? stateOptions.find((opt) => opt.value === formData.state)
    : null
  const selectedCityOption = formData.city
    ? cityOptions.find((opt) => opt.value === formData.city)
    : null

  return (
    <section className="bg-white text-center md:py-12 py-5">
      <h2 className="text-4xl font-serif text-[#1b2950] mb-10">Enquire Now</h2>

      <div className="bg-[#41136b] text-white px-4 md:px-0 py-10 mx-auto">
        <div className="container mx-auto">
          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* 👤 Name */}
            <div className="text-left">
              <label className="font-semibold text-base monser-400">
                Name <span className="text-red-300">*</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full mt-2 monser-400 bg-white text-[#1b2950] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#A22977] ${
                  errors.name
                    ? "border-2 border-red-500"
                    : "border border-gray-300"
                }`}
              />
              {errors.name && (
                <p className="text-red-300 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* 📧 Email & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <label className="font-semibold text-base monser-400">
                  Email <span className="text-red-300">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full mt-2 monser-400 bg-white text-[#1b2950] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#A22977] ${
                    errors.email
                      ? "border-2 border-red-500"
                      : "border border-gray-300"
                  }`}
                />
                {errors.email && (
                  <p className="text-red-300 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="font-semibold text-base monser-400">
                  Phone <span className="text-red-300">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter 10-digit phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  maxLength={10}
                  inputMode="numeric"
                  pattern="[0-9]*"
                  className={`w-full mt-2 monser-400 bg-white text-[#1b2950] rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#A22977] ${
                    errors.phone
                      ? "border-2 border-red-500"
                      : "border border-gray-300"
                  }`}
                />
                {errors.phone && (
                  <p className="text-red-300 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* 🌍 Country, State, City */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {/* Country */}
              <div>
                <label className="font-semibold text-base monser-400">
                  Country <span className="text-red-300">*</span>
                </label>
                <div className="mt-2">
                  <Select
                    name="country"
                    value={selectedCountryOption}
                    onChange={handleSelectChange}
                    options={countryOptions}
                    placeholder="Search Country..."
                    isSearchable
                    isClearable
                    backspaceRemovesValue
                    styles={customSelectStyles}
                    classNamePrefix="react-select"
                  />
                </div>
                {errors.country && (
                  <p className="text-red-300 text-sm mt-1">{errors.country}</p>
                )}
              </div>

              {/* State */}
              <div>
                <label className="font-semibold text-base monser-400">
                  State <span className="text-red-300">*</span>
                </label>
                <div className="mt-2">
                  <Select
                    key={`state-${formData.state || "empty"}`}
                    name="state"
                    value={selectedStateOption}
                    onChange={handleSelectChange}
                    options={stateOptions}
                    placeholder={
                      formData.country
                        ? "Select State..."
                        : "Select Country first"
                    }
                    isDisabled={!formData.country}
                    isSearchable
                    isClearable
                    backspaceRemovesValue
                    styles={customSelectStyles}
                    classNamePrefix="react-select"
                  />
                </div>
                {errors.state && (
                  <p className="text-red-300 text-sm mt-1">{errors.state}</p>
                )}
              </div>

              {/* City */}
              <div>
                <label className="font-semibold text-base monser-400">
                  City <span className="text-red-300">*</span>
                </label>
                <div className="mt-2">
                  <Select
                    key={`city-${formData.city || "empty"}`}
                    name="city"
                    value={selectedCityOption}
                    onChange={handleSelectChange}
                    options={cityOptions}
                    placeholder={
                      formData.state ? "Select City..." : "Select State first"
                    }
                    isDisabled={!formData.state}
                    isSearchable
                    isClearable
                    backspaceRemovesValue
                    styles={customSelectStyles}
                    classNamePrefix="react-select"
                  />
                </div>
                {errors.city && (
                  <p className="text-red-300 text-sm mt-1">{errors.city}</p>
                )}
              </div>
            </div>

            {/* 🚀 Submit Button */}
            <div className="text-left">
              <button
                type="submit"
                className="group relative inline-flex items-center gap-2 w-fit px-6 py-2 text-lg font-medium transition-all duration-300 bg-[#A22977] text-white border-6 border-[#D8BFD8] rounded-[26.5px] hover:bg-[#ff6c01] hover:text-white"
              >
                Submit
                <div className="relative flex items-center">
                  <GoArrowDownRight className="w-5 h-5 text-current transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:rotate-12 group-hover:scale-75" />
                  <GoArrowUpRight className="w-5 h-5 text-current absolute top-0 left-0 transition-all duration-300 ease-in-out opacity-0 -rotate-12 scale-75 group-hover:opacity-100 group-hover:rotate-0 group-hover:scale-100" />
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      <Modal
        isOpen={showSuccessModal}
        onRequestClose={() => setShowSuccessModal(false)}
        contentLabel="Success Message"
        className="outline-none"
        overlayClassName="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 bg-opacity-8 0 backdrop-blur-sm"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          content: {
            position: "relative",
            inset: "auto",
            border: "none",
            background: "",
            padding: 0,
            maxWidth: "420px",
            width: "100%",
            outline: "none",
          },
        }}
      >
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 text-center mx-auto">
          {/* Success Icon */}
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
            <svg
              className="h-10 w-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          {/* Message */}
          <h5 className="text-2xl font-semibold text-[#1b2950] mb-3 playfair-400">
            We've received your enquiry.
          </h5>
          <p className="text-sm md:text-base text-gray-600 mb-5 monser-400 leading-relaxed">
            Our team will contact you soon to guide you through the next steps.
          </p>

          {/* Close Button */}
          <button
            onClick={() => setShowSuccessModal(false)}
            className="w-full bg-[#A22977] text-white py-2.5 px-6 rounded-lg text-sm md:text-base font-medium hover:bg-[#8a2266] transition-all duration-300 monser-400 shadow-md hover:shadow-lg"
          >
            Close
          </button>
        </div>
      </Modal>
    </section>
  )
}

export default ContactForm
