export default function Fourth_day() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-white w-96 rounded-2xl p-7">
        <h1 className="text-3xl font-bold text-center mb-6">Welcome Back</h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-lg p-3 mb-3"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded-lg p-3 mb-5"
        />

        <button className="w-full bg-black text-white rounded-lg p-3 font-medium hover:bg-gray-800">
          Login
        </button>

        <p className="text-center text-sm text-gray-500 mt-5">
          <span className="text-black font-medium cursor-pointer">Sign up</span>
        </p>
      </div>
    </main>
  );
}
