import Button from "@/components/ui/Button";

type HeroSectionProps = {
  heading: string;
  subheading: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  imageSrc: string;
  imageAlt: string;
};

export default function HeroSection({
  heading,
  subheading,
  ctaPrimary,
  ctaSecondary,
}: HeroSectionProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #F6F8FC 0%, #EEF3FD 50%, #E8F0FE 100%)",
      }}
    >
      {/* Subtle grid texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#2F6FED 1px, transparent 1px), linear-gradient(to right, #2F6FED 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container-inner relative grid items-center gap-16 py-24 lg:grid-cols-2 lg:py-32">
        <div className="flex flex-col gap-7">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-border bg-white px-3 py-1 text-xs font-semibold text-brand-primary shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
            Trusted Home Care Services
          </div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-brand-dark sm:text-5xl lg:text-6xl">
            {heading}
          </h1>

          <p className="max-w-lg text-lg text-brand-muted leading-relaxed">{subheading}</p>

          <div className="flex flex-wrap gap-3">
            <Button href={ctaPrimary.href} size="lg">
              {ctaPrimary.label}
            </Button>
            <Button href={ctaSecondary.href} size="lg" variant="secondary">
              {ctaSecondary.label}
            </Button>
          </div>
        </div>

        {/* Visual panel instead of image */}
        <div className="relative hidden lg:block">
          <div className="rounded-2xl border border-brand-border bg-white p-8 shadow-xl">
            <div className="flex flex-col gap-5">
              {[
                { label: "Personal Care & Hygiene", pct: "98%" },
                { label: "Home Management", pct: "95%" },
                { label: "Client Satisfaction", pct: "99%" },
              ].map(({ label, pct }) => (
                <div key={label} className="flex flex-col gap-2">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium text-brand-slate">{label}</span>
                    <span className="font-semibold text-brand-primary">{pct}</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-brand-light">
                    <div
                      className="h-full rounded-full bg-brand-primary"
                      style={{ width: pct }}
                    />
                  </div>
                </div>
              ))}

              <div className="mt-2 grid grid-cols-3 gap-4 border-t border-brand-border pt-5">
                {[
                  { value: "50+", label: "Caregivers" },
                  { value: "5+", label: "Years" },
                  { value: "24/7", label: "Support" },
                ].map(({ value, label }) => (
                  <div key={label} className="flex flex-col items-center gap-0.5 text-center">
                    <span className="text-2xl font-bold text-brand-primary">{value}</span>
                    <span className="text-xs text-brand-muted">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <div className="absolute -right-4 -top-4 rounded-xl border border-brand-border bg-white px-4 py-3 shadow-lg">
            <div className="flex items-center gap-2">
              <span className="text-xl">✓</span>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-brand-dark">Medicaid Accepted</span>
                <span className="text-xs text-brand-muted">State Programs Welcome</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
