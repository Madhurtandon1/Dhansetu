import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import LandingPage from "../pages/Landing/LandingPage.jsx";
import LoginPage from "../pages/Auth/LoginPage.jsx";

import BeneficiaryDashboard from "../pages/Dashboard/BeneficiaryDashboard.jsx";
import FieldOfficerDashboard from "../pages/Dashboard/FieldOfficerDashboard.jsx";
import AdminDashboard from "../pages/Dashboard/AdminDashboard.jsx";

import ApplicationFormPage from "../pages/Application/ApplicationFormPage.jsx";
import ApplicationDetailPage from "../pages/Application/ApplicationDetailPage.jsx";
import ManualReviewQueuePage from "../pages/Application/ManualReviewQueuePage.jsx";
import AuditLogPage from "../pages/Application/AuditLogPage.jsx";

import SarpanchApprovalPage from "../pages/Sarpanch/SarpanchApprovalPage.jsx";

function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-2xl font-semibold mb-2">404 – Page Not Found</h1>
      <p className="text-slate-600 mb-4">
        The page you are looking for does not exist.
      </p>
      <a href="/" className="text-govBlue underline">
        Go back to Home
      </a>
    </div>
  );
}

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />

        {/* Dashboards */}
        <Route
          path="/dashboard/beneficiary"
          element={<BeneficiaryDashboard />}
        />
        <Route
          path="/dashboard/field-officer"
          element={<FieldOfficerDashboard />}
        />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />

        {/* Application flow */}
        <Route path="/application/new" element={<ApplicationFormPage />} />
        <Route path="/application/:id" element={<ApplicationDetailPage />} />
        <Route path="/review" element={<ManualReviewQueuePage />} />
        <Route path="/audit" element={<AuditLogPage />} />

        {/* Sarpanch */}
        <Route path="/sarpanch" element={<SarpanchApprovalPage />} />

        {/* Fallback */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
