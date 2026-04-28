import Section from "@/components/ui/Section";
import WhoWeServeCard from "@/components/ui/WhoWeServeCard";
import type { WhoWeServeCategory } from "@/lib/data";

type WhoWeServeSectionProps = {
  heading: string;
  subheading: string;
  categories: WhoWeServeCategory[];
};

export default function WhoWeServeSection({
  heading,
  subheading,
  categories,
}: WhoWeServeSectionProps) {
  return (
    <Section variant="muted">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4 text-center">
          <h2 className="section-heading">{heading}</h2>
          <p className="section-subheading mx-auto max-w-2xl">{subheading}</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2">
          {categories.map((category) => (
            <WhoWeServeCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </Section>
  );
}
