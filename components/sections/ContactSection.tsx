import Section from "@/components/ui/Section";
import ContactForm from "@/components/ui/ContactForm";

type ContactSectionProps = {
  heading: string;
  subheading: string;
  phone: string;
  email: string;
  address: string;
  hours: string;
};

export default function ContactSection({
  heading,
  subheading,
  phone,
  email,
  address,
  hours,
}: ContactSectionProps) {
  return (
    <Section variant="muted">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h2 className="section-heading text-left">{heading}</h2>
            <p className="text-brand-muted leading-relaxed">{subheading}</p>
          </div>

          <dl className="flex flex-col gap-5">
            {[
              {
                label: "Phone",
                content: (
                  <a href={`tel:${phone.replace(/\D/g, "")}`} className="text-brand-primary hover:underline">
                    {phone}
                  </a>
                ),
              },
              {
                label: "Email",
                content: (
                  <a href={`mailto:${email}`} className="text-brand-primary hover:underline">
                    {email}
                  </a>
                ),
              },
              { label: "Address", content: <span className="text-brand-muted">{address}</span> },
              { label: "Hours", content: <span className="text-brand-muted">{hours}</span> },
            ].map(({ label, content }) => (
              <div key={label} className="flex flex-col gap-0.5 text-sm">
                <dt className="font-semibold text-brand-dark">{label}</dt>
                <dd>{content}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="rounded-2xl border border-brand-border bg-brand-card p-6 shadow-sm lg:p-8">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
