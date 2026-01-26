import Container from "@/components/Container";
import { siteData } from "@/data/siteData";

export default function Services() {
  const { services } = siteData;

  return (
    <section id="services" className="bg-white py-16">
      <Container>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
          {services.title}
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.items.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
