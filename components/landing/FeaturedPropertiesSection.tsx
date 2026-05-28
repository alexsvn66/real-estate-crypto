import { ArrowRight, Clock, Coins, Heart, MapPin } from "lucide-react";

const properties = [
  {
    name: "Oceanview Estate Plots",
    location: "Lagos, Nigeria",
    status: "Funding",
    targetSize: "$5,000,000",
    projection: "22.4%",
    progress: 72,
    raised: "$3,600,000 reserved",
    tokenExample: "50,000 EST",
    timeline: "24 days left",
    visualClass: "property-visual-ocean",
  },
  {
    name: "Greenfield Residency",
    location: "Kigali, Rwanda",
    status: "Funding",
    targetSize: "$3,200,000",
    projection: "19.8%",
    progress: 58,
    raised: "$1,856,000 reserved",
    tokenExample: "32,000 EST",
    timeline: "18 days left",
    visualClass: "property-visual-field",
  },
  {
    name: "Tulum Luxury Villas",
    location: "Tulum, Mexico",
    status: "Upcoming",
    targetSize: "$7,500,000",
    projection: "21.1%",
    progress: 12,
    raised: "$900,000 reserved",
    tokenExample: "75,000 EST",
    timeline: "Coming soon",
    visualClass: "property-visual-villas",
  },
];

export default function FeaturedPropertiesSection() {
  return (
    <section id="properties" className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#b8892f]">
            Marketplace preview
          </p>
          <h2 className="mt-1 text-2xl font-semibold tracking-tight text-[#061a31]">
            Featured Property Opportunities
          </h2>
        </div>
        <a
          href="#properties"
          className="inline-flex items-center gap-2 text-sm font-bold text-[#061a31] hover:text-[#9a7025]"
        >
          View All Projects
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {properties.map((property) => (
          <article
            key={property.name}
            className="overflow-hidden rounded-[8px] border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.08)]"
          >
            <div
              className={`property-visual relative h-36 ${property.visualClass}`}
            >
              <div
                className={`absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-[0.1em] text-white shadow-sm ${
                  property.status === "Upcoming"
                    ? "bg-[#d6a653]"
                    : "bg-emerald-600"
                }`}
              >
                {property.status}
              </div>
              <button
                type="button"
                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/45 bg-white/80 text-[#061a31] shadow-sm backdrop-blur transition hover:bg-white"
                aria-label={`Save ${property.name}`}
              >
                <Heart className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="space-y-4 p-4">
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-[#061a31]">
                  {property.name}
                </h3>
                <span className="flex shrink-0 items-center gap-1 text-xs font-medium text-slate-500">
                  <MapPin
                    className="h-3.5 w-3.5 text-[#b8892f]"
                    aria-hidden="true"
                  />
                  {property.location}
                </span>
              </div>

              <div className="grid grid-cols-2 divide-x divide-slate-200 rounded-[6px] border border-slate-100 bg-slate-50">
                <div className="p-3">
                  <p className="text-xs font-medium text-slate-500">
                    Target Size
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#061a31]">
                    {property.targetSize}
                  </p>
                </div>
                <div className="p-3">
                  <p className="text-xs font-medium text-slate-500">
                    Illustrative Market Projection
                  </p>
                  <p className="mt-1 text-sm font-bold text-[#061a31]">
                    {property.projection}
                  </p>
                </div>
              </div>

              <div>
                <div className="h-2 rounded-full bg-slate-100">
                  <div
                    className="h-2 rounded-full bg-emerald-600"
                    style={{ width: `${property.progress}%` }}
                  />
                </div>
                <div className="mt-2 flex items-center justify-between text-xs font-semibold text-slate-600">
                  <span>{property.progress}% Funding Progress</span>
                  <span>{property.raised}</span>
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-slate-100 pt-3 text-xs font-semibold text-slate-600">
                <span className="inline-flex items-center gap-1.5">
                  <Coins
                    className="h-3.5 w-3.5 text-[#b8892f]"
                    aria-hidden="true"
                  />
                  {property.tokenExample}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {property.timeline}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
