import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { createWhatsAppUrl } from "@/lib/whatsapp";
import { BANK_DETAILS } from "@/lib/donation";
import { StructuredData } from "@/components/StructuredData";
import { absoluteUrl, breadcrumbJsonLd, pageSeo, webPageJsonLd } from "@/lib/seo";
import {
  BadgeIndianRupee,
  Check,
  Copy,
  HeartHandshake,
  Landmark,
  MessageCircle,
  ReceiptText,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/donate")({
  head: () =>
    pageSeo({
      title: "Donate to Hope Trust Vellore | Bank Transfer Details",
      description:
        "Support Hope Trust Vellore through a direct bank transfer for medical care, education and community welfare programmes.",
      path: "/donate",
    }),
  component: DonatePage,
});

function DonatePage() {
  const [copied, setCopied] = useState<string | null>(null);

  async function copyValue(label: string, value: string) {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      toast.success(`${label} copied`);
      window.setTimeout(() => setCopied(null), 1800);
    } catch {
      toast.error(`Could not copy ${label.toLowerCase()}. Please select it manually.`);
    }
  }

  const receiptMessage = [
    "Hello Hope Trust, I have made a donation by bank transfer.",
    "Name:",
    "Amount:",
    "Transaction reference:",
    "Please help me with a donation receipt.",
  ].join("\n");

  return (
    <Layout>
      <StructuredData
        data={[
          webPageJsonLd({
            path: "/donate",
            name: "Donate to Hope Trust Vellore",
            description:
              "Donate directly to Hope Trust Vellore by bank transfer to support medical care, education and community welfare.",
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Donate", path: "/donate" },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "DonateAction",
            recipient: { "@id": "https://hopetrustvellore.in/#organization" },
            target: {
              "@type": "EntryPoint",
              urlTemplate: absoluteUrl("/donate"),
              actionPlatform: [
                "https://schema.org/DesktopWebPlatform",
                "https://schema.org/MobileWebPlatform",
              ],
            },
          },
        ]}
      />
      <section className="bg-hero-gradient border-b border-border/60">
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
          <div className="grid lg:grid-cols-[1fr_380px] gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary mb-5">
                <HeartHandshake className="size-4" />
                Donate with confidence
              </div>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-balance leading-tight">
                Your kindness can change a life.
              </h1>
              <p className="text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">
                Make a direct bank transfer to Hope Trust and help fund medical care, education and
                community welfare for families across Vellore.
              </p>
            </div>

            <div className="rounded-3xl bg-primary p-7 text-primary-foreground shadow-xl shadow-primary/15">
              <BadgeIndianRupee className="size-9 mb-5" />
              <p className="font-display text-2xl mb-2">100% direct giving</p>
              <p className="text-sm leading-relaxed text-primary-foreground/85">
                Transfer securely from your banking app using NEFT, IMPS or RTGS. No payment link or
                intermediary is required.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-14 md:py-20 max-w-6xl">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_360px] gap-8 lg:gap-10 items-start">
          <div className="bg-card border border-border rounded-3xl overflow-hidden shadow-sm">
            <div className="flex items-start gap-4 p-6 md:p-8 border-b border-border bg-muted/35">
              <div className="size-12 rounded-2xl bg-primary/10 text-primary grid place-items-center shrink-0">
                <Landmark className="size-6" />
              </div>
              <div>
                <h2 className="font-display text-2xl">Bank transfer details</h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Add Hope Trust as a beneficiary in your banking app.
                </p>
              </div>
            </div>

            <dl className="divide-y divide-border">
              {BANK_DETAILS.map((detail) => (
                <div
                  key={detail.label}
                  className="grid sm:grid-cols-[180px_1fr_auto] gap-2 sm:gap-5 items-center px-6 md:px-8 py-5"
                >
                  <dt className="text-sm font-medium text-muted-foreground">{detail.label}</dt>
                  <dd className="font-semibold tracking-wide break-all">{detail.value}</dd>
                  {"copy" in detail && detail.copy ? (
                    <button
                      type="button"
                      onClick={() => copyValue(detail.label, detail.value)}
                      className="inline-flex items-center gap-2 justify-self-start sm:justify-self-end rounded-full border border-border bg-background px-3.5 py-2 text-xs font-semibold hover:border-primary/40 hover:text-primary transition-colors"
                      aria-label={`Copy ${detail.label}`}
                    >
                      {copied === detail.label ? (
                        <Check className="size-3.5" />
                      ) : (
                        <Copy className="size-3.5" />
                      )}
                      {copied === detail.label ? "Copied" : "Copy"}
                    </button>
                  ) : (
                    <span />
                  )}
                </div>
              ))}
            </dl>

            <div className="m-6 md:m-8 rounded-2xl border border-primary/15 bg-primary/5 p-5 flex gap-3">
              <ShieldCheck className="size-5 text-primary shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Before confirming your transfer, please make sure the beneficiary name shown by your
                bank is <strong className="text-foreground">HOPE TRUST</strong>. These details are
                for donations in Indian rupees.
              </p>
            </div>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-28">
            <div className="bg-card border border-border rounded-3xl p-7">
              <div className="size-11 rounded-2xl bg-primary/10 text-primary grid place-items-center mb-5">
                <ReceiptText className="size-5" />
              </div>
              <h2 className="font-display text-xl mb-2">Request your receipt</h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                After transferring, send us your name, amount and transaction reference. Our team
                will verify the donation and help with your receipt.
              </p>
              <Button asChild className="w-full rounded-full">
                <a
                  href={createWhatsAppUrl(receiptMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="size-4" />
                  Send transfer details
                </a>
              </Button>
            </div>

            <div className="rounded-3xl border border-border bg-muted/45 p-7">
              <h3 className="font-display text-lg mb-3">Please note</h3>
              <ul className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <li className="flex gap-2.5">
                  <Check className="size-4 text-primary shrink-0 mt-0.5" />
                  Keep your bank transaction reference for verification.
                </li>
                <li className="flex gap-2.5">
                  <Check className="size-4 text-primary shrink-0 mt-0.5" />
                  For donations from outside India, contact us before transferring.
                </li>
                <li className="flex gap-2.5">
                  <Check className="size-4 text-primary shrink-0 mt-0.5" />
                  Never share your OTP, PIN or banking password with anyone.
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
}
