import { DashboardHeader } from "@/components/layout/dashboard-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const reports = [
  { name: "Monthly Revenue Report – July 2026", type: "Revenue", size: "245 KB", date: "Aug 1, 2026" },
  { name: "Patient Summary – Q2 2026", type: "Patients", size: "312 KB", date: "Jul 1, 2026" },
  { name: "Treatment Summary – June 2026", type: "Treatments", size: "198 KB", date: "Jul 1, 2026" },
  { name: "Insurance Claims – H1 2026", type: "Insurance", size: "543 KB", date: "Jul 15, 2026" },
  { name: "Tax Report – Q2 2026", type: "Tax", size: "121 KB", date: "Jul 1, 2026" },
];

export default function ReportsPage() {
  return (
    <><DashboardHeader title="Reports" subtitle="Download and generate clinic reports" />
    <div className="p-6 space-y-4">
      <div className="flex justify-end"><Button>Generate New Report</Button></div>
      <Card><CardHeader><CardTitle className="text-base">Available Reports</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          {reports.map((r) => (
            <div key={r.name} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
              <div className="flex items-center space-x-3">
                <FileText className="w-8 h-8 text-indigo-400" />
                <div><p className="font-medium text-slate-900 text-sm">{r.name}</p><p className="text-xs text-slate-400">{r.type} · {r.date} · {r.size}</p></div>
              </div>
              <Button size="sm" variant="outline"><Download className="w-4 h-4" /></Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </div></>
  );
}
