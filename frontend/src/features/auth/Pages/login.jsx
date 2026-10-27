
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { handleLogin , loading } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin({ email, password });
    navigate("/")
  };

  if(loading){
    return (<main> <h1> Loading.... </h1> </main>)
           
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">

        <h1 className="mb-2 text-3xl font-bold text-gray-800">
          Sign In
        </h1>

        <p className="mb-6 text-gray-500">
          Welcome back! Please enter your details.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div>
            <label htmlFor="email" className="mb-2 block font-medium">
              Email
            </label>

            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              autoComplete="email"
              required
              className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="mb-2 block font-medium">
              Password
            </label>

            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              autoComplete="current-password"
              required
              className="w-full rounded-md border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="mt-2 text-sm text-green-600 hover:underline"
            >
              {showPassword ? "Hide Password" : "Show Password"}
            </button>
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-sm text-green-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-md bg-green-600 py-3 font-semibold text-white hover:bg-green-700"
          >
            Sign In
          </button>

        </form>

        {/* Register */}
        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-green-600 hover:underline"
          >
            Register
          </Link>
        </p>

      </div>
    </main>
  );
};

export default Login;
