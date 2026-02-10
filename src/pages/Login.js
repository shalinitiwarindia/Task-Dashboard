import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../utils/auth";

function Login() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = loginUser(email,password);

    if(!result.success){
      setError(result.message);
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow w-80">
        <h2 className="text-xl font-bold mb-4">Login</h2>

        {error && <p className="text-red-500 mb-2">{error}</p>}

        <input className="border p-2 w-full mb-3" placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)} />

        <input className="border p-2 w-full mb-3" type="password"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)} />

        <button className="bg-blue-500 text-white w-full p-2 rounded">
          Login
        </button>

        <p className="mt-4 text-sm">
          No account?
          <Link to="/register" className="text-blue-500 ml-1">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
