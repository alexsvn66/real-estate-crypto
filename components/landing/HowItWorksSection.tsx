import {
  BadgeCheck,
  Building2,
  CheckCircle2,
  FileCheck2,
  Handshake,
  KeyRound,
  Landmark,
  Layers,
  Scale,
  ShieldCheck,
} from "lucide-react";

const plots = [
  ["01", "02", "03", "04", "05", "06"],
  ["07", "PARK", "08", "09", "10", "11"],
  ["12", "13", "14", "15", "16", "17"],
  ["18", "19", "20", "21", "22", "23"],
];

const reservedPlots = new Set(["05", "14", "21"]);
const soldPlots = new Set(["02", "17", "23"]);

const trustFeatures = [
  {
    icon: Building2,
    title: "Real-world asset records",
    text: "Property files, parcel data, and project milestones in one workspace.",
  },
  {
    icon: Layers,
    title: "Smart contract transparency",
    text: "Ownership history and token records designed for clear review.",
  },
  {
    icon: KeyRound,
    title: "Escrow-style workflow",
    text: "Multi-step release process aligned to documented project stages.",
  },
  {
    icon: BadgeCheck,
    title: "KYC verified access",
    text: "Identity checks and access controls before participation flows.",
  },
  {
    icon: Scale,
    title: "Legal review process",
    text: "Project documentation routes through compliance and counsel review.",
  },
];

const auditItems = [
  { icon: ShieldCheck, title: "Smart Contract Review", meta: "Audit workflow" },
  { icon: CheckCircle2, title: "Security Monitoring", meta: "Control checks" },
  { icon: FileCheck2, title: "KYC Workflow", meta: "Verified access" },
  { icon: Landmark, title: "Legal Review", meta: "Counsel review" },
];

const partners = [
  "Blockrise Capital",
  "LandX Developments",
  "Cypher Legal",
  "Global Property Consortium",
];

function getPlotStatus(plot: string) {
  if (plot === "PARK") {
    return "park";
  }

  if (reservedPlots.has(plot)) {
    return "reserved";
  }

  if (soldPlots.has(plot)) {
    return "sold";
  }

  return "available";
}

export default function HowItWorksSection() {
  return (
    <section className="space-y-6">
      <div className="grid gap-6 xl:grid-cols-[0.95fr_1.55fr]">
        <div
          id="site-plan"
          className="rounded-[8px] border border-slate-200 bg-white p-4 shadow-[0_18px_40px_rgba(15,23,42,0.06)]"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#b8892f]">
                Parcel visibility
              </p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight text-[#061a31]">
                Property Map / Site Plan
              </h2>
            </div>
            <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
              Phase 01
            </span>
          </div>

          <div className="site-plan-shell mt-4 rounded-[8px] p-4">
            <div className="grid grid-cols-6 gap-2">
              {plots.flat().map((plot) => {
                const status = getPlotStatus(plot);

                return (
                  <div
                    key={plot}
                    className={`plot-cell ${status} flex aspect-[1.25] items-center justify-center rounded-[5px] text-xs font-black`}
                  >
                    {plot}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2 rounded-[6px] border border-slate-200 bg-slate-50 p-3 text-xs font-bold text-slate-600">
            <span className="inline-flex items-center gap-2">
              <span className="h-3 w-3 rounded-[3px] bg-[#7ab95b]" />
              Available
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-3 w-3 rounded-[3px] bg-[#d6a653]" />
              Reserved
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-3 w-3 rounded-[3px] bg-slate-400" />
              Sold
            </span>
          </div>
        </div>

        <div
          id="why-estatechain"
          className="rounded-[8px] border border-slate-200 bg-white p-4 shadow-[0_18px_40px_rgba(15,23,42,0.06)]"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#b8892f]">
                Trust workflow
              </p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight text-[#061a31]">
                Why EstateChain
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-600">
              A clean operating layer for property-backed digital asset records,
              verification, and document-led review.
            </p>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {trustFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="rounded-[6px] border border-slate-200 bg-slate-50 p-3"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-[6px] border border-[#d6a653]/35 bg-white text-[#b8892f]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-3 text-sm font-bold text-[#061a31]">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    {feature.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div
        id="security-model"
        className="rounded-[8px] bg-[#061a31] p-5 text-white shadow-[0_24px_60px_rgba(6,26,49,0.22)]"
      >
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.4fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#d6a653]">
              Verification layer
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              Audited. Verified. Transparent.
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Security and compliance references shown here are static preview
              examples for the product experience.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {auditItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[6px] border border-white/12 bg-white/6 p-4"
                >
                  <Icon className="h-7 w-7 text-[#d6a653]" aria-hidden="true" />
                  <h3 className="mt-4 text-sm font-bold">{item.title}</h3>
                  <p className="mt-1 text-xs font-medium text-slate-300">
                    {item.meta}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div
        id="partners"
        className="grid gap-6 rounded-[8px] border border-slate-200 bg-white p-4 shadow-[0_18px_40px_rgba(15,23,42,0.06)] lg:grid-cols-[1fr_1.05fr]"
      >
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#b8892f]">
            Ecosystem
          </p>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight text-[#061a31]">
            Partners &amp; Advisors
          </h2>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {partners.map((partner) => (
              <div
                key={partner}
                className="flex items-center gap-3 rounded-[6px] border border-slate-200 bg-slate-50 p-4"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-[6px] bg-[#061a31] text-[#d6a653]">
                  <Handshake className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="text-sm font-black uppercase tracking-[0.08em] text-[#061a31]">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>

        <figure className="rounded-[8px] border border-[#d6a653]/35 bg-[#fbf7ef] p-5">
          <blockquote className="text-xl font-semibold leading-8 text-[#061a31]">
            &quot;EstateChain connects real estate, blockchain records, and
            compliance workflows into one clean platform experience.&quot;
          </blockquote>
          <figcaption className="mt-6 flex items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#061a31] text-lg font-black text-[#d6a653]">
              MA
            </span>
            <span>
              <span className="block text-sm font-black text-[#061a31]">
                Michael Anderson
              </span>
              <span className="block text-sm font-medium text-slate-600">
                Advisor, Digital Assets &amp; Real Estate
              </span>
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
