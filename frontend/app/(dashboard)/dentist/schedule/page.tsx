import { DashboardHeader } from "@/components/layout/dashboard-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const schedule = [
  { time: "9:00 AM", patient: "John Doe", service: "Braces Adjustment", duration: "30 min", status: "In Treatment" },
  { time: "9:30 AM", patient: "—", service: "Break", duration: "30 min", status: "Break" },
  { time: "10:00 AM", patient: "Sarah Connor", service: "Root Canal – Visit 2", duration: "90 min", status: "Waiting" },
  { time: "11:30 AM", patient: "Mia Wang", service: "Teeth Cleaning", duration: "45 min", status: "Upcoming" },
  { time: "12:15 PM", patient: "—", service: "Lunch Break", duration: "45 min", status: "Break" },
  { time: "1:00 PM", patient: "Tom Miller", service: "Crown Fitting", duration: "60 min", status: "Upcoming" },
  { time: "2:00 PM", patient: "Elena Ross", service: "X-Ray Review", duration: "30 min", status: "Upcoming" },
  { time: "3:00 PM", patient: "Noah Kim", service: "Orthodontic Consult", duration: "45 min", status: "Upcoming" },
];

const badgeMap: Record<string, "info" | "warning" | "secondary" | "success"> = {
  "In Treatment": "info",
  "Waiting": "warning",
  "Break": "secondary",
  "Upcoming": "secondary",
  "Completed": "success",
};

export default function DentistSchedulePage() {
  return (
    <>
      <DashboardHeader title="Daily Schedule" subtitle="Friday, August 5, 2026" />
      <div className="p-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Today&apos;s Appointments - Dr. Sarah Mitchell</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <div className="absolute left-16 top-0 bottom-0 w-px bg-slate-200" />
              <div className="space-y-3">
                {schedule.map((slot, i) => (
                  <div key={i} className="flex items-center space-x-6">
                    <div className="w-16 text-right text-xs font-bold text-indigo-600 flex-shrink-0">
                      {slot.time}
                    </div>
                    <div className={`flex-1 p-3 rounded-xl border ml-4 ${slot.status === "Break" ? "bg-slate-50 border-slate-100" : slot.status === "In Treatment" ? "bg-blue-50 border-blue-200" : slot.status === "Waiting" ? "bg-amber-50 border-amber-200" : "bg-white border-slate-200"}`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-semibold text-slate-900">{slot.patient !== "—" ? slot.patient : slot.service}</p>
                          {slot.patient !== "—" && <p className="text-xs text-slate-500">{slot.service} · {slot.duration}</p>}
                        </div>
                        <Badge variant={badgeMap[slot.status]}>{slot.status}</Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
