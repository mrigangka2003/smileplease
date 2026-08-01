import { DashboardHeader } from "@/components/layout/dashboard-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Pill, Stethoscope, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

const allergies = ["Penicillin", "Latex", "Sulfa drugs"];
const medications = [
  { name: "Metformin 500mg", reason: "Type 2 Diabetes", frequency: "Twice daily" },
  { name: "Amlodipine 5mg", reason: "Hypertension", frequency: "Once daily" },
];
const conditions = ["Type 2 Diabetes (2018)", "Hypertension (2020)"];
const treatments = [
  { date: "May 10, 2026", procedure: "Root Canal – Tooth 36", doctor: "Dr. Sharma", notes: "Visit 1 completed. Temporary filling placed." },
  { date: "Jun 20, 2026", procedure: "Braces Adjustment", doctor: "Dr. Mitchell", notes: "Wire tightened. Next visit in 6 weeks." },
  { date: "Jul 15, 2026", procedure: "X-Ray (Panoramic)", doctor: "Dr. Chen", notes: "No new caries detected. Bone level normal." },
];

export default function MedicalHistoryPage() {
  return (
    <>
      <DashboardHeader title="Medical History" subtitle="Your complete dental & medical records" />
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Allergies */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center space-x-2">
                <AlertTriangle className="w-5 h-5 text-rose-500" />
                <span>Allergies</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {allergies.map((a) => (
                <Badge key={a} variant="destructive">{a}</Badge>
              ))}
            </CardContent>
          </Card>

          {/* Conditions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center space-x-2">
                <Stethoscope className="w-5 h-5 text-amber-500" />
                <span>Medical Conditions</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {conditions.map((c) => (
                <div key={c} className="text-sm text-slate-700 p-2 bg-amber-50 rounded-lg">{c}</div>
              ))}
            </CardContent>
          </Card>

          {/* Medications */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base flex items-center space-x-2">
                <Pill className="w-5 h-5 text-indigo-500" />
                <span>Current Medications</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {medications.map((m) => (
                <div key={m.name} className="p-3 bg-indigo-50 rounded-lg">
                  <p className="text-sm font-medium text-slate-900">{m.name}</p>
                  <p className="text-xs text-slate-500">{m.reason} · {m.frequency}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Treatment History */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base">Treatment History</CardTitle>
            <Button size="sm" variant="outline">
              <Upload className="w-4 h-4" />
              Upload X-Ray
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {treatments.map((t, i) => (
              <div key={i} className="flex items-start space-x-4 p-4 bg-slate-50 rounded-xl">
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 flex-shrink-0" />
                <div>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-semibold text-slate-900 text-sm">{t.procedure}</span>
                    <Badge variant="secondary" className="text-xs">{t.date}</Badge>
                  </div>
                  <p className="text-xs text-indigo-600 mb-1">{t.doctor}</p>
                  <p className="text-sm text-slate-600">{t.notes}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
