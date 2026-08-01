"use client";
import { useState } from "react";
import { DashboardHeader } from "@/components/layout/dashboard-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PatientStatus = "Waiting" | "In Treatment" | "Completed" | "No Show";

interface QueuePatient {
  id: number;
  name: string;
  time: string;
  doctor: string;
  service: string;
  status: PatientStatus;
  waitTime: string;
}

const initialQueue: QueuePatient[] = [
  { id: 1, name: "John Doe", time: "9:00 AM", doctor: "Dr. Mitchell", service: "Braces", status: "In Treatment", waitTime: "0 min" },
  { id: 2, name: "Sarah Connor", time: "9:30 AM", doctor: "Dr. Sharma", service: "Root Canal", status: "Waiting", waitTime: "15 min" },
  { id: 3, name: "David Park", time: "10:00 AM", doctor: "Dr. Mitchell", service: "Checkup", status: "Waiting", waitTime: "32 min" },
  { id: 4, name: "Mia Wang", time: "10:30 AM", doctor: "Dr. Chen", service: "Cleaning", status: "Waiting", waitTime: "45 min" },
  { id: 5, name: "Tom Miller", time: "11:00 AM", doctor: "Dr. Hill", service: "Crown", status: "Waiting", waitTime: "60 min" },
];

const statuses: PatientStatus[] = ["Waiting", "In Treatment", "Completed", "No Show"];

const statusColors: Record<PatientStatus, string> = {
  "Waiting": "bg-amber-50 border-amber-200",
  "In Treatment": "bg-blue-50 border-blue-200",
  "Completed": "bg-emerald-50 border-emerald-200",
  "No Show": "bg-slate-100 border-slate-200",
};

const badgeVariants: Record<PatientStatus, "warning" | "info" | "success" | "secondary"> = {
  "Waiting": "warning",
  "In Treatment": "info",
  "Completed": "success",
  "No Show": "secondary",
};

export default function CheckInPage() {
  const [queue, setQueue] = useState<QueuePatient[]>(initialQueue);

  const updateStatus = (id: number, status: PatientStatus) => {
    setQueue((prev) => prev.map((p) => (p.id === id ? { ...p, status } : p)));
  };

  const counts = statuses.reduce((acc, s) => {
    acc[s] = queue.filter((p) => p.status === s).length;
    return acc;
  }, {} as Record<PatientStatus, number>);

  return (
    <>
      <DashboardHeader title="Check-in & Queue Management" />
      <div className="p-6 space-y-6">
        {/* Summary */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {statuses.map((s) => (
            <Card key={s}>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-slate-900">{counts[s]}</div>
                <Badge variant={badgeVariants[s]} className="mt-1">{s}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Queue */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Today&apos;s Queue</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {queue.map((p) => (
              <div key={p.id} className={cn("flex items-center justify-between p-4 rounded-xl border", statusColors[p.status])}>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-sm font-bold text-slate-700">
                    {p.id}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900 text-sm">{p.name}</p>
                    <p className="text-xs text-slate-500">{p.doctor} · {p.service} · {p.time}</p>
                    <p className="text-xs text-slate-400">Wait: {p.waitTime}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap justify-end">
                  <Badge variant={badgeVariants[p.status]}>{p.status}</Badge>
                  <div className="flex gap-1">
                    {statuses
                      .filter((s) => s !== p.status)
                      .map((s) => (
                        <Button
                          key={s}
                          size="sm"
                          variant="outline"
                          className="text-xs"
                          onClick={() => updateStatus(p.id, s)}
                        >
                          → {s}
                        </Button>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
