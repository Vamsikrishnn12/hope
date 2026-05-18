import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { Mail, MapPin, Phone } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Hope Trust" },
      { name: "description", content: "Reach Hope Trust in Katpadi, Vellore for partnerships, queries and support requests." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
  subject: z.string().trim().min(2).max(120),
  message: z.string().trim().min(5, "Please write a short message").max(1000),
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      subject: fd.get("subject"),
      message: fd.get("message"),
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Message sent. We'll respond within 2 working days.");
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 500);
  }

  return (
    <Layout>
      <section className="bg-hero-gradient">
        <div className="container mx-auto px-4 py-20 max-w-4xl">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">Contact</p>
          <h1 className="font-display text-5xl md:text-6xl text-balance">Let's talk.</h1>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl">
            Questions, collaborations or just want to know how to help? Send us a note — we read
            every message.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 grid lg:grid-cols-[1fr_360px] gap-10 max-w-6xl">
        <form onSubmit={onSubmit} className="bg-card border border-border rounded-3xl p-8 md:p-10 space-y-6">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input id="name" name="name" required maxLength={80} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input id="email" name="email" type="email" required maxLength={120} />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject *</Label>
            <Input id="subject" name="subject" required maxLength={120} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea id="message" name="message" rows={6} required maxLength={1000} />
          </div>
          <Button type="submit" size="lg" className="rounded-full px-8" disabled={submitting}>
            {submitting ? "Sending…" : "Send message"}
          </Button>
        </form>

        <aside className="space-y-4">
          <InfoCard icon={<MapPin className="size-5" />} title="Visit us">
            No. 91, K.R. Complex,<br />Vallimalai Road, Kumarappan Nagar,<br />Katpadi, Vellore – 632 007
          </InfoCard>
          <InfoCard icon={<Mail className="size-5" />} title="Email">
            contact@hopetrust.org
          </InfoCard>
          <InfoCard icon={<Phone className="size-5" />} title="Phone">
            +91 00000 00000
          </InfoCard>
        </aside>
      </section>
    </Layout>
  );
}

function InfoCard({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <div className="bg-card border border-border rounded-2xl p-6">
      <div className="size-10 rounded-xl bg-primary/10 text-primary grid place-items-center mb-3">{icon}</div>
      <h3 className="font-display text-lg mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{children}</p>
    </div>
  );
}
