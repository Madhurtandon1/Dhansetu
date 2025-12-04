export default function ProgressBar({ currentStep, totalSteps }) {
  const percentage = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="space-y-2 mb-4">
      <div className="flex items-center justify-between text-xs text-slate-600">
        <span>Application Progress</span>
        <span>
          Step {currentStep} of {totalSteps} ({percentage}%)
        </span>
      </div>
      <div className="w-full h-2 rounded-full bg-slate-200 overflow-hidden">
        <div
          className="h-full bg-govBlue transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
