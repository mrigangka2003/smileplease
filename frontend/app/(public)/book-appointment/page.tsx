"use client";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { CheckCircle, Calendar, Clock, User, ChevronRight } from "lucide-react";

const services = [
  "General Checkup",
  "Teeth Cleaning",
  "Root Canal",
  "Dental Implants",
  "Orthodontics",
  "Veneers",
  "Teeth Whitening",
  "Wisdom Tooth Extraction",
  "Pediatric Dentistry",
];

const doctors = [
  { name: "Dr. Sarah Mitchell", specialty: "Orthodontist", initials: "SM", color: "bg-indigo-100 text-indigo-700" },
  { name: "Dr. James Chen", specialty: "Oral Surgeon", initials: "JC", color: "bg-emerald-100 text-emerald-700" },
  { name: "Dr. Priya Sharma", specialty: "Endodontist", initials: "PS", color: "bg-rose-100 text-rose-700" },
  { name: "Dr. Robert Hill", specialty: "Periodontist", initials: "RH", color: "bg-amber-100 text-amber-700" },
  { name: "Dr. Lisa Wong", specialty: "Pediatric Dentist", initials: "LW", color: "bg-purple-100 text-purple-700" },
  { name: "Dr. Ahmed Khalid", specialty: "Implantologist", initials: "AK", color: "bg-sky-100 text-sky-700" },
];

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM",
];

const steps = ["Service", "Doctor", "Date & Time", "Your Info", "Confirm"];

