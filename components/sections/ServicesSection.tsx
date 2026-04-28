import Section from "@/components/ui/Section";
import ServiceCard from "@/components/ui/ServiceCard";
import type { Service } from "@/lib/data";

type ServicesSectionProps = {
  heading: string;
  subheading: string;
  services: Service[];
};

export default function ServicesSection({ heading, subheading, services }: ServicesSectionProps) {
  return (
    <Section variant="default">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-subheading mx-auto max-w-2xl">{subheading}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </Section>
  );
}
