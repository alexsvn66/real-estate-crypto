import Link from "next/link";
import { Headphones, Mail, Send } from "lucide-react";

const footerColumns = [
  {
    title: "Platform",
    links: [
      { label: "Invest", href: "#properties" },
      { label: "Properties", href: "#properties" },
      { label: "Dashboard", href: "#dashboard" },
      { label: "Tokenization", href: "#dashboard" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#partners" },
      { label: "Careers", href: "#top" },
      { label: "Blog", href: "#top" },
      { label: "Contact", href: "#top" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Whitepaper", href: "#security-model" },
      { label: "Documentation", href: "#why-estatechain" },
      { label: "FAQ", href: "#top" },
      { label: "Help Center", href: "#top" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "#top" },
      { label: "Privacy Policy", href: "#top" },
      { label: "Risk Disclosure", href: "#security-model" },
      { label: "Compliance", href: "#security-model" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Support Desk", href: "#top" },
      { label: "Wallet Help", href: "#security-model" },
      { label: "Status", href: "#top" },
      { label: "Security", href: "#security-model" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto grid max-w-[1760px] gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[1.1fr_2fr_1.1fr] lg:px-10">
        <div>
          <Link
            href="/"
            className="flex items-center gap-3 text-[#061a31]"
            aria-label="EstateChain home"
          >
            <span className="relative flex h-10 w-10 items-center justify-center rounded-[6px] border border-[#d6a653]/45 bg-[#fbf7ef]">
              <span className="absolute h-5 w-5 rotate-45 rounded-[3px] border-2 border-[#b8892f]" />
              <span className="h-2 w-2 rotate-45 rounded-[2px] bg-[#d6a653]" />
            </span>
            <span className="text-2xl font-semibold tracking-tight">
              EstateChain
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-600">
            A crypto and real estate platform for discovering tokenized property
            records, compliance workflows, and blockchain-based ownership
            transparency.
          </p>
          <div className="mt-5 flex gap-2">
            {["X", "TG", "M", "IN"].map((item) => (
              <span
                key={item}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-xs font-black text-[#061a31]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-3 xl:grid-cols-5">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-black text-[#061a31]">
                {column.title}
              </h3>
              <ul className="mt-3 space-y-2">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-slate-600 hover:text-[#9a7025]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-sm font-black text-[#061a31]">Stay Updated</h3>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Subscribe for platform updates, property record releases, and
            compliance notices.
          </p>
          <form className="mt-4 flex overflow-hidden rounded-[6px] border border-slate-200 bg-white">
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email"
              className="min-w-0 flex-1 px-4 py-3 text-sm outline-none placeholder:text-slate-400"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-[#d6a653] px-4 text-sm font-bold text-[#061a31] transition hover:bg-[#e5b965]"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              <span className="hidden sm:inline">Subscribe</span>
            </button>
          </form>
          <div className="mt-4 space-y-2 text-sm text-slate-600">
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-[#b8892f]" aria-hidden="true" />
              support@estatechain.example
            </p>
            <p className="flex items-center gap-2">
              <Headphones
                className="h-4 w-4 text-[#b8892f]"
                aria-hidden="true"
              />
              Live chat 24/7
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-[1760px] flex-col gap-3 px-4 py-5 text-xs leading-5 text-slate-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-10">
          <p>(c) 2026 EstateChain. All rights reserved.</p>
          <p className="max-w-3xl">
            Real estate-related digital assets and crypto assets involve risk
            and may lose value. Information shown is illustrative and not
            financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
