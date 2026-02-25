import { Bar, Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faDollarSign,
  faChartLine,
  faClock,
} from "@fortawesome/free-solid-svg-icons";

import { listData } from "../data/listData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function Dashboard() {

  const totalUsers = listData.length;

  const adminCount = listData.filter(
    (user) => user.role === "Admin"
  ).length;

  const userCount = listData.filter(
    (user) => user.role === "User"
  ).length;

  // Example revenue logic
  const revenuePerUser = 1000;
  const totalRevenue = totalUsers * revenuePerUser;

  // Example pending logic
  const pendingTasks = Math.floor(totalUsers / 3);

  // Growth percentage example
  const growthPercent = ((adminCount / totalUsers) * 100).toFixed(1);

  /* ================== STATS ================== */

  const stats = [
    { title: "Total Users", value: totalUsers, icon: faUsers },
    { title: "Revenue", value: `$${totalRevenue}`, icon: faDollarSign },
    { title: "Growth", value: `${growthPercent}%`, icon: faChartLine },
    { title: "Pending", value: pendingTasks, icon: faClock },
  ];

  /* ================== CHART DATA ================== */

  const barData = {
    labels: ["Admins", "Users"],
    datasets: [
      {
        label: "User Distribution",
        data: [adminCount, userCount],
        backgroundColor: ["#4f46e5", "#10b981"],
        borderRadius: 8,
      },
    ],
  };

  const lineData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Revenue Trend",
        data: [
          totalRevenue * 0.5,
          totalRevenue * 0.6,
          totalRevenue * 0.7,
          totalRevenue * 0.8,
          totalRevenue,
        ],
        borderColor: "#10b981",
        backgroundColor: "rgba(16,185,129,0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  /* ================== UI ================== */

  return (
    <div>
      <h2 className="dashboard-heading">Dashboard Overview</h2>

      {/* Stats Cards */}
      <div className="modern-cards">
        {stats.map((item, index) => (
          <div key={index} className="modern-card">
            <FontAwesomeIcon icon={item.icon} className="card-icon" />
            <div>
              <p>{item.title}</p>
              <h3>{item.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="charts-section">
  <div className="chart-box">
    <h3>User Role Distribution</h3>
    <div className="chart-wrapper">
      <Bar data={barData} options={{ maintainAspectRatio: false }} />
    </div>
  </div>

  <div className="chart-box">
    <h3>Revenue Trend</h3>
    <div className="chart-wrapper">
      <Line data={lineData} options={{ maintainAspectRatio: false }} />
    </div>
  </div>
</div>
    </div>
  );
}