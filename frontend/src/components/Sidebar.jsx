import {
  BarChart3,
  ChevronRight,
  FolderKanban,
  LayoutDashboard,
  LogOut,
  Sparkles,
  Target,
  UserCircle2,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navItems = [
  {
    label: "Overview",
    to: "/dashboard",
    end: true,
    icon: LayoutDashboard,
  },
  {
    label: "Leads",
    to: "/dashboard/leads",
    icon: Target,
  },
  {
    label: "Tasks",
    to: "/dashboard/tasks",
    icon: FolderKanban,
  },
];

const Sidebar = ({ user, onLogout }) => {
  return (
    <aside className="flex h-full w-full max-w-72 flex-col border-r border-white/10 bg-slate-950 text-slate-100">
      <div className="border-b border-white/10 p-6">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-600 shadow-lg shadow-cyan-500/20">
            <BarChart3 className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Dashhive
            </p>
            <h2 className="text-lg font-semibold text-white">Control Panel</h2>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-xl shadow-black/20 backdrop-blur">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sky-300">
              <UserCircle2 className="h-6 w-6" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-white">
                {user?.name || "Team Member"}
              </p>
              <p className="truncate text-xs text-slate-400">
                {user?.email || "Signed in"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-xs text-emerald-200">
            <Sparkles className="h-4 w-4" />
            <span>Workspace active and ready</span>
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-2 p-4">
        {navItems.map(({ label, to, icon: Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              [
                "group flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-200",
                isActive
                  ? "bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-lg shadow-sky-900/40"
                  : "text-slate-300 hover:bg-white/5 hover:text-white",
              ].join(" ")
            }
          >
            <span className="flex items-center gap-3">
              <Icon className="h-5 w-5" />
              <span className="text-sm font-medium">{label}</span>
            </span>
            <ChevronRight className="h-4 w-4 opacity-60 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
          </NavLink>
        ))}
      </nav>

      <div className="border-t border-white/10 p-4">
        <button
          type="button"
          onClick={onLogout}
          className="flex w-full items-center justify-center gap-2 rounded-2xl border border-rose-400/20 bg-rose-500/10 px-4 py-3 text-sm font-medium text-rose-200 transition hover:bg-rose-500/20"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
