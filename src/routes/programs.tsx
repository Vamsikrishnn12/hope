import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  Activity,
  ArrowRight,
  BookOpen,
  Check,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";
import medical from "@/assets/medical.jpg";
import education from "@/assets/education.jpg";
import familySupport from "@/assets/family-support-illustration.jpg";
import communityCare from "@/assets/community-care-illustration.jpg";
import { StructuredData } from "@/components/StructuredData";
import { absoluteUrl, breadcrumbJsonLd, pageSeo, webPageJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/programs")({
  head: () =>
    pageSeo({
      title: "Hope Trust Vellore Programs | Medical Camps & Education Support",
      description:
        "Explore Hope Trust Vellore programmes including medical support, physiotherapy, education assistance, women welfare, elder care and family relief.",
      path: "/programs",
    }),
  component: ProgramsPage,
});

const programs = [
  {
    icon: Stethoscope,
    title: "Community Medical Camps",
    text: "General health, eye and dental screening opportunities in communities around Vellore.",
    pillar: "Medical",
  },
  {
    icon: Activity,
    title: "Physiotherapy & Rehab",
    text: "Rehabilitation guidance for stroke survivors, accident patients and people with mobility needs.",
    pillar: "Medical",
  },
  {
    icon: HandHeart,
    title: "Treatment Assistance",
    text: "Support navigating diagnostics, medicines and essential treatment needs for underserved patients.",
    pillar: "Medical",
  },
  {
    icon: GraduationCap,
    title: "Child Education Support",
    text: "Help with school fees, uniforms, supplies and learning continuity for under-resourced children.",
    pillar: "Education",
  },
  {
    icon: BookOpen,
    title: "Tuition & Mentorship",
    text: "Learning guidance and encouragement for children from families with limited educational support.",
    pillar: "Education",
  },
  {
    icon: Sparkles,
    title: "Skill Development",
    text: "Practical learning opportunities such as tailoring, computer literacy and vocational guidance.",
    pillar: "Education",
  },
  {
    icon: Users,
    title: "Women & Elder Care",
    text: "Listening, livelihood guidance and supportive outreach for women and older community members.",
    pillar: "Welfare",
  },
  {
    icon: HeartHandshake,
    title: "Family Relief",
    text: "Essential supplies and coordinated local support when families face an urgent setback.",
    pillar: "Welfare",
  },
] as const;

const programsJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Hope Trust Vellore programmes",
  itemListElement: programs.map((program, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: program.title,
      description: program.text,
      provider: { "@id": "https://hopetrustvellore.in/#organization" },
      areaServed: { "@type": "City", name: "Vellore" },
      url: absoluteUrl("/programs"),
    },
  })),
};

