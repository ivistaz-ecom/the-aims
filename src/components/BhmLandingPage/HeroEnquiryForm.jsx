"use client"

import React, { useMemo, useState } from "react"
import Select, { components as selectComponents } from "react-select"
import CountryListWithDialCode from "country-list-with-dial-code-and-flag"
import { Country, State, City } from "country-state-city"

// Salesforce API Endpoint
const SALESFORCE_API_ENDPOINT =
  "https://aims-api-prod.ken42.com/v1/lead/post/bulkUpload"

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  country: "IN",
  state: "",
  city: "",
}

const customSelectStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "#ffffff",
    borderColor: state.isFocused ? "#A22977" : "#d5d8e0",
    borderRadius: 0,
    boxShadow: state.isFocused ? "0 0 0 1px #A22977" : "none",
    minHeight: "44px",
    fontSize: "14px",
    fontFamily: "var(--font-montserrat), ui-sans-serif, system-ui, sans-serif",
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
    fontSize: "14px",
    fontFamily: "var(--font-montserrat), ui-sans-serif, system-ui, sans-serif",
  }),
  singleValue: (base) => ({
    ...base,
    color: "#1b2950",
    fontSize: "14px",
    fontFamily: "var(--font-montserrat), ui-sans-serif, system-ui, sans-serif",
  }),
  placeholder: (base) => ({
    ...base,
    color: "#9ca3af",
    fontSize: "14px",
    fontFamily: "var(--font-montserrat), ui-sans-serif, system-ui, sans-serif",
  }),
  menu: (base) => ({
    ...base,
    borderRadius: 0,
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
    zIndex: 30,
    marginTop: 4,
    overflow: "hidden",
  }),
  menuList: (base) => ({
    ...base,
    padding: "4px 0",
  }),
}

