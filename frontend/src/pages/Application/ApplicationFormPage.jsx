import { useState } from "react";
import Button from "../../components/ui/Button.jsx";
import FormField from "../../components/ui/FormField.jsx";
import ProgressBar from "../../components/ui/ProgressBar.jsx";
import UploadCard from "../../components/ui/UploadCard.jsx";

const TOTAL_STEPS = 4;

export default function ApplicationFormPage() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    fullName: "",
    age: "",
    gender: "",
    district: "",
    address: "",
    occupation: "",
    education: "",
    householdSize: "",
    rationCategory: "",
    aadhar: "",
    electricityBill: null,
    incomeCertificate: null,
    businessProof: null,
    mobileRechargeInfo: "",
    digitalPaymentsInfo: "",
  });

  function updateField(name, value) {
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function nextStep() {
    if (step < TOTAL_STEPS) setStep(step + 1);
  }

  function prevStep() {
    if (step > 1) setStep(step - 1);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Submitting application:", formData);
    alert("Demo: Application submitted in console. You can wire API later.");
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <div>
          <h1 className="text-xl md:text-2xl font-semibold text-slate-900">
            New Beneficiary Application
          </h1>
          <p className="text-xs md:text-sm text-slate-600">
            Fill the sections step by step. Fields marked with * are mandatory.
          </p>
        </div>
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-xs text-govBlue border border-blue-100">
          Mobile-first form · Draft not yet connected
        </span>
      </div>

      <ProgressBar currentStep={step} totalSteps={TOTAL_STEPS} />

      <form
        onSubmit={handleSubmit}
        className="space-y-6 text-sm md:text-base text-slate-800"
      >
        {/* STEP 1: PERSONAL DETAILS */}
        {step === 1 && (
          <section className="section-box space-y-4">
            <h2 className="section-title">Personal Details</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <FormField id="fullName" label="Full Name" required>
                <input
                  id="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => updateField("fullName", e.target.value)}
                  className="w-full border rounded-md px-3 py-2 text-sm border-slate-300 focus:outline-none focus:ring-2 focus:ring-govBlue focus:border-govBlue"
                />
              </FormField>

              <FormField id="age" label="Age" required>
                <input
                  id="age"
                  type="number"
                  min="18"
                  value={formData.age}
                  onChange={(e) => updateField("age", e.target.value)}
                  className="w-full border rounded-md px-3 py-2 text-sm border-slate-300 focus:outline-none focus:ring-2 focus:ring-govBlue focus:border-govBlue"
                />
              </FormField>

              <FormField id="gender" label="Gender" required>
                <select
                  id="gender"
                  value={formData.gender}
                  onChange={(e) => updateField("gender", e.target.value)}
                  className="w-full border rounded-md px-3 py-2 text-sm border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-govBlue focus:border-govBlue"
                >
                  <option value="">Select</option>
                  <option value="female">Female</option>
                  <option value="male">Male</option>
                  <option value="other">Other</option>
                </select>
              </FormField>

              <FormField id="district" label="District" required>
                <input
                  id="district"
                  type="text"
                  value={formData.district}
                  onChange={(e) => updateField("district", e.target.value)}
                  className="w-full border rounded-md px-3 py-2 text-sm border-slate-300 focus:outline-none focus:ring-2 focus:ring-govBlue focus:border-govBlue"
                />
              </FormField>
            </div>

            <FormField id="address" label="Address" required>
              <textarea
                id="address"
                rows="2"
                value={formData.address}
                onChange={(e) => updateField("address", e.target.value)}
                className="w-full border rounded-md px-3 py-2 text-sm border-slate-300 focus:outline-none focus:ring-2 focus:ring-govBlue focus:border-govBlue"
              />
            </FormField>

            <div className="grid md:grid-cols-3 gap-4">
              <FormField id="occupation" label="Occupation" required>
                <input
                  id="occupation"
                  type="text"
                  value={formData.occupation}
                  onChange={(e) => updateField("occupation", e.target.value)}
                  className="w-full border rounded-md px-3 py-2 text-sm border-slate-300 focus:outline-none focus:ring-2 focus:ring-govBlue focus:border-govBlue"
                />
              </FormField>

              <FormField id="education" label="Education Level">
                <input
                  id="education"
                  type="text"
                  value={formData.education}
                  onChange={(e) => updateField("education", e.target.value)}
                  className="w-full border rounded-md px-3 py-2 text-sm border-slate-300 focus:outline-none focus:ring-2 focus:ring-govBlue focus:border-govBlue"
                />
              </FormField>

              <FormField
                id="householdSize"
                label="Household Size"
                required
                hint="Number of people supported by this income."
              >
                <input
                  id="householdSize"
                  type="number"
                  min="1"
                  value={formData.householdSize}
                  onChange={(e) =>
                    updateField("householdSize", e.target.value)
                  }
                  className="w-full border rounded-md px-3 py-2 text-sm border-slate-300 focus:outline-none focus:ring-2 focus:ring-govBlue focus:border-govBlue"
                />
              </FormField>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                id="rationCategory"
                label="Ration Card Category"
                hint="E.g. AAY, BPL, APL."
              >
                <input
                  id="rationCategory"
                  type="text"
                  value={formData.rationCategory}
                  onChange={(e) =>
                    updateField("rationCategory", e.target.value)
                  }
                  className="w-full border rounded-md px-3 py-2 text-sm border-slate-300 focus:outline-none focus:ring-2 focus:ring-govBlue focus:border-govBlue"
                />
              </FormField>

              <FormField
                id="aadhar"
                label="Aadhaar Number"
                required
                hint="Used only as a unique identifier. The raw number is not stored directly."
              >
                <input
                  id="aadhar"
                  type="text"
                  value={formData.aadhar}
                  onChange={(e) => updateField("aadhar", e.target.value)}
                  className="w-full border rounded-md px-3 py-2 text-sm border-slate-300 focus:outline-none focus:ring-2 focus:ring-govBlue focus:border-govBlue"
                />
              </FormField>
            </div>
          </section>
        )}

        {/* STEP 2: DOCUMENTS */}
        {step === 2 && (
          <section className="section-box space-y-5">
            <h2 className="section-title">Documents</h2>

            <UploadCard
              id="electricityBill"
              label="Electricity Bill"
              hint="Latest bill used as a proxy for consumption and household stability. Accepted: PDF/JPG/PNG."
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) =>
                updateField("electricityBill", e.target.files?.[0] ?? null)
              }
            />

            <UploadCard
              id="incomeCertificate"
              label="Income Certificate (optional)"
              hint="If available, upload to support income estimation."
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) =>
                updateField("incomeCertificate", e.target.files?.[0] ?? null)
              }
            />

            <UploadCard
              id="businessProof"
              label="Business Proof (if self-employed)"
              hint="E.g. shop license, UDYAM, GST certificate etc."
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) =>
                updateField("businessProof", e.target.files?.[0] ?? null)
              }
            />
          </section>
        )}

        {/* STEP 3: UTILITY & DIGITAL SIGNALS */}
        {step === 3 && (
          <section className="section-box space-y-4">
            <h2 className="section-title">Utility & Digital Signals</h2>

            <FormField
              id="mobileRechargeInfo"
              label="Mobile Recharge / Usage Details"
              hint="Optional notes about monthly recharge pattern or data plans."
            >
              <textarea
                id="mobileRechargeInfo"
                rows="2"
                value={formData.mobileRechargeInfo}
                onChange={(e) =>
                  updateField("mobileRechargeInfo", e.target.value)
                }
                className="w-full border rounded-md px-3 py-2 text-sm border-slate-300 focus:outline-none focus:ring-2 focus:ring-govBlue focus:border-govBlue"
              />
            </FormField>

            <FormField
              id="digitalPaymentsInfo"
              label="Digital Payments / UPI Usage"
              hint="Optional notes about regular UPI or digital payment behaviour."
            >
              <textarea
                id="digitalPaymentsInfo"
                rows="2"
                value={formData.digitalPaymentsInfo}
                onChange={(e) =>
                  updateField("digitalPaymentsInfo", e.target.value)
                }
                className="w-full border rounded-md px-3 py-2 text-sm border-slate-300 focus:outline-none focus:ring-2 focus:ring-govBlue focus:border-govBlue"
              />
            </FormField>

            <div className="bg-blue-50 border border-blue-100 rounded-md p-3 text-xs text-slate-700">
              In a full deployment, additional signals may be securely fetched
              via Account Aggregator and integrated into the scoring model.
            </div>
          </section>
        )}

        {/* STEP 4: REVIEW & SUBMIT */}
        {step === 4 && (
          <section className="section-box space-y-4">
            <h2 className="section-title">Review & Submit</h2>

            <p className="text-sm text-slate-700">
              Please review the key details below before submitting. In a full
              system, you would also see a pre-estimated score preview and
              consent summary here.
            </p>

            <div className="grid md:grid-cols-2 gap-4 text-xs md:text-sm">
              <div className="card p-4 space-y-1">
                <h3 className="font-semibold text-govBlue mb-1">
                  Personal Details
                </h3>
                <p>
                  <span className="font-medium">Name:</span> {formData.fullName}
                </p>
                <p>
                  <span className="font-medium">Age:</span> {formData.age}
                </p>
                <p>
                  <span className="font-medium">Gender:</span>{" "}
                  {formData.gender || "-"}
                </p>
                <p>
                  <span className="font-medium">District:</span>{" "}
                  {formData.district}
                </p>
                <p>
                  <span className="font-medium">Household Size:</span>{" "}
                  {formData.householdSize || "-"}
                </p>
              </div>

              <div className="card p-4 space-y-1">
                <h3 className="font-semibold text-govBlue mb-1">
                  Socio-economic
                </h3>
                <p>
                  <span className="font-medium">Occupation:</span>{" "}
                  {formData.occupation || "-"}
                </p>
                <p>
                  <span className="font-medium">Education:</span>{" "}
                  {formData.education || "-"}
                </p>
                <p>
                  <span className="font-medium">Ration Category:</span>{" "}
                  {formData.rationCategory || "-"}
                </p>
                <p>
                  <span className="font-medium">Aadhaar (masked):</span>{" "}
                  {formData.aadhar
                    ? `****-****-${formData.aadhar.slice(-4)}`
                    : "-"}
                </p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-md p-3 text-xs md:text-sm text-slate-700">
              <p className="font-semibold mb-1">Consent Summary (Demo Text)</p>
              <p>
                By submitting this form, you confirm that the provided
                information is accurate to the best of your knowledge and agree
                to the use of your data for eligibility assessment under
                specified schemes. In a production system, explicit digital
                consent flows and Account Aggregator consents will be displayed
                here.
              </p>
            </div>
          </section>
        )}

        {/* NAV BUTTONS */}
        <div className="flex justify-between pt-2">
          <Button
            type="button"
            variant="subtle"
            disabled={step === 1}
            onClick={prevStep}
          >
            ← Previous
          </Button>

          {step < TOTAL_STEPS ? (
            <Button type="button" onClick={nextStep}>
              Next →
            </Button>
          ) : (
            <Button type="submit">Submit Application</Button>
          )}
        </div>
      </form>
    </div>
  );
}
