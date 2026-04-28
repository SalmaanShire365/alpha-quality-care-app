import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="container-inner flex flex-col items-center justify-center gap-6 py-32 text-center">
      <span className="text-6xl font-bold text-brand-primary">404</span>
      <h1 className="text-2xl font-semibold text-brand-dark">Page Not Found</h1>
      <p className="max-w-md text-brand-muted">
        Sorry, we couldn&apos;t find the page you were looking for. It may have moved or no longer
        exists.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button href="/">Go Home</Button>
        <Button href="/contact" variant="secondary">
          Contact Us
        </Button>
      </div>
    </div>
  );
}
