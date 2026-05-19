import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import {
  Stethoscope,
  GraduationCap,
  HeartHandshake,
  Users,
  Sparkles,
  Activity,
  BookOpen,
  HandHeart,
} from "lucide-react";
import { pageSeo } from "@/lib/seo";

export const Route = createFileRoute("/programs")({
  head: () =>
    pageSeo({
      title: "Hope Trust Vellore Programs | Medical Camps & Education Support",
      description:
        "Explore Hope Trust Vellore programmes including free medical camps, physiotherapy support, education sponsorship, women welfare, elder care and family relief.",
      path: "/programs",
    }),
  component: ProgramsPage,
});

const programs = [
  {
    icon: Stethoscope,
    title: "Free Medical Camps",
    text: "Periodic general health, eye and dental camps in villages around Vellore.",
    pillar: "Medical",
  },
  {
    icon: Activity,
    title: "Physiotherapy & Rehab",
    text: "Rehabilitation support for stroke survivors, accident patients and the differently-abled.",
    pillar: "Medical",
  },
  {
    icon: HandHeart,
    title: "Hospital Assistance",
    text: "Help with diagnostics, medicines and treatment costs for under-served patients.",
    pillar: "Medical",
  },
  {
    icon: GraduationCap,
    title: "Child Sponsorship",
    text: "Sponsoring school fees, uniforms and supplies for first-generation learners.",
    pillar: "Education",
  },
  {
    icon: BookOpen,
    title: "Tuition & Mentorship",
    text: "After-school tuition centres for children of daily-wage families.",
    pillar: "Education",
  },
  {
    icon: Sparkles,
    title: "Skill Development",
    text: "Tailoring, computer literacy and vocational training for women and youth.",
    pillar: "Education",
  },
  {
    icon: Users,
    title: "Women & Elder Care",
    text: "Counselling, livelihood support and elder home-visit programmes.",
    pillar: "Welfare",
  },
  {
    icon: HeartHandshake,
    title: "Family Relief",
    text: "Ration kits, essentials and emergency aid for families in crisis.",
    pillar: "Welfare",
  },
];

function ProgramsPage() {
  return (
    <Layout>
      <section className="bg-hero-gradient">
        <div className="container mx-auto px-4 py-20 max-w-4xl">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">
            Programs
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-balance">
            Care that meets people where they are.
          </h1>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl">
            From rural medical camps to classroom sponsorships — here's how Hope Trust serves
            families across Vellore district every month.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {programs.map(({ icon: Icon, title, text, pillar }) => (
            <div
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
              <p className="text-sm text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
