import { Link, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

const DashboardLayout = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div
        style={{
          width: "250px",
          background: "#1e293b",
          color: "#fff",
          padding: "20px",
        }}
      >
        <h2>Dashboard</h2>
        <p>{user?.name}</p>

        <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <Link to="/dashboard">Home</Link>
          <Link to="/dashboard/leads">Leads</Link>
          <Link to="/dashboard/tasks">Tasks</Link>
        </nav>

        <button onClick={handleLogout} style={{ marginTop: "20px" }}>
          Logout
        </button>
      </div>

      <div style={{ flex: 1, padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
