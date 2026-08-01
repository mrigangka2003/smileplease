import { DashboardHeader } from "@/components/layout/dashboard-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserPlus } from "lucide-react";

export default function RegisterPatientPage() {
  return (
    <>
      <DashboardHeader title="Register New Patient" subtitle="Add a new patient to the system" />
      <div className="p-6">
        <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle className="text-base flex items-center space-x-2">
              <UserPlus className="w-5 h-5 text-indigo-600" />
              <span>Patient Registration Form</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Personal Info */}
            <div>
              <h3 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">Personal Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-700 block mb-1">First Name *</label>
                  <Input placeholder="John" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 block mb-1">Last Name *</label>
                  <Input placeholder="Doe" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 block mb-1">Date of Birth *</label>
                  <Input type="date" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 block mb-1">Gender</label>
                  <select className="flex h-10 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">
                    <option>Select gender</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                    <option>Prefer not to say</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 block mb-1">Phone *</label>
                  <Input type="tel" placeholder="+1 (555) 000-0000" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 block mb-1">Email</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
              </div>
            </div>

            {/* Address */}
            <div>
              <h3 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">Address</h3>
              <div className="space-y-3">
                <Input placeholder="Street address" />
                <div className="grid grid-cols-2 gap-3">
                  <Input placeholder="City" />
                  <Input placeholder="State / Province" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Input placeholder="Zip / Postal Code" />
                  <Input placeholder="Country" />
                </div>
              </div>
            </div>

            {/* Medical Info */}
            <div>
              <h3 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">Medical Information</h3>
              <div className="space-y-3">
                <div>
                  <label className="text-sm font-medium text-slate-700 block mb-1">Allergies</label>
                  <Input placeholder="e.g. Penicillin, Latex" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 block mb-1">Current Medications</label>
                  <Input placeholder="e.g. Aspirin 100mg" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 block mb-1">Medical Conditions</label>
                  <textarea
                    className="flex min-h-[80px] w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 resize-none"
                    placeholder="e.g. Diabetes, Hypertension"
                  />
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div>
              <h3 className="text-sm font-semibold text-slate-700 mb-3 uppercase tracking-wide">Emergency Contact</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-700 block mb-1">Contact Name</label>
                  <Input placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 block mb-1">Relationship</label>
                  <Input placeholder="Spouse / Parent" />
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700 block mb-1">Contact Phone</label>
                  <Input type="tel" placeholder="+1 (555) 000-0001" />
                </div>
              </div>
            </div>

            <div className="flex space-x-3">
              <Button className="flex-1">Register Patient</Button>
              <Button variant="outline">Cancel</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
