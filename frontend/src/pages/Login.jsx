import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BarChart3 } from "lucide-react";
import { toast } from "react-toastify";
import { useAuth } from "../context/AuthContext.jsx";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(form);
      toast.success("Login successful");
      navigate("/dashboard");
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.14),_transparent_28%),linear-gradient(180deg,_#0f172a_0%,_#111827_100%)] px-4 py-8 text-slate-100">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-md items-center justify-center">
        <div className="w-full rounded-[28px] border border-white/10 bg-slate-950/55 p-6 shadow-2xl shadow-black/30 backdrop-blur-sm sm:p-8">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-sky-500 to-indigo-600 shadow-lg shadow-cyan-500/20">
              <BarChart3 className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Dashhive</p>
              <h1 className="text-lg font-semibold text-white">Welcome back</h1>
            </div>
          </div>

          <p className="mb-6 text-sm leading-6 text-slate-400">
            Log in to continue to your dashboard.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">Email</label>
              <input
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400/40 focus:bg-white/8"
                type="email"
                placeholder="Enter your email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-200">Password</label>
              <input
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400/40 focus:bg-white/8"
                type="password"
                placeholder="Enter your password"
                required
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-3 text-sm font-medium text-white shadow-lg shadow-sky-900/40 transition hover:from-sky-400 hover:to-indigo-400"
            >
              Log in
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-400">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="font-medium text-sky-300 transition hover:text-sky-200">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
