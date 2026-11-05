import EnquiryForm from "../EnquiryForm";
import { PageHero, Section } from "../SiteUI";
export default function ApplicationForm() {
  return (
    <>
      <PageHero eyebrow="RICHASCEND / APPLICATION" title="Introduce yourself.">
        <p>
          Prepare an expression of interest in engineering or project delivery.
          Current vacancies must be confirmed with the company.
        </p>
      </PageHero>
      <Section title="Your details">
        <div className="max-w-3xl mx-auto">
          <EnquiryForm kind="application" />
        </div>
      </Section>
    </>
  );
}
