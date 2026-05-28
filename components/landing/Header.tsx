import Link from "next/link";
import { UserRound, Wallet } from "lucide-react";

const navigationItems = [
  { label: "Invest", href: "#properties" },
  { label: "Properties", href: "#properties" },
  { label: "How It Works", href: "#why-estatechain" },
  { label: "Tokenization", href: "#dashboard" },
  { label: "About Us", href: "#partners" },
  { label: "Resources", href: "#security-model" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-[0_1px_0_rgba(15,23,42,0.03)] backdrop-blur">
      <div className="mx-auto flex max-w-[1760px] flex-wrap items-center justify-between gap-x-8 gap-y-3 px-4 py-3 sm:px-6 lg:flex-nowrap lg:px-10">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 text-[#061a31]"
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

        <nav
          className="order-3 flex w-full gap-1 overflow-x-auto border-t border-slate-100 pt-3 text-sm font-semibold text-slate-700 lg:order-none lg:w-auto lg:border-0 lg:pt-0"
          aria-label="Main navigation"
        >
          {navigationItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="whitespace-nowrap rounded-[6px] px-3 py-2 transition hover:bg-slate-100 hover:text-[#061a31]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2">
          <Link
            href="#security-model"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-[6px] bg-[#061a31] px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-[#0a2544]"
          >
            <Wallet className="h-4 w-4 text-[#d6a653]" aria-hidden="true" />
            <span className="hidden sm:inline">Connect Wallet</span>
            <span className="sm:hidden">Wallet</span>
          </Link>
          <Link
            href="/auth/login"
            className="inline-flex h-10 items-center justify-center gap-2 rounded-[6px] border border-[#d6a653]/55 bg-white px-4 text-sm font-semibold text-[#8a6420] transition hover:bg-[#fbf7ef]"
          >
            <UserRound className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Sign In</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
