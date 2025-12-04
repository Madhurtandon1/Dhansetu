import { MOCK_APPLICATIONS, RISK_BANDS } from "../../lib/constants.js";

const CURRENT_OFFICER_ID = "FO-101";

function getBandById(id) {
  return RISK_BANDS.find((b) => b.id === id) || null;
}

export default function FieldOfficerDashboard() {
  const assignedApps = MOCK_APPLICATIONS.filter(
    (app) => app.assignedTo === CURRENT_OFFICER_ID
  );

  return (
    <div className="space-y-6 md:space-y-8">
      <section className="section-box">
        <h1 className="section-title">Field Officer Dashboard</h1>
        <p className="text-xs md:text-sm text-slate-600">
          This view represents the worklist for a field officer. Applications
          assigned to you appear below with their risk band and current status.
        </p>
      </section>

      <section className="section-box">
        <h2 className="text-lg md:text-xl font-semibold text-govBlue mb-4">
          Assigned Applications ({assignedApps.length})
        </h2>

        <div className="overflow-x-auto text-xs md:text-sm">
          <table className="min-w-full border border-slate-200 bg-white rounded-lg overflow-hidden">
            <thead className="bg-slate-50 text-[11px] uppercase tracking-wide text-slate-600 border-b">
              <tr>
                <th className="px-4 py-3 text-left">ID</th>
                <th className="px-4 py-3 text-left">Applicant</th>
                <th className="px-4 py-3 text-left hidden md:table-cell">District</th>
                <th className="px-4 py-3 text-left hidden md:table-cell">Score</th>
                <th className="px-4 py-3 text-left">Risk Band</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {assignedApps.map((app) => {
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
                    <td className="px-4 py-3">{app.applicantName}</td>
                    <td className="px-4 py-3 hidden md:table-cell">{app.district}</td>
                    <td className="px-4 py-3 hidden md:table-cell font-semibold text-govBlue">{app.compositeScore}</td>
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
                    <td className="px-4 py-3">{app.status}</td>
                    <td className="px-4 py-3">
                      <a
                        href={`/application/${app.id}`}
                        className="text-xs text-govBlue underline hover:font-semibold transition"
                      >
                        Open Details
                      </a>
                    </td>
                  </tr>
                );
              })}
              {assignedApps.length === 0 && (
                <tr>
                  <td
                    colSpan="7"
                    className="py-8 text-center text-slate-500"
                  >
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