function ProgramsPage() {
  return (
    <Layout>
      <StructuredData
        data={[
          webPageJsonLd({
            path: "/programs",
            name: "Hope Trust Vellore programmes",
            description:
              "Medical support, physiotherapy, education assistance, women and elder care, and family welfare programmes in Vellore.",
            type: "CollectionPage",
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Programmes", path: "/programs" },
          ]),
          programsJsonLd,
        ]}
      />
      <section className="bg-hero-gradient border-b border-border/60">
        <div className="container mx-auto px-4 py-16 md:py-20 grid lg:grid-cols-[.9fr_1.1fr] gap-12 items-center max-w-6xl">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">
              Our programmes
            </p>
            <h1 className="font-display text-5xl md:text-6xl text-balance">
              Care that meets people where they are.
            </h1>
            <p className="text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">
              From community medical support to classroom assistance and family welfare, Hope Trust
              responds to practical needs across Vellore with dignity and local involvement.
            </p>
          </div>
          <div className="relative">
            <img
              src={communityCare}
              alt="Illustration of community health and education support in Vellore"
              width={1536}
              height={768}
              className="rounded-3xl shadow-2xl aspect-[16/10] object-cover"
            />
            <span className="absolute bottom-3 left-3 rounded-full bg-black/55 text-white px-3 py-1 text-[11px] font-medium backdrop-blur">
              Illustrative scene
            </span>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 max-w-6xl">
        <div className="max-w-2xl mb-11">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">
            Areas of support
          </p>
          <h2 className="font-display text-4xl text-balance">
            Different needs. One commitment to care.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map(({ icon: Icon, title, text, pillar }) => (
            <article
              key={title}
              className="bg-card border border-border rounded-2xl p-7 hover:border-primary/50 hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="size-11 rounded-xl bg-primary/10 text-primary grid place-items-center">
                  <Icon className="size-5" />
                </div>
                <span className="text-[10px] tracking-[0.18em] uppercase font-semibold text-primary/80 bg-primary/5 px-2 py-1 rounded-full">
                  {pillar}
                </span>
              </div>
              <h3 className="font-display text-xl mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary/55">
        <div className="container mx-auto px-4 py-20 max-w-6xl">
          <div className="max-w-2xl mb-12">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">
              Programme pathways
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-balance">
              Support designed around the whole person.
            </h2>
            <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
              Health, education and family wellbeing are closely connected. Our programme areas can
              work together when a person or family needs more than one kind of help.
            </p>
          </div>
          <div className="space-y-6">
            <ProgrammeFeature
              image={medical}
              alt="Community medical support"
              label="Health and rehabilitation"
              title="Care beyond a single consultation"
              text="Our health work focuses on access, guidance and continuity—from basic screening and awareness to rehabilitation support and help with essential treatment needs."
              points={[
                "Community health and awareness camps",
                "Physiotherapy and rehabilitation guidance",
                "Medicine and diagnostic assistance",
              ]}
            />
            <ProgrammeFeature
              image={education}
              alt="Children receiving education support"
              label="Education and opportunity"
              title="Helping learners stay on their path"
              text="Education support addresses the everyday barriers that can interrupt learning, while encouraging confidence, mentorship and practical skills for the future."
              points={[
                "School-fee and learning-material support",
                "Tuition, mentoring and encouragement",
                "Skill development for youth and women",
              ]}
              reverse
            />
            <ProgrammeFeature
              image={familySupport}
              alt="Illustration of a respectful family welfare visit"
              label="Family and community welfare"
              title="A steady hand during difficult moments"
              text="When a family faces a sudden setback, timely essentials and a caring local network can protect dignity and create room for recovery."
              points={[
                "Family essentials and ration support",
                "Women and elder-care outreach",
                "Volunteer coordination for urgent needs",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20 max-w-4xl text-center">
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">
          Get involved
        </p>
        <h2 className="font-display text-4xl md:text-5xl text-balance mb-5">
          Help a programme move from idea to action.
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
          Donate, volunteer your skills or speak with us about a local partnership that can
          strengthen care in Vellore.
        </p>
        <div className="flex justify-center flex-wrap gap-3">
          <Button asChild size="lg" className="rounded-full px-7">
            <Link to="/donate">
              Donate now <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-7">
            <Link to="/contact">Discuss a partnership</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}

function ProgrammeFeature({
  image,
  alt,
  label,
  title,
  text,
  points,
  reverse = false,
}: {
  image: string;
  alt: string;
  label: string;
  title: string;
  text: string;
  points: string[];
  reverse?: boolean;
}) {
  return (
    <article className="grid lg:grid-cols-2 bg-card border border-border rounded-3xl overflow-hidden">
      <img
        src={image}
        alt={alt}
        width={1200}
        height={900}
        loading="lazy"
        className={`w-full h-full min-h-72 object-cover ${reverse ? "lg:order-2" : ""}`}
      />
      <div className="p-7 md:p-10 flex flex-col justify-center">
        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-primary mb-3">
          {label}
        </p>
        <h3 className="font-display text-3xl mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed mb-6">{text}</p>
        <ul className="space-y-3">
          {points.map((point) => (
            <li key={point} className="flex gap-3 text-sm">
              <span className="size-6 rounded-full bg-primary/10 text-primary grid place-items-center shrink-0">
                <Check className="size-3.5" />
              </span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
