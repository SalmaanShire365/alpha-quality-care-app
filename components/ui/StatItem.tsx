import type { Stat } from "@/lib/data";

type StatItemProps = {
  stat: Stat;
};

export default function StatItem({ stat }: StatItemProps) {
  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <span className="text-4xl font-bold tracking-tight text-brand-primary">{stat.value}</span>
      <span className="text-sm font-medium text-brand-muted">{stat.label}</span>
    </div>
  );
}
