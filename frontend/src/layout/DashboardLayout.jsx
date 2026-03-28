import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import Sidebar from "../components/Sidebar.jsx";

const DashboardLayout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-slate-900 text-slate-100">
      <div className="hidden w-72 shrink-0 lg:block">
        <Sidebar user={user} onLogout={handleLogout} />
      </div>

      <div className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-slate-950/95 backdrop-blur lg:hidden">
        <div className="flex items-center justify-between px-4 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Dashhive
            </p>
            <h1 className="text-lg font-semibold text-white">Dashboard</h1>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="rounded-xl border border-rose-400/20 bg-rose-500/10 px-3 py-2 text-sm text-rose-200"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="flex-1 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_28%),linear-gradient(180deg,_#0f172a_0%,_#111827_100%)] px-4 pb-6 pt-24 lg:px-8 lg:pt-8">
        <div className="mx-auto min-h-[calc(100vh-4rem)] max-w-7xl rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/20 backdrop-blur-sm lg:p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
