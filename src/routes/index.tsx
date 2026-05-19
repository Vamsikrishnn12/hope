import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  HeartHandshake,
  GraduationCap,
  Stethoscope,
  Users,
  Sparkles,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import education from "@/assets/education.jpg";
import medical from "@/assets/medical.jpg";
import community from "@/assets/community.jpg";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageSeo({
      title: "Hope Trust Vellore | Medical Support, Education & Community Welfare",
      description:
        "Hope Trust Vellore is a registered charitable trust in Katpadi supporting medical camps, education sponsorships, welfare programmes, donations and volunteering.",
      path: "/",
    }),
  component: HomePage,
});

function HomePage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-hero-gradient overflow-hidden">
        <div className="container mx-auto px-4 pt-16 pb-24 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary bg-primary/10 px-3 py-1.5 rounded-full">
              <Sparkles className="size-3.5" /> Reg. No. B4/28/2026 · Katpadi, Vellore
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground text-balance">
              Carrying <em className="text-primary not-italic">hope</em> to every doorstep.
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Hope Trust is a charitable initiative committed to medical support, education and the
              everyday welfare of families in and around Vellore. Together, we turn compassion into
              action.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full px-7 ring-brand">
                <Link to="/donate">
                  Donate now <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full px-7">
                <Link to="/volunteer">Become a volunteer</Link>
              </Button>
            </div>
            <div className="flex gap-8 pt-6 border-t border-border">
              {[
                { n: "1,200+", l: "Lives touched" },
                { n: "45+", l: "Medical camps" },
                { n: "300+", l: "Children sponsored" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl text-primary">{s.n}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-3xl rotate-2" />
            <img
              src={hero}
              alt="Doctor with patients at a Hope Trust community camp"
              width={1600}
              height={1100}
              className="relative rounded-3xl shadow-2xl object-cover aspect-[4/5] w-full"
            />
          </div>
        </div>
      </section>

      {/* Focus areas */}
      <section className="container mx-auto px-4 py-24">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">
            What we do
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-balance">
            Two pillars. Many ways to help.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <FocusCard
            img={medical}
            icon={<Stethoscope className="size-5" />}
            tag="Pillar 01"
            title="Medical Support"
            text="Free health camps, physiotherapy, rehabilitation aid, hospital assistance for the under-served, and awareness drives on preventive care."
          />
          <FocusCard
            img={education}
            icon={<GraduationCap className="size-5" />}
            tag="Pillar 02"
            title="Education Support"
            text="Sponsorships, school supplies, tuition for first-generation learners and skill-development programmes for youth and women."
          />
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {[
            {
              icon: HeartHandshake,
              t: "Family Welfare",
              d: "Essentials, ration kits and emergency aid for families in crisis.",
            },
            {
              icon: Users,
              t: "Women & Elderly",
              d: "Counselling, livelihood support and elder-care home visits.",
            },
            {
              icon: Sparkles,
              t: "Community Outreach",
              d: "Awareness, hygiene drives and disaster relief across Vellore district.",
            },
          ].map(({ icon: Icon, t, d }) => (
            <div
              key={t}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors"
            >
              <div className="size-10 rounded-xl bg-primary/10 text-primary grid place-items-center mb-4">
                <Icon className="size-5" />
              </div>
              <h3 className="font-display text-xl mb-1.5">{t}</h3>
              <p className="text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission strip */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
          <img
            src={community}
            alt="Volunteers distributing supplies"
            width={1200}
            height={900}
            loading="lazy"
            className="rounded-2xl shadow-2xl aspect-[4/3] object-cover"
          />
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary-foreground/70 mb-3">
              Our mission
            </p>
            <h2 className="font-display text-4xl md:text-5xl mb-5">
              Where need meets a willing hand.
            </h2>
            <p className="text-primary-foreground/85 text-lg leading-relaxed">
              Hope Trust exists to ensure that no one in our community is left behind for lack of
              medicine, schooling, or a kind voice. Every rupee and every hour you give travels
              directly into the hands of families that need it most.
            </p>
            <Button asChild variant="secondary" size="lg" className="mt-7 rounded-full px-7">
              <Link to="/about">
                Read our story <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-24 text-center">
        <h2 className="font-display text-4xl md:text-5xl mb-4">Be a part of someone's hope.</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
          Volunteer your time, contribute a meal, or sponsor a child's school year. Every act
          counts.
        </p>
        <div className="flex justify-center flex-wrap gap-3">
          <Button asChild size="lg" className="rounded-full px-7">
            <Link to="/donate">Donate</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-7">
            <Link to="/volunteer">Volunteer</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}

function FocusCard({
  img,
  icon,
  tag,
  title,
  text,
}: {
  img: string;
  icon: React.ReactNode;
  tag: string;
  title: string;
  text: string;
}) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-border bg-card">
      <img
        src={img}
        alt={title}
        width={1200}
        height={900}
        loading="lazy"
        className="aspect-[16/10] object-cover w-full group-hover:scale-105 transition-transform duration-700"
      />
      <div className="p-7">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-primary mb-3">
          <span className="size-7 rounded-full bg-primary/10 grid place-items-center">{icon}</span>
          {tag}
        </div>
        <h3 className="font-display text-3xl mb-2">{title}</h3>
        <p className="text-muted-foreground">{text}</p>
      </div>
    </article>
  );
}
