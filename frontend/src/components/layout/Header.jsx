export default function Header() {
  return (
    <header className="bg-govBlue text-black shadow-md">
      <div className="main-container py-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        {/* Left: Emblem + Title */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-white/10 border border-white/40 flex items-center justify-center text-xs font-bold">
            {/* Placeholder Ashoka emblem */}
            🇮🇳
          </div>
          <div className="leading-tight">
            <p className="text-[10px] uppercase tracking-wide text-black">
              Ministry of Social Justice &amp; Empowerment
            </p>
            <p className="font-semibold text-sm md:text-base">
              Smart NBCFDC Loan Screening Portal
            </p>
            <p className="text-[11px] text-black/80">
              A pilot initiative for fair &amp; data-driven credit access
            </p>
          </div>
        </div>

        {/* Right: Nav + Language */}
        <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-4 text-xs md:text-sm">
          <nav className="flex gap-3 md:gap-4">
            <a href="/" className="hover:text-govGold">
              Home
            </a>
            <a href="/application/new" className="hover:text-govGold">
              Apply
            </a>
            <a href="/login" className="hover:text-govGold">
              Login
            </a>
            <a href="#contact" className="hover:text-govGold">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-1 bg-blue/10 px-2 py-1 rounded border border-black/30">
            <span className="text-xs">🌐</span>
            <select className="bg-transparent outline-none text-xs md:text-sm">
              <option value="en">English</option>
              <option value="hi">हिन्दी</option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
}
