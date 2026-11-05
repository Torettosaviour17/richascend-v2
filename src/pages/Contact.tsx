import { Link } from "react-router-dom";
import { PageHero, Section } from "../components/SiteUI";
import EnquiryForm from "../components/EnquiryForm";
export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT / LET’S TALK"
        title="Good engineering starts with understanding."
      >
        <p>
          Tell Richascend what you are planning. Discuss your site, power
          requirements and the next steps with the team in Nibo, Anambra.
        </p>
        <div className="flex flex-wrap gap-3 mt-6">
          <Link className="button button-primary" to="/quote">
            Request a quote ↗
          </Link>
          <Link className="button button-outline" to="/schedule-consultation">
            Plan a consultation
          </Link>
        </div>
      </PageHero>
      <Section title="Let’s connect">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-8">
          <aside className="surface-card self-start">
            <p className="eyebrow">RICHASCEND / NIGERIA</p>
            <h3 className="text-xl font-bold mt-4 mb-3">Visit the office</h3>
            <p>
              25 Onyinafor Avenue, Nibo,
              <br />
              Anambra State, Nigeria.
            </p>
            <h3 className="text-lg font-bold mt-7 mb-2">Call the team</h3>
            <a
              className="text-red-600 dark:text-red-400 font-semibold"
              href="tel:+2348135189992"
            >
              +234 813 518 9992
            </a>
            <h3 className="text-lg font-bold mt-7 mb-2">Opening hours</h3>
            <p>
              Monday–Saturday: 7:30am–5pm
              <br />
              Sunday: 3pm–6pm
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-7">
              Online email delivery is the next setup step. Please call for
              enquiries that need a response now.
            </p>
          </aside>
          <EnquiryForm />
        </div>
      </Section>
      <Section title="Find us in Nibo">
        <div className="surface-card overflow-hidden p-0">
          <iframe
            title="Map of Nibo, Anambra State"
            src="https://maps.google.com/maps?q=Nibo%2C%20Anambra%20State%2C%20Nigeria&z=13&output=embed"
            className="w-full h-80"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="p-6">
            <p>
              Call ahead to arrange a visit and confirm directions to the
              office.
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=25+Onyinafor+Avenue+Nibo+Anambra+Nigeria"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-3 text-red-600 dark:text-red-400 font-semibold"
            >
              Open directions ↗
            </a>
          </div>
        </div>
      </Section>
      <Section title="Before you get in touch">
        <div className="grid md:grid-cols-2 gap-5">
          {[
            [
              "What should I include in a quote request?",
              "Include the site location, type of installation, intended use, approximate load or capacity, and your preferred timeline. The team can advise which technical details are needed next.",
            ],
            [
              "Is a consultation a confirmed appointment?",
              "No. Your preferred date and time need to be agreed with the team. Call the office to confirm availability.",
            ],
            [
              "Can I enquire about a product?",
              "Yes. Note the transformer capacity or solar application you have in mind. Final specifications, availability and pricing should be confirmed directly.",
            ],
            [
              "How do I ask about working together?",
              "Call to discuss engineering roles, supplier enquiries or partnerships. The careers page also helps you prepare an expression of interest.",
            ],
          ].map(([q, a]) => (
            <details className="surface-card" key={q}>
              <summary className="font-bold cursor-pointer">{q}</summary>
              <p className="mt-4 text-gray-600 dark:text-gray-300">{a}</p>
            </details>
          ))}
        </div>
      </Section>
    </>
  );
}
