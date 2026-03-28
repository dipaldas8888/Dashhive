import React from "react";
import { CalendarCheck2, CircleDollarSign, Target, TrendingUp, User2 } from "lucide-react";

const summaryCards = [
  {
    title: "Active Users",
    value: "24",
    change: "+4 this week",
    icon: User2,
    accent: "from-sky-500/30 to-cyan-400/10",
    iconColor: "text-sky-300",
  },
  {
    title: "Open Leads",
    value: "128",
    change: "+12% this week",
    icon: Target,
    accent: "from-emerald-500/30 to-lime-400/10",
    iconColor: "text-emerald-300",
  },
  {
    title: "Revenue Pipeline",
    value: "$84.5k",
    change: "+8 opportunities",
    icon: CircleDollarSign,
    accent: "from-amber-500/30 to-orange-400/10",
    iconColor: "text-amber-300",
  },
];

const userRows = [
  {
    name: "Aarav Mehta",
    role: "Sales Manager",
    email: "aarav@dashhive.app",
    status: "Online",
    region: "Mumbai",
  },
  {
    name: "Nisha Kapoor",
    role: "CRM Analyst",
    email: "nisha@dashhive.app",
    status: "In meeting",
    region: "Delhi",
  },
  {
    name: "Rohit Sen",
    role: "Lead Specialist",
    email: "rohit@dashhive.app",
    status: "Available",
    region: "Bengaluru",
  },
  {
    name: "Sana Iqbal",
    role: "Customer Success",
    email: "sana@dashhive.app",
    status: "Offline",
    region: "Hyderabad",
  },
];

const statusClasses = {
  Online: "bg-emerald-400/15 text-emerald-200 border-emerald-400/20",
  "In meeting": "bg-amber-400/15 text-amber-200 border-amber-400/20",
  Available: "bg-sky-400/15 text-sky-200 border-sky-400/20",
  Offline: "bg-slate-400/15 text-slate-200 border-slate-400/20",
};

const Home = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-sky-300/80">
            Overview
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-white">Dashboard Home</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-300">
            Quick user overview with placeholder stats and a user list.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-2xl border border-sky-400/20 bg-sky-500/10 px-4 py-3 text-sm text-sky-100">
          <TrendingUp className="h-4 w-4" />
          <span>Dummy data preview enabled</span>
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
            <h2 className="text-xl font-semibold text-white">User List</h2>
            <p className="mt-1 text-sm text-slate-400">
              Team activity snapshot with placeholder records.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
            4 users
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-slate-400">
                <th className="pb-3 font-medium">Name</th>
                <th className="pb-3 font-medium">Role</th>
                <th className="pb-3 font-medium">Email</th>
                <th className="pb-3 font-medium">Region</th>
                <th className="pb-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {userRows.map((user) => (
                <tr
                  key={user.email}
                  className="border-b border-white/5 text-slate-200 last:border-b-0"
                >
                  <td className="py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/15 text-sky-200">
                        <User2 className="h-5 w-5" />
                      </div>
                      <span className="font-medium text-white">{user.name}</span>
                    </div>
                  </td>
                  <td className="py-4">{user.role}</td>
                  <td className="py-4">{user.email}</td>
                  <td className="py-4">{user.region}</td>
                  <td className="py-4">
                    <span
                      className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${statusClasses[user.status]}`}
                    >
                      {user.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Home;
