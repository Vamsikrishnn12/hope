import { useEffect, useState } from "react";
import { Check, Copy, Gift, Landmark, MapPin, MessageCircle, ShieldCheck, X } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { BANK_DETAILS, DONATION_ACCOUNT } from "@/lib/donation";
import { createWhatsAppUrl } from "@/lib/whatsapp";

const WHATSAPP_NUMBER = "918825500905";
const MAPS_URL = "https://maps.app.goo.gl/jiKyDZm3U3EfHq5C7";
const PRESETS = [500, 1000, 2500, 5000];

export function FloatingActions() {
  const [showDonate, setShowDonate] = useState(false);
  const [donateOpen, setDonateOpen] = useState(false);
  const [amount, setAmount] = useState(1000);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setShowDonate(true);
      setDonateOpen(true);
    }, 5000);

    return () => window.clearTimeout(timer);
  }, []);

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
    "Hello Hope Trust, I would like to donate by bank transfer.",
    `Planned amount: Rs.${amount.toLocaleString("en-IN")}`,
    "Name:",
    "Transaction reference:",
    "Please help me verify the donation and receive a receipt.",
  ].join("\n");

  return (
    <>
      {showDonate && (
        <div className="fixed right-0 top-1/2 z-50 -translate-y-1/2">
          <button
            type="button"
            onClick={() => setDonateOpen(true)}
            aria-label="Open donation details"
            className="flex min-h-44 w-14 items-center justify-center rounded-l-[2rem] bg-primary px-3 py-6 text-primary-foreground shadow-2xl transition-transform hover:-translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <span className="[writing-mode:vertical-rl] rotate-180 text-sm font-extrabold uppercase tracking-[0.28em]">
              Donate
            </span>
          </button>
        </div>
      )}

      {showDonate && (
        <aside
          className={`fixed right-0 top-1/2 z-[60] max-h-[calc(100dvh-1.5rem)] w-[min(94vw,430px)] -translate-y-1/2 overflow-y-auto rounded-l-3xl border border-r-0 border-border bg-card text-card-foreground shadow-2xl transition-transform duration-300 ${
            donateOpen ? "translate-x-0" : "translate-x-[calc(100%+1rem)]"
          }`}
          aria-hidden={!donateOpen}
        >
          <div className="sticky top-0 z-10 flex items-start justify-between gap-3 border-b border-border bg-card/95 p-5 backdrop-blur">
            <div>
              <div className="mb-2 flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Gift className="size-5" />
              </div>
              <h2 className="font-display text-2xl font-semibold">Donate to Hope Trust</h2>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Your contribution can help a family reach medical care, keep a child learning or
                meet an urgent need with dignity.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setDonateOpen(false)}
              aria-label="Close donation details"
              className="grid size-10 shrink-0 place-items-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-accent"
            >
              <X className="size-4" />
            </button>
          </div>

          <div className="space-y-5 p-5">
            <div>
              <p className="mb-2 text-sm font-semibold">Choose a contribution</p>
              <div className="grid grid-cols-2 gap-2">
                {PRESETS.map((preset) => (
                  <button
                    type="button"
                    key={preset}
                    onClick={() => setAmount(preset)}
                    className={`rounded-full border px-3 py-2.5 text-sm font-semibold transition-colors ${
                      amount === preset
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-background hover:border-primary/60"
                    }`}
                  >
                    Rs.{preset.toLocaleString("en-IN")}
                  </button>
                ))}
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Every amount matters. Transfer any amount directly through your banking app.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border">
              <div className="flex items-center gap-3 bg-primary/5 px-4 py-3">
                <Landmark className="size-5 text-primary" />
                <div>
                  <p className="font-display font-semibold">Bank transfer details</p>
                  <p className="text-xs text-muted-foreground">NEFT · IMPS · RTGS</p>
                </div>
              </div>
              <dl className="divide-y divide-border">
                {BANK_DETAILS.map((detail) => (
                  <div
                    key={detail.label}
                    className="grid grid-cols-[112px_1fr_auto] items-center gap-2 px-4 py-3 text-sm"
                  >
                    <dt className="text-xs text-muted-foreground">{detail.label}</dt>
                    <dd className="break-all font-semibold">{detail.value}</dd>
                    {"copy" in detail && detail.copy ? (
                      <button
                        type="button"
                        onClick={() => copyValue(detail.label, detail.value)}
                        aria-label={`Copy ${detail.label}`}
                        className="grid size-8 place-items-center rounded-full border border-border bg-background text-primary hover:bg-primary/5"
                      >
                        {copied === detail.label ? (
                          <Check className="size-3.5" />
                        ) : (
                          <Copy className="size-3.5" />
                        )}
                      </button>
                    ) : (
                      <span />
                    )}
                  </div>
                ))}
              </dl>
            </div>

            <div className="flex gap-3 rounded-2xl border border-primary/15 bg-primary/5 p-4">
              <ShieldCheck className="mt-0.5 size-5 shrink-0 text-primary" />
              <p className="text-xs leading-relaxed text-muted-foreground">
                Before transferring, confirm that your bank shows the beneficiary as{" "}
                <strong className="text-foreground">{DONATION_ACCOUNT.accountName}</strong>. Never
                share your OTP, PIN or banking password.
              </p>
            </div>

            <Button asChild className="w-full rounded-full" size="lg">
              <a href={createWhatsAppUrl(receiptMessage)} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" />
                Send donation details
              </a>
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              After transferring, send your transaction reference so our team can verify it and
              assist with your receipt.
            </p>
          </div>
        </aside>
      )}

      <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3">
        <a
          href={MAPS_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open location in Google Maps"
          className="grid size-12 place-items-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110"
        >
          <MapPin className="size-5" />
        </a>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="grid size-12 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="size-6" aria-hidden="true">
            <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
        </a>
      </div>
    </>
  );
}
