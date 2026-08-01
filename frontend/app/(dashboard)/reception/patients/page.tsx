import { DashboardHeader } from "@/components/layout/dashboard-header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const patients = [
  { id: "P-001", name: "John Doe", phone: "+1 555-0101", email: "john@example.com", lastVisit: "Jul 15, 2026", status: "Active" },
  { id: "P-002", name: "Sarah Connor", phone: "+1 555-0102", email: "sarah@example.com", lastVisit: "Jul 10, 2026", status: "Active" },
  { id: "P-003", name: "David Park", phone: "+1 555-0103", email: "david@example.com", lastVisit: "Jun 28, 2026", status: "Active" },
  { id: "P-004", name: "Mia Wang", phone: "+1 555-0104", email: "mia@example.com", lastVisit: "Jun 20, 2026", status: "Inactive" },
];

export default function ReceptionPatientsPage() {
  return (
    <>
      <DashboardHeader title="All Patients" />
      <div className="p-6 space-y-4">
        <div className="flex gap-3">
          <Input placeholder="Search patients..." className="flex-1 max-w-md" />
          <Button>Search</Button>
        </div>
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50">
                    <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">Patient</th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">ID</th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">Phone</th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">Last Visit</th>
                    <th className="text-center py-3 px-4 text-xs font-semibold text-slate-500 uppercase">Status</th>
                    <th className="text-right py-3 px-4 text-xs font-semibold text-slate-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {patients.map((p) => (
                    <tr key={p.id} className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-medium text-slate-900">{p.name}</td>
                      <td className="py-3 px-4 text-slate-500 font-mono text-xs">{p.id}</td>
                      <td className="py-3 px-4 text-slate-500">{p.phone}</td>
                      <td className="py-3 px-4 text-slate-500 text-xs">{p.lastVisit}</td>
                      <td className="py-3 px-4 text-center"><Badge variant={p.status === "Active" ? "success" : "secondary"}>{p.status}</Badge></td>
                      <td className="py-3 px-4 text-right"><Button size="sm" variant="outline">View</Button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
