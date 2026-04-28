type SectionProps = {
  children: React.ReactNode;
  variant?: "default" | "muted" | "dark";
  className?: string;
};

const variantClasses = {
  default: "bg-brand-card",
  muted: "bg-brand-light",
  dark: "bg-brand-dark text-white",
};

export default function Section({ children, variant = "default", className = "" }: SectionProps) {
  return (
    <section className={`py-20 ${variantClasses[variant]} ${className}`}>
      <div className="container-inner">{children}</div>
    </section>
  );
}
