import Section from "@/components/ui/Section";
import StatItem from "@/components/ui/StatItem";
import Button from "@/components/ui/Button";
import type { Stat } from "@/lib/data";

type CareersSectionProps = {
  heading: string;
  description: string;
  benefits: string[];
  stats: Stat[];
  applyLabel: string;
};

export default function CareersSection({
  heading,
  description,
  benefits,
  stats,
  applyLabel,
}: CareersSectionProps) {
  return (
    <Section variant="default">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div className="flex flex-col gap-6">
          <h2 className="section-heading text-left">{heading}</h2>
          <p className="text-brand-muted leading-relaxed">{description}</p>

          <ul className="flex flex-col gap-2.5">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-2.5 text-sm text-brand-slate"
              >
                <span
                  className="mt-0.5 text-brand-accent font-bold"
                  aria-hidden="true"
                >
                  ✓
                </span>
                {benefit}
              </li>
            ))}
          </ul>

          {/* ROUTES TO APPLICATION PAGE */}
          <Button href="/careers/" size="lg" className="self-start">
            {applyLabel}
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-8 rounded-2xl border border-brand-border bg-brand-light p-10 shadow-sm">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </Section>
  );
}