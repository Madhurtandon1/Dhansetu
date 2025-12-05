import ashoka from "./ashoka.png";

export default function Header() {
  return (
    <header className="bg-govBlue text-black shadow-md print:hidden">
      <div className="max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 py-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        {/* Left: Emblem + Title */}
        <div className="flex items-center gap-3">
          <div className="h-15 w-10 overflow-hidden border border-white/40 bg-white/20 flex items-center justify-center">
            <img src={ashoka} alt="Ashoka Emblem" className="h-full w-full object-contain" />
          </div>

          <div className="leading-tight">
            <p className="text-[10px] uppercase tracking-wide text-black/90">
              Ministry of Social Justice &amp; Empowerment
            </p>
            <p className="font-semibold text-sm md:text-base text-black">
              Smart NBCFDC Loan Screening Portal
            </p>
            <p className="text-[11px] text-c=black/80">
              A pilot initiative for fair &amp; data-driven credit access
            </p>
          </div>
        </div>

        {/* Right: Nav + Language */}
        <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-4 text-xs md:text-sm">
          <nav className="flex gap-3 md:gap-4">
            <a href="/" className="text-black hover:text-govGold transition font-medium">
              Home
            </a>
            <a href="/application/new" className="text-black hover:text-govGold transition font-medium">
              Apply
            </a>
            <a href="/login" className="text-black hover:text-govGold transition font-medium">
              Login
            </a>
            <a href="#contact" className="text-black hover:text-govGold transition font-medium">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-1 bg-white/10 px-2 py-1 rounded border border-white/30">
            <span className="text-xs">🌐</span>
            <select className="bg-transparent outline-none text-xs md:text-sm text-black focus:outline-none">
              <option value="en" className="text-slate-900">English</option>
              <option value="hi" className="text-slate-900">हिन्दी</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}
