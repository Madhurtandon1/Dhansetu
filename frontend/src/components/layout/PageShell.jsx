import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function PageShell({ children }) {
  return (
    <div className="min-h-screen flex flex-col app-bg">
      <Header />
      <main className="flex-1 py-6 md:py-10">
        <div className="main-container space-y-10">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
