import { DashboardHeader } from "@/components/layout/dashboard-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle, Clock } from "lucide-react";

const plans = [
  {
    title: "Root Canal Treatment – Tooth 36",
    doctor: "Dr. Priya Sharma",
    startDate: "May 10, 2026",
    steps: [
      { label: "Initial Consultation & X-Ray", status: "done", date: "May 10, 2026" },
      { label: "Canal Cleaning & Shaping", status: "done", date: "May 20, 2026" },
      { label: "Temporary Filling", status: "done", date: "May 20, 2026" },
      { label: "Crown Placement", status: "upcoming", date: "Aug 12, 2026" },
    ],
  },
  {
    title: "Orthodontic Treatment",
    doctor: "Dr. Sarah Mitchell",
    startDate: "Jan 15, 2026",
    steps: [
      { label: "Initial Assessment & Photos", status: "done", date: "Jan 15, 2026" },
      { label: "Braces Fitting", status: "done", date: "Feb 1, 2026" },
      { label: "Adjustment #1", status: "done", date: "Mar 10, 2026" },
      { label: "Adjustment #2", status: "done", date: "Apr 20, 2026" },
      { label: "Adjustment #3", status: "done", date: "Jun 20, 2026" },
      { label: "Adjustment #4", status: "upcoming", date: "Aug 5, 2026" },
      { label: "Retainer Fitting", status: "pending", date: "Oct 2026 (est.)" },
    ],
  },
];

const statusIcon = {
  done: <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />,
  upcoming: <Clock className="w-5 h-5 text-indigo-500 flex-shrink-0" />,
  pending: <Circle className="w-5 h-5 text-slate-300 flex-shrink-0" />,
};

const statusBadge = {
  done: <Badge variant="success">Done</Badge>,
  upcoming: <Badge variant="info">Upcoming</Badge>,
  pending: <Badge variant="secondary">Pending</Badge>,
};

export default function TreatmentPlanPage() {
  return (
    <>
      <DashboardHeader title="Treatment Plan" subtitle="Your active treatment plans and progress" />
      <div className="p-6 space-y-6">
        {plans.map((plan) => {
          const done = plan.steps.filter((s) => s.status === "done").length;
          const total = plan.steps.length;
          const pct = Math.round((done / total) * 100);
          return (
            <Card key={plan.title}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-base">{plan.title}</CardTitle>
                    <p className="text-sm text-indigo-600 mt-0.5">{plan.doctor}</p>
                    <p className="text-xs text-slate-400">Started: {plan.startDate}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-indigo-600">{pct}%</span>
                    <p className="text-xs text-slate-400">{done}/{total} completed</p>
                  </div>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 mt-3">
                  <div
                    className="bg-indigo-600 h-2 rounded-full transition-all"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {plan.steps.map((step, i) => (
                    <div key={i} className="flex items-center space-x-4 p-3 rounded-xl bg-slate-50">
                      {statusIcon[step.status as keyof typeof statusIcon]}
                      <div className="flex-1">
                        <p className={`text-sm font-medium ${step.status === "done" ? "text-slate-500 line-through" : "text-slate-900"}`}>
                          {step.label}
                        </p>
                        <p className="text-xs text-slate-400">{step.date}</p>
                      </div>
                      {statusBadge[step.status as keyof typeof statusBadge]}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
}
