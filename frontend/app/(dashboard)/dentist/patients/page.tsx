import { DashboardHeader } from "@/components/layout/dashboard-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Search, User, Phone, Mail } from "lucide-react";

const patients = [
  { id: "P-001", name: "John Doe", dob: "1985-03-15", phone: "+1 555-0101", email: "john@example.com", lastVisit: "Jul 15, 2026", condition: "Root Canal", status: "Active" },
  { id: "P-002", name: "Sarah Connor", dob: "1990-07-22", phone: "+1 555-0102", email: "sarah@example.com", lastVisit: "Jul 10, 2026", condition: "Orthodontics", status: "Active" },
  { id: "P-003", name: "David Park", dob: "1978-11-05", phone: "+1 555-0103", email: "david@example.com", lastVisit: "Jun 28, 2026", condition: "General Checkup", status: "Active" },
  { id: "P-004", name: "Mia Wang", dob: "1995-02-14", phone: "+1 555-0104", email: "mia@example.com", lastVisit: "Jun 20, 2026", condition: "Teeth Cleaning", status: "Inactive" },
  { id: "P-005", name: "Tom Miller", dob: "1988-09-30", phone: "+1 555-0105", email: "tom@example.com", lastVisit: "Jun 15, 2026", condition: "Crown Fitting", status: "Active" },
  { id: "P-006", name: "Elena Ross", dob: "2002-06-12", phone: "+1 555-0106", email: "elena@example.com", lastVisit: "May 30, 2026", condition: "Whitening", status: "Active" },
];

export default function DentistPatientsPage() {
  return (
    <>
      <DashboardHeader title="Patient Search" subtitle="Search and manage patient records" />
      <div className="p-6 space-y-6">
        {/* Search bar */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <Input placeholder="Search by name, phone, email, or Patient ID..." className="pl-9" />
              </div>
              <Button>Search</Button>
            </div>
          </CardContent>
        </Card>

        {/* Patient list */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">All Patients ({patients.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="text-left py-3 px-2 text-xs font-semibold text-slate-500 uppercase">Patient</th>
                    <th className="text-left py-3 px-2 text-xs font-semibold text-slate-500 uppercase">ID</th>
                    <th className="text-left py-3 px-2 text-xs font-semibold text-slate-500 uppercase">Contact</th>
                    <th className="text-left py-3 px-2 text-xs font-semibold text-slate-500 uppercase">Last Visit</th>
                    <th className="text-left py-3 px-2 text-xs font-semibold text-slate-500 uppercase">Condition</th>
                    <th className="text-center py-3 px-2 text-xs font-semibold text-slate-500 uppercase">Status</th>
                    <th className="text-right py-3 px-2 text-xs font-semibold text-slate-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {patients.map((p) => (
                    <tr key={p.id} className="hover:bg-slate-50">
                      <td className="py-3 px-2">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold">
                            {p.name.split(" ").map((n) => n[0]).join("")}
                          </div>
                          <div>
                            <p className="font-medium text-slate-900">{p.name}</p>
                            <p className="text-xs text-slate-400">DOB: {p.dob}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-2 text-slate-500 font-mono text-xs">{p.id}</td>
                      <td className="py-3 px-2">
                        <div className="text-xs text-slate-500 space-y-0.5">
                          <div className="flex items-center space-x-1">
                            <Phone className="w-3 h-3" />
                            <span>{p.phone}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Mail className="w-3 h-3" />
                            <span>{p.email}</span>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-2 text-slate-600 text-xs">{p.lastVisit}</td>
                      <td className="py-3 px-2 text-slate-700 text-xs">{p.condition}</td>
                      <td className="py-3 px-2 text-center">
                        <Badge variant={p.status === "Active" ? "success" : "secondary"}>{p.status}</Badge>
                      </td>
                      <td className="py-3 px-2 text-right">
                        <Button size="sm" variant="outline">
                          <User className="w-3 h-3 mr-1" />
                          Profile
                        </Button>
                      </td>
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
