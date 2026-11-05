import EnquiryForm from "../EnquiryForm";
import { PageHero, Section } from "../SiteUI";
export default function QuotePage() {
  return (
    <>
      <PageHero
        eyebrow="RICHASCEND / QUOTE"
        title="Tell us about your project."
      >
        <p>
          Share the scope, site location and requirements to prepare a clear
          project enquiry.
        </p>
      </PageHero>
      <Section title="Your details">
        <div className="max-w-3xl mx-auto">
          <EnquiryForm kind="quote" />
        </div>
      </Section>
    </>
  );
}
