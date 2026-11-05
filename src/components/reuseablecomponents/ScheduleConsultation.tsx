import EnquiryForm from "../EnquiryForm";
import { PageHero, Section } from "../SiteUI";
export default function ScheduleConsultation() {
  return (
    <>
      <PageHero
        eyebrow="RICHASCEND / CONSULTATION"
        title="Plan your consultation."
      >
        <p>
          Choose a preferred date and tell the team what you would like to
          discuss.
        </p>
      </PageHero>
      <Section title="Your details">
        <div className="max-w-3xl mx-auto">
          <EnquiryForm kind="consultation" />
        </div>
      </Section>
    </>
  );
}
