import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";

const heroMetrics = [
  { label: "Total Listed Value", value: "$48,750,000+" },
  { label: "Active Members", value: "12,540+" },
  { label: "Secured Capital", value: "$31,250,000+" },
  { label: "Illustrative APY/ROI", value: "Market-dependent" },
];

const cryptoAssets = ["ETH", "USDC", "USDT", "BTC", "SOL"];

const securityItems = [
  "Smart-contract based records",
  "Multi-signature escrow workflow",
  "KYC / AML verification",
  "Legal & regulatory review",
  "Transparent ownership history",
];

export default function HeroSection() {
  return (
    <section
      id="top"
      className="hero-aerial relative overflow-hidden border-b border-[#0b2746]/10"
    >
      <div className="relative z-10 mx-auto max-w-[1760px] px-4 py-8 sm:px-6 lg:px-10 lg:py-9">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(390px,0.58fr)]">
          <div className="max-w-5xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#d6a653]/70 bg-[#061a31]/65 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#f5d38d] shadow-sm">
              <BadgeCheck className="h-4 w-4" aria-hidden="true" />
              Crypto-backed real estate platform
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Secure Property Access.
              <span className="block text-[#e7bd68]">
                Transparent. Tokenized. On-Chain.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-100 sm:text-lg">
              Explore premium real estate projects with blockchain-based
              transparency, digital ownership records, and secure escrow-style
              workflows.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#properties"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-[6px] bg-[#d6a653] px-6 text-sm font-bold text-[#061a31] shadow-[0_12px_24px_rgba(0,0,0,0.22)] transition hover:bg-[#e5b965]"
              >
                Explore Properties
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="#why-estatechain"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-[6px] border border-white/35 bg-[#061a31]/45 px-6 text-sm font-bold text-white backdrop-blur transition hover:bg-white/10"
              >
                How It Works
              </Link>
            </div>

            <div className="mt-7 grid max-w-5xl overflow-hidden rounded-[6px] border border-white/20 bg-[#061a31]/72 shadow-[0_18px_40px_rgba(0,0,0,0.2)] backdrop-blur md:grid-cols-4">
              {heroMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="border-b border-white/12 px-5 py-4 md:border-b-0 md:border-r md:last:border-r-0"
                >
                  <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-300">
                    {metric.label}
                  </p>
                  <p className="mt-1 text-lg font-bold text-white">
                    {metric.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-[8px] border border-white/14 bg-[#061a31]/95 p-5 text-white shadow-[0_28px_70px_rgba(0,0,0,0.3)] backdrop-blur">
            <div className="flex items-start gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-[6px] border border-[#d6a653]/45 bg-[#d6a653]/12 text-[#f0c979]">
                <LockKeyhole className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h2 className="text-xl font-semibold">
                  Locked &amp; Secured On-Chain
                </h2>
                <p className="mt-1 text-sm text-slate-300">
                  Transparent settlement workflow preview.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-[0.95fr_1.05fr] lg:grid-cols-1 xl:grid-cols-[0.95fr_1.05fr]">
              <div>
                <p className="text-4xl font-semibold tracking-tight">
                  $31,250,000
                </p>
                <p className="mt-1 text-sm font-medium text-slate-300">
                  Example Secured Capital
                </p>

                <div className="my-6 h-px bg-white/10" />

                <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-300">
                  Secured in smart contracts
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {cryptoAssets.map((asset, index) => (
                    <span
                      key={asset}
                      className="crypto-pill flex h-10 w-10 items-center justify-center rounded-full text-[10px] font-black text-white ring-1 ring-white/20"
                      data-index={index}
                    >
                      {asset}
                    </span>
                  ))}
                </div>

                <Link
                  href="#security-model"
                  className="mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-[6px] bg-[#d6a653] px-5 text-sm font-bold text-[#061a31] transition hover:bg-[#e5b965]"
                >
                  View Security Model
                  <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>

              <ul className="space-y-3 border-t border-white/10 pt-5 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0 lg:border-l-0 lg:border-t lg:pl-0 lg:pt-5 xl:border-l xl:border-t-0 xl:pl-5 xl:pt-0">
                {securityItems.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400"
                      aria-hidden="true"
                    />
                    <span className="leading-6 text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
