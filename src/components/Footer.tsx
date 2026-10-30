import { Link } from "@tanstack/react-router";
import { ArrowRight, HeartHandshake, Landmark, MapPin, Phone, ShieldCheck } from "lucide-react";
import logo from "@/assets/logo.png";
import { DONATION_ACCOUNT } from "@/lib/donation";

export function Footer() {
  return (
    <footer className="mt-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 pt-12">
        <div className="grid gap-6 rounded-3xl border border-white/20 bg-white/10 p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div className="flex gap-4">
            <div className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white text-primary">
              <HeartHandshake className="size-6" />
            </div>
            <div>
              <h2 className="font-display text-2xl">
                Your kindness can become someone’s next step.
              </h2>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/80">
                A contribution of any size can help Hope Trust bring medical support, education
                assistance and urgent family welfare closer to people across Vellore.
              </p>
            </div>
          </div>
          <Link
            to="/donate"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-primary transition-transform hover:-translate-y-0.5"
          >
            Donate now <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>

      <div className="container mx-auto grid gap-10 px-4 py-14 md:grid-cols-2 xl:grid-cols-[1.1fr_.65fr_1.1fr_.7fr_1.35fr]">
        <div className="space-y-3">
          <img src={logo} alt="Hope Trust" className="h-14 w-auto rounded-md bg-white p-1" />
          <p className="max-w-xs text-sm font-semibold leading-relaxed text-white">
            A registered charitable trust dedicated to medical support, education and community
            welfare in Vellore.
          </p>
        </div>

        <div>
          <h3 className="font-display mb-3 text-lg">Explore</h3>
          <ul className="space-y-2 text-sm font-semibold text-white/85">
            <li>
              <Link to="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link to="/programs" className="hover:text-white">
                Programs
              </Link>
            </li>
            <li>
              <Link to="/volunteer" className="hover:text-white">
                Volunteer
              </Link>
            </li>
            <li>
              <Link to="/donate" className="hover:text-white">
                Donate
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display mb-3 text-lg">Contact</h3>
          <ul className="space-y-3 text-sm font-semibold text-white/85">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <a
                href="https://maps.app.goo.gl/jiKyDZm3U3EfHq5C7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                First Floor, No. 91, K.R. Complex, Vallimalai Road, opposite Vinayagar Temple,
                Kumarappan Nagar, KRS Nagar, Katpadi, Vellore, Tamil Nadu 632007
              </a>
            </li>
            <li className="flex gap-2">
              <Phone className="size-4" />
              <a href="tel:+918825500905" className="hover:text-white">
                +91 88255 00905
              </a>
            </li>
            <li className="flex gap-2">
              <Phone className="size-4" />
              <a href="tel:+919442756140" className="hover:text-white">
                +91 94427 56140
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display mb-3 text-lg">Registration</h3>
          <p className="text-sm font-semibold leading-relaxed text-white/85">
            Reg. No. B4/28/2026
            <br />
            Katpadi, Vellore
          </p>
          <div className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-white/70">
            <ShieldCheck className="mt-0.5 size-4 shrink-0" />
            Confirm the beneficiary name before transferring.
          </div>
        </div>

        <div className="rounded-2xl border border-white/20 bg-black/10 p-5">
          <div className="mb-4 flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-xl bg-white/15">
              <Landmark className="size-5" />
            </div>
            <div>
              <h3 className="font-display text-lg">Donate by bank transfer</h3>
              <p className="text-xs text-white/65">NEFT · IMPS · RTGS</p>
            </div>
          </div>
          <dl className="space-y-2.5 text-sm">
            <FooterDetail label="Account name" value={DONATION_ACCOUNT.accountName} />
            <FooterDetail label="Bank" value={DONATION_ACCOUNT.bank} />
            <FooterDetail label="Account number" value={DONATION_ACCOUNT.accountNumber} />
            <FooterDetail label="IFSC" value={DONATION_ACCOUNT.ifsc} />
            <FooterDetail label="Type" value={DONATION_ACCOUNT.accountType} />
            <FooterDetail label="Branch" value={DONATION_ACCOUNT.branch} />
          </dl>
          <Link
            to="/donate"
            className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white hover:gap-3 transition-all"
          >
            Donation instructions <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>

      <div className="border-t border-white/20 py-5 text-center text-xs font-semibold text-white/80">
        © {new Date().getFullYear()} Hope Trust. All rights reserved.
      </div>
    </footer>
  );
}

function FooterDetail({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[92px_1fr] gap-2">
      <dt className="text-xs text-white/60">{label}</dt>
      <dd className="break-all font-semibold text-white">{value}</dd>
    </div>
  );
}
