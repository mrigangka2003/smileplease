import { DashboardHeader } from "@/components/layout/dashboard-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar, Users, Clock, CheckCircle, ChevronRight } from "lucide-react";

const todaySchedule = [
  { time: "9:00 AM", patient: "John Doe", service: "Braces Adjustment", status: "Checked In" },
  { time: "10:00 AM", patient: "Sarah Connor", service: "Root Canal Visit 2", status: "Waiting" },
  { time: "11:00 AM", patient: "David Park", service: "General Checkup", status: "Upcoming" },
  { time: "11:30 AM", patient: "Mia Wang", service: "Teeth Cleaning", status: "Upcoming" },
  { time: "2:00 PM", patient: "Tom Miller", service: "Crown Fitting", status: "Upcoming" },
  { time: "3:30 PM", patient: "Elena Ross", service: "X-Ray Review", status: "Upcoming" },
];

const statusConfig: Record<string, { variant: "success" | "warning" | "info" | "secondary"; label: string }> = {
  "Checked In": { variant: "success", label: "Checked In" },
  "Waiting": { variant: "warning", label: "Waiting" },
  "Upcoming": { variant: "secondary", label: "Upcoming" },
  "Completed": { variant: "info", label: "Completed" },
};

const stats = [
  { label: "Today's Appointments", value: "6", icon: Calendar, color: "bg-indigo-50 text-indigo-600" },
  { label: "Active Patients", value: "142", icon: Users, color: "bg-emerald-50 text-emerald-600" },
  { label: "Avg Wait Time", value: "12 min", icon: Clock, color: "bg-amber-50 text-amber-600" },
  { label: "Completed Today", value: "1", icon: CheckCircle, color: "bg-rose-50 text-rose-600" },
];

export default function DentistDashboard() {
  return (
    <>
      <DashboardHeader title="Dentist Dashboard" subtitle="Good morning, Dr. Mitchell!" />
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

        {/* Today's Schedule */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base">Today&apos;s Schedule</CardTitle>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dentist/schedule">
                Full Schedule <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {todaySchedule.map((apt, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between p-4 rounded-xl border transition ${apt.status === "Checked In" ? "bg-emerald-50 border-emerald-200" : apt.status === "Waiting" ? "bg-amber-50 border-amber-200" : "bg-white border-slate-100 hover:bg-slate-50"}`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-16 text-center">
                      <div className="text-sm font-bold text-indigo-600">{apt.time}</div>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 text-sm">{apt.patient}</p>
                      <p className="text-slate-500 text-xs">{apt.service}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={statusConfig[apt.status]?.variant ?? "secondary"}>
                      {apt.status}
                    </Badge>
                    <Button size="sm" variant="outline" asChild>
                      <Link href="/dentist/patients">View</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
