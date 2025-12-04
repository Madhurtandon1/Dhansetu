import { MOCK_APPLICATIONS, RISK_BANDS } from "../../lib/constants.js";

function getBandById(id) {
  return RISK_BANDS.find((b) => b.id === id) || null;
}

export default function BeneficiaryDashboard() {
  const apps = MOCK_APPLICATIONS; // In real app, filter by logged-in user

  return (
    <div className="space-y-6 md:space-y-8">
      <section className="section-box">
        <h1 className="section-title">My Applications</h1>
        <p className="text-xs md:text-sm text-slate-600">
          Here you can track your submitted applications, their status and
          current risk band assessment. This view is representative for a
          beneficiary login.
        </p>
      </section>

      <section className="section-box">
        <h2 className="text-lg md:text-xl font-semibold text-govBlue mb-4">
          Application List
        </h2>

        <div className="overflow-x-auto text-xs md:text-sm">
          <table className="min-w-full border border-slate-200 bg-white rounded-lg overflow-hidden">
            <thead className="bg-slate-50 text-[11px] uppercase tracking-wide text-slate-600 border-b">
              <tr>
                <th className="px-4 py-3 text-left">ID</th>
                <th className="px-4 py-3 text-left hidden md:table-cell">Scheme</th>
                <th className="px-4 py-3 text-left hidden md:table-cell">District</th>
                <th className="px-4 py-3 text-left">Amount</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Risk Band</th>
                <th className="px-4 py-3 text-left hidden lg:table-cell">Last Updated</th>
              </tr>
            </thead>
            <tbody>
              {apps.map((app) => {
                const band = getBandById(app.bandId);
                return (
                  <tr key={app.id} className="border-b hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 font-mono text-[11px]">
                      <a
                        href={`/application/${app.id}`}
                        className="text-govBlue hover:underline font-semibold"
                      >
                        {app.id}
                      </a>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">{app.scheme}</td>
                    <td className="px-4 py-3 hidden md:table-cell">{app.district}</td>
                    <td className="px-4 py-3">
                      ₹{app.requestedAmount.toLocaleString("en-IN")}
                    </td>
                    <td className="px-4 py-3">{app.status}</td>
                    <td className="px-4 py-3">
                      {band ? (
                        <span
                          className={`inline-flex items-center px-2 py-1 rounded-full border text-[10px] font-medium ${band.color}`}
                        >
                          {band.label}
                        </span>
                      ) : (
                        "-"
                      )}
                    </td>
                    <td className="px-4 py-3 text-slate-600 hidden lg:table-cell text-xs">
                      {app.lastUpdated}
                    </td>
                  </tr>
                );
              })}
              {apps.length === 0 && (
                <tr>
                  <td colSpan="7" className="py-8 text-center text-slate-500">
                    No records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
