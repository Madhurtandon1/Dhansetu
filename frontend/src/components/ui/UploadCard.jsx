export default function UploadCard({
  label,
  hint,
  id,
  accept,
  onChange,
  multiple = false,
}) {
  return (
    <div className="card p-4 border-dashed border-2 border-slate-300 hover:border-govBlue transition-colors">
      <p className="text-sm font-medium text-slate-800 mb-1">{label}</p>
      {hint && <p className="text-xs text-slate-600 mb-2">{hint}</p>}
      <label
        htmlFor={id}
        className="inline-flex items-center px-3 py-2 rounded-md border border-slate-300 bg-slate-50 text-xs font-medium text-slate-700 cursor-pointer hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-govBlue focus:ring-offset-2 transition"
      >
        Choose file
      </label>
      <input
        id={id}
        type="file"
        className="hidden"
        accept={accept}
        multiple={multiple}
        onChange={onChange}
      />
    </div>
  );
}
