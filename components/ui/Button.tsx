import Link from "next/link";

type BaseProps = {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

type ButtonAsLink = BaseProps & { href: string; target?: string; rel?: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<NonNullable<BaseProps["variant"]>, string> = {
  primary:
    "bg-brand-primary text-white shadow-sm hover:bg-brand-primaryHover focus-visible:ring-brand-primary",
  secondary:
    "bg-white text-brand-slate border border-brand-border shadow-sm hover:bg-brand-light focus-visible:ring-brand-primary",
  outline:
    "border border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white focus-visible:ring-brand-primary",
};

const sizeClasses: Record<NonNullable<BaseProps["size"]>, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3 text-base",
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if ("href" in props && props.href !== undefined) {
    const { href, target, rel, ...rest } = props as ButtonAsLink;
    void rest;
    return (
      <Link href={href} target={target} rel={rel} className={classes}>
        {children}
      </Link>
    );
  }

  const { ...buttonProps } = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
