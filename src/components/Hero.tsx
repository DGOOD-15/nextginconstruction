import Container from "@/components/Container";
import { siteData } from "@/data/siteData";

export default function Hero() {
  const { brand, ctas } = siteData;

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(255,255,255,0.08),transparent_40%)]" />

      <div className="absolute inset-0 opacity-20 [background:radial-gradient(circle_at_20%_10%,white,transparent_35%),radial-gradient(circle_at_90%_30%,white,transparent_30%)]" />

      <Container>
        <div className="relative py-20 md:py-28">
          
<div className="relative grid items-center gap-10 py-10 md:grid-cols-2 md:py-16">

  {/* LEFT SIDE */}
  <div className="order-2 md:order-1">

    <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
      {brand.name}
    </h1>

    <p className="mt-4 max-w-xl text-lg text-white/80 md:text-xl">
      {brand.tagline}
    </p>

    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <a
        href={ctas.primary.href}
        className="relative inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900
shadow-[0_0_0_0_rgba(255,255,255,0)]
hover:shadow-[0_0_20px_2px_rgba(255,255,255,0.25)]
transition-shadow duration-300"

      >
        {ctas.primary.label}
      </a>
      <a
        href={ctas.secondary.href}
        className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
      >
        {ctas.secondary.label}
      </a>
    </div>
  </div>

  {/* RIGHT SIDE */}
  <div className="order-1 flex items-center justify-center md:order-2 md:justify-end">


    <img
      src="/logo.png"
      alt={`${brand.name} logo`}
      className="w-48 max-w-full opacity-95 md:w-64 lg:w-72"
    />
  </div>
</div>



        

          <div className="mt-10 grid gap-3 text-sm text-white/70 sm:grid-cols-3">
  {[
    "Licensed & Insured",
    "Free Estimates",
    "Residential & Commercial",
  ].map((label) => (
    <div
      key={label}
      className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4
                 transition duration-200 hover:border-white/25 hover:bg-white/10"
    >
      <span className="font-medium">{label}</span>

      {/* Checkmark (appears on hover) */}
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-white/15 bg-white/5
                       opacity-0 translate-x-1 transition duration-200 group-hover:opacity-100 group-hover:translate-x-0">
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </span>
    </div>
  ))}
</div>

        </div>
      </Container>
    </section>
  );
}
