import React from 'react'
import SeoMetadata from '../../components/shared/Seo/SeoMetadata'

const page = () => {
  return (
    <>
      <SeoMetadata
        title="Top MBA & Hospitality Programs at Bangalore's Leading Institute"
        description="Top MBA colleges in Bangalore. Your path to industry-ready programs, from hospitality and tourism to BBA aviation management, designed for your future."
        path="/programs"
        metaImage="/images/aims-logo.png"
        schemaType="EducationalOrganization"
      />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">Academic Programs at AIMS Institutes</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">MBA Programs</h2>
            <p className="text-gray-600">Master of Business Administration with industry-focused curriculum</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">BBA Aviation Management</h2>
            <p className="text-gray-600">Specialized program in aviation business management</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Hospitality & Tourism</h2>
            <p className="text-gray-600">Industry-ready programs in hospitality management</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default page
