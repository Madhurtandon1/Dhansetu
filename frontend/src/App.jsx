import PageShell from "./components/layout/PageShell.jsx";
import { AppRoutes } from "./routes/index.jsx";

export default function App() {
  return (
    <PageShell>
      <AppRoutes />
    </PageShell>
  );
}