export default function SarpanchOverviewSection() {
  return (
    <section className="section-box">
      <h2 className="section-title">Sarpanch / Local Body Approval Panel</h2>

      <div className="grid md:grid-cols-2 gap-4 text-sm md:text-base text-slate-800">
        <div className="space-y-2">
          <p className="text-sm md:text-base">
            Recommendations from Gram Panchayat or other local
            bodies are an important part of the approval process. This portal
            includes a dedicated interface where the Sarpanch or authorised
            representative can:
          </p>
          <ul className="list-disc ml-5 text-xs md:text-sm space-y-1">
            <li>Review basic beneficiary details and requested amount.</li>
            <li>See a summary of model-assessed risk and need.</li>
            <li>Record <span className="font-medium">Approve / Reject</span> decisions.</li>
            <li>Add short remarks or recommendations for the officer.</li>
          </ul>
        </div>

        <div className="card p-4 space-y-2">
          <p className="text-xs uppercase tracking-wide text-slate-500">
            Access Panel
          </p>
          <p className="font-semibold text-slate-900">
            Sarpanch Approval
          </p>
          <p className="text-xs md:text-sm text-slate-700">
            The Sarpanch Approval Panel is accessible after login. It provides
            a streamlined interface for local body representatives to review and
            endorse beneficiary applications, ensuring community involvement in
            the process.
          </p>

          <a
            href="/sarpanch"
            className="inline-flex items-center text-xs md:text-sm text-blue-800 hover:text-blue-900 underline mt-2"
          >
            Open Sarpanch Approval Panel →
          </a>
        </div>
      </div>
    </section>
  );
}
