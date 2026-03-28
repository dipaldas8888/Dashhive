import React from "react";
import { CalendarCheck2, Clock3, FolderKanban, TrendingUp, User2 } from "lucide-react";

const summaryCards = [
  {
    title: "All Tasks",
    value: "36",
    change: "12 completed today",
    icon: FolderKanban,
    accent: "from-sky-500/30 to-cyan-400/10",
    iconColor: "text-sky-300",
  },
  {
    title: "Due Today",
    value: "18",
    change: "5 high priority",
    icon: CalendarCheck2,
    accent: "from-emerald-500/30 to-lime-400/10",
    iconColor: "text-emerald-300",
  },
  {
    title: "Pending Review",
    value: "7",
    change: "Needs manager approval",
    icon: Clock3,
    accent: "from-amber-500/30 to-orange-400/10",
    iconColor: "text-amber-300",
  },
];

const tasks = [
  {
    title: "Follow up with NovaEdge contract",
    assignee: "Aarav Mehta",
    due: "Today, 4:30 PM",
    priority: "High",
  },
  {
    title: "Prepare lead audit report",
    assignee: "Nisha Kapoor",
    due: "Today, 6:00 PM",
    priority: "Medium",
  },
  {
    title: "Call back referral lead from BrightPath",
    assignee: "Rohit Sen",
    due: "Tomorrow, 10:00 AM",
    priority: "High",
  },
  {
    title: "Update onboarding notes for UrbanNest",
    assignee: "Sana Iqbal",
    due: "Tomorrow, 1:00 PM",
    priority: "Low",
  },
];

const statusClasses = {
  High: "bg-rose-400/15 text-rose-200 border-rose-400/20",
  Medium: "bg-amber-400/15 text-amber-200 border-amber-400/20",
  Low: "bg-emerald-400/15 text-emerald-200 border-emerald-400/20",
};

const Tasks = () => {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-sky-300/80">Tasks</p>
          <h1 className="mt-2 text-3xl font-semibold text-white">Tasks Dashboard</h1>
          <p className="mt-2 max-w-2xl text-sm text-slate-300">
            Task overview with top cards and a simple task list below.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-2xl border border-sky-400/20 bg-sky-500/10 px-4 py-3 text-sm text-sky-100">
          <TrendingUp className="h-4 w-4" />
          <span>Task tracking preview</span>
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
            <h2 className="text-xl font-semibold text-white">Task List</h2>
            <p className="mt-1 text-sm text-slate-400">
              Placeholder tasks for the dashboard page.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200">
            4 tasks
          </div>
        </div>

        <div className="space-y-4">
          {tasks.map((task) => (
            <article
              key={task.title}
              className="rounded-[22px] border border-white/10 bg-white/5 p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold text-white">{task.title}</h3>
                <span
                  className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${statusClasses[task.priority]}`}
                >
                  {task.priority}
                </span>
              </div>

              <div className="mt-4 space-y-2 text-sm text-slate-300">
                <p className="flex items-center gap-2">
                  <User2 className="h-4 w-4 text-sky-300" />
                  {task.assignee}
                </p>
                <p className="flex items-center gap-2">
                  <Clock3 className="h-4 w-4 text-sky-300" />
                  {task.due}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Tasks;
