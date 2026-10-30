import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BookOpenCheck,
  ClipboardCheck,
  GraduationCap,
  HandHeart,
  HeartHandshake,
  Landmark,
  MapPin,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import education from "@/assets/education.jpg";
import medical from "@/assets/medical.jpg";
import community from "@/assets/community.jpg";
import communityCare from "@/assets/community-care-illustration.jpg";
import familySupport from "@/assets/family-support-illustration.jpg";
import { StructuredData } from "@/components/StructuredData";
import { faqJsonLd, pageSeo, webPageJsonLd } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageSeo({
      title: "Hope Trust Vellore | Medical Support, Education & Community Welfare",
      description:
        "Hope Trust Vellore is a registered charitable trust in Katpadi supporting medical care, education, family welfare, donations and volunteering.",
      path: "/",
    }),
  component: HomePage,
});

const focusAreas = [
  {
    img: medical,
    icon: Stethoscope,
    tag: "Health",
    title: "Medical support",
    text: "Community health camps, rehabilitation guidance, medicine support and help navigating essential treatment for people with limited resources.",
  },
  {
    img: education,
    icon: GraduationCap,
    tag: "Learning",
    title: "Education support",
    text: "School supplies, fee assistance, mentoring and practical learning support that help children and young people stay connected to education.",
  },
  {
    img: familySupport,
    icon: HeartHandshake,
    tag: "Wellbeing",
    title: "Family welfare",
    text: "Essential supplies, elder-care visits, women-focused support and a compassionate response when a family faces an urgent setback.",
  },
] as const;

const faqs = [
  {
    question: "What does Hope Trust do?",
    answer:
      "Hope Trust works across medical support, education assistance and community welfare in and around Vellore. Each request is reviewed so the team can respond in a practical and respectful way.",
  },
  {
    question: "How can I donate?",
    answer:
      "You can donate by direct bank transfer to the Hope Trust account shown on our donation page. After transferring, send the transaction reference to our team on WhatsApp for verification and receipt support.",
  },
  {
    question: "Can I volunteer without a medical background?",
    answer:
      "Yes. Volunteers can help with event coordination, education activities, outreach, documentation, logistics and many other practical tasks.",
  },
  {
    question: "Can an organisation partner with Hope Trust?",
    answer:
      "Yes. Schools, healthcare professionals, local businesses and community groups can contact us to discuss a programme, sponsorship or volunteer partnership.",
  },
];

