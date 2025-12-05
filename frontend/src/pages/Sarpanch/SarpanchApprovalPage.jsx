import { useState } from "react";
import { MOCK_APPLICATIONS, RISK_BANDS } from "../../lib/constants.js";
import CardGrid from "../../components/dashboard/CardGrid.jsx";
import KPICard from "../../components/dashboard/KPICard.jsx";

function getBandById(id) {
  return RISK_BANDS.find((b) => b.id === id) || null;
}

// For demo: treat these statuses as needing Sarpanch decision
function isAwaitingSarpanch(status) {
  return (
    status === "Under Review" ||
    status === "In Queue" ||
    status === "Pending Sarpanch Approval"
  );
}

export default function SarpanchApprovalPage() {
  const [decisions, setDecisions] = useState({});

  const awaitingApps = MOCK_APPLICATIONS.filter((app) =>
    isAwaitingSarpanch(app.status)
  );

  const approvedCount = Object.values(decisions).filter(
    (d) => d.decision === "Approved"
  ).length;
  const rejectedCount = Object.values(decisions).filter(
    (d) => d.decision === "Rejected"
  ).length;
  const infoCount = Object.values(decisions).filter(
    (d) => d.decision === "Info Requested"
  ).length;

  function handleDecision(appId, decisionLabel) {
    const remarks = window.prompt(
      `Add short remarks for ${decisionLabel} (optional):`
    );

    setDecisions((prev) => ({
      ...prev,
      [appId]: {
        decision: decisionLabel,
        remarks: remarks || "",
        decidedAt: new Date().toISOString(),
      },
    }));

    alert(`Demo: Sarpanch decision recorded - ${decisionLabel}`);
  }

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <section className="section-box space-y-2">
        <h1 className="section-title">Sarpanch / Local Body Approval</h1>
        <p className="text-xs md:text-sm text-slate-700">
          This dashboard provides a simple interface for Gram Panchayat or
          local body representatives to review applications, record approvals
          or rejections, and add short remarks. In a full deployment, these
          decisions would be stored in the main system and shown to officers
          and administrators.
        </p>
      </section>

      {/* Summary KPIs */}
      <section className="section-box space-y-4">
        <h2 className="text-sm md:text-base font-semibold text-slate-900">
          Summary for Current Batch
        </h2>

        <CardGrid>
          <KPICard
            label="Awaiting Sarpanch Decision"
            value={awaitingApps.length}
            subtext="Applications that are currently pending local body remarks."
          />
          <KPICard
            label="Approved (this session)"
            value={approvedCount}
            subtext="Decisions you have marked as approved in this view."
          />
          <KPICard
            label="Rejected (this session)"
            value={rejectedCount}
            subtext="Decisions you have marked as rejected in this view."
          />
          <KPICard
            label="Info Requested (this session)"
            value={infoCount}
            subtext="Cases where additional information has been requested."
          />
        </CardGrid>
      </section>

      {/* Applications Table */}
      <section className="section-box space-y-3">
        <h2 className="text-sm md:text-base font-semibold text-slate-900">
          Applications Awaiting Sarpanch Input
        </h2>

        {awaitingApps.length === 0 ? (
          <p className="text-xs md:text-sm text-slate-600">
            There are currently no applications awaiting Sarpanch approval in
            this demo dataset.
          </p>
        ) : (
          <div className="overflow-x-auto text-xs md:text-sm">
            <table className="min-w-full border border-slate-200 bg-white rounded-lg overflow-hidden">
              <thead className="bg-slate-50">
                <tr className="text-left text-[11px] md:text-xs text-slate-600">
                  <th className="px-3 py-2 border-b">ID</th>
                  <th className="px-3 py-2 border-b">Applicant</th>
                  <th className="px-3 py-2 border-b hidden md:table-cell">
                    District
                  </th>
                  <th className="px-3 py-2 border-b hidden md:table-cell">
                    Scheme
                  </th>
                  <th className="px-3 py-2 border-b">Amount</th>
                  <th className="px-3 py-2 border-b hidden md:table-cell">
                    Risk Band
                  </th>
                  <th className="px-3 py-2 border-b">Your Decision</th>
                  <th className="px-3 py-2 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {awaitingApps.map((app) => {
                  const band = getBandById(app.bandId);
                  const existing = decisions[app.id];

                  return (
                    <tr key={app.id} className="border-b last:border-b-0">
                      <td className="px-3 py-2 font-mono text-[11px]">
                        <a
                          href={`/application/${app.id}`}
                          className="text-govBlue hover:underline"
                        >
                          {app.id}
                        </a>
                      </td>
                      <td className="px-3 py-2">{app.applicantName}</td>
                      <td className="px-3 py-2 hidden md:table-cell">
                        {app.district}
                      </td>
                      <td className="px-3 py-2 hidden md:table-cell">
                        {app.scheme}
                      </td>
                      <td className="px-3 py-2">
                        ₹{app.requestedAmount.toLocaleString("en-IN")}
                      </td>
                      <td className="px-3 py-2 hidden md:table-cell">
                        {band ? (
                          <span
                            className={`inline-flex items-center px-2 py-1 rounded-full border text-[10px] ${band.color}`}
                          >
                            {band.label}
                          </span>
                        ) : (
                          "-"
                        )}
                      </td>
                      <td className="px-3 py-2">
                        {existing ? (
                          <div className="space-y-1">
                            <span className="inline-flex items-center px-2 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-200 text-[10px]">
                              {existing.decision}
                            </span>
                            {existing.remarks && (
                              <p className="text-[10px] text-slate-500">
                                “{existing.remarks}”
                              </p>
                            )}
                          </div>
                        ) : (
                          <span className="text-[10px] text-slate-500">
                            No decision recorded
                          </span>
                        )}
                      </td>
                      <td className="px-3 py-2">
                        <div className="flex flex-col gap-1">
                          <button
                            type="button"
                            className="text-[10px] md:text-xs px-2 py-1 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100"
                            onClick={() =>
                              handleDecision(app.id, "Approved")
                            }
                          >
                            Approve
                          </button>
                          <button
                            type="button"
                            className="text-[10px] md:text-xs px-2 py-1 rounded bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100"
                            onClick={() =>
                              handleDecision(app.id, "Info Requested")
                            }
                          >
                            Request Info
                          </button>
                          <button
                            type="button"
                            className="text-[10px] md:text-xs px-2 py-1 rounded bg-rose-50 text-rose-800 border border-rose-200 hover:bg-rose-100"
                            onClick={() =>
                              handleDecision(app.id, "Rejected")
                            }
                          >
                            Reject
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}

                {awaitingApps.length === 0 && (
                  <tr>
                    <td
                      colSpan="8"
                      className="px-3 py-4 text-center text-slate-500"
                    >
                      No applications awaiting Sarpanch approval.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}
