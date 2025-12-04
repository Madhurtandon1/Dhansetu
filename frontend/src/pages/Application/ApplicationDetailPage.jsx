import { MOCK_APPLICATION } from "../../lib/constants.js";
import ApplicationSummaryHeader from "../../components/application/ApplicationSummaryHeader.jsx";
import EvidencePanel from "../../components/application/EvidencePanel.jsx";
import ScorePanel from "../../components/application/ScorePanel.jsx";
import ActionBar from "../../components/application/ActionBar.jsx";

export default function ApplicationDetailPage() {
  const app = MOCK_APPLICATION;

  return (
    <div className="space-y-6 md:space-y-8">
      <ApplicationSummaryHeader app={app} />
      <ScorePanel app={app} />
      <EvidencePanel app={app} />
      <ActionBar />
    </div>
  );
}
