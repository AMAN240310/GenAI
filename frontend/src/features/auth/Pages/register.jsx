// import { Link } from "react-router-dom";

// const Register = () => {
//   return (
//     <div>
//       Register
//       <form action="">
//             <div>
//               <label htmlFor=""> Username </label>
//               <input type="text" id='username' placeholder='username' />
//             </div>  

//             <div> 
//               <label htmlFor=""> Email id </label>
//               <input type="text " placeholder='email' />
//             </div>

//             <div>
//               <label htmlFor="" > Password </label>
//               <input type="text" placeholder='password' />
//               <label htmlFor=""> confirms password </label>
//               <input type="text" placeholder='confirm password' /> 
//             </div>

//       </form>
//      <p> already have an account ? <Link  to={"/login"}>Login</Link>  </p>

//     </div>
//   )
// }

// export default Register

// import retroComputer from "../../../assets/retro-computer.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connect this handler to your backend login API.
    console.log("Login form submitted:", {
      email: formData.email,
      rememberMe,
    });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fdfdfc] font-sans text-[#171b25]">
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(to right, #e9eceb 1px, transparent 1px), linear-gradient(to bottom, #e9eceb 1px, transparent 1px)",
          backgroundSize: "146px 118px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
        }}
      />

      {/* Decorative pixel blocks */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-40 w-40 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #d8f5e4 50%, transparent 50%), linear-gradient(#d8f5e4 50%, transparent 50%)",
          backgroundSize: "32px 32px",
          maskImage:
            "linear-gradient(135deg, black, transparent 75%)",
        }}
      />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 py-6 sm:px-10 lg:px-16">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#20b765] to-[#075b37] shadow-md shadow-green-900/15">
            <span className="font-mono text-2xl font-black text-white">
              G
            </span>
          </div>

          <span className="text-2xl font-bold tracking-tight">
            GenAI
          </span>
        </Link>

        <div className="flex items-center gap-3 text-sm sm:gap-5">
          <span className="hidden text-slate-500 sm:inline">
            
          </span>

          <Link
            to="/login"
            className="group inline-flex items-center gap-2 rounded-xl border border-[#1a9a59] px-4 py-3 font-semibold text-[#12854a] transition hover:bg-[#eaf8ef] sm:px-6"
          >
            Already have an account
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </header>

      {/* Main content */}
      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-100px)] max-w-[1600px] grid-cols-1 lg:grid-cols-2">

        {/* LEFT: Login form */}
        <section className="flex items-center px-6 py-10 sm:px-10 lg:px-16 lg:py-12">
          <div className="mx-auto w-full max-w-[490px]">

            {/* Heading */}
            <div className="mb-8">
              <p className="mb-4 inline-block bg-gradient-to-r from-[#72c99b] to-transparent bg-no-repeat text-sm font-semibold uppercase tracking-[0.3em] text-[#65bc8c]">
                Welcome back
              </p>

              <h1 className="text-5xl font-bold leading-[1.08] tracking-tight sm:text-6xl">
                Sign in to
                <br />
                GenAI
              </h1>

              <p className="mt-5 max-w-md font-mono text-sm leading-7 text-[#747b8c] sm:text-base">
                Continue your journey. Build, explore and
                create with the power of AI.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Username */}
              <div>
                <label
                  htmlFor="Useranme"
                  className="mb-2 block text-sm font-semibold"
                >
                  Username
                </label>

                <div className="group flex items-center gap-3 rounded-xl border border-[#dfe2e6] bg-white/80 px-4 transition focus-within:border-[#199957] focus-within:ring-4 focus-within:ring-[#199957]/10">


                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your username "
                    autoComplete="email"
                    required
                    className="min-w-0 flex-1 bg-transparent py-4 text-sm outline-none placeholder:text-[#9399a7]"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold"
                >
                  Email
                </label>

                <div className="group flex items-center gap-3 rounded-xl border border-[#dfe2e6] bg-white/80 px-4 transition focus-within:border-[#199957] focus-within:ring-4 focus-within:ring-[#199957]/10">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5 shrink-0 text-slate-500"
                  >
                    <rect
                      x="3"
                      y="5"
                      width="18"
                      height="14"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="m4 7 8 6 8-6"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    className="min-w-0 flex-1 bg-transparent py-4 text-sm outline-none placeholder:text-[#9399a7]"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-semibold"
                >
                  Password
                </label>

                <div className="flex items-center gap-3 rounded-xl border border-[#dfe2e6] bg-white/80 px-4 transition focus-within:border-[#199957] focus-within:ring-4 focus-within:ring-[#199957]/10">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-5 w-5 shrink-0 text-slate-600"
                  >
                    <rect
                      x="5"
                      y="10"
                      width="14"
                      height="11"
                      rx="2"
                      stroke="currentColor"
                      strokeWidth="1.8"
                    />
                    <path
                      d="M8 10V7a4 4 0 0 1 8 0v3"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="12"
                      cy="15"
                      r="1"
                      fill="currentColor"
                    />
                  </svg>

                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                    className="min-w-0 flex-1 bg-transparent py-4 text-sm outline-none placeholder:text-[#9399a7]"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                    className="shrink-0 text-slate-500 transition hover:text-[#159653]"
                  >
                    {showPassword ? (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-5 w-5"
                      >
                        <path
                          d="M3 3l18 18M10.6 10.6a2 2 0 0 0 2.8 2.8M9.9 5.2A10.8 10.8 0 0 1 12 5c5 0 8.5 4.5 9.5 7-.4 1-1.2 2.2-2.3 3.3M6.2 6.2C3.9 7.7 2.7 10 2.5 12c.5 1.3 1.7 3 3.5 4.3A10.4 10.4 0 0 0 12 19c1.1 0 2.2-.2 3.1-.5"
                          stroke="currentColor"
                          strokeWidth="1.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        className="h-5 w-5"
                      >
                        <path
                          d="M2.5 12S6 5 12 5s9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z"
                          stroke="currentColor"
                          strokeWidth="1.7"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          r="3"
                          stroke="currentColor"
                          strokeWidth="1.7"
                        />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              

              {/* Remember me / Forgot password */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <label className="flex cursor-pointer items-center gap-2.5 text-sm text-[#555b68]">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-5 w-5 cursor-pointer accent-[#169653]"
                  />
                  Remember me
                </label>

                <Link
                  to="/forgot-password"
                  className="text-sm font-semibold text-[#159653] transition hover:text-[#08713b]"
                >
                  Forgot password?
                </Link>
              </div>

              {/* Sign in button */}
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#189c56] to-[#13884b] px-5 py-4 font-semibold text-white shadow-lg shadow-green-800/10 transition duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-green-800/15 active:translate-y-0"
              >
                Sign in

                <span className="text-xl transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </form>

            {/* Divider */}
            <div className="my-7 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#e5e7eb]" />
              <span className="text-sm text-[#858b99]">
                or continue with
              </span>
              <div className="h-px flex-1 bg-[#e5e7eb]" />
            </div>

            {/* Social sign-in buttons */}
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                aria-label="Continue with Google"
                className="flex h-14 items-center justify-center rounded-xl border border-[#e0e2e6] bg-white/70 transition hover:border-[#b9d9c6] hover:bg-[#f0faf4]"
              >
                <svg viewBox="0 0 48 48" className="h-7 w-7">
                  <path
                    fill="#4285F4"
                    d="M43.6 24.5c0-1.4-.1-2.7-.4-4H24v7.6h11a9.4 9.4 0 0 1-4.1 6.1v5h6.6c3.9-3.6 6.1-8.8 6.1-14.7Z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 44c5.5 0 10.1-1.8 13.5-4.8l-6.6-5c-1.8 1.2-4.1 2-6.9 2-5.3 0-9.8-3.6-11.4-8.4H5.8v5.2A20 20 0 0 0 24 44Z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M12.6 27.8a12 12 0 0 1 0-7.6V15H5.8a20 20 0 0 0 0 17.9l6.8-5.1Z"
                  />
                  <path
                    fill="#EA4335"
                    d="M24 12.8c3 0 5.7 1 7.8 3.1l5.8-5.8A19.4 19.4 0 0 0 24 4 20 20 0 0 0 5.8 15l6.8 5.2c1.6-4.8 6.1-7.4 11.4-7.4Z"
                  />
                </svg>
              </button>

              <button
                type="button"
                aria-label="Continue with GitHub"
                className="flex h-14 items-center justify-center rounded-xl border border-[#e0e2e6] bg-white/70 transition hover:border-[#b9d9c6] hover:bg-[#f0faf4]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-7 w-7"
                >
                  <path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.3.8-.6v-2.1c-3.1.7-3.8-1.3-3.8-1.3-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1.7 1.7 3.2 1.2.1-.8.4-1.3.8-1.6-2.5-.3-5.1-1.3-5.1-5.5 0-1.2.4-2.2 1.2-3-.1-.3-.5-1.5.1-3 0 0 1-.3 3.1 1.1a10.6 10.6 0 0 1 5.7 0c2.1-1.4 3.1-1.1 3.1-1.1.6 1.5.2 2.7.1 3 .8.8 1.2 1.8 1.2 3 0 4.2-2.6 5.2-5.1 5.5.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.1 11.1 0 0 0 12 .9Z" />
                </svg>
              </button>

              <button
                type="button"
                aria-label="Continue with Discord"
                className="flex h-14 items-center justify-center rounded-xl border border-[#e0e2e6] bg-white/70 transition hover:border-[#b9d9c6] hover:bg-[#f0faf4]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="#5865F2"
                  className="h-7 w-7"
                >
                  <path d="M19.7 5.1a19 19 0 0 0-4.7-1.5l-.6 1.2a17.6 17.6 0 0 0-4.8 0L9 3.6a19 19 0 0 0-4.7 1.5C1.3 9.4.5 13.6.9 17.8a19 19 0 0 0 5.8 3l1.2-2a12 12 0 0 1-1.9-.9l.5-.4a13.5 13.5 0 0 0 11 0l.5.4a12 12 0 0 1-1.9.9l1.2 2a19 19 0 0 0 5.8-3c.5-4.9-.8-9-3.4-12.7ZM8.7 14.7c-1.1 0-2-1-2-2.2s.9-2.2 2-2.2 2 1 2 2.2-.9 2.2-2 2.2Zm6.6 0c-1.1 0-2-1-2-2.2s.9-2.2 2-2.2 2 1 2 2.2-.9 2.2-2 2.2Z" />
                </svg>
              </button>
            </div>

            {/* Terms */}
            <p className="mt-7 text-xs leading-6 text-[#858b99]">
              By continuing, you agree to our{" "}
              <Link
                to="/terms"
                className="font-medium text-[#159653] hover:underline"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                to="/privacy"
                className="font-medium text-[#159653] hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </section>

        {/* RIGHT: Retro computer illustration */}
        <section className="relative hidden min-h-[650px] items-center justify-center overflow-hidden px-4 lg:flex">

          {/* Decorative green glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-10 top-1/4 h-72 w-72 rounded-full bg-[#c9f4d8]/40 blur-[100px]"
          />

          {/* Top terminal text */}
          <div className="absolute right-12 top-16 z-10 font-mono text-sm font-semibold uppercase leading-6 tracking-wider text-[#159653] xl:right-20">
            <p>IDEAS</p>
            <p>INTO</p>
            <p>REALITY_</p>
          </div>

          {/* Original illustration */}
          <div className="relative z-10 w-full max-w-[750px]">
            <img
              src="../../../assets/retro-computer.png"
              alt="Retro pixel-art computer with a keyboard"
              className="h-auto w-full object-contain drop-shadow-[0_20px_25px_rgba(22,150,83,0.08)]"
            />
          </div>

          {/* Decorative sparkles */}
          <span
            aria-hidden="true"
            className="absolute left-[23%] top-[34%] font-mono text-4xl text-[#159653]"
          >
            ✳
          </span>

          <span
            aria-hidden="true"
            className="absolute left-[36%] top-[46%] font-mono text-4xl text-[#f3a7b7]"
          >
            ✳
          </span>

          <span
            aria-hidden="true"
            className="absolute right-[10%] top-[39%] font-mono text-3xl text-[#159653]"
          >
            +
          </span>

          <span
            aria-hidden="true"
            className="absolute right-[7%] top-[55%] font-mono text-4xl text-[#f3a7b7]"
          >
            +
          </span>

          <span
            aria-hidden="true"
            className="absolute left-[29%] bottom-[25%] font-mono text-3xl text-[#159653]"
          >
            +
          </span>

          {/* Bottom terminal text */}
          <div className="absolute bottom-12 right-12 z-10 font-mono text-sm font-semibold uppercase leading-5 tracking-wider text-[#159653] xl:right-20">
            <p>&gt; BUILD</p>
            <p>&gt; EXPLORE</p>
            <p>&gt; CREATE</p>
            <p>&gt; REPEAT _</p>
          </div>

          {/* Bottom pixel decoration */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 right-0 h-32 w-32 opacity-50"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #d8f5e4 50%, transparent 50%), linear-gradient(#d8f5e4 50%, transparent 50%)",
              backgroundSize: "24px 24px",
              maskImage:
                "linear-gradient(135deg, transparent, black)",
            }}
          />
        </section>
      </div>
    </main>
  );
};

export default Login;