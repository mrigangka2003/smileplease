import { DashboardHeader } from "@/components/layout/dashboard-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Calendar,
  Clock,
  FileText,
  Receipt,
  Bell,
  ChevronRight,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const upcomingAppointments = [
  {
    date: "Aug 5, 2026",
    time: "10:00 AM",
    doctor: "Dr. Sarah Mitchell",
    service: "Orthodontic Checkup",
    status: "Confirmed",
  },
  {
    date: "Aug 12, 2026",
    time: "2:30 PM",
    doctor: "Dr. Priya Sharma",
    service: "Root Canal – Visit 2",
    status: "Pending",
  },
];

const recentActivity = [
  { text: "Prescription uploaded by Dr. Sharma", time: "2 hours ago", type: "prescription" },
  { text: "Invoice #INV-2024 paid successfully", time: "Yesterday", type: "payment" },
  { text: "Appointment confirmed for Aug 5", time: "2 days ago", type: "appointment" },
];

const stats = [
  { label: "Upcoming Appointments", value: "2", icon: Calendar, color: "bg-indigo-50 text-indigo-600" },
  { label: "Active Treatment Plans", value: "1", icon: FileText, color: "bg-emerald-50 text-emerald-600" },
  { label: "Unpaid Invoices", value: "$240", icon: Receipt, color: "bg-amber-50 text-amber-600" },
  { label: "Unread Messages", value: "3", icon: Bell, color: "bg-rose-50 text-rose-600" },
];

export default function PatientDashboard() {
  return (
    <>
      <DashboardHeader title="Patient Dashboard" subtitle="Good morning, John!" />
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Upcoming Appointments */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-base">Upcoming Appointments</CardTitle>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/patient/appointments">
                    View all <ChevronRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardHeader>
              <CardContent className="space-y-3">
                {upcomingAppointments.map((apt, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-indigo-100 rounded-lg flex flex-col items-center justify-center text-indigo-700 text-xs font-bold">
                        <span>{apt.date.split(" ")[1].replace(",", "")}</span>
                        <span>{apt.date.split(" ")[0]}</span>
                      </div>
                      <div>
                        <div className="font-medium text-slate-900 text-sm">{apt.service}</div>
                        <div className="text-xs text-slate-500">
                          {apt.doctor} · {apt.time}
                        </div>
                      </div>
                    </div>
                    <Badge variant={apt.status === "Confirmed" ? "success" : "warning"}>
                      {apt.status}
                    </Badge>
                  </div>
                ))}
                <Button className="w-full mt-2" asChild>
                  <Link href="/book-appointment">
                    <Calendar className="w-4 h-4" />
                    Book New Appointment
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Activity */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {item.type === "prescription" ? (
                        <FileText className="w-3.5 h-3.5 text-indigo-600" />
                      ) : item.type === "payment" ? (
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                      )}
                    </div>
                    <div>
                      <p className="text-sm text-slate-700">{item.text}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{item.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Treatment Progress */}
            <Card className="mt-4">
              <CardHeader>
                <CardTitle className="text-base">Treatment Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-slate-700">Root Canal – Tooth 36</span>
                    <span className="text-indigo-600">2/3</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div className="bg-indigo-600 h-2 rounded-full" style={{ width: "66%" }} />
                  </div>
                </div>
                <div className="space-y-2 mt-3">
                  {[
                    { label: "Visit 1 – Canal Cleaning", done: true },
                    { label: "Visit 2 – Temporary Filling", done: true },
                    { label: "Visit 3 – Crown Placement", done: false },
                  ].map((step) => (
                    <div key={step.label} className="flex items-center space-x-2 text-sm">
                      {step.done ? (
                        <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      ) : (
                        <AlertCircle className="w-4 h-4 text-slate-300 flex-shrink-0" />
                      )}
                      <span className={step.done ? "text-slate-600 line-through" : "text-slate-800"}>
                        {step.label}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
