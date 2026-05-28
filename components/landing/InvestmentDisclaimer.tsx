import { Shield } from "lucide-react";

export default function InvestmentDisclaimer() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto flex max-w-[1760px] flex-col gap-3 px-4 py-5 text-sm leading-6 text-slate-600 sm:px-6 lg:flex-row lg:items-start lg:px-10">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[6px] bg-[#061a31] text-[#d6a653]">
          <Shield className="h-5 w-5" aria-hidden="true" />
        </div>
        <p>
          Real estate-related digital assets and crypto assets involve risk and
          may lose value. Information shown across EstateChain is illustrative,
          uses static preview data, and is not financial, legal, tax, or
          investment advice. Any projection-style figure is market-dependent and
          should not be interpreted as a guaranteed outcome.
        </p>
      </div>
    </section>
  );
}
