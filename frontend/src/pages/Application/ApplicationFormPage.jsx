import { useState } from "react";
import Button from "../../components/ui/Button.jsx";
import FormField from "../../components/ui/FormField.jsx";
import ProgressBar from "../../components/ui/ProgressBar.jsx";
import UploadCard from "../../components/ui/UploadCard.jsx";

const TOTAL_STEPS = 4;

export default function ApplicationFormPage() {
  const [step, setStep] = useState(1);

  // Form state aligned with backend field names
const [formData, setFormData] = useState({
  applicantName: "",
  age: "",
  gender: "",
  district: "",
  address: "",
  occupation_type: "",
  education_level: "",
  household_size: "",
  ration_card_type: "",
  aadhaarNumber: "",
  electricityBill: null,
  electricity_units: "",
  incomeCertificate: null,
  businessProof: null,
  lpgInfo: "",
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

    // This is the payload shape your backend likely expects
    const payload = {
      applicantName: formData.applicantName,
      aadhaarNumber: formData.aadhaarNumber,
      gender: formData.gender,
      occupation_type: formData.occupation_type,
      education_level: formData.education_level,
      household_size: Number(formData.household_size || 0),
      ration_card_type: formData.ration_card_type,
      district: formData.district,
      // optional / extra fields:
      age: formData.age ? Number(formData.age) : null,
      address: formData.address,
      lpgInfo: formData.lpgInfo,
      digitalPaymentsInfo: formData.digitalPaymentsInfo,
      // documents – will be FormData / file upload later
      electricityBill: formData.electricityBill,
      incomeCertificate: formData.incomeCertificate,
      businessProof: formData.businessProof,
    };

    console.log("Submitting application payload:", payload);
    alert(
      "Demo: Application payload logged in console. Wire this to API later."
    );
  }

  return (
    <div className="space-y-6 md:space-y-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <div>
          <h1 className="text-2xl md:text-3xl font-semibold text-govBlue">
            New Beneficiary Application
          </h1>
          <p className="text-xs md:text-sm text-slate-600 mt-1">
            Fill the sections step by step. Fields marked with{" "}
            <span className="text-red-600 font-semibold">*</span> are mandatory.
          </p>
        </div>
        <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-govSoftBlue text-xs text-govBlue border border-blue-200 font-medium">
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
          <section className="section-box">
            <h2 className="section-title mb-4">Personal Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField id="applicantName" label="Applicant Name" required>
                <input
                  id="applicantName"
                  type="text"
                  value={formData.applicantName}
                  onChange={(e) => updateField("applicantName", e.target.value)}
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-govBlue focus:border-govBlue transition"
                />
              </FormField>

              <FormField id="age" label="Age" required>
                <input
                  id="age"
                  type="number"
                  min="18"
                  value={formData.age}
                  onChange={(e) => updateField("age", e.target.value)}
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-govBlue focus:border-govBlue transition"
                />
              </FormField>

              <FormField id="gender" label="Gender" required>
                <select
                  id="gender"
                  value={formData.gender}
                  onChange={(e) => updateField("gender", e.target.value)}
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-govBlue focus:border-govBlue transition"
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
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-govBlue focus:border-govBlue transition"
                />
              </FormField>
            </div>

            <FormField id="address" label="Address" required>
              <textarea
                id="address"
                rows="2"
                value={formData.address}
                onChange={(e) => updateField("address", e.target.value)}
                className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-govBlue focus:border-govBlue transition"
              />
            </FormField>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField id="occupation_type" label="Occupation Type" required>
                <select
                  id="occupation_type"
                  value={formData.occupation_type}
                  onChange={(e) =>
                    updateField("occupation_type", e.target.value)
                  }
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-govBlue focus:border-govBlue transition"
                >
                  <option value="">Select</option>
                  <option value="Farmer">Farmer</option>
                  <option value="Daily Wage">Daily Wage</option>
                  <option value="Self Employed">Self Employed</option>
                  <option value="Private Job">Private Job</option>
                  <option value="Govt Job">Govt Job</option>
                </select>
              </FormField>

              <FormField id="education_level" label="Education Level" required>
                <select
                  id="education_level"
                  value={formData.education_level}
                  onChange={(e) =>
                    updateField("education_level", e.target.value)
                  }
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-govBlue focus:border-govBlue transition"
                >
                  <option value="">Select</option>
                  <option value="No formal education">
                    No formal education
                  </option>
                  <option value="Primary">Primary</option>
                  <option value="Middle">Middle</option>
                  <option value="Secondary (10th)">Secondary (10th)</option>
                  <option value="Higher Secondary (12th)">
                    Higher Secondary (12th)
                  </option>
                  <option value="Graduate">Graduate</option>
                  <option value="Postgraduate and above">
                    Postgraduate and above
                  </option>
                </select>
              </FormField>

              <FormField
                id="household_size"
                label="Household Size"
                required
                hint="Number of people supported by this income."
              >
                <input
                  id="household_size"
                  type="number"
                  min="1"
                  value={formData.household_size}
                  onChange={(e) =>
                    updateField("household_size", e.target.value)
                  }
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-govBlue focus:border-govBlue transition"
                />
              </FormField>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                id="ration_card_type"
                label="Ration Card Type"
                required
              >
                <select
                  id="ration_card_type"
                  value={formData.ration_card_type}
                  onChange={(e) =>
                    updateField("ration_card_type", e.target.value)
                  }
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-govBlue focus:border-govBlue transition"
                >
                  <option value="">Select</option>
                  <option value="APL">APL</option>
                  <option value="BPL">BPL</option>
                  <option value="AAY">AAY</option>
                </select>
              </FormField>

              <FormField
                id="aadhaarNumber"
                label="Aadhaar Number"
                required
                hint="Used only as a unique identifier. The raw number is never displayed."
              >
                <input
                  id="aadhaarNumber"
                  type="text"
                  value={formData.aadhaarNumber}
                  onChange={(e) => {
                    const cleaned = e.target.value
                      .replace(/\D/g, "")
                      .slice(0, 12);
                    updateField("aadhaarNumber", cleaned);
                  }}
                  className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-govBlue focus:border-govBlue transition"
                  maxLength={12}
                />
              </FormField>
            </div>
          </section>
        )}

        {/* STEP 2: DOCUMENTS */}
        {step === 2 && (
          <section className="section-box">
            <h2 className="section-title mb-4">Documents</h2>

            <UploadCard
              id="electricityBill"
              label="Electricity Bill"
              hint="Latest bill used as a proxy for consumption and household stability. Accepted: PDF/JPG/PNG."
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={(e) =>
                updateField("electricityBill", e.target.files?.[0] ?? null)
              }
            />
            <FormField
              id="electricity_units"
              label="Average Monthly Electricity Units Consumed"
              hint="Enter approximate units (kWh) based on your recent bills."
              required
            >
              <input
                id="electricity_units"
                type="number"
                min="0"
                value={formData.electricity_units}
                onChange={(e) =>
                  updateField("electricity_units", e.target.value)
                }
                className="w-full border border-slate-300 rounded-lg px-4 py-2 text-sm 
               focus:outline-none focus:ring-2 focus:ring-govBlue focus:border-govBlue transition"
              />
            </FormField>

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
          <section className="section-box">
            <h2 className="section-title mb-4">Utility & Digital Signals</h2>

            <FormField
              id="lpgInfo"
              label="LPG / Utility Usage Details"
              hint="Optional notes about LPG usage or other household utilities."
            >
              <textarea
                id="lpgInfo"
                rows="2"
                value={formData.lpgInfo}
                onChange={(e) => updateField("lpgInfo", e.target.value)}
                className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-govBlue focus:border-govBlue transition"
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
                className="w-full border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-govBlue focus:border-govBlue transition"
              />
            </FormField>

            <div className="bg-govSoftBlue border border-blue-200 rounded-lg p-3 text-xs text-slate-700">
              In a full deployment, additional signals may be securely fetched
              via Account Aggregator and integrated into the scoring model.
            </div>
          </section>
        )}

        {/* STEP 4: REVIEW & SUBMIT */}
        {step === 4 && (
          <section className="section-box">
            <h2 className="section-title mb-4">Review & Submit</h2>

            <p className="text-sm text-slate-700 mb-4">
              Please review the key details below before submitting. In a full
              system, you would also see a pre-estimated score preview and
              consent summary here.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm mb-4">
              <div className="card p-4">
                <h3 className="font-semibold text-govBlue mb-3">
                  Personal Details
                </h3>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">Name:</span>{" "}
                    {formData.applicantName}
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
                    {formData.household_size || "-"}
                  </p>
                </div>
              </div>

              <div className="card p-4">
                <h3 className="font-semibold text-govBlue mb-3">
                  Socio-economic
                </h3>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">Occupation Type:</span>{" "}
                    {formData.occupation_type || "-"}
                  </p>
                  <p>
                    <span className="font-medium">Education Level:</span>{" "}
                    {formData.education_level || "-"}
                  </p>
                  <p>
                    <span className="font-medium">Ration Card Type:</span>{" "}
                    {formData.ration_card_type || "-"}
                  </p>
                  <p>
                    <span className="font-medium">Aadhaar (masked):</span>{" "}
                    {formData.aadhaarNumber
                      ? `****-****-${formData.aadhaarNumber.slice(-4)}`
                      : "-"}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 text-xs md:text-sm text-slate-700">
              <p className="font-semibold text-govInk mb-2">Consent Summary</p>
              <p className="leading-relaxed">
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
        <div className="flex justify-between gap-3 pt-2">
          <Button
            type="button"
            variant="subtle"
            disabled={step === 1}
            onClick={prevStep}
          >
            ← Previous
          </Button>

          {step < TOTAL_STEPS ? (
            <Button
              type="button"
              onClick={nextStep}
              className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
            >
              Next →
            </Button>
          ) : (
            <Button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
            >
              Submit Application
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
