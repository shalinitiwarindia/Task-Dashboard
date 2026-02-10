import { logoutUser } from "../utils/auth";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    logoutUser();
    navigate("/");
  };

  return (
    <div className="bg-white shadow p-4 flex flex-col md:flex-row justify-between items-start md:items-center">
      <h2 className="font-bold mb-2 md:mb-0">Task Dashboard</h2>
      <button
        onClick={logout}
        className="bg-red-500 text-white px-4 py-1 rounded"
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;
