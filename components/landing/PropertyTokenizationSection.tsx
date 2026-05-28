import {
  Activity,
  ChartPie,
  Copy,
  Wallet,
  ChartNoAxesColumnIncreasing,
} from "lucide-react";

const positions = [
  {
    name: "Oceanview Estate Plots",
    amount: "$128,750.00",
    meta: "72% funded",
    color: "bg-[#2f80ed]",
  },
  {
    name: "Greenfield Residency",
    amount: "$87,250.00",
    meta: "58% funded",
    color: "bg-emerald-500",
  },
  {
    name: "Tulum Luxury Villas",
    amount: "$70,420.50",
    meta: "12% queued",
    color: "bg-[#d6a653]",
  },
];

const allocation = [
  { label: "EST", value: "40%", color: "bg-[#2f80ed]" },
  { label: "USDC", value: "30%", color: "bg-emerald-500" },
  { label: "ETH", value: "20%", color: "bg-[#8a7cf6]" },
  { label: "BTC", value: "10%", color: "bg-[#d6a653]" },
];

const activity = [
  {
    title: "Reserved Oceanview Estate position",
    date: "May 24, 2026 - 10:45 AM",
    amount: "-$5,000.00 USDC",
  },
  {
    title: "Compliance review completed",
    date: "May 20, 2026 - 09:15 AM",
    amount: "Verified",
  },
  {
    title: "Reserved Greenfield Residency position",
    date: "May 18, 2026 - 02:30 PM",
    amount: "-$3,000.00 USDC",
  },
];

export default function PropertyTokenizationSection() {
  return (
    <section id="dashboard" className="h-full">
      <div className="h-full rounded-[8px] border border-slate-200 bg-white p-4 shadow-[0_18px_40px_rgba(15,23,42,0.08)]">
        <div className="flex flex-col gap-2 border-b border-slate-100 pb-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#b8892f]">
              Product preview
            </p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight text-[#061a31]">
              Your Portfolio Dashboard Preview
            </h2>
          </div>
          <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-600">
            Static example data
          </span>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <div className="rounded-[6px] border border-slate-200 bg-slate-50 p-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <Wallet className="h-4 w-4 text-[#b8892f]" aria-hidden="true" />
              Wallet
            </div>
            <p className="mt-2 flex items-center gap-2 text-sm font-bold text-[#061a31]">
              0x8a7d...4f2e
              <Copy className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" />
            </p>
          </div>
          <div className="rounded-[6px] border border-slate-200 bg-slate-50 p-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <ChartNoAxesColumnIncreasing
                className="h-4 w-4 text-[#b8892f]"
                aria-hidden="true"
              />
              Total Portfolio Value
            </div>
            <p className="mt-2 text-xl font-bold text-[#061a31]">
              $286,420.50
            </p>
          </div>
          <div className="rounded-[6px] border border-emerald-200 bg-emerald-50 p-3">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700">
              <Activity className="h-4 w-4" aria-hidden="true" />
              Illustrative Unrealized Change
            </div>
            <p className="mt-2 text-lg font-bold text-emerald-700">
              +$48,750.30
            </p>
          </div>
        </div>

        <div className="mt-4 grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[6px] border border-slate-200 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-[#061a31]">
                Token Allocation
              </h3>
              <ChartPie className="h-4 w-4 text-slate-400" aria-hidden="true" />
            </div>
            <div className="mt-5 flex items-center gap-5">
              <div className="allocation-donut flex h-32 w-32 shrink-0 items-center justify-center rounded-full">
                <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-white text-center shadow-inner">
                  <span className="text-xl font-black text-[#061a31]">
                    286K
                  </span>
                  <span className="text-[10px] font-bold uppercase text-slate-500">
                    USD
                  </span>
                </div>
              </div>
              <div className="grid flex-1 gap-2 text-sm">
                {allocation.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between gap-3"
                  >
                    <span className="inline-flex items-center gap-2 font-semibold text-slate-600">
                      <span
                        className={`h-2.5 w-2.5 rounded-full ${item.color}`}
                      />
                      {item.label}
                    </span>
                    <span className="font-bold text-[#061a31]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[6px] border border-slate-200 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-[#061a31]">
                Property Positions
              </h3>
              <a
                href="#properties"
                className="text-xs font-bold text-[#2f80ed] hover:text-[#061a31]"
              >
                View All
              </a>
            </div>
            <div className="mt-4 space-y-3">
              {positions.map((position) => (
                <div
                  key={position.name}
                  className="grid grid-cols-[auto_1fr_auto] items-center gap-3"
                >
                  <span
                    className={`h-10 w-10 rounded-[6px] ${position.color}`}
                  />
                  <div>
                    <p className="text-sm font-bold text-[#061a31]">
                      {position.name}
                    </p>
                    <p className="text-xs font-semibold text-emerald-700">
                      {position.meta}
                    </p>
                  </div>
                  <p className="text-sm font-bold text-[#061a31]">
                    {position.amount}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-[6px] border border-slate-200 p-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-[#061a31]">
              Recent Activity
            </h3>
            <a
              href="#dashboard"
              className="text-xs font-bold text-[#2f80ed] hover:text-[#061a31]"
            >
              View All
            </a>
          </div>
          <div className="mt-3 divide-y divide-slate-100">
            {activity.map((item) => (
              <div
                key={item.title}
                className="grid gap-2 py-3 sm:grid-cols-[1fr_auto] sm:items-center"
              >
                <div>
                  <p className="text-sm font-bold text-[#061a31]">
                    {item.title}
                  </p>
                  <p className="text-xs font-medium text-slate-500">
                    {item.date}
                  </p>
                </div>
                <p className="text-sm font-bold text-[#061a31]">
                  {item.amount}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
