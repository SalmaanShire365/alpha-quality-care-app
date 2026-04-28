import type { WhoWeServeCategory } from "@/lib/data";

type WhoWeServeCardProps = {
  category: WhoWeServeCategory;
};

export default function WhoWeServeCard({ category }: WhoWeServeCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-brand-border bg-brand-light p-6 transition-all duration-200 hover:shadow-sm">
      <h3 className="text-base font-semibold text-brand-dark">{category.title}</h3>
      <p className="text-sm text-brand-muted leading-relaxed">{category.description}</p>
      <ul className="space-y-1.5">
        {category.examples.map((example) => (
          <li key={example} className="flex items-start gap-2 text-sm text-brand-slate">
            <span className="mt-0.5 text-brand-primary font-semibold" aria-hidden="true">→</span>
            {example}
          </li>
        ))}
      </ul>
    </div>
  );
}
