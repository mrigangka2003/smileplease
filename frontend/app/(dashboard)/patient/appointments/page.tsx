import { DashboardHeader } from "@/components/layout/dashboard-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar, Clock, MoreVertical, Plus } from "lucide-react";

const appointments = [
  { id: 1, date: "Aug 5, 2026", time: "10:00 AM", doctor: "Dr. Sarah Mitchell", service: "Orthodontic Checkup", status: "Confirmed" },
  { id: 2, date: "Aug 12, 2026", time: "2:30 PM", doctor: "Dr. Priya Sharma", service: "Root Canal – Visit 2", status: "Pending" },
  { id: 3, date: "Jul 15, 2026", time: "11:00 AM", doctor: "Dr. James Chen", service: "Wisdom Tooth Consultation", status: "Completed" },
  { id: 4, date: "Jun 20, 2026", time: "9:30 AM", doctor: "Dr. Sarah Mitchell", service: "Braces Adjustment", status: "Completed" },
  { id: 5, date: "Jun 1, 2026", time: "3:00 PM", doctor: "Dr. Robert Hill", service: "Gum Disease Checkup", status: "No Show" },
  { id: 6, date: "May 10, 2026", time: "10:30 AM", doctor: "Dr. Priya Sharma", service: "Root Canal – Visit 1", status: "Completed" },
];

const statusVariant: Record<string, "success" | "warning" | "secondary" | "destructive" | "info"> = {
  Confirmed: "success",
  Pending: "warning",
  Completed: "info",
  "No Show": "destructive",
  Cancelled: "secondary",
};

export default function PatientAppointmentsPage() {
  const upcoming = appointments.filter((a) => ["Confirmed", "Pending"].includes(a.status));
  const past = appointments.filter((a) => !["Confirmed", "Pending"].includes(a.status));

  return (
    <>
      <DashboardHeader title="My Appointments" subtitle="Manage and view your appointments" />
      <div className="p-6 space-y-6">
        <div className="flex justify-end">
          <Button asChild>
            <Link href="/book-appointment">
              <Plus className="w-4 h-4" />
              New Appointment
            </Link>
          </Button>
        </div>

        {/* Upcoming */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Upcoming Appointments</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {upcoming.length === 0 && (
              <p className="text-slate-500 text-sm">No upcoming appointments.</p>
            )}
            {upcoming.map((apt) => (
              <div key={apt.id} className="flex items-center justify-between p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex flex-col items-center justify-center text-indigo-700">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{apt.service}</p>
                    <p className="text-slate-500 text-xs">{apt.doctor}</p>
                    <p className="text-slate-400 text-xs flex items-center space-x-1 mt-0.5">
                      <Clock className="w-3 h-3" />
                      <span>{apt.date} · {apt.time}</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant={statusVariant[apt.status]}>{apt.status}</Badge>
                  <div className="flex space-x-1">
                    <Button size="sm" variant="outline">Reschedule</Button>
                    <Button size="sm" variant="ghost" className="text-red-500 hover:text-red-700">Cancel</Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Past */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Past Appointments</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {past.map((apt) => (
              <div key={apt.id} className="flex items-center justify-between p-4 border border-slate-100 rounded-xl hover:bg-slate-50 transition opacity-80">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex flex-col items-center justify-center text-slate-500">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{apt.service}</p>
                    <p className="text-slate-500 text-xs">{apt.doctor}</p>
                    <p className="text-slate-400 text-xs flex items-center space-x-1 mt-0.5">
                      <Clock className="w-3 h-3" />
                      <span>{apt.date} · {apt.time}</span>
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant={statusVariant[apt.status]}>{apt.status}</Badge>
                  <Button size="sm" variant="outline">Book Again</Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
