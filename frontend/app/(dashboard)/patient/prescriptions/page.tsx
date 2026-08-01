import { DashboardHeader } from "@/components/layout/dashboard-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Pill } from "lucide-react";

const prescriptions = [
  {
    id: "RX-001",
    date: "Jul 15, 2026",
    doctor: "Dr. Priya Sharma",
    diagnosis: "Post Root Canal Pain Management",
    medicines: [
      { name: "Amoxicillin 500mg", dosage: "1 capsule", frequency: "3x daily", duration: "7 days" },
      { name: "Ibuprofen 400mg", dosage: "1 tablet", frequency: "As needed (max 3/day)", duration: "5 days" },
    ],
  },
  {
    id: "RX-002",
    date: "Jun 20, 2026",
    doctor: "Dr. Robert Hill",
    diagnosis: "Gum Inflammation Treatment",
    medicines: [
      { name: "Metronidazole 400mg", dosage: "1 tablet", frequency: "2x daily", duration: "10 days" },
      { name: "Chlorhexidine Mouthwash", dosage: "10ml rinse", frequency: "2x daily", duration: "14 days" },
    ],
  },
];

export default function PrescriptionsPage() {
  return (
    <>
      <DashboardHeader title="Prescriptions" subtitle="View your dental prescriptions" />
      <div className="p-6 space-y-6">
        {prescriptions.map((rx) => (
          <Card key={rx.id}>
            <CardHeader className="flex flex-row items-start justify-between">
              <div>
                <CardTitle className="text-base flex items-center space-x-2">
                  <Pill className="w-5 h-5 text-indigo-600" />
                  <span>Prescription {rx.id}</span>
                </CardTitle>
                <p className="text-sm text-slate-500 mt-1">{rx.date} · {rx.doctor}</p>
                <p className="text-sm font-medium text-indigo-700 mt-1">{rx.diagnosis}</p>
              </div>
              <Button size="sm" variant="outline">
                <Download className="w-4 h-4" />
                Download PDF
              </Button>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-100">
                      <th className="text-left py-2 text-xs font-semibold text-slate-500 uppercase">Medicine</th>
                      <th className="text-left py-2 text-xs font-semibold text-slate-500 uppercase">Dosage</th>
                      <th className="text-left py-2 text-xs font-semibold text-slate-500 uppercase">Frequency</th>
                      <th className="text-left py-2 text-xs font-semibold text-slate-500 uppercase">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {rx.medicines.map((med) => (
                      <tr key={med.name}>
                        <td className="py-3 font-medium text-slate-900">{med.name}</td>
                        <td className="py-3 text-slate-600">{med.dosage}</td>
                        <td className="py-3 text-slate-600">{med.frequency}</td>
                        <td className="py-3">
                          <Badge variant="info">{med.duration}</Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