function HomePage() {
  return (
    <Layout>
      <StructuredData
        data={[
          webPageJsonLd({
            path: "/",
            name: "Hope Trust Vellore",
            description:
              "Hope Trust Vellore provides medical support, education assistance and family welfare in and around Katpadi, Vellore.",
          }),
          faqJsonLd(faqs),
        ]}
      />
      <section className="relative bg-hero-gradient overflow-hidden">
        <div className="container mx-auto px-4 pt-14 pb-20 md:pt-20 md:pb-28 grid lg:grid-cols-[1.05fr_.95fr] gap-12 items-center">
          <div className="space-y-7">
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-primary bg-primary/10 px-3 py-1.5 rounded-full">
              <Sparkles className="size-3.5" /> Reg. No. B4/28/2026 · Katpadi, Vellore
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-foreground text-balance">
              Practical care. Lasting <em className="text-primary not-italic">hope.</em>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Hope Trust brings medical support, education assistance and family welfare closer to
              people across Vellore—one thoughtful action at a time.
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
            <div className="grid sm:grid-cols-3 gap-3 pt-3">
              <TrustChip icon={ShieldCheck} text="Registered trust" />
              <TrustChip icon={MapPin} text="Vellore focused" />
              <TrustChip icon={Users} text="Volunteer led" />
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-primary/10 rounded-[2rem] rotate-2" />
            <img
              src={hero}
              alt="Hope Trust community healthcare outreach"
              width={1600}
              height={1100}
              className="relative rounded-[2rem] shadow-2xl object-cover aspect-[4/5] w-full"
            />
            <div className="absolute -bottom-5 left-5 right-5 sm:left-auto sm:right-5 sm:w-72 rounded-2xl bg-card/95 backdrop-blur border border-border p-5 shadow-xl">
              <p className="text-xs uppercase tracking-[0.16em] font-semibold text-primary mb-2">
                Our belief
              </p>
              <p className="font-display text-lg leading-snug">
                Care should arrive with dignity, clarity and human connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mb-14">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">
            What we do
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-balance">
            Support for the moments that shape a life.
          </h2>
          <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
            We connect local needs with people who are ready to help. Our programmes focus on
            health, learning and family stability—the foundations that allow communities to move
            forward with confidence.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {focusAreas.map(({ img, icon: Icon, tag, title, text }) => (
            <FocusCard
              key={title}
              img={img}
              icon={<Icon className="size-5" />}
              tag={tag}
              title={title}
              text={text}
            />
          ))}
        </div>
        <Button asChild variant="outline" size="lg" className="rounded-full px-7 mt-9">
          <Link to="/programs">
            Explore all programmes <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>
      </section>

      <section className="bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4 py-20 grid lg:grid-cols-[1.1fr_.9fr] gap-12 items-center">
          <div className="relative">
            <img
              src={communityCare}
              alt="Illustration of a Vellore community health and education outreach day"
              width={1536}
              height={768}
              loading="lazy"
              className="rounded-3xl shadow-2xl aspect-[16/9] object-cover w-full"
            />
            <span className="absolute bottom-3 left-3 rounded-full bg-black/55 text-white px-3 py-1 text-[11px] font-medium backdrop-blur">
              Illustrative scene
            </span>
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary-foreground/70 mb-3">
              Community-centred care
            </p>
            <h2 className="font-display text-4xl md:text-5xl mb-5 text-balance">
              Help that listens before it acts.
            </h2>
            <p className="text-primary-foreground/85 text-lg leading-relaxed">
              Every family and neighbourhood has different needs. We begin by listening, work with
              local professionals and volunteers, and aim for support that is useful today while
              opening a path toward greater stability tomorrow.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <Value
                icon={HandHeart}
                title="Dignity first"
                text="People are partners in the process, not stories to be used."
              />
              <Value
                icon={ClipboardCheck}
                title="Practical response"
                text="Support is shaped around a clear, real-world need."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">
            How support becomes action
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-balance">
            A simple path from concern to care.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          <Step
            number="01"
            icon={Users}
            title="Listen and understand"
            text="The team speaks with families, local contacts and professionals to understand what support is appropriate."
          />
          <Step
            number="02"
            icon={BookOpenCheck}
            title="Plan the response"
            text="Volunteers, resources and partner expertise are coordinated around a clear and practical next step."
          />
          <Step
            number="03"
            icon={HeartHandshake}
            title="Act and follow through"
            text="Support is delivered respectfully, with communication and follow-up where continued guidance is needed."
          />
        </div>
      </section>

      <section className="bg-secondary/55">
        <div className="container mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img
              src={community}
              alt="Community volunteers organising support"
              width={1200}
              height={900}
              loading="lazy"
              className="rounded-3xl w-full h-80 object-cover"
            />
            <img
              src={familySupport}
              alt="Illustration of volunteers delivering a family essentials kit"
              width={1536}
              height={1024}
              loading="lazy"
              className="rounded-3xl w-full h-80 object-cover mt-10"
            />
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">
              Responsible giving
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-balance mb-5">
              Clear information builds lasting trust.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-7">
              Our donation page lists the bank account in Hope Trust’s name and lets donors copy the
              verified account number and IFSC directly. After a transfer, donors can contact the
              team with their transaction reference for verification and receipt support.
            </p>
            <div className="space-y-4">
              <InfoLine
                icon={Landmark}
                title="Direct bank transfer"
                text="Donate to the Hope Trust current account through NEFT, IMPS or RTGS."
              />
              <InfoLine
                icon={ShieldCheck}
                title="Beneficiary verification"
                text="Confirm that your bank displays HOPE TRUST before completing the transfer."
              />
              <InfoLine
                icon={ClipboardCheck}
                title="Receipt assistance"
                text="Share your transaction reference with the team after donating."
              />
            </div>
            <Button asChild size="lg" className="rounded-full px-7 mt-8">
              <Link to="/donate">
                View donation details <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-24">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">
            Take part
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-balance">
            There is more than one way to carry hope.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          <ActionCard
            icon={HeartHandshake}
            title="Donate"
            text="Help fund medical, education and family-welfare support through a direct bank transfer."
            to="/donate"
            linkText="Make a donation"
          />
          <ActionCard
            icon={Users}
            title="Volunteer"
            text="Contribute your time, professional skills or practical support to programmes in Vellore."
            to="/volunteer"
            linkText="Join as a volunteer"
          />
          <ActionCard
            icon={HandHeart}
            title="Partner"
            text="Work with Hope Trust as a school, healthcare professional, business or community group."
            to="/contact"
            linkText="Start a conversation"
          />
        </div>
      </section>

      <section className="container mx-auto px-4 pb-24 grid lg:grid-cols-[.8fr_1.2fr] gap-12 items-start">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">FAQ</p>
          <h2 className="font-display text-4xl md:text-5xl text-balance">
            Questions, answered clearly.
          </h2>
          <p className="text-muted-foreground mt-5 leading-relaxed">
            If you need help with a donation, volunteering or a support request, our team is only a
            message away.
          </p>
          <Button asChild variant="outline" className="rounded-full px-6 mt-6">
            <Link to="/contact">Contact Hope Trust</Link>
          </Button>
        </div>
        <div className="space-y-3">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-border bg-card p-5 open:border-primary/35"
            >
              <summary className="cursor-pointer list-none font-display text-lg flex items-center justify-between gap-4">
                {item.question}
                <span className="text-primary text-2xl leading-none group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <p className="text-muted-foreground leading-relaxed pt-4 pr-8">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 pb-24">
        <div className="rounded-[2rem] bg-primary text-primary-foreground px-6 py-14 md:p-16 text-center overflow-hidden relative">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_20%,white_0,transparent_35%),radial-gradient(circle_at_80%_80%,white_0,transparent_30%)]" />
          <div className="relative max-w-2xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl mb-4">Be part of someone’s hope.</h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-primary-foreground/85">
              Give, volunteer or partner with us. Every thoughtful action can help a family take its
              next step.
            </p>
            <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link
                to="/donate"
                className="inline-flex min-h-12 min-w-44 items-center justify-center rounded-full bg-white px-7 text-sm font-bold text-primary shadow-lg shadow-black/10 transition-all hover:-translate-y-0.5 hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                Donate now
              </Link>
              <Link
                to="/volunteer"
                className="inline-flex min-h-12 min-w-44 items-center justify-center rounded-full border-2 border-white/70 bg-transparent px-7 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:border-white hover:bg-white hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              >
                Volunteer with us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function TrustChip({ icon: Icon, text }: { icon: typeof ShieldCheck; text: string }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-border bg-card/65 px-3 py-2.5 text-xs font-semibold">
      <Icon className="size-4 text-primary" /> {text}
    </div>
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
    <article className="group overflow-hidden rounded-3xl border border-border bg-card h-full">
      <img
        src={img}
        alt={title}
        width={1200}
        height={900}
        loading="lazy"
        className="aspect-[4/3] object-cover w-full group-hover:scale-105 transition-transform duration-700"
      />
      <div className="p-7">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase text-primary mb-3">
          <span className="size-8 rounded-full bg-primary/10 grid place-items-center">{icon}</span>
          {tag}
        </div>
        <h3 className="font-display text-2xl mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
      </div>
    </article>
  );
}

