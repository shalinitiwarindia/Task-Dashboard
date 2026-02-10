import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { getUser } from "../utils/auth";

function Dashboard() {
  const user = getUser();

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-100">
        <Navbar />

        <div className="p-6">
          <h2 className="text-xl font-bold mb-4">
            Welcome {user?.name}
          </h2>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded shadow">Total Tasks: 12</div>
            <div className="bg-white p-4 rounded shadow">Completed: 8</div>
            <div className="bg-white p-4 rounded shadow">Pending: 4</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
