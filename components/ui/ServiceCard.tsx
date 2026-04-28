import Image from "next/image";
import type { Service } from "@/lib/data";

type ServiceCardProps = {
  service: Service;
};

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="group flex flex-col gap-4 rounded-2xl border border-brand-border bg-brand-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-light">
        <Image src={service.icon} alt="" width={24} height={24} aria-hidden="true" />
      </div>
      <h3 className="text-base font-semibold text-brand-dark">{service.title}</h3>
      <p className="text-sm text-brand-muted leading-relaxed">{service.description}</p>
      <ul className="mt-auto space-y-1.5">
        {service.details.map((detail) => (
          <li key={detail} className="flex items-start gap-2 text-sm text-brand-slate">
            <span className="mt-0.5 text-brand-accent font-bold" aria-hidden="true">✓</span>
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}