function Value({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof HandHeart;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-white/20 bg-white/10 p-4">
      <Icon className="size-5 mb-3" />
      <h3 className="font-display text-lg mb-1">{title}</h3>
      <p className="text-sm text-primary-foreground/75 leading-relaxed">{text}</p>
    </div>
  );
}

function Step({
  number,
  icon: Icon,
  title,
  text,
}: {
  number: string;
  icon: typeof Users;
  title: string;
  text: string;
}) {
  return (
    <article className="relative rounded-3xl border border-border bg-card p-7 overflow-hidden">
      <span className="absolute right-5 top-2 font-display text-7xl text-primary/7">{number}</span>
      <div className="size-11 rounded-2xl bg-primary/10 text-primary grid place-items-center mb-6">
        <Icon className="size-5" />
      </div>
      <h3 className="font-display text-xl mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
    </article>
  );
}

function InfoLine({
  icon: Icon,
  title,
  text,
}: {
  icon: typeof Landmark;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4">
      <div className="size-10 rounded-xl bg-primary/10 text-primary grid place-items-center shrink-0">
        <Icon className="size-5" />
      </div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground mt-1">{text}</p>
      </div>
    </div>
  );
}

function ActionCard({
  icon: Icon,
  title,
  text,
  to,
  linkText,
}: {
  icon: typeof HeartHandshake;
  title: string;
  text: string;
  to: "/donate" | "/volunteer" | "/contact";
  linkText: string;
}) {
  return (
    <article className="rounded-3xl border border-border bg-card p-7 flex flex-col">
      <div className="size-12 rounded-2xl bg-primary/10 text-primary grid place-items-center mb-6">
        <Icon className="size-5" />
      </div>
      <h3 className="font-display text-2xl mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{text}</p>
      <Link
        to={to}
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:gap-3 transition-all"
      >
        {linkText} <ArrowRight className="size-4" />
      </Link>
    </article>
  );
}
