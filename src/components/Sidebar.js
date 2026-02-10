import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-60 h-screen bg-gray-900 text-white p-5 hidden md:block">
      <h1 className="text-2xl font-bold mb-6">Menu</h1>
      <ul className="space-y-3">
        <li><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;
