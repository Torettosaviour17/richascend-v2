import { Link } from "react-router-dom";
import { PageHero, Section } from "../components/SiteUI";
export function UtilityPage({
  kind,
}: {
  kind: "privacy" | "terms" | "sitemap";
}) {
  const title = {
    privacy: "Your privacy",
    terms: "Website terms",
    sitemap: "Find your way",
  }[kind];
  return (
    <>
      <PageHero eyebrow="RICHASCEND / INFORMATION" title={title}>
        <p>Clear information for visitors to the Richascend website.</p>
      </PageHero>
      <Section
        title={
          kind === "sitemap" ? "Explore the website" : "Using this website"
        }
      >
        {kind === "sitemap" ? (
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              "Home",
              "About",
              "Market",
              "Services",
              "Projects",
              "Insights",
              "Careers",
              "News",
              "Contact",
              "Transformers",
              "Solar",
              "Quote",
              "Schedule-consultation",
            ].map((p) => (
              <Link
                className="surface-card"
                key={p}
                to={p === "Home" ? "/" : "/" + p.toLowerCase()}
              >
                {p.replace(/-/g, " ")} ↗
              </Link>
            ))}
          </div>
        ) : (
          <div className="surface-card prose-copy">
            {kind === "privacy" ? (
              <>
                <h3>Information you choose to share</h3>
                <p>
                  Enquiry forms currently let you prepare and download a request
                  on your device. They do not send it to Richascend or upload
                  attachments. Avoid entering sensitive personal information.
                </p>
                <h3>Preferences and external services</h3>
                <p>
                  Your theme preference is stored in this browser. Embedded
                  maps, videos and externally hosted images may connect to their
                  providers when loaded; those providers apply their own privacy
                  policies.
                </p>
                <h3>Questions</h3>
                <p>
                  Use the contact page to discuss privacy questions directly
                  with the company.
                </p>
              </>
            ) : (
              <>
                <h3>General information</h3>
                <p>
                  This website introduces engineering services and provides
                  general planning guidance. It is not a technical
                  specification, contractual offer or substitute for a
                  professional site assessment.
                </p>
                <h3>Products and project examples</h3>
                <p>
                  Product availability, final specifications, pricing,
                  warranties and project scope must be confirmed directly with
                  Richascend. Illustrative concepts are labelled and should not
                  be treated as completed client projects.
                </p>
                <h3>Enquiries</h3>
                <p>
                  Preparing a request on this website does not confirm a
                  booking, place an order or submit an application. Contact the
                  company to agree the next steps.
                </p>
              </>
            )}
            <Link className="button button-primary mt-6" to="/contact">
              Contact Richascend
            </Link>
          </div>
        )}
      </Section>
    </>
  );
}
export function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404 / PAGE NOT FOUND"
        title="Let’s get you back on track."
      >
        <p>This page may have moved or the address may be incorrect.</p>
        <Link className="button button-primary mt-6" to="/">
          Back to home
        </Link>
      </PageHero>
      <Section title="Looking for something else?">
        <Link className="button button-outline" to="/sitemap">
          Explore all pages
        </Link>
      </Section>
    </>
  );
}
