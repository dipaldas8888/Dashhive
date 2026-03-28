import React from "react";
import { BriefcaseBusiness, Target, TrendingUp, Users } from "lucide-react";

const summaryCards = [
  {
    title: "Total Leads",
    value: "128",
    change: "+12 this week",
    icon: Target,
    accent: "from-sky-500/30 to-cyan-400/10",
    iconColor: "text-sky-300",
  },
  {
    title: "Qualified Leads",
    value: "47",
    change: "18 ready to close",
    icon: Users,
    accent: "from-emerald-500/30 to-lime-400/10",
    iconColor: "text-emerald-300",
  },
  {
    title: "Pipeline Value",
    value: "$52.8k",
    change: "Top deals updated",
    icon: BriefcaseBusiness,
    accent: "from-amber-500/30 to-orange-400/10",
    iconColor: "text-amber-300",
  },
];

const leads = [
  {
    name: "Priya Sharma",
    company: "NovaEdge",
    source: "Website",
    contact: "+91 98765 43210",
    status: "Hot",
  },
  {
    name: "Karan Malhotra",
    company: "BrightPath",
    source: "Referral",
    contact: "+91 99887 12345",
    status: "Warm",
  },
  {
    name: "Ananya Rao",
    company: "UrbanNest",
    source: "LinkedIn",
    contact: "+91 91234 56789",
    status: "Hot",
  },
  {
    name: "Dev Khanna",
    company: "ScaleGrid",
    source: "Campaign",
    contact: "+91 97654 32109",
    status: "Cold",
  },
];

const statusClasses = {
  Hot: "bg-rose-400/15 text-rose-200 border-rose-400/20",
  Warm: "bg-amber-400/15 text-amber-200 border-amber-400/20",
  Cold: "bg-cyan-400/15 text-cyan-200 border-cyan-400/20",
};

const Leads = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-sky-300/80">Leads</p>
          <h1 className="mt-2 text-3xl font-semibold text-white">Leads Dashboard</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-300">
            Lead overview with three quick cards and a leads list below.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-2xl border border-sky-400/20 bg-sky-500/10 px-4 py-3 text-sm text-sky-100">
          <TrendingUp className="h-4 w-4" />
          <span>Lead tracking preview</span>
        </div>
      </div>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {summaryCards.map(({ title, value, change, icon: Icon, accent, iconColor }) => (
          <article
            key={title}
            className={`rounded-[24px] border border-white/10 bg-gradient-to-br ${accent} p-5 shadow-lg shadow-black/20 backdrop-blur`}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm text-slate-300">{title}</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">{value}</h2>
                <p className="mt-2 text-sm text-slate-200/90">{change}</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-3">
                <Icon className={`h-6 w-6 ${iconColor}`} />
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="rounded-[28px] border border-white/10 bg-slate-950/40 p-5 shadow-xl shadow-black/20">
        <div className="mb-5 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-xl font-semibold text-white">Leads List</h2>
            <p className="mt-1 text-sm text-slate-400">
              Placeholder lead records for the dashboard page.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
            4 leads
          </div>
        </div>

        <div className="grid gap-4">
          {leads.map((lead) => (
            <article
              key={`${lead.name}-${lead.company}`}
              className="rounded-[22px] border border-white/10 bg-white/5 p-4"
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">{lead.name}</h3>
                  <p className="mt-1 text-sm text-slate-400">
                    {lead.company} via {lead.source}
                  </p>
                </div>

                <span
                  className={`inline-flex w-fit rounded-full border px-3 py-1 text-xs font-medium ${statusClasses[lead.status]}`}
                >
                  {lead.status}
                </span>
              </div>

              <p className="mt-4 text-sm text-slate-300">{lead.contact}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Leads;
