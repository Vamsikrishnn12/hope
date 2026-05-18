import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { HeartHandshake } from "lucide-react";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Hope Trust" },
      { name: "description", content: "Support Hope Trust's medical and education programmes. Every contribution reaches a family in need." },
    ],
  }),
  component: DonatePage,
});

const PRESETS = [500, 1000, 2500, 5000, 10000];

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(120),
  phone: z.string().trim().min(7).max(20),
  amount: z.number().int().min(100, "Minimum ₹100").max(10000000),
  purpose: z.string().trim().max(80).optional(),
  pan: z.string().trim().max(20).optional(),
  note: z.string().trim().max(400).optional(),
});

function DonatePage() {
  const [amount, setAmount] = useState<number>(1000);
  const [purpose, setPurpose] = useState<string>("Where most needed");
  const [submitting, setSubmitting] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      phone: fd.get("phone"),
      amount,
      purpose,
      pan: fd.get("pan") ?? "",
      note: fd.get("note") ?? "",
    });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      toast.success(`Thank you for pledging ₹${amount.toLocaleString("en-IN")}! We'll email payment details.`);
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 600);
  }

  return (
    <Layout>
      <section className="bg-hero-gradient">
        <div className="container mx-auto px-4 py-20 max-w-4xl">
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-3">Donate</p>
          <h1 className="font-display text-5xl md:text-6xl text-balance">Your kindness, multiplied.</h1>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl">
            Every contribution to Hope Trust goes directly into medical care, classrooms and
            community welfare. Pick an amount — we'll handle the rest.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 grid lg:grid-cols-[1fr_360px] gap-10 items-start max-w-6xl">
        <form onSubmit={onSubmit} className="bg-card border border-border rounded-3xl p-8 md:p-10 space-y-6 order-2 lg:order-1">
          <div>
            <Label className="mb-3 block">Choose an amount (₹)</Label>
            <div className="flex flex-wrap gap-2 mb-3">
              {PRESETS.map((a) => (
                <button
                  type="button"
                  key={a}
                  onClick={() => setAmount(a)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-colors ${amount === a ? "bg-primary text-primary-foreground border-primary" : "bg-background border-border hover:border-primary/50"}`}
                >
                  ₹{a.toLocaleString("en-IN")}
                </button>
              ))}
            </div>
            <Input
              type="number"
              min={100}
              max={10000000}
              value={amount}
              onChange={(e) => setAmount(Math.max(0, Number(e.target.value)))}
              required
            />
          </div>

          <div>
            <Label className="mb-3 block">Direct my donation to</Label>
            <div className="flex flex-wrap gap-2">
              {["Where most needed", "Medical Support", "Education", "Women & Elder Care"].map((p) => (
                <button
                  type="button"
                  key={p}
                  onClick={() => setPurpose(p)}
                  className={`px-4 py-2 rounded-full text-sm border transition-colors ${purpose === p ? "bg-primary text-primary-foreground border-primary" : "bg-background border-border hover:border-primary/50"}`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <Field label="Full name" name="name" required />
            <Field label="Email" name="email" type="email" required />
            <Field label="Phone" name="phone" required />
            <Field label="PAN (for 80G receipt, optional)" name="pan" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="note">Message (optional)</Label>
            <Textarea id="note" name="note" rows={3} maxLength={400} />
          </div>

          <Button type="submit" size="lg" className="w-full rounded-full" disabled={submitting}>
            {submitting ? "Processing…" : `Pledge ₹${amount.toLocaleString("en-IN")}`}
          </Button>
          <p className="text-xs text-muted-foreground text-center">After submission, our team will share bank / UPI details by email.</p>
        </form>

        <aside className="bg-primary text-primary-foreground rounded-3xl p-8 space-y-5 order-1 lg:order-2 lg:sticky lg:top-28">
          <HeartHandshake className="size-9" />
          <h3 className="font-display text-2xl">Where your gift goes</h3>
          <ul className="space-y-3 text-sm text-primary-foreground/85">
            <li><strong className="text-primary-foreground">₹500</strong> — A week's medicine for an elderly patient</li>
            <li><strong className="text-primary-foreground">₹1,000</strong> — School supplies for one child</li>
            <li><strong className="text-primary-foreground">₹2,500</strong> — A village medical camp slot</li>
            <li><strong className="text-primary-foreground">₹10,000</strong> — A child's school fees for a term</li>
          </ul>
          <div className="text-xs text-primary-foreground/70 border-t border-white/20 pt-4">
            Hope Trust · Reg. No. B4/28/2026 · Katpadi, Vellore
          </div>
        </aside>
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
