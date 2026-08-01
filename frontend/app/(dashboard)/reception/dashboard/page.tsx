import { DashboardHeader } from "@/components/layout/dashboard-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar, UserPlus, Clock, CheckCircle, ChevronRight, Users } from "lucide-react";

const stats = [
  { label: "Today's Appointments", value: "18", icon: Calendar, color: "bg-indigo-50 text-indigo-600" },
  { label: "Patients Waiting", value: "4", icon: Clock, color: "bg-amber-50 text-amber-600" },
  { label: "Checked In", value: "7", icon: CheckCircle, color: "bg-emerald-50 text-emerald-600" },
  { label: "New Patients Today", value: "2", icon: UserPlus, color: "bg-rose-50 text-rose-600" },
];

const queue = [
  { name: "John Doe", time: "9:00 AM", doctor: "Dr. Mitchell", status: "In Treatment" },
  { name: "Sarah Connor", time: "9:30 AM", doctor: "Dr. Sharma", status: "Waiting" },
  { name: "David Park", time: "10:00 AM", doctor: "Dr. Mitchell", status: "Waiting" },
  { name: "Mia Wang", time: "10:30 AM", doctor: "Dr. Chen", status: "Waiting" },
];

const appointments = [
  { time: "11:00 AM", patient: "Tom Miller", doctor: "Dr. Hill", service: "Crown", status: "Confirmed" },
  { time: "11:30 AM", patient: "Elena Ross", doctor: "Dr. Sharma", service: "X-Ray", status: "Confirmed" },
  { time: "2:00 PM", patient: "Noah Kim", doctor: "Dr. Wong", service: "Pediatric", status: "Pending" },
  { time: "3:00 PM", patient: "Lily Chen", doctor: "Dr. Khalid", service: "Implant Consult", status: "Confirmed" },
];

const statusColors: Record<string, "success" | "warning" | "destructive" | "info" | "secondary"> = {
  "In Treatment": "info",
  "Waiting": "warning",
  "Confirmed": "success",
  "Pending": "warning",
};

export default function ReceptionDashboard() {
  return (
    <>
      <DashboardHeader title="Reception Dashboard" subtitle="Good morning, Emma!" />
      <div className="p-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <Card key={s.label}>
              <CardContent className="p-5 flex items-center space-x-4">
                <div className={`w-12 h-12 rounded-xl ${s.color} flex items-center justify-center flex-shrink-0`}>
                  <s.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">{s.value}</div>
                  <div className="text-xs text-slate-500">{s.label}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Queue Management */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-base">Waiting Queue</CardTitle>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/reception/checkin">
                  Manage <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent className="space-y-3">
              {queue.map((p, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">{p.name}</p>
                      <p className="text-xs text-slate-400">{p.doctor} · {p.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={statusColors[p.status]}>{p.status}</Badge>
                    <Button size="sm" variant="outline">Update</Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Upcoming Appointments */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-base">Upcoming Today</CardTitle>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/reception/calendar">
                  Calendar <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent className="space-y-3">
              {appointments.map((apt, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-14 text-center">
                      <span className="text-indigo-600 font-bold text-sm">{apt.time}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">{apt.patient}</p>
                      <p className="text-xs text-slate-400">{apt.doctor} · {apt.service}</p>
                    </div>
                  </div>
                  <Badge variant={statusColors[apt.status]}>{apt.status}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <Button className="h-16 flex flex-col space-y-1" asChild>
            <Link href="/reception/register">
              <UserPlus className="w-5 h-5" />
              <span className="text-xs">Register Patient</span>
            </Link>
          </Button>
          <Button variant="outline" className="h-16 flex flex-col space-y-1" asChild>
            <Link href="/book-appointment">
              <Calendar className="w-5 h-5" />
              <span className="text-xs">Book Appointment</span>
            </Link>
          </Button>
          <Button variant="outline" className="h-16 flex flex-col space-y-1" asChild>
            <Link href="/reception/billing">
              <CheckCircle className="w-5 h-5" />
              <span className="text-xs">Generate Invoice</span>
            </Link>
          </Button>
          <Button variant="outline" className="h-16 flex flex-col space-y-1" asChild>
            <Link href="/reception/patients">
              <Users className="w-5 h-5" />
              <span className="text-xs">All Patients</span>
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
