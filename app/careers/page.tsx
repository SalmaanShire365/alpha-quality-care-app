import ApplicationForm from "@/components/forms/ApplicationForms";

export default function ApplyPage() {
  return (
    <div className="container mx-auto max-w-3xl py-16 px-4">
      <h1 className="text-3xl font-bold mb-6 text-brand-dark">
        Apply to Join Our Team
      </h1>
      <p className="text-brand-muted mb-10">
        Fill out the form below and our team will reach out to you shortly.
      </p>

      <ApplicationForm />
    </div>
  );
}