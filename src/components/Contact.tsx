import Container from "@/components/Container";
import { siteData } from "@/data/siteData";

export default function Contact() {
  const { contact } = siteData;

  return (
    <section id="contact" className="bg-slate-50 py-16">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              Free Quote
            </h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
              Reach out by phone or email and tell us what you’re looking to build.
              We’ll get back to you with next steps.
            </p>

            <div className="mt-6 space-y-3 text-sm text-slate-700">
              <p className="text-slate-500">Tap to contact:</p>

              <a
                href={`tel:${contact.phone.replace(/[^0-9+]/g, "")}`}
                className="inline-flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm hover:bg-slate-50"
              >
                <span className="font-semibold text-slate-900">Phone</span>
                <span className="text-slate-700">{contact.phone}</span>
              </a>

              <a
                href={`mailto:${contact.email}`}
                className="inline-flex w-full items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm hover:bg-slate-50"
              >
                <span className="font-semibold text-slate-900">Email</span>
                <span className="text-slate-700">{contact.email}</span>
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              What to include
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>• What you want built or repaired</li>
              <li>• Your location</li>
              <li>• Timeline (ASAP / this month / flexible)</li>
              <li>• Photos (if available)</li>
            </ul>

            <p className="mt-4 text-sm text-slate-500">
              We’re available for residential and commercial projects — travel may be available.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
