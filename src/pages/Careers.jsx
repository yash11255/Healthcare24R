import React, { useState } from "react";
import { CheckCircle, Users, ClipboardCheck, MessageCircle, MapPin, Briefcase } from "lucide-react";

const Careers = () => {
  // Form State
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    role: "",
    experience: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);

  // TODO: Replace with your actual Google Apps Script endpoint URL
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbydj-kUEa3DtYMa47f24EIARQ5KFUJk5tzg0zXLf-H6LASKNc7uz8H73SAoeA9cJzf9ow/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(null);
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSuccess("Thank you! Your application has been received.");
        setFormData({ fullName: "", phone: "", role: "", experience: "", location: "" });
      } else {
        setSuccess("There was an error submitting your application. Please try again.");
      }
    } catch (err) {
      setSuccess("");
    }
    setSubmitting(false);
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans">
      {/* Hero Section */}
      <header className="bg-blue-800 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Join Our Care Team</h1>
        <p className="text-xl max-w-2xl mx-auto opacity-90">
          Build a meaningful career in home healthcare with respect and stability.
          <br />
          <span className="text-blue-200">होम हेल्थकेयर में सम्मानजनक करियर की शुरुआत करें।</span>
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-4 -mt-10">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column: Info & Benefits */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Why Join Us Cards */}
            <section className="bg-white rounded-2xl shadow-sm p-8 border border-slate-100">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <CheckCircle className="text-green-500" /> Why Work With Us?
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex gap-3 items-start">
                    <div className="bg-blue-100 p-1 rounded">✔</div>
                    <p><b>Fixed & Timely Salary:</b> No delays in your payments.</p>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="bg-blue-100 p-1 rounded">✔</div>
                    <p><b>Flexible Shifts:</b> Choose between 12 or 24-hour duties.</p>
                  </div>
                </div>
                <div className="space-y-3 border-l pl-6 border-slate-100">
                  <div className="flex gap-3 items-start text-slate-600">
                    <div className="bg-green-100 p-1 rounded">✔</div>
                    <p><b>समय पर सैलरी:</b> भुगतान में कोई देरी नहीं।</p>
                  </div>
                  <div className="flex gap-3 items-start text-slate-600">
                    <div className="bg-green-100 p-1 rounded">✔</div>
                    <p><b>सुविधाजनक शिफ्ट:</b> अपनी पसंद से 12 या 24 घंटे चुनें।</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Application Steps */}
            <section className="bg-white rounded-2xl shadow-sm p-8 border border-slate-100">
              <h2 className="text-2xl font-bold mb-8">How to Join? / कैसे जुड़ें?</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: <MessageCircle />, title: "Apply", hi: "आवेदन" },
                  { icon: <ClipboardCheck />, title: "Verify Docs", hi: "दस्तावेज़" },
                  { icon: <Users />, title: "Interview", hi: "इंटरव्यू" },
                  { icon: <Briefcase />, title: "Start Job", hi: "जॉब शुरू" },
                ].map((step, idx) => (
                  <div key={idx} className="text-center flex flex-col items-center">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-3">
                      {step.icon}
                    </div>
                    <p className="font-bold text-sm uppercase tracking-wide">{step.title}</p>
                    <p className="text-xs text-slate-500 font-medium">{step.hi}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: The Form */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl border border-blue-100 sticky top-10 overflow-hidden">
              <div className="bg-blue-600 p-6 text-white text-center">
                <h3 className="text-xl font-bold uppercase tracking-tight">Application Form</h3>
                <p className="text-sm opacity-80">अभी आवेदन करें</p>
              </div>
              
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Full Name / नाम</label>
                  <input
                    required
                    name="fullName"
                    type="text"
                    onChange={handleChange}
                    placeholder="Enter full name"
                    className="w-full border-slate-200 border rounded-lg p-3 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Phone / फोन नंबर</label>
                  <input
                    required
                    name="phone"
                    type="tel"
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    className="w-full border-slate-200 border rounded-lg p-3 outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Role / आप क्या हैं?</label>
                  <select
                    required
                    name="role"
                    onChange={handleChange}
                    className="w-full border-slate-200 border rounded-lg p-3 outline-none focus:border-blue-500 bg-white"
                  >
                    <option value="">Select Role</option>
                    <option value="Caregiver">Caregiver / Attendant</option>
                    <option value="Nurse">Nurse (GNM/ANM)</option>
                    <option value="Physio">Physiotherapist</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-1">Location / शहर</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3.5 text-slate-400" size={18} />
                    <input
                      required
                      name="location"
                      type="text"
                      onChange={handleChange}
                      placeholder="e.g. Rohini, Delhi"
                      className="w-full border-slate-200 border rounded-lg p-3 pl-10 outline-none focus:border-blue-500"
                    />
                  </div>
                </div>


                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition duration-300 shadow-md disabled:opacity-60"
                  disabled={submitting}
                >
                  {submitting ? "Sending..." : "Send Application"}
                </button>

                {success && (
                  <div className={`text-center text-sm font-semibold mt-2 ${success.startsWith("Thank") ? "text-green-600" : "text-red-600"}`}>
                    {success}
                  </div>
                )}

                <div className="text-center pt-2">
                  <p className="text-slate-400 text-xs mb-2">OR APPLY VIA</p>
                  <a 
                    href="https://wa.me/91XXXXXXXXXX" 
                    className="flex items-center justify-center gap-2 text-green-600 font-bold hover:underline"
                  >
                    <MessageCircle size={20} /> WhatsApp
                  </a>
                </div>
              </form>
            </div>
          </aside>
          
        </div>
      </main>
    </div>
  );
};

export default Careers;