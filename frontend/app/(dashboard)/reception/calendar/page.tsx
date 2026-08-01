"use client";
import { useState } from "react";
import { DashboardHeader } from "@/components/layout/dashboard-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const appointmentsByDate: Record<string, { time: string; patient: string; doctor: string; service: string; status: string }[]> = {
  "2026-08-05": [
    { time: "9:00", patient: "John Doe", doctor: "Dr. Mitchell", service: "Braces", status: "Confirmed" },
    { time: "10:30", patient: "Mia Wang", doctor: "Dr. Chen", service: "Cleaning", status: "Confirmed" },
  ],
  "2026-08-06": [
    { time: "11:00", patient: "Tom Miller", doctor: "Dr. Hill", service: "Crown", status: "Pending" },
  ],
  "2026-08-10": [
    { time: "9:30", patient: "Elena Ross", doctor: "Dr. Sharma", service: "Root Canal", status: "Confirmed" },
    { time: "2:00", patient: "Noah Kim", doctor: "Dr. Wong", service: "Pediatric", status: "Confirmed" },
    { time: "3:30", patient: "Lily Chen", doctor: "Dr. Khalid", service: "Implant", status: "Pending" },
  ],
};

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}

export default function ReceptionCalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 7, 1));
  const [selectedDate, setSelectedDate] = useState<string | null>("2026-08-05");

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const formatKey = (day: number) =>
    `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

  const selectedAppts = selectedDate ? appointmentsByDate[selectedDate] ?? [] : [];

  return (
    <>
      <DashboardHeader title="Appointment Calendar" />
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">{MONTHS[month]} {year}</CardTitle>
                  <div className="flex space-x-2">
                    <Button size="icon" variant="outline" onClick={prevMonth}>
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="outline" onClick={nextMonth}>
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {/* Day headers */}
                <div className="grid grid-cols-7 mb-2">
                  {DAYS.map((d) => (
                    <div key={d} className="text-center text-xs font-semibold text-slate-500 py-2">
                      {d}
                    </div>
                  ))}
                </div>
                {/* Calendar grid */}
                <div className="grid grid-cols-7 gap-1">
                  {Array(firstDay).fill(null).map((_, i) => (
                    <div key={`empty-${i}`} />
                  ))}
                  {Array(daysInMonth).fill(null).map((_, i) => {
                    const day = i + 1;
                    const key = formatKey(day);
                    const hasAppts = !!appointmentsByDate[key];
                    const isSelected = selectedDate === key;
                    const isToday = key === "2026-08-05";
                    return (
                      <button
                        key={day}
                        onClick={() => setSelectedDate(key)}
                        className={cn(
                          "relative aspect-square rounded-lg flex flex-col items-center justify-start pt-1.5 text-sm transition-all hover:bg-indigo-50",
                          isSelected && "bg-indigo-600 text-white hover:bg-indigo-700",
                          isToday && !isSelected && "border-2 border-indigo-400",
                          !isSelected && "text-slate-700"
                        )}
                      >
                        <span className="font-medium">{day}</span>
                        {hasAppts && (
                          <div className={cn("flex gap-0.5 mt-0.5", isSelected ? "opacity-100" : "")}>
                            {(appointmentsByDate[key] ?? []).slice(0, 3).map((_, idx) => (
                              <span
                                key={idx}
                                className={cn(
                                  "w-1 h-1 rounded-full",
                                  isSelected ? "bg-white" : "bg-indigo-500"
                                )}
                              />
                            ))}
                          </div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Appointments for selected date */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">
                  {selectedDate
                    ? `${selectedDate} – ${selectedAppts.length} apt${selectedAppts.length !== 1 ? "s" : ""}`
                    : "Select a date"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {selectedAppts.length === 0 ? (
                  <p className="text-slate-400 text-sm">No appointments on this day.</p>
                ) : (
                  <div className="space-y-3">
                    {selectedAppts.map((apt, i) => (
                      <div key={i} className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-bold text-indigo-600">{apt.time}</span>
                          <Badge variant={apt.status === "Confirmed" ? "success" : "warning"}>
                            {apt.status}
                          </Badge>
                        </div>
                        <p className="text-sm font-medium text-slate-900">{apt.patient}</p>
                        <p className="text-xs text-slate-500">{apt.doctor} · {apt.service}</p>
                      </div>
                    ))}
                    <Button className="w-full mt-2">+ Add Appointment</Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
