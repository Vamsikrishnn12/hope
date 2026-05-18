import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

export const Route = createFileRoute("/volunteer")({
  head: () => ({
    meta: [
      { title: "Volunteer — Hope Trust" },
      { name: "description", content: "Join Hope Trust as a volunteer for medical camps, education and community outreach in Vellore." },
    ],
  }),
  component: VolunteerPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email").max(120),
  phone: z.string().trim().min(7, "Enter a valid phone").max(20),
  city: z.string().trim().min(2).max(80),
  interests: z.array(z.string()).min(1, "Choose at least one area"),
  availability: z.string().trim().max(120).optional(),
  message: z.string().trim().max(500).optional(),
});

const AREAS = ["Medical Camps", "Education", "Women & Elder Care", "Community Outreach", "Administration"];

function VolunteerPage() {
  const [interests, setInterests] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);

  function toggle(area: string) {
    setInterests((prev) => (prev.includes(area) ? prev.filter((a) => a !== area) : [...prev, area]));
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      city: fd.get("city"),
      interests,
      availability: fd.get("availability") ?? "",
      message: fd.get("message") ?? "",
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Thank you! We'll be in touch soon.");
      (e.target as HTMLFormElement).reset();
      setInterests([]);
      setSubmitting(false);
    }, 600);
  }

  return (
    <Layout>
      <section className="bg-hero-gradient">
        <div className="container mx-auto px-4 py-20 max-w-4xl">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">Volunteer</p>
          <h1 className="font-display text-5xl md:text-6xl text-balance">Give a few hours. Change a story.</h1>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl">
            Doctors, teachers, students, retirees — every pair of willing hands counts. Tell us a
            little about you and we'll match you with a programme.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 max-w-3xl">
        <form onSubmit={onSubmit} className="bg-card border border-border rounded-3xl p-8 md:p-10 space-y-6">
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Full name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" required />
            <Field label="City" name="city" required />
          </div>

          <div>
            <Label className="mb-3 block">Areas of interest</Label>
            <div className="flex flex-wrap gap-2">
              {AREAS.map((a) => {
                const active = interests.includes(a);
                return (
                  <button
                    type="button"
                    key={a}
                    onClick={() => toggle(a)}
                    className={`px-4 py-2 rounded-full text-sm border transition-colors ${active ? "bg-primary text-primary-foreground border-primary" : "bg-background border-border hover:border-primary/50"}`}
                  >
                    {a}
                  </button>
                );
              })}
            </div>
          </div>

          <Field label="Availability (e.g., weekends, evenings)" name="availability" />

          <div className="space-y-2">
            <Label htmlFor="message">Why do you want to volunteer?</Label>
            <Textarea id="message" name="message" rows={4} maxLength={500} placeholder="Tell us a little about yourself…" />
          </div>

          <div className="flex items-start gap-2">
            <Checkbox id="consent" required />
            <Label htmlFor="consent" className="text-sm text-muted-foreground font-normal leading-snug">
              I agree to be contacted by Hope Trust about volunteering opportunities.
            </Label>
          </div>

          <Button type="submit" size="lg" className="w-full rounded-full" disabled={submitting}>
            {submitting ? "Submitting…" : "Submit application"}
          </Button>
        </form>
      </section>
    </Layout>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={name}>{label}{required && <span className="text-destructive"> *</span>}</Label>
      <Input id={name} name={name} type={type} required={required} maxLength={120} />
    </div>
  );
}
