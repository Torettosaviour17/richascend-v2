import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
export default function EnquiryForm({
  kind = "message",
}: {
  kind?: "message" | "quote" | "consultation" | "application";
}) {
  const [draft, setDraft] = useState("");
  const prepare = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const text = [
      `Richascend — ${kind} request`,
      ...Array.from(data.entries())
        .filter(([key]) => key !== "consent")
        .map(
          ([key, value]) =>
            `${key}: ${typeof value === "string" ? value : value.name || "No file selected"}`,
        ),
    ].join("\n\n");
    setDraft(text);
  };
  const download = () => {
    const url = URL.createObjectURL(
      new Blob([draft], { type: "text/plain;charset=utf-8" }),
    );
    const a = document.createElement("a");
    a.href = url;
    a.download = `richascend-${kind}-request.txt`;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };
  return (
    <div className="surface-card">
      <p className="form-notice mb-6">
        Prepare your{" "}
        {kind === "application" ? "expression of interest" : "request"} below.
        Online delivery is being connected; nothing is sent from this form yet.
        You can download your draft or call the team.
      </p>
      <form
        onChange={() => setDraft("")}
        onSubmit={prepare}
        className="grid sm:grid-cols-2 gap-5"
      >
        <label>
          Full name <span aria-hidden="true">*</span>
          <input name="Name" autoComplete="name" required maxLength={120} />
        </label>
        <label>
          Email address <span aria-hidden="true">*</span>
          <input
            name="Email"
            type="email"
            autoComplete="email"
            required
            maxLength={254}
          />
        </label>
        <label>
          Phone number
          <input name="Phone" type="tel" autoComplete="tel" maxLength={40} />
        </label>
        <label>
          {kind === "application" ? "Area of interest" : "Service"}
          <select name={kind === "application" ? "Role" : "Service"}>
            <option>Electrical engineering</option>
            <option>Transformers</option>
            <option>Solar energy</option>
            <option>Project management</option>
            <option>Other enquiry</option>
          </select>
        </label>
        {kind === "quote" && (
          <>
            <label>
              Project location
              <input name="Location" maxLength={200} />
            </label>
            <label>
              Budget range (optional)
              <input
                name="Budget"
                placeholder="For example, ₦2m–₦5m"
                maxLength={100}
              />
            </label>
          </>
        )}
        {kind === "consultation" && (
          <>
            <label>
              Preferred date
              <input
                name="Preferred date"
                type="date"
                min={new Date().toLocaleDateString("en-CA")}
              />
            </label>
            <label>
              Preferred time (WAT)
              <input name="Preferred time" type="time" />
            </label>
            <p className="sm:col-span-2 text-sm text-gray-500 dark:text-gray-400">
              Preferred times are requests, subject to confirmation by the team.
            </p>
          </>
        )}
        {kind === "application" && (
          <label className="sm:col-span-2">
            CV or professional profile URL
            <input name="Profile URL" type="url" placeholder="https://…" />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Share a link in your draft. No files are uploaded.
            </span>
          </label>
        )}
        <label className="sm:col-span-2">
          {kind === "application"
            ? "Tell us about your experience"
            : "Project details or message"}{" "}
          <span aria-hidden="true">*</span>
          <textarea name="Message" required rows={5} maxLength={5000} />
        </label>
        <label className="sm:col-span-2 flex items-start gap-3 text-sm">
          <input name="consent" type="checkbox" required className="mt-1" />
          <span>
            I understand this prepares a local draft and does not send a
            message.{" "}
            <Link to="/privacy" className="underline">
              Privacy information
            </Link>
            .
          </span>
        </label>
        <div className="sm:col-span-2 flex flex-wrap gap-3">
          <button type="submit" className="button button-primary">
            Prepare request ↗
          </button>
          <a className="button button-outline" href="tel:+2348135189992">
            Call the team
          </a>
        </div>
      </form>
      {draft && (
        <div
          className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6"
          role="status"
        >
          <h3 className="text-xl font-bold mb-3">
            Your draft is ready — it has not been sent.
          </h3>
          <pre className="whitespace-pre-wrap break-words bg-gray-50 dark:bg-gray-900 p-4 rounded-xl text-sm">
            {draft}
          </pre>
          <button className="button button-primary mt-4" onClick={download}>
            Download request
          </button>
        </div>
      )}
    </div>
  );
}
