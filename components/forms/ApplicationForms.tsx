"use client";

import { useActionState } from "react";
import { submitApplication, type ApplicationState } from "@/lib/actions";
import Button from "@/components/ui/Button";

const initialState: ApplicationState = {
  status: "idle",
  message: "",
};

export default function ApplicationForm() {
  const [state, formAction, isPending] = useActionState(
    submitApplication,
    initialState
  );

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <input
          name="name"
          placeholder="Full Name *"
          required
          disabled={isPending}
          className="input-field"
        />
        <input
          name="email"
          type="email"
          placeholder="Email *"
          required
                  disabled={isPending}
                  className="input-field"
              />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
              <input
                  name="phone"
                  placeholder="Phone Number"
                  disabled={isPending}
                  className="input-field"
              />
              <input
                  name="location"
                  placeholder="Location"
                  disabled={isPending}
                  className="input-field"
              />
              <select
                  name="shift"
                  disabled={isPending}
                  required
                  className="input-field"
                  defaultValue=""
              >
                  <option value="" disabled>
                      Select Preferred Shift *
                  </option>
                  <option value="day">Day Shift</option>
                  <option value="evening">Evening Shift</option>
                  <option value="night">Night Shift</option>
                  <option value="overnight">Overnight</option>
                  <option value="weekend">Weekend Only</option>
                  <option value="flexible">Flexible / Any</option>
</select> 
      </div>

      <textarea
        name="message"
        placeholder="Tell us about yourself..."
        rows={5}
        disabled={isPending}
        className="input-field resize-none"
      />

      {state.status !== "idle" && (
        <div
          className={`rounded-lg px-4 py-3 text-sm font-medium ${
            state.status === "success"
              ? "bg-green-50 text-green-800"
              : "bg-red-50 text-red-800"
          }`}
        >
          {state.message}
        </div>
      )}

      <Button type="submit" disabled={isPending} size="lg">
        {isPending ? "Submitting..." : "Submit Application"}
      </Button>
    </form>
  );
}