export default function BookAppointmentPage() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState({
    service: "",
    doctor: "",
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleNext = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const handleBack = () => setStep((s) => Math.max(s - 1, 0));
  const handleSubmit = () => setSubmitted(true);

  if (submitted) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-indigo-50 to-sky-50 px-4">
        <Card className="max-w-md w-full text-center shadow-lg">
          <CardContent className="p-10">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-2">Appointment Booked!</h2>
            <p className="text-slate-500 mb-6">
              Your appointment with <strong>{selected.doctor}</strong> for{" "}
              <strong>{selected.service}</strong> on{" "}
              <strong>{selected.date}</strong> at <strong>{selected.time}</strong> has been confirmed.
            </p>
            <p className="text-slate-400 text-sm mb-6">
              A confirmation email has been sent to {selected.email}.
            </p>
            <Button onClick={() => { setSubmitted(false); setStep(0); setSelected({ service: "", doctor: "", date: "", time: "", name: "", email: "", phone: "", notes: "" }); }} className="w-full">
              Book Another Appointment
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-sky-50 min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <Badge variant="secondary" className="mb-3">Online Booking</Badge>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">Book Your Appointment</h1>
          <p className="text-slate-500">Schedule your visit in just a few steps</p>
        </div>

        {/* Stepper */}
        <div className="flex items-center justify-between mb-10 px-2">
          {steps.map((label, i) => (
            <div key={label} className="flex items-center flex-1">
              <div className="flex flex-col items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${i <= step ? "bg-indigo-600 text-white" : "bg-white border-2 border-slate-200 text-slate-400"}`}>
                  {i < step ? <CheckCircle className="w-4 h-4" /> : i + 1}
                </div>
                <span className="text-xs mt-1 hidden sm:block text-slate-500">{label}</span>
              </div>
              {i < steps.length - 1 && (
                <div className={`flex-1 h-0.5 mx-2 ${i < step ? "bg-indigo-600" : "bg-slate-200"}`} />
              )}
            </div>
          ))}
        </div>

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-lg">
              Step {step + 1}: {steps[step]}
            </CardTitle>
          </CardHeader>
          <CardContent className="pb-6">
            {/* Step 0 - Service */}
            {step === 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {services.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelected((p) => ({ ...p, service: s }))}
                    className={`p-4 rounded-xl border text-left text-sm font-medium transition-all hover:border-indigo-400 ${selected.service === s ? "border-indigo-600 bg-indigo-50 text-indigo-700" : "border-slate-200 text-slate-700"}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Step 1 - Doctor */}
            {step === 1 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {doctors.map((d) => (
                  <button
                    key={d.name}
                    onClick={() => setSelected((p) => ({ ...p, doctor: d.name }))}
                    className={`p-4 rounded-xl border text-left flex items-center space-x-3 transition-all hover:border-indigo-400 ${selected.doctor === d.name ? "border-indigo-600 bg-indigo-50" : "border-slate-200"}`}
                  >
                    <div className={`w-10 h-10 rounded-full ${d.color} flex items-center justify-center text-sm font-bold flex-shrink-0`}>
                      {d.initials}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-900">{d.name}</div>
                      <div className="text-xs text-slate-400">{d.specialty}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Step 2 - Date & Time */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-slate-700 block mb-2">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Select Date
                  </label>
                  <Input
                    type="date"
                    value={selected.date}
                    onChange={(e) => setSelected((p) => ({ ...p, date: e.target.value }))}
                    min={new Date().toISOString().split("T")[0]}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 block mb-3">
                    <Clock className="w-4 h-4 inline mr-1" />
                    Available Time Slots
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {timeSlots.map((t) => (
                      <button
                        key={t}
                        onClick={() => setSelected((p) => ({ ...p, time: t }))}
                        className={`py-2 px-3 rounded-lg border text-sm font-medium transition-all ${selected.time === t ? "border-indigo-600 bg-indigo-50 text-indigo-700" : "border-slate-200 hover:border-indigo-400 text-slate-700"}`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Step 3 - Patient Info */}
            {step === 3 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-slate-700 block mb-1">
                      <User className="w-4 h-4 inline mr-1" />
                      Full Name *
                    </label>
                    <Input
                      placeholder="John Doe"
                      value={selected.name}
                      onChange={(e) => setSelected((p) => ({ ...p, name: e.target.value }))}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 block mb-1">Phone *</label>
                    <Input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={selected.phone}
                      onChange={(e) => setSelected((p) => ({ ...p, phone: e.target.value }))}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 block mb-1">Email *</label>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={selected.email}
                    onChange={(e) => setSelected((p) => ({ ...p, email: e.target.value }))}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 block mb-1">
                    Additional Notes
                  </label>
                  <textarea
                    className="flex min-h-[80px] w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 resize-none"
                    placeholder="Any special concerns or requests..."
                    value={selected.notes}
                    onChange={(e) => setSelected((p) => ({ ...p, notes: e.target.value }))}
                  />
                </div>
              </div>
            )}

            {/* Step 4 - Confirm */}
            {step === 4 && (
              <div className="space-y-4">
                <div className="bg-slate-50 rounded-xl p-6 space-y-3">
                  <h3 className="font-semibold text-slate-900 mb-4">Appointment Summary</h3>
                  {[
                    { label: "Service", value: selected.service },
                    { label: "Doctor", value: selected.doctor },
                    { label: "Date", value: selected.date },
                    { label: "Time", value: selected.time },
                    { label: "Name", value: selected.name },
                    { label: "Phone", value: selected.phone },
                    { label: "Email", value: selected.email },
                  ].map(({ label, value }) => (
                    <div key={label} className="flex justify-between text-sm">
                      <span className="text-slate-500">{label}</span>
                      <span className="font-medium text-slate-900">{value || "—"}</span>
                    </div>
                  ))}
                </div>
                {selected.notes && (
                  <div className="bg-indigo-50 rounded-xl p-4">
                    <p className="text-xs text-slate-500 mb-1">Notes</p>
                    <p className="text-sm text-slate-700">{selected.notes}</p>
                  </div>
                )}
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <Button variant="outline" onClick={handleBack} disabled={step === 0}>
                Back
              </Button>
              {step < steps.length - 1 ? (
                <Button
                  onClick={handleNext}
                  disabled={
                    (step === 0 && !selected.service) ||
                    (step === 1 && !selected.doctor) ||
                    (step === 2 && (!selected.date || !selected.time)) ||
                    (step === 3 && (!selected.name || !selected.email || !selected.phone))
                  }
                >
                  Next <ChevronRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button onClick={handleSubmit}>
                  <CheckCircle className="w-4 h-4" />
                  Confirm Appointment
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
