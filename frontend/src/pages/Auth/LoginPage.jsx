export default function LoginPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <div className="w-full max-w-sm">
        <h1 className="text-2xl md:text-3xl font-semibold text-govBlue mb-2">
          Officer / Admin Login
        </h1>
        <p className="text-sm text-slate-600 mb-6">
          In the demo, this can be a simple OTP or dummy SSO form.
        </p>
        <form className="space-y-4">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-slate-800">Mobile Number</label>
            <input
              type="tel"
              className="border border-slate-300 rounded-lg px-4 py-2.5 text-sm w-full focus:outline-none focus:ring-2 focus:ring-govBlue focus:border-govBlue transition"
              placeholder="Enter registered mobile"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-govBlue text-black rounded-lg py-2.5 text-sm font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-govBlue focus:ring-offset-2 transition"
          >
            Generate OTP
          </button>
        </form>
      </div>
    </div>
  );
}
