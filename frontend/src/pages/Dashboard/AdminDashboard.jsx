import { DASHBOARD_STATS, MOCK_APPLICATIONS, RISK_BANDS } from "../../lib/constants.js";
import CardGrid from "../../components/dashboard/CardGrid.jsx";
import KPICard from "../../components/dashboard/KPICard.jsx";

function getBandById(id) {
  return RISK_BANDS.find((b) => b.id === id) || null;
}

export default function AdminDashboard() {
  return (
    <div className="space-y-6 md:space-y-8">
      <section className="section-box">
        <h1 className="section-title">Admin / Reviewer Dashboard</h1>
        <p className="text-xs md:text-sm text-slate-600">
          Central view of applications across the system with key performance
          indicators and a consolidated review table.
        </p>
      </section>

      <section className="section-box">
        <h2 className="text-lg md:text-xl font-semibold text-govBlue mb-4">
          Overview
        </h2>

        <CardGrid>
          <KPICard
            label="Total Applications"
            value={DASHBOARD_STATS.totalApplications}
            subtext="Total applications recorded in the current dataset."
          />
          <KPICard
            label="Approved"
            value={DASHBOARD_STATS.approved}
            subtext="Applications that have been fully approved."
          />
          <KPICard
            label="Rejected"
            value={DASHBOARD_STATS.rejected}
            subtext="Applications marked as not eligible / rejected."
          />
          <KPICard
            label="Under Review"
            value={DASHBOARD_STATS.underReview}
            subtext="Pending verification or decision."
          />
          <KPICard
            label="Low Risk – High Need"
            value={
              MOCK_APPLICATIONS.filter(
                (a) => a.bandId === "low-risk-high-need"
              ).length
            }
            subtext="Priority candidates for support."
          />
          <KPICard
            label="High Risk"
            value={
              MOCK_APPLICATIONS.filter((a) =>
                a.bandId.startsWith("high-risk")
              ).length
            }
            subtext="Cases requiring stronger scrutiny."
          />
        </CardGrid>
      </section>

      <div className="h-[1px] bg-slate-200 my-6"></div>

      <section className="section-box">
        <h2 className="text-lg md:text-xl font-semibold text-govBlue mb-4">
          Application Review Table
        </h2>
        <div className="overflow-x-auto text-xs md:text-sm">
          <table className="min-w-full border border-slate-200 bg-white rounded-lg overflow-hidden">
            <thead className="bg-slate-50 text-[11px] uppercase tracking-wide text-slate-600 border-b">
              <tr>
                <th className="px-4 py-3 text-left">ID</th>
                <th className="px-4 py-3 text-left">Applicant</th>
                <th className="px-4 py-3 text-left hidden md:table-cell">District</th>
                <th className="px-4 py-3 text-left hidden md:table-cell">Scheme</th>
                <th className="px-4 py-3 text-left">Amount</th>
                <th className="px-4 py-3 text-left">Score</th>
                <th className="px-4 py-3 text-left hidden md:table-cell">Band</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left hidden lg:table-cell">Assigned To</th>
              </tr>
            </thead>
            <tbody>
              {MOCK_APPLICATIONS.map((app) => {
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
                    <td className="px-4 py-3 hidden md:table-cell">{app.scheme}</td>
                    <td className="px-4 py-3">
                      ₹{app.requestedAmount.toLocaleString("en-IN")}
                    </td>
                    <td className="px-4 py-3 font-semibold text-govBlue">{app.compositeScore}</td>
                    <td className="px-4 py-3 hidden md:table-cell">
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
                    <td className="px-4 py-3 text-slate-700 hidden lg:table-cell text-xs">
                      {app.assignedTo}
                    </td>
                  </tr>
                );
              })}
              {MOCK_APPLICATIONS.length === 0 && (
                <tr>
                  <td colSpan="9" className="py-8 text-center text-slate-500">
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
