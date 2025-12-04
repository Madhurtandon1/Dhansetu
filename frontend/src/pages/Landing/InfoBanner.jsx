export default function InfoBanner() {
  return (
    <section className="relative -mx-4 md:mx-0 mb-10">
      <div className="absolute inset-0 bg-linear-to-r from-sky-700 via-blue-700 to-blue-900" />
      <div className="relative main-container py-6 md:py-10 text-white">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-govGold">
              Government of India · Pilot Programme
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold mt-1">
              Smart NBCFDC Loan Screening System
            </h1>
            <p className="text-sm md:text-base text-blue-100 mt-3 max-w-2xl leading-relaxed">
              End-to-end workflow using internal loan history, Account Aggregator
              data, utility bill signals, and ML-based risk assessment.
            </p>
          </div>

          <div className="flex flex-col items-stretch gap-3">
            <a
              href="/application/new"
              className="px-5 py-2.5 rounded-md bg-govGold text-govBlue font-semibold shadow hover:bg-yellow-300 transition"
            >
              Apply for Loan
            </a>
            <a
              href="/login"
              className="px-5 py-2.5 rounded-md border border-blue-100 hover:bg-white/10 transition"
            >
              Officer / Admin Login
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
