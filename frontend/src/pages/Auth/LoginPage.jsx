export default function LoginPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center">
      <h1 className="text-xl md:text-2xl font-semibold mb-2">
        Officer / Admin Login
      </h1>
      <p className="text-sm text-slate-600 mb-4">
        In the demo, this can be a simple OTP or dummy SSO form.
      </p>
      <form className="w-full max-w-sm space-y-3">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Mobile Number</label>
          <input
            type="tel"
            className="border rounded px-3 py-2 text-sm w-full"
            placeholder="Enter registered mobile"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-govBlue text-white rounded py-2 text-sm font-semibold"
        >
          Generate OTP
        </button>
      </form>
    </div>
  );
}
