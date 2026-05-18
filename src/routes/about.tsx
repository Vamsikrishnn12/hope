import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import president from "@/assets/president.png";
import seal from "@/assets/seal.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Hope Trust" },
      { name: "description", content: "Learn about Hope Trust, founded in Katpadi, Vellore, and led by Dr. Lavanya Jayakumar, President." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <Layout>
      <section className="bg-hero-gradient">
        <div className="container mx-auto px-4 py-20 max-w-4xl">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">About us</p>
          <h1 className="font-display text-5xl md:text-6xl text-balance">Compassion, organised into action.</h1>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl">
            Hope Trust is a registered charitable trust based in Katpadi, Vellore, founded with a
            single conviction — that medical care and education are not privileges, but rights.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 grid lg:grid-cols-2 gap-14 items-start">
        <div className="space-y-5">
          <h2 className="font-display text-4xl">Our story</h2>
          <p className="text-muted-foreground leading-relaxed">
            What began as a small group of friends running weekend health camps has grown into a
            structured trust serving families across the Vellore district. Our work spans medical
            outreach, school sponsorships, women's welfare, elder care and disaster relief.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We believe in dignified giving — every programme is designed in consultation with the
            community it serves, so that help arrives with respect, not pity.
          </p>
          <div className="grid grid-cols-3 gap-4 pt-4">
            {[
              { n: "2026", l: "Established" },
              { n: "12+", l: "Active programmes" },
              { n: "100%", l: "Volunteer led" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl bg-secondary p-4">
                <div className="font-display text-2xl text-primary">{s.n}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-card border border-border rounded-3xl p-8">
          <h3 className="font-display text-2xl mb-3">Vision</h3>
          <p className="text-muted-foreground mb-6">A community where no family is denied healthcare or schooling for want of resources.</p>
          <h3 className="font-display text-2xl mb-3">Mission</h3>
          <ul className="space-y-2 text-muted-foreground list-disc pl-5">
            <li>Provide accessible medical support and rehabilitation care.</li>
            <li>Sponsor education for under-resourced children and youth.</li>
            <li>Stand by women, the elderly and families in moments of crisis.</li>
            <li>Build a network of volunteers grounded in empathy and discipline.</li>
          </ul>
        </div>
      </section>

      {/* President */}
      <section className="bg-secondary/60">
        <div className="container mx-auto px-4 py-20 grid lg:grid-cols-[auto_1fr] gap-12 items-center max-w-5xl">
          <div className="relative shrink-0">
            <div className="absolute -inset-3 bg-primary/15 rounded-3xl rotate-3" />
            <img src={president} alt="Dr. Lavanya Jayakumar, President of Hope Trust" width={500} height={620} loading="lazy" className="relative rounded-3xl shadow-2xl object-cover w-72 h-[22rem]" />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-2">Leadership</p>
            <h2 className="font-display text-4xl md:text-5xl">Dr. Lavanya Jayakumar</h2>
            <p className="text-primary font-medium mt-1">President, Hope Trust · PT.D.NDT</p>
            <p className="text-muted-foreground mt-5 leading-relaxed">
              A physiotherapist and rehabilitation specialist, Dr. Lavanya founded Hope Trust to bring
              compassionate, hands-on care to families in Vellore who could not otherwise access it.
              She leads the trust's medical outreach and education sponsorship programmes, working
              alongside doctors, teachers and volunteers from across the district.
            </p>
            <blockquote className="mt-6 pl-5 border-l-4 border-primary italic text-foreground/80">
              "Hope is not a feeling — it is a promise we keep, one family at a time."
            </blockquote>
            <div className="mt-8 flex items-center gap-6">
              <img src={seal} alt="Hope Trust official seal" width={140} height={170} loading="lazy" className="h-24 w-auto" />
              <div className="text-sm text-muted-foreground">
                <div className="font-semibold text-foreground">Hope Trust</div>
                Reg. No. B4/28/2026<br />Katpadi, Vellore – 632 007
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 text-center">
        <h2 className="font-display text-3xl md:text-4xl mb-4">Walk with us.</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-6">Whether you bring your time, skills or contribution — there's a place for you here.</p>
        <div className="flex justify-center gap-3 flex-wrap">
          <Button asChild className="rounded-full px-7"><Link to="/volunteer">Volunteer</Link></Button>
          <Button asChild variant="outline" className="rounded-full px-7"><Link to="/donate">Donate</Link></Button>
        </div>
      </section>
    </Layout>
  );
}
