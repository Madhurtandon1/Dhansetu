export default function BenefitsSection() {
  return (
    <section className="section-box">
      <h2 className="section-title">Key Benefits</h2>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="card p-5 border-l-4 border-govBlue">
          <h3 className="font-semibold text-govBlue mb-2">For Beneficiaries</h3>
          <ul className="list-disc ml-5 text-sm space-y-1">
            <li>Simple, guided loan application flow.</li>
            <li>Less paperwork due to AA data integration.</li>
            <li>Clear status updates and risk band transparency.</li>
          </ul>
        </div>

        <div className="card p-5 border-l-4 border-sky-700">
          <h3 className="font-semibold text-sky-700 mb-2">For Field Officers</h3>
          <ul className="list-disc ml-5 text-sm space-y-1">
            <li>Queue of verifications with clear priorities.</li>
            <li>Unified document & evidence view per beneficiary.</li>
            <li>Support for on-ground verification remarks.</li>
          </ul>
        </div>

        <div className="card p-5 border-l-4 border-blue-500">
          <h3 className="font-semibold text-blue-700 mb-2">
            For NBCFDC & Administration
          </h3>
          <ul className="list-disc ml-5 text-sm space-y-1">
            <li>Uniform scoring across districts.</li>
            <li>Powerful audit trail for decisions.</li>
            <li>Data insights for scheme monitoring.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
