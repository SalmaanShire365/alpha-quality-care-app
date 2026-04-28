import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhoWeServeSection from "@/components/sections/WhoWeServeSection";
import CareersSection from "@/components/sections/CareersSection";
import ContactSection from "@/components/sections/ContactSection";
import { services, whoWeServeCategories, careerStats, careerInfo, contactInfo } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <HeroSection
        heading="Compassionate Care, Right at Home"
        subheading="Alpha Quality Care provides professional, dignified home care services for seniors, individuals with disabilities, and families across our community."
        ctaPrimary={{ label: "Our Services", href: "/services" }}
        ctaSecondary={{ label: "Contact Us", href: "/contact" }}
        imageSrc="/hero-placeholder.svg"
        imageAlt="A caregiver smiling with an elderly client at home"
      />
      <ServicesSection
        heading="What We Offer"
        subheading="From personal care to home management, our trained caregivers deliver reliable support tailored to each client's needs."
        services={services}
      />
      <WhoWeServeSection
        heading="Who We Serve"
        subheading="We partner with individuals and families who need dependable, compassionate care in the home."
        categories={whoWeServeCategories}
      />
      <CareersSection
        heading={careerInfo.heading}
        description={careerInfo.description}
        benefits={careerInfo.benefits}
        stats={careerStats}
        applyEmail={careerInfo.applyEmail}
        applyLabel={careerInfo.applyLabel}
      />
      <ContactSection
        heading="Get in Touch"
        subheading="Ready to learn more or get started? Reach out — we're happy to answer any questions."
        phone={contactInfo.phone}
        email={contactInfo.email}
        address={contactInfo.address}
        hours={contactInfo.hours}
      />
    </>
  );
}
