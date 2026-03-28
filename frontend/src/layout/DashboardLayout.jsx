import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import Sidebar from "../components/Sidebar.jsx";

const DashboardLayout = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    setIsMobileMenuOpen(false);
    logout();
    navigate("/login");
  };

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen bg-slate-900 text-slate-100">
      <div className="hidden w-72 shrink-0 lg:block">
        <Sidebar user={user} onLogout={handleLogout} />
      </div>

      <div className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-slate-950/95 backdrop-blur lg:hidden">
        <div className="flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
              className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-100 transition hover:bg-white/10"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Dashhive
              </p>
              <h1 className="text-lg font-semibold text-white">Dashboard</h1>
            </div>
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

      {isMobileMenuOpen ? (
        <div className="fixed inset-0 z-40 lg:hidden">
          <button
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
          />
          <div className="absolute inset-y-0 left-0 w-[min(20rem,88vw)]">
            <Sidebar
              user={user}
              onLogout={handleLogout}
              onNavigate={() => setIsMobileMenuOpen(false)}
              className="max-w-none shadow-2xl shadow-black/40"
            />
          </div>
        </div>
      ) : null}

      <div className="flex-1 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_28%),linear-gradient(180deg,_#0f172a_0%,_#111827_100%)] px-4 pb-6 pt-24 lg:px-8 lg:pt-8">
        <div className="mx-auto min-h-[calc(100vh-4rem)] max-w-7xl rounded-[28px] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-black/20 backdrop-blur-sm lg:p-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
