"use client"
import React, { useState, useMemo } from "react"
import Select, { components as selectComponents } from "react-select"
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go"
import CountryListWithDialCode from "country-list-with-dial-code-and-flag"
import { Country, State, City } from "country-state-city"

const GOOGLE_SHEETS_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbxZjpAYfBBA9pAHzLlZKjjJTwntxAjnzIt5OD2nTlBwX8uKl3aTWn9jUl6LzmQd_5Yq/exec"

// Salesforce API Endpoint
const SALESFORCE_API_ENDPOINT =
  "https://aims-api-prod.ken42.com/v1/lead/post/bulkUpload"

const levelOfStudyOptions = [
  { value: "PHD", label: "PHD" },
  { value: "PG", label: "PG" },
  { value: "UG", label: "UG" },
  { value: "DIPLOMA", label: "Diploma" }, // Match Salesforce value exactly
  { value: "PUC", label: "PUC" },
  { value: "VOCATIONAL PROGRAMS", label: "Vocational Programs" }, // Match Salesforce value exactly
]

const courseOptionsByLevel = {
  PHD: [
    { value: "Phd in Management", label: "Ph.D in Management" }, // Match Salesforce value
    { value: "Phd in Commerce", label: "Ph.D in Commerce" }, // Match Salesforce value
  ],
  PG: [
    {
      value: "Master in Business Administration (MBA)",
      label: "Master of Business Administration (MBA)",
    }, // Match Salesforce value - "in" not "of"
    {
      value: "Master of Commerce (MCOM)",
      label: "Master of Commerce (MCOM)",
    }, // Match Salesforce value
    {
      value: "Post Graduate Diploma in Management (PGDM)",
      label: "Post Graduate Diploma in Management (PGDM)",
    },
    {
      value: "Master of Computer Applications (MCA)",
      label: "Master of Computer Application (MCA)",
    }, // Match Salesforce value - "Applications" (plural)
  ],
  UG: [
    {
      value: "Bachelor of Business Administration (BBA)",
      label: "Bachelor of Business Administration (BBA)",
    },
    {
      value:
        "Bachelor of Business Administration in Aviation Management (BBA Aviation)",
      label:
        "Bachelor of Business Administration in Aviation Management (BBA Aviation)",
    },
    {
      value: "Bachelor of Commerce (BCOM)",
      label: "Bachelor of Commerce (BCOM)",
    },
    {
      value: "Bachelor of Hotel Management (BHM)",
      label: "Bachelor of Hotel Management (BHM)",
    },
    {
      value: "Bachelor of Computer Application (BCA)",
      label: "Bachelor of Computer Application (BCA)",
    },
  ],
  DIPLOMA: [
    // Match Salesforce value (uppercase)
    {
      value:
        "Swiss International Culinary Professional Diploma (CII-VET by EHL)",
      label:
        "Swiss International Culinary Professional Diploma (CII-VET by EHL)",
    },
    {
      value:
        "Swiss International Food & Beverage Service Professional Diploma (CII-VET by EHL)",
      label:
        "Swiss International Food & Beverage Service Professional Diploma (CII-VET by EHL)",
    },
    {
      value: "Swiss International Rooms Professional Diploma (CII-VET by EHL)",
      label: "Swiss International Rooms Professional Diploma (CII-VET by EHL)",
    },
  ],
  PUC: [
    { value: "CEBA", label: "CEBA" },
    { value: "PCMB", label: "PCMB" },
    { value: "PCMC", label: "PCMC" },
  ],
  "VOCATIONAL PROGRAMS": [
    // Match Salesforce value (uppercase)
    {
      value: "CHAI POINT",
      label: "Chai Point",
    }, // Match Salesforce value (uppercase)
  ],
}

const academicYearOptions = [
  { value: "2025-2026", label: "2025-2026" },
  { value: "2026-2027", label: "2026-2027" },
]

const customSelectStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "#e1f4f1",
    borderColor: state.hasError
      ? "#f87171"
      : state.isFocused
      ? "#A22977"
      : "transparent",
    borderWidth: "2px",
    borderRadius: "0.375rem",
    boxShadow: "none",
    minHeight: "48px",
    "&:hover": {
      borderColor: state.hasError ? "#f87171" : "#A22977",
    },
  }),
  placeholder: (base) => ({
    ...base,
    color: "#6b7280",
  }),
  singleValue: (base) => ({
    ...base,
    color: "#1b2950",
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? "#A22977"
      : state.isFocused
      ? "#E6D9F2"
      : "white",
    color: state.isSelected ? "#ffffff" : "#1b2950",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: state.isSelected ? "#A22977" : "#E6D9F2",
    },
  }),
  menu: (base) => ({
    ...base,
    zIndex: 30,
  }),
}

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

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    levelOfStudy: "",
    course: "",
    country: "IN",
    state: "",
    city: "",
    academicYear: "",
  })

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

  const courseOptions = useMemo(() => {
    if (!formData.levelOfStudy) return []
    return courseOptionsByLevel[formData.levelOfStudy] || []
  }, [formData.levelOfStudy])

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

  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState({
    loading: false,
    success: null,
    message: "",
  })

  const sendToGoogleSheets = (payload) => {
    return fetch(GOOGLE_SHEETS_ENDPOINT, {
      method: "POST",
      mode: "no-cors",
      redirect: "follow",
      body: JSON.stringify(payload),
    })
      .then(() => ({ success: true, service: "Google Sheets" }))
      .catch(() => ({ success: false, service: "Google Sheets" }))
  }

  // Send to Salesforce using API POST request
  const sendToSalesforce = (formData, payload) => {
    try {
      // Format phone number (remove spaces and ensure proper format)
      const formatPhone = (phone) => {
        if (!phone) return ""
        // Remove all spaces and ensure it starts with +
        const cleaned = phone.replace(/\s+/g, "").trim()
        // If it already starts with +, return as is, otherwise add +
        return cleaned.startsWith("+") ? cleaned : `+${cleaned}`
      }

      // API expects an array of lead objects
      const apiPayload = [
        {
          FirstName: formData.firstName || "",
          LastName: formData.lastName || "",
          Email: formData.email || "",
          Phone: formatPhone(payload.phone || ""),
          Month__c: "January",
          Interested_Level_of_Study__c: formData.levelOfStudy || "",
          Interested_Course__c: formData.course || "",
          Country__c: payload.country || "",
          State__c: payload.state || "",
          City__c: formData.city || "",
          Academic_Year__c: formData.academicYear || "",
          LeadSource: "Website Enquiry",
          UTM_Touchpoint__c: "test",
          Level__c: "Primary",
          Campaign__c: "Test",
          Remarks__c: "test",
        },
      ]
      return fetch(SALESFORCE_API_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(apiPayload),
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

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target

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

    if (name === "levelOfStudy") {
      setFormData((prev) => ({
        ...prev,
        levelOfStudy: selectedOption?.value || "",
        course: "", // Reset course when level changes
      }))
      setErrors((prev) => ({ ...prev, levelOfStudy: "", course: "" }))
      return
    }

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
      return
    }

    if (name === "course") {
      setFormData((prev) => ({ ...prev, course: selectedOption?.value || "" }))
      setErrors((prev) => ({ ...prev, course: "" }))
      return
    }

    if (name === "academicYear") {
      setFormData((prev) => ({
        ...prev,
        academicYear: selectedOption?.value || "",
      }))
      setErrors((prev) => ({ ...prev, academicYear: "" }))
      return
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

  // Validate required fields
  const validateForm = () => {
    const newErrors = {}
    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email"
    }

    const maxDigits = phoneMaxLength
    if (!formData.phone.trim()) {
      newErrors.phone = "Mobile number is required"
    } else if (phoneCountry?.phoneLength) {
      if (!new RegExp(`^\\d{${maxDigits}}$`).test(formData.phone)) {
        newErrors.phone = `Enter a valid ${maxDigits}-digit number`
      }
    } else if (!/^\d{6,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number"
    }

    if (!formData.levelOfStudy.trim())
      newErrors.levelOfStudy = "Level of Study is required"
    if (!formData.course.trim()) newErrors.course = "Course is required"
    if (!formData.country) newErrors.country = "Country is required"
    if (!formData.state) newErrors.state = "State is required"
    if (!formData.city) newErrors.city = "City is required"
    if (!formData.academicYear)
      newErrors.academicYear = "Academic Year is required"

    return newErrors
  }

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault()

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
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: phoneDisplay,
      levelOfStudy: formData.levelOfStudy,
      course: formData.course,
      country:
        countries.find((country) => country.isoCode === formData.country)
          ?.name || formData.country,
      state:
        states.find((state) => state.isoCode === formData.state)?.name ||
        formData.state,
      city: formData.city,
      academicYear: formData.academicYear,
      sheetName: "Enquire Now",
    }

    setStatus({ loading: true, success: null, message: "" })

    // Send to WordPress (optional, fire-and-forget)
    // const form = new FormData()
    // form.append("your-first-name", formData.firstName)
    // form.append("your-last-name", formData.lastName)
    // form.append("your-email", formData.email)
    // form.append("your-phone", phoneDisplay)
    // form.append("your-level-of-study", formData.levelOfStudy)
    // form.append("your-course", formData.course)
    // form.append("your-country", payload.country)
    // form.append("your-state", payload.state)
    // form.append("your-city", formData.city)
    // form.append("your-academic-year", formData.academicYear)
    // form.append("_wpcf7", "675")
    // form.append("_wpcf7_version", "5.7.7")
    // form.append("_wpcf7_locale", "en_US")
    // form.append("_wpcf7_unit_tag", "wpcf7-f675-p" + Date.now())
    // form.append("_wpcf7_container_post", "0")

    // fetch(
    //   "https://docs.theaims.ac.in/wp-json/contact-form-7/v1/contact-forms/761/feedback",
    //   {
    //     method: "POST",
    //     body: form,
    //   }
    // ).catch(() => {
    //   // Silent error handling - WordPress is optional
    // })

    // Send to critical services and track results
    Promise.all([
      sendToGoogleSheets({ ...payload, phone: sheetPhone }),
      sendToSalesforce(formData, payload),
    ])
      .then((results) => {
        const googleSheetsResult = results[0]
        const salesforceResult = results[1]

        // Check if at least one critical service succeeded
        const criticalServicesSucceeded =
          googleSheetsResult.success || salesforceResult.success

        if (criticalServicesSucceeded) {
          // Success - at least one service worked
          setStatus({
            loading: false,
            success: true,
            message: "Thank you! Your message has been sent successfully.",
          })

          // Reset form only on success
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            levelOfStudy: "",
            course: "",
            country: "IN",
            state: "",
            city: "",
            academicYear: "",
          })
          setPhoneCountry(defaultPhoneCountry)
          setErrors({})

          // Clear success message after 5 seconds
          setTimeout(() => {
            setStatus({
              loading: false,
              success: null,
              message: "",
            })
          }, 5000)
        } else {
          // Both critical services failed
          setStatus({
            loading: false,
            success: false,
            message:
              "We're experiencing technical difficulties. Please try again later or contact us directly.",
          })

          // Clear error message after 5 seconds
          setTimeout(() => {
            setStatus({
              loading: false,
              success: null,
              message: "",
            })
          }, 5000)
        }
      })
      .catch(() => {
        // Error handling
        setStatus({
          loading: false,
          success: false,
          message:
            "We're experiencing technical difficulties. Please try again later or contact us directly.",
        })

        // Clear error message after 5 seconds
        setTimeout(() => {
          setStatus({
            loading: false,
            success: null,
            message: "",
          })
        }, 5000)
      })
  }

  return (
    <section className="bg-white text-center md:py-12 py-5">
      <h2 className="text-4xl font-serif text-[#1b2950] mb-10">Enquire Now</h2>

      <div className="bg-[#41136b] text-white px-4 md:px-0 py-10 mx-auto">
        <div className="container mx-auto">
          <form className="space-y-8" onSubmit={handleSubmit}>
            {/* First Name & Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <label className="font-semibold text-base">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full mt-2 bg-[#e1f4f1] text-[#1b2950] rounded-md p-3 focus:outline-none ${
                    errors.firstName ? "border border-red-500" : ""
                  }`}
                />
                {errors.firstName && (
                  <p className="text-red-300 text-sm mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>

              <div>
                <label className="font-semibold text-base">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full mt-2 bg-[#e1f4f1] text-[#1b2950] rounded-md p-3 focus:outline-none ${
                    errors.lastName ? "border border-red-500" : ""
                  }`}
                />
                {errors.lastName && (
                  <p className="text-red-300 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Phone Number & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {/* Phone Number with Dial Code */}
              <div>
                <label className="font-semibold text-base">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="mt-2 grid grid-cols-[110px_1fr] gap-3 md:grid-cols-[140px_1fr]">
                  <Select
                    name="dialCode"
                    options={dialCodeOptions}
                    value={phoneCountry}
                    onChange={handleDialCodeChange}
                    styles={{
                      ...customSelectStyles,
                      control: (base, state) => ({
                        ...customSelectStyles.control(base, state),
                        backgroundColor: "#e1f4f1",
                      }),
                    }}
                    classNamePrefix="dial-code"
                    isSearchable
                    menuPortalTarget={
                      typeof document !== "undefined"
                        ? document.body
                        : undefined
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
                    onChange={handleChange}
                    inputMode="numeric"
                    pattern="[0-9]*"
                    maxLength={phoneMaxLength}
                    className={`w-full bg-[#e1f4f1] text-[#1b2950] rounded-md p-3 focus:outline-none ${
                      errors.phone ? "border border-red-500" : ""
                    }`}
                  />
                </div>
                {errors.phone && (
                  <p className="text-red-300 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="font-semibold text-base">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full mt-2 bg-[#e1f4f1] text-[#1b2950] rounded-md p-3 focus:outline-none ${
                    errors.email ? "border border-red-500" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-red-300 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Level of Study & Course */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <label className="font-semibold text-base">
                  Interested Level of Study{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <Select
                    name="levelOfStudy"
                    value={
                      formData.levelOfStudy
                        ? levelOfStudyOptions.find(
                            (option) => option.value === formData.levelOfStudy
                          )
                        : null
                    }
                    onChange={handleSelectChange}
                    options={levelOfStudyOptions}
                    placeholder="Select Level"
                    styles={{
                      ...customSelectStyles,
                      control: (base, state) => ({
                        ...customSelectStyles.control(base, {
                          ...state,
                          hasError: Boolean(errors.levelOfStudy),
                        }),
                      }),
                    }}
                    classNamePrefix="form-select"
                    isSearchable
                    menuPortalTarget={
                      typeof document !== "undefined"
                        ? document.body
                        : undefined
                    }
                    menuPosition="fixed"
                  />
                </div>
                {errors.levelOfStudy && (
                  <p className="text-red-300 text-sm mt-1">
                    {errors.levelOfStudy}
                  </p>
                )}
              </div>

              <div>
                <label className="font-semibold text-base">
                  Interested Course <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <Select
                    name="course"
                    value={
                      formData.course
                        ? courseOptions.find(
                            (option) => option.value === formData.course
                          )
                        : null
                    }
                    onChange={handleSelectChange}
                    options={courseOptions}
                    placeholder={
                      formData.levelOfStudy
                        ? "Select Course"
                        : "Select Level of Study first"
                    }
                    styles={{
                      ...customSelectStyles,
                      control: (base, state) => ({
                        ...customSelectStyles.control(base, {
                          ...state,
                          hasError: Boolean(errors.course),
                        }),
                      }),
                    }}
                    classNamePrefix="form-select"
                    isSearchable
                    isDisabled={!formData.levelOfStudy}
                    menuPortalTarget={
                      typeof document !== "undefined"
                        ? document.body
                        : undefined
                    }
                    menuPosition="fixed"
                  />
                </div>
                {errors.course && (
                  <p className="text-red-300 text-sm mt-1">{errors.course}</p>
                )}
              </div>
            </div>

            {/* Country, State, City */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <label className="font-semibold text-base">
                  Country <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
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
                    styles={{
                      ...customSelectStyles,
                      control: (base, state) => ({
                        ...customSelectStyles.control(base, {
                          ...state,
                          hasError: Boolean(errors.country),
                        }),
                      }),
                      menuList: (base) => ({
                        ...base,
                        maxHeight: "200px",
                      }),
                    }}
                    classNamePrefix="form-select"
                    isSearchable
                    menuPortalTarget={
                      typeof document !== "undefined"
                        ? document.body
                        : undefined
                    }
                    menuPosition="fixed"
                  />
                </div>
                {errors.country && (
                  <p className="text-red-300 text-sm mt-1">{errors.country}</p>
                )}
              </div>

              <div>
                <label className="font-semibold text-base">
                  State <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
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
                    styles={{
                      ...customSelectStyles,
                      control: (base, state) => ({
                        ...customSelectStyles.control(base, {
                          ...state,
                          hasError: Boolean(errors.state),
                        }),
                      }),
                      menuList: (base) => ({
                        ...base,
                        maxHeight: "200px",
                      }),
                    }}
                    classNamePrefix="form-select"
                    isSearchable
                    isDisabled={!formData.country}
                    menuPortalTarget={
                      typeof document !== "undefined"
                        ? document.body
                        : undefined
                    }
                    menuPosition="fixed"
                  />
                </div>
                {errors.state && (
                  <p className="text-red-300 text-sm mt-1">{errors.state}</p>
                )}
              </div>

              <div>
                <label className="font-semibold text-base">
                  City <span className="text-red-500">*</span>
                </label>
                <div className="mt-2">
                  <Select
                    key={`city-${formData.city || "empty"}`}
                    name="city"
                    value={
                      formData.city
                        ? cityOptions.find(
                            (option) => option.value === formData.city
                          )
                        : null
                    }
                    onChange={handleSelectChange}
                    options={cityOptions}
                    placeholder={
                      formData.state ? "Select City" : "Select State first"
                    }
                    styles={{
                      ...customSelectStyles,
                      control: (base, state) => ({
                        ...customSelectStyles.control(base, {
                          ...state,
                          hasError: Boolean(errors.city),
                        }),
                      }),
                      menuList: (base) => ({
                        ...base,
                        maxHeight: "200px",
                      }),
                    }}
                    classNamePrefix="form-select"
                    isSearchable
                    isDisabled={!formData.state}
                    menuPortalTarget={
                      typeof document !== "undefined"
                        ? document.body
                        : undefined
                    }
                    menuPosition="fixed"
                  />
                </div>
                {errors.city && (
                  <p className="text-red-300 text-sm mt-1">{errors.city}</p>
                )}
              </div>
            </div>

            {/* Academic Year */}
            <div className="text-left">
              <label className="font-semibold text-base">
                Academic Year <span className="text-red-500">*</span>
              </label>
              <div className="mt-2">
                <Select
                  name="academicYear"
                  value={
                    formData.academicYear
                      ? academicYearOptions.find(
                          (option) => option.value === formData.academicYear
                        )
                      : null
                  }
                  onChange={handleSelectChange}
                  options={academicYearOptions}
                  placeholder="Select Academic Year"
                  styles={{
                    ...customSelectStyles,
                    control: (base, state) => ({
                      ...customSelectStyles.control(base, {
                        ...state,
                        hasError: Boolean(errors.academicYear),
                      }),
                    }),
                  }}
                  classNamePrefix="form-select"
                  menuPortalTarget={
                    typeof document !== "undefined" ? document.body : undefined
                  }
                  menuPosition="fixed"
                />
              </div>
              {errors.academicYear && (
                <p className="text-red-300 text-sm mt-1">
                  {errors.academicYear}
                </p>
              )}
            </div>

            {/* Global Status */}
            {status.message && (
              <p
                className={`text-sm font-medium ${
                  status.success ? "text-green-300" : "text-red-300"
                }`}
              >
                {status.message}
              </p>
            )}

            {/* Submit Button */}
            <div className="text-left">
              <button
                type="submit"
                disabled={status.loading}
                className={`group relative inline-flex items-center gap-2 w-fit px-6 py-2 text-lg font-medium transition-all duration-300
      bg-[#A22977] text-white border-6 border-[#D8BFD8] rounded-[26.5px]
      hover:bg-[#ff6c01] hover:text-white
      ${status.loading ? "opacity-70 cursor-not-allowed" : ""}
    `}
              >
                {status.loading ? "Submitting..." : "Submit"}
                <div className="relative flex items-center">
                  <GoArrowDownRight className="w-5 h-5 text-current transition-all duration-300 ease-in-out group-hover:opacity-0 group-hover:rotate-12 group-hover:scale-75" />
                  <GoArrowUpRight className="w-5 h-5 text-current absolute top-0 left-0 transition-all duration-300 ease-in-out opacity-0 -rotate-12 scale-75 group-hover:opacity-100 group-hover:rotate-0 group-hover:scale-100" />
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
