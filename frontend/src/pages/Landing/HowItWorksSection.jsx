export default function HowItWorksSection() {
  const steps = [
    "Applicant submits identity, household and occupation details.",
    "Uploads electricity bill and optional income/business proof.",
    "System fetches internal NBCFDC loan history.",
    "AA integration retrieves verified banking behavior.",
    "ML engine computes repayment score + income proxy score.",
    "Final risk band generated & sent for officer review.",
  ];

  return (
    <section className="section-box">
      <h2 className="section-title">How It Works</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((text, index) => (
          <div key={index} className="card p-4 flex gap-3 items-start">
            <div className="h-8 w-8 rounded-full bg-govBlue text-white flex items-center justify-center font-semibold">
              {index + 1}
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
