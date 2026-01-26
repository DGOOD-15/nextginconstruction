import Container from "@/components/Container";
import { siteData } from "@/data/siteData";

export default function WhyUs() {
  const { why } = siteData;

  return (
    <section className="bg-white py-16">
      <Container>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
          {why.title}
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {why.items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
