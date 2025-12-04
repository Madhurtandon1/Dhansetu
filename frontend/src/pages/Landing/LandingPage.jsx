import InfoBanner from "./InfoBanner.jsx";
import AboutSection from "./AboutSection.jsx";
import BenefitsSection from "./BenefitsSection.jsx";
import HowItWorksSection from "./HowItWorksSection.jsx";
import FAQSection from "./FAQSection.jsx";
import ContactSection from "./ContactSection.jsx";

export default function LandingPage() {
  return (
    <div className="space-y-4">
      <InfoBanner />
      <AboutSection />
      <BenefitsSection />
      <HowItWorksSection />
      <FAQSection />
      <ContactSection />
    </div>
  );
}
