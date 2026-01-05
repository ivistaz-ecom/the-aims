import BhmLandingPage from "@/components/BhmLandingPage"
import SeoMetadata from "@/components/shared/Seo/SeoMetadata"

const page = () => {
  return (
    <div>
      <SeoMetadata
        title="Hospitality Program with VET by EHL | AIMS Institutes Bangalore"
        description="Build a global hospitality career with Swiss-certified VET by EHL training, NAAC A grade excellence, hands-on Taj internship, and real-world industry immersion at AIMS Institutes."
        path="/bhm-course-admissions"
        metaImage="/images/aims-logo.png"
      />
      <BhmLandingPage />
    </div>
  )
}

export default page
