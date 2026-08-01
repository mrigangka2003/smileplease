import { DashboardHeader } from "@/components/layout/dashboard-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

const roles = [
  { role: "Admin", users: 2, permissions: ["Full Access", "User Management", "Settings", "Reports", "Billing"] },
  { role: "Dentist", users: 6, permissions: ["View Patients", "Treatment Notes", "Prescriptions", "Odontogram", "Appointments"] },
  { role: "Receptionist", users: 3, permissions: ["Book Appointments", "Patient Registration", "Billing", "Check-in", "Queue"] },
  { role: "Patient", users: 450, permissions: ["View Own Records", "Book Appointments", "Messages", "Invoices"] },
];

export default function RolesPage() {
  return (
    <><DashboardHeader title="Roles & Permissions" />
    <div className="p-6 space-y-4">
      {roles.map((r) => (
        <Card key={r.role}>
          <CardHeader className="flex flex-row items-center justify-between pb-3">
            <CardTitle className="text-base flex items-center space-x-2">
              <ShieldCheck className="w-5 h-5 text-indigo-600" />
              <span>{r.role}</span>
              <Badge variant="secondary">{r.users} users</Badge>
            </CardTitle>
            <Button size="sm" variant="outline">Edit Permissions</Button>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {r.permissions.map((p) => <Badge key={p} variant="info">{p}</Badge>)}
            </div>
          </CardContent>
        </Card>
      ))}
    </div></>
  );
}
