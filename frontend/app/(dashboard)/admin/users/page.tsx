import { DashboardHeader } from "@/components/layout/dashboard-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Shield, Edit, Trash2 } from "lucide-react";

const users = [
  { id: 1, name: "Dr. Sarah Mitchell", email: "sarah@dentalcare.com", role: "Dentist", status: "Active", joined: "Jan 15, 2024" },
  { id: 2, name: "Dr. James Chen", email: "james@dentalcare.com", role: "Dentist", status: "Active", joined: "Feb 1, 2024" },
  { id: 3, name: "Dr. Priya Sharma", email: "priya@dentalcare.com", role: "Dentist", status: "Active", joined: "Mar 10, 2024" },
  { id: 4, name: "Emma Lewis", email: "emma@dentalcare.com", role: "Receptionist", status: "Active", joined: "Apr 5, 2024" },
  { id: 5, name: "Mark Taylor", email: "mark@dentalcare.com", role: "Admin", status: "Active", joined: "Jan 1, 2024" },
  { id: 6, name: "John Doe", email: "john@example.com", role: "Patient", status: "Active", joined: "Jun 20, 2024" },
  { id: 7, name: "Sarah Connor", email: "sconnor@example.com", role: "Patient", status: "Inactive", joined: "Mar 15, 2024" },
];

const roleColors: Record<string, "default" | "info" | "success" | "warning" | "secondary"> = {
  Admin: "default",
  Dentist: "info",
  Receptionist: "success",
  Patient: "secondary",
};

export default function UsersPage() {
  return (
    <>
      <DashboardHeader title="User Management" subtitle="Manage clinic staff and patients" />
      <div className="p-6 space-y-6">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div className="relative flex-1 max-w-md">
            <Input placeholder="Search users..." />
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Shield className="w-4 h-4" />
              Manage Roles
            </Button>
            <Button>
              <Plus className="w-4 h-4" />
              Add User
            </Button>
          </div>
        </div>

        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50">
                    <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">User</th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">Email</th>
                    <th className="text-center py-3 px-4 text-xs font-semibold text-slate-500 uppercase">Role</th>
                    <th className="text-center py-3 px-4 text-xs font-semibold text-slate-500 uppercase">Status</th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">Joined</th>
                    <th className="text-right py-3 px-4 text-xs font-semibold text-slate-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {users.map((u) => (
                    <tr key={u.id} className="hover:bg-slate-50">
                      <td className="py-3 px-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center text-xs font-bold">
                            {u.name.split(" ").map((n) => n[0]).join("")}
                          </div>
                          <span className="font-medium text-slate-900">{u.name}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-slate-500">{u.email}</td>
                      <td className="py-3 px-4 text-center">
                        <Badge variant={roleColors[u.role]}>{u.role}</Badge>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <Badge variant={u.status === "Active" ? "success" : "secondary"}>{u.status}</Badge>
                      </td>
                      <td className="py-3 px-4 text-slate-500 text-xs">{u.joined}</td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex justify-end space-x-2">
                          <Button size="sm" variant="ghost">
                            <Edit className="w-3.5 h-3.5" />
                          </Button>
                          <Button size="sm" variant="ghost" className="text-red-400 hover:text-red-600">
                            <Trash2 className="w-3.5 h-3.5" />
                          </Button>
                        </div>
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