const HeroEnquiryForm = ({ includeId = true }) => {
  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({ success: false })

  const countries = useMemo(() => Country.getAllCountries(), [])
  const states = useMemo(() => {
    if (!formData.country) return []
    return State.getStatesOfCountry(formData.country)
  }, [formData.country])
  const cities = useMemo(() => {
    if (!formData.country || !formData.state) return []
    return City.getCitiesOfState(formData.country, formData.state)
  }, [formData.country, formData.state])

  const countryOptions = useMemo(
    () =>
      countries.map((country) => ({
        value: country.isoCode,
        label: country.name,
      })),
    [countries]
  )

  const stateOptions = useMemo(
    () =>
      states.map((state) => ({
        value: state.isoCode,
        label: state.name,
      })),
    [states]
  )

  const cityOptions = useMemo(
    () =>
      cities.map((city) => ({
        value: city.name,
        label: city.name,
      })),
    [cities]
  )

  const phoneLengthByCountry = {
    IN: 10,
    US: 10,
    CA: 10,
    GB: 10,
    AE: 9,
    SG: 8,
    AU: 9,
    SA: 9,
    DE: 11,
    FR: 9,
    NZ: 9,
  }

  const dialCodeOptions = useMemo(
    () =>
      CountryListWithDialCode.getAll({ withSecondary: false }).map(
        (country) => ({
          value: country.code,
          label: country.dialCode,
          dialCode: country.dialCode,
          flag: country.flag,
          phoneLength: phoneLengthByCountry[country.code] || 15,
        })
      ),
    []
  )

  const defaultPhoneCountry = useMemo(() => {
    return (
      dialCodeOptions.find((option) => option.value === "IN") ||
      dialCodeOptions[0] ||
      null
    )
  }, [dialCodeOptions])

  const [phoneCountry, setPhoneCountry] = useState(defaultPhoneCountry)
  const phoneMaxLength = useMemo(() => {
    return (
      phoneCountry?.phoneLength || phoneLengthByCountry[formData.country] || 10
    )
  }, [phoneCountry, formData.country])
  const phonePlaceholder = phoneCountry?.phoneLength
    ? `Enter ${phoneCountry.phoneLength}-digit number`
    : "Enter mobile number"

  const DialCodeSingleValue = (props) => (
    <selectComponents.SingleValue {...props}>
      <div className="flex items-center gap-2 text-sm">
        <span>{props.data.flag}</span>
        <span className="text-[#1b2950]">{props.data.dialCode}</span>
      </div>
    </selectComponents.SingleValue>
  )

  const handleInputChange = (event) => {
    const { name, value } = event.target

    if (name === "phone") {
      const numericValue = value.replace(/[^0-9]/g, "").slice(0, phoneMaxLength)
      setFormData((prev) => ({ ...prev, phone: numericValue }))
      setErrors((prev) => ({ ...prev, phone: "" }))
      return
    }

    if (name === "country") {
      setFormData((prev) => ({ ...prev, country: value, state: "", city: "" }))
      setErrors((prev) => ({ ...prev, country: "", state: "", city: "" }))
      return
    }

    if (name === "state") {
      setFormData((prev) => ({ ...prev, state: value, city: "" }))
      setErrors((prev) => ({ ...prev, state: "", city: "" }))
      return
    }

    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: "" }))
  }

  const handleSelectChange = (selectedOption, actionMeta) => {
    const { name } = actionMeta

    if (name === "country") {
      setFormData((prev) => ({
        ...prev,
        country: selectedOption?.value || "",
        state: "",
        city: "",
      }))
      setErrors((prev) => ({ ...prev, country: "", state: "", city: "" }))
      return
    }

    if (name === "state") {
      setFormData((prev) => ({
        ...prev,
        state: selectedOption?.value || "",
        city: "",
      }))
      setErrors((prev) => ({ ...prev, state: "", city: "" }))
      return
    }

    if (name === "city") {
      setFormData((prev) => ({ ...prev, city: selectedOption?.value || "" }))
      setErrors((prev) => ({ ...prev, city: "" }))
    }
  }

  const handleDialCodeChange = (selectedOption) => {
    const nextLength =
      selectedOption?.phoneLength ||
      phoneLengthByCountry[formData.country] ||
      10
    setPhoneCountry(selectedOption)
    setFormData((prev) => ({
      ...prev,
      phone: prev.phone.slice(0, nextLength),
    }))
    setErrors((prev) => ({ ...prev, phone: "" }))
  }

  const validateForm = () => {
    const validationErrors = {}

    if (!formData.name.trim()) validationErrors.name = "Name is required"
    if (!formData.email.trim()) {
      validationErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      validationErrors.email = "Enter a valid email"
    }

    const maxDigits = phoneMaxLength
    if (!formData.phone.trim()) {
      validationErrors.phone = "Mobile number is required"
    } else if (phoneCountry?.phoneLength) {
      if (!new RegExp(`^\\d{${maxDigits}}$`).test(formData.phone)) {
        validationErrors.phone = `Enter a valid ${maxDigits}-digit number`
      }
    } else if (!/^\d{6,15}$/.test(formData.phone)) {
      validationErrors.phone = "Enter a valid phone number"
    }

    if (!formData.country) validationErrors.country = "Select a country"
    if (!formData.state) validationErrors.state = "Select a state"
    if (!formData.city) validationErrors.city = "Select a city"

    return validationErrors
  }

  const resetForm = () => {
    setFormData(initialFormData)
    setErrors({})
    setStatus({ success: true })
    setPhoneCountry(defaultPhoneCountry)
    setTimeout(() => setStatus({ success: false }), 8000)
  }

  // const saveToWordPress = async (data) => {
  //   try {
  //     const form = new FormData()
  //     form.append("name", data.name)
  //     form.append("email", data.email)
  //     form.append("phone", data.phone)
  //     form.append("country", data.country)
  //     form.append("state", data.state)
  //     form.append("city", data.city)

  //     form.append("_wpcf7", "886")
  //     form.append("_wpcf7_version", "5.7.7")
  //     form.append("_wpcf7_locale", "en_US")
  //     form.append("_wpcf7_unit_tag", "wpcf7-f886-p" + Date.now())
  //     form.append("_wpcf7_container_post", "0")

  //     await fetch(
  //       "https://docs.theaims.ac.in/wp-json/contact-form-7/v1/contact-forms/886/feedback",
  //       {
  //         method: "POST",
  //         body: form,
  //       }
  //     )
  //   } catch (error) {
  //     // Silent fail - same behaviour as existing form
  //   }
  // }

  // Send to Salesforce using API POST request
  const sendToSalesforce = (data, phoneDisplay) => {
    try {
      // Use full name as FirstName and "." as LastName
      const firstName = (data.name || "").trim()
      const lastName = "."

      // Format phone number (remove spaces and ensure proper format)
      const formatPhone = (phone) => {
        if (!phone) return ""
        // Remove all spaces and ensure it starts with +
        const cleaned = phone.replace(/\s+/g, "").trim()
        return cleaned.startsWith("+") ? cleaned : `+${cleaned}`
      }

      // API expects an array of lead objects
      const payload = [
        {
          FirstName: firstName,
          LastName: lastName,
          Email: data.email || "",
          Phone: formatPhone(phoneDisplay || ""),
          Interested_Course__c: "Bachelor of Hotel Management (BHM)",
          LeadSource: "BHM Landing Page",
          Level__c: "Primary",
          Country__c: data.country || "",
          State__c: data.state || "",
          City__c: data.city || "",
          Month__c: "January",
          Campaign__c: "Test",
          Remarks__c: "test",
          UTM_Touchpoint__c: "test",
        },
      ]

      return fetch(SALESFORCE_API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then(async (response) => {
          const responseData = await response.json().catch(() => ({}))
          if (response.ok) {
            return { success: true, service: "Salesforce" }
          }
          return { success: false, service: "Salesforce" }
        })
        .catch(() => {
          return { success: false, service: "Salesforce" }
        })
    } catch (error) {
      return Promise.resolve({ success: false, service: "Salesforce" })
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const validationErrors = validateForm()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    const phoneDisplay = `${phoneCountry?.dialCode || ""} ${
      formData.phone
    }`.trim()
    const sheetPhone = phoneDisplay ? `'${phoneDisplay}` : ""

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: phoneDisplay,
      country:
        countries.find((country) => country.isoCode === formData.country)
          ?.name || formData.country,
      state:
        states.find((state) => state.isoCode === formData.state)?.name ||
        formData.state,
      city: formData.city,
      sheetName: "BHM Enquiries",
    }

    // Send to Salesforce
    sendToSalesforce(payload, phoneDisplay)

    // saveToWordPress(payload)

    const sheetsPayload = { ...payload, phone: sheetPhone }

    fetch(
      "https://script.google.com/macros/s/AKfycbxDhi4AcFcPtjdO8ss3TAI0Eda0YIPc6xBbMyIMNYGvTP0ksZrjUlcNfKygjtWchbzA/exec",
      {
        method: "POST",
        mode: "no-cors",
        redirect: "follow",
        body: JSON.stringify(sheetsPayload),
      }
    ).catch(() => {
      // Silent error handling
    })

    resetForm()
  }

  return (
    <div
      {...(includeId ? { id: "hero-enquiry-form" } : {})}
      className="w-full rounded-2xl border border-gray-200 bg-white/95 p-6 text-[#1b2950] shadow-xl backdrop-blur-md sm:p-7 lg:w-[550px] lg:max-h-[80vh] lg:overflow-y-auto"
    >
      <div className="mb-4 text-center">
        <h5 className="text-4xl playfair-500 text-[#1b2950]">Enquire Now</h5>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="md:col-span-2">
            <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#667085]">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`mt-2 w-full border border-[#d5d8e0] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#A22977] ${
                errors.name ? "border-red-500" : ""
              }`}
            />
            {errors.name && (
              <p
                className="mt-1 leading-tight text-red-500 font-medium"
                style={{ fontSize: "10px" }}
              >
                {errors.name}
              </p>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#667085]">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`mt-2 w-full border border-[#d5d8e0] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#A22977] ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p
                className="mt-1 leading-tight text-red-500 font-medium"
                style={{ fontSize: "10px" }}
              >
                {errors.email}
              </p>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#667085]">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <div className="mt-2 grid grid-cols-[110px_1fr] gap-3 md:grid-cols-[140px_1fr]">
              <Select
                name="dialCode"
                options={dialCodeOptions}
                value={phoneCountry}
                onChange={handleDialCodeChange}
                styles={customSelectStyles}
                classNamePrefix="dial-code"
                isSearchable
                menuPortalTarget={
                  typeof document !== "undefined" ? document.body : undefined
                }
                menuPosition="fixed"
                components={{ SingleValue: DialCodeSingleValue }}
                formatOptionLabel={(option) => (
                  <div className="flex items-center gap-2 text-sm">
                    <span>{option.flag}</span>
                    <span className="text-[#1b2950] font-medium">
                      {option.dialCode}
                    </span>
                  </div>
                )}
              />
              <input
                type="tel"
                name="phone"
                placeholder={phonePlaceholder}
                value={formData.phone}
                onChange={handleInputChange}
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={phoneMaxLength}
                className={`w-full border border-[#d5d8e0] px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#A22977] ${
                  errors.phone ? "border-red-500" : ""
                }`}
              />
            </div>
            {errors.phone && (
              <p
                className="mt-1 leading-tight text-red-500 font-medium"
                style={{ fontSize: "10px" }}
              >
                {errors.phone}
              </p>
            )}
          </div>

          <div className="md:col-span-2">
            <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#667085]">
              Country <span className="text-red-500">*</span>
            </label>
            <Select
              name="country"
              value={
                formData.country
                  ? countryOptions.find(
                      (option) => option.value === formData.country
                    )
                  : null
              }
              onChange={handleSelectChange}
              options={countryOptions}
              placeholder="Select Country"
              styles={customSelectStyles}
              classNamePrefix="form-select"
              isSearchable
              menuPortalTarget={
                typeof document !== "undefined" ? document.body : undefined
              }
              menuPosition="fixed"
              menuPlacement="top"
            />
            {errors.country && (
              <p
                className="mt-1 leading-tight text-red-500 font-medium"
                style={{ fontSize: "10px" }}
              >
                {errors.country}
              </p>
            )}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#667085]">
              State <span className="text-red-500">*</span>
            </label>
            <Select
              key={`state-${formData.state || "empty"}`}
              name="state"
              value={
                formData.state
                  ? stateOptions.find(
                      (option) => option.value === formData.state
                    )
                  : null
              }
              onChange={handleSelectChange}
              options={stateOptions}
              placeholder={
                formData.country ? "Select State" : "Select Country first"
              }
              styles={customSelectStyles}
              classNamePrefix="form-select"
              isSearchable
              isDisabled={!formData.country}
              menuPortalTarget={
                typeof document !== "undefined" ? document.body : undefined
              }
              menuPosition="fixed"
              menuPlacement="top"
            />
            {errors.state && (
              <p
                className="mt-1 leading-tight text-red-500 font-medium"
                style={{ fontSize: "10px" }}
              >
                {errors.state}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-[0.18em] text-[#667085]">
              City <span className="text-red-500">*</span>
            </label>
            <Select
              key={`city-${formData.city || "empty"}`}
              name="city"
              value={
                formData.city
                  ? cityOptions.find((option) => option.value === formData.city)
                  : null
              }
              onChange={handleSelectChange}
              options={cityOptions}
              placeholder={
                formData.state ? "Select City" : "Select State first"
              }
              styles={customSelectStyles}
              classNamePrefix="form-select"
              isSearchable
              isDisabled={!formData.state}
              menuPortalTarget={
                typeof document !== "undefined" ? document.body : undefined
              }
              menuPosition="fixed"
              menuPlacement="top"
            />
            {errors.city && (
              <p
                className="mt-1 leading-tight text-red-500 font-medium"
                style={{ fontSize: "10px" }}
              >
                {errors.city}
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#A22977] py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#ff6c01]"
        >
          Submit
        </button>

        {status.success && (
          <p className="text-center text-sm font-medium text-green-600">
            ✓ We've received your enquiry. Our team will contact you soon!
          </p>
        )}
      </form>
    </div>
  )
}

export default HeroEnquiryForm
