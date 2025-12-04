export default function UploadCard({
  label,
  hint,
  id,
  accept,
  onChange,
  multiple = false,
}) {
  return (
    <div className="card p-4 border-dashed border-2 border-slate-300 hover:border-govBlue transition">
      <p className="text-sm font-medium mb-1">{label}</p>
      {hint && <p className="text-xs text-slate-500 mb-2">{hint}</p>}
      <label
        htmlFor={id}
        className="inline-flex items-center px-3 py-2 rounded-md border border-slate-300 bg-slate-50 text-xs font-medium text-slate-700 cursor-pointer hover:bg-slate-100"
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
