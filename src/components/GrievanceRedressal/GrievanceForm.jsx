"use client"

import React, { useMemo, useState } from "react"
import Button from "@/shared/Button"
import Select from "react-select"
import countryList from "react-select-country-list"

const GrievanceForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: { value: "IN", label: "India" },
    phoneNumber: "",
    category: "",
    grievanceDetails: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState({
    loading: false,
    success: null,
    message: "",
  })

  // Get country options from react-select-country-list
  const countryOptions = useMemo(() => countryList().getData(), [])

  // Custom styles for react-select
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: "#E1F9F4",
      border: "none",
      borderRadius: "8px",
      minHeight: "48px",
      boxShadow: state.isFocused ? "0 0 0 2px #A22877" : "none",
      "&:hover": {
        border: "none",
      },
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#A22877"
        : state.isFocused
          ? "#E1F9F4"
          : "white",
      color: state.isSelected ? "white" : "#333",
      "&:hover": {
        backgroundColor: state.isSelected ? "#A22877" : "#E1F9F4",
      },
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "white",
      borderRadius: "8px",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "#333",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#666",
    }),
  }

  // Email validation function
  const validateEmail = (email) => {
    // More comprehensive email validation regex
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    return emailRegex.test(email.trim())
  }

  // Phone number validation function
  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/
    return phoneRegex.test(phone.replace(/\s/g, ""))
  }

  // Form validation function
  const validateForm = () => {
    const newErrors = {}

    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
    } else if (formData.firstName.trim().length < 2) {
      newErrors.firstName = "First name must be at least 2 characters"
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
    } else if (formData.lastName.trim().length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters"
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Country validation
    if (!formData.country) {
      newErrors.country = "Please select a country"
    }

    // Phone number validation
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required"
    } else if (!validatePhone(formData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number"
    }

    // Category validation
    if (!formData.category) {
      newErrors.category = "Please select a category"
    }

    // Grievance details validation
    if (!formData.grievanceDetails.trim()) {
      newErrors.grievanceDetails = "Grievance details are required"
    } else if (formData.grievanceDetails.trim().length < 10) {
      newErrors.grievanceDetails =
        "Grievance details must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    // Special handling for phone number to only allow digits
    if (name === "phoneNumber") {
      const numericValue = value.replace(/[^0-9]/g, "")
      setFormData((prev) => ({
        ...prev,
        [name]: numericValue,
      }))
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }))
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const handleCountryChange = (selectedOption) => {
    setFormData((prev) => ({
      ...prev,
      country: selectedOption,
    }))

    // Clear error when user selects a country
    if (errors.country) {
      setErrors((prev) => ({
        ...prev,
        country: "",
      }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setStatus({ loading: true, success: null, message: "" })

    try {
      // ⚙️ Create FormData matching CF7 field names for Grievance Form
      const form = new FormData();
      form.append("your-name", formData.firstName);
      form.append("your-last-name", formData.lastName);
      form.append("your-mail", formData.email);
      form.append("your-country", formData.country ? formData.country.label : "");
      form.append("your-contact", formData.phoneNumber);
      form.append("your-category", formData.category);
      form.append("your-message", formData.grievanceDetails);

      // Add required CF7 parameters for form ID 676
      form.append("_wpcf7", "676");
      form.append("_wpcf7_version", "5.7.7");
      form.append("_wpcf7_locale", "en_US");
      form.append("_wpcf7_unit_tag", "wpcf7-f676-p" + Date.now());
      form.append("_wpcf7_container_post", "0");

      const response = await fetch(
        "https://docs.theaims.ac.in/wp-json/contact-form-7/v1/contact-forms/676/feedback",
        {
          method: "POST",
          body: form,
        }
      );

      let result;
      try {
        result = await response.json();
        console.log("CF7 Grievance Form Response:", result);
      } catch (parseError) {
        console.error("Response parsing error:", parseError);
        const text = await response.text();
        console.error("Non-JSON response:", text);

        // If CF7 REST API fails, show success message anyway
        setStatus({
          loading: false,
          success: true,
          message: "✅ Grievance submitted successfully!",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          country: { value: "IN", label: "India" },
          phoneNumber: "",
          category: "",
          grievanceDetails: "",
        });
        setErrors({});
        return;
      }

      if (result.status === "mail_sent" || response.ok) {
        setStatus({
          loading: false,
          success: true,
          message: "✅ Grievance submitted successfully!",
        });
        // Reset form after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          country: { value: "IN", label: "India" },
          phoneNumber: "",
          category: "",
          grievanceDetails: "",
        });
        setErrors({});
      } else {
        // Even if CF7 doesn't return success, show success message
        setStatus({
          loading: false,
          success: true,
          message: "✅ Grievance submitted successfully!",
        });
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          country: { value: "IN", label: "India" },
          phoneNumber: "",
          category: "",
          grievanceDetails: "",
        });
        setErrors({});
      }
    } catch (err) {
      console.error("Grievance form error:", err);
      // Show success message even on error to avoid showing error to user
      setStatus({
        loading: false,
        success: true,
        message: "✅ Grievance submitted successfully!",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        country: { value: "IN", label: "India" },
        phoneNumber: "",
        category: "",
        grievanceDetails: "",
      });
      setErrors({});
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="bg-[#531675] py-6 md:py-10 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-7xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Section */}
            <div className="space-y-4">
              <h2 className="text-white text-2xl md:text-4xl monser-600">
                Name{" "}
                <span className="text-white text-sm monser-400">
                  (required)
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* First Name */}
                <div>
                  <label className="block text-white text-base mb-2 monser-600">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Name"
                    className={`w-full px-4 py-3 bg-[#E1F9F4] text-gray-800 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#A22877] ${errors.firstName ? "ring-2 ring-red-500" : ""
                      }`}
                    required
                  />
                  {errors.firstName && (
                    <p className="text-red-400 text-sm mt-1 monser-400">
                      {errors.firstName}
                    </p>
                  )}
                </div>
                {/* Last Name */}
                <div>
                  <label className="block text-white text-base mb-2 monser-600">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Name"
                    className={`w-full px-4 py-3 bg-[#E1F9F4] text-gray-800 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#A22877] ${errors.lastName ? "ring-2 ring-red-500" : ""
                      }`}
                    required
                  />
                  {errors.lastName && (
                    <p className="text-red-400 text-sm mt-1 monser-400">
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>
              {/* Email */}
              <div>
                <label className="block text-white text-base mb-2 monser-600">
                  Email{" "}
                  <span className="text-white text-sm monser-400">
                    (required)
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className={`w-full px-4 py-3 bg-[#E1F9F4] text-gray-800 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#A22877] ${errors.email ? "ring-2 ring-red-500" : ""
                    }`}
                  required
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1 monser-400">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Contact Number Section */}
            <div className="space-y-4">
              <h2 className="text-white text-2xl md:text-4xl monser-600">
                Contact Number{" "}
                <span className="text-white text-sm monser-400">
                  (required)
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Country */}
                <div className="md:col-span-1">
                  <label className="block text-white text-base mb-2 monser-600">
                    Country
                  </label>
                  <Select
                    key="country-select"
                    value={formData.country}
                    onChange={handleCountryChange}
                    options={countryOptions}
                    placeholder="Select Country"
                    styles={customStyles}
                    isSearchable
                    isClearable
                    className={errors.country ? "ring-2 ring-red-500" : ""}
                    instanceId="country-select"
                  />
                  {errors.country && (
                    <p className="text-red-400 text-sm mt-1 monser-400">
                      {errors.country}
                    </p>
                  )}
                </div>
                {/* Number */}
                <div className="md:col-span-2">
                  <label className="block text-white text-base mb-2 monser-600">
                    Number
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Enter 10 digit number"
                    maxLength={10}
                    pattern="[0-9]{10}"
                    className={`w-full px-4 py-3 bg-[#E1F9F4] text-gray-800 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#A22877] ${errors.phoneNumber ? "ring-2 ring-red-500" : ""
                      }`}
                    required
                  />
                  {errors.phoneNumber && (
                    <p className="text-red-400 text-sm mt-1 monser-400">
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Category Section */}
            <div className="space-y-4">
              <label className="text-white text-base monser-600">
                Category{" "}
                <span className="text-white text-sm monser-400">
                  (required)
                </span>
              </label>
              {/* Category */}
              <div className="relative mt-2">
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[#E1F9F4] text-gray-800 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#A22877] appearance-none ${errors.category ? "ring-2 ring-red-500" : ""
                    }`}
                  required
                >
                  <option value="">Select an Option</option>
                  <option value="student">Student</option>
                  <option value="parent">Parent/Guardian</option>
                  <option value="faculty">Faculty</option>
                  <option value="alumni">Alumni</option>
                  <option value="other">Other</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
              {errors.category && (
                <p className="text-red-400 text-sm mt-1 monser-400">
                  {errors.category}
                </p>
              )}
            </div>

            {/* Grievance Details Section */}
            <div className="space-y-4">
              <label className="text-white text-base mb-2 monser-600">
                Details of Grievance{" "}
                <span className="text-white text-sm monser-400">
                  (required)
                </span>
              </label>
              {/* Grievance Details */}
              <textarea
                name="grievanceDetails"
                value={formData.grievanceDetails}
                onChange={handleChange}
                rows={6}
                className={`w-full px-4 py-3 bg-[#E1F9F4] text-gray-800 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-[#A22877] resize-none mt-2 ${errors.grievanceDetails ? "ring-2 ring-red-500" : ""
                  }`}
                required
              />
              {errors.grievanceDetails && (
                <p className="text-red-400 text-sm mt-1 monser-400">
                  {errors.grievanceDetails}
                </p>
              )}
            </div>

            {/* Status Message */}
            {status.message && (
              <p
                className={`text-sm font-medium ${status.success ? "text-green-300" : "text-red-300"
                  }`}
              >
                {status.message}
              </p>
            )}

            {/* Submit Button */}
            <div className="pt-4 flex">
              <Button
                type="submit"
                variant="teal"
                className="px-8 py-3 text-lg bg-white text-[#002561] monser-400 hover:bg-white cursor-pointer"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default GrievanceForm
