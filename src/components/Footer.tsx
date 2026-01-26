import Container from "@/components/Container";
import { siteData } from "@/data/siteData";

export default function Footer() {
  const year = new Date().getFullYear();
  const { brand } = siteData;

  return (
    <footer className="bg-slate-950 py-10 text-white/70">
      <Container>
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-3">
  <img
    src="/logo.png"
    alt={`${brand.name} logo`}
    className="h-8 w-auto opacity-90"
  />
  <p className="font-semibold text-white">{brand.name}</p>
</div>


          <p className="text-sm">
            © {year} {brand.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
