import { DashboardHeader } from "@/components/layout/dashboard-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bell, Calendar, CreditCard, Pill, Gift } from "lucide-react";

const notifications = [
  { id: 1, type: "appointment", icon: Calendar, color: "bg-indigo-100 text-indigo-600", title: "Appointment Reminder", message: "You have an appointment with Dr. Mitchell on Aug 5 at 10:00 AM.", time: "1 hour ago", read: false },
  { id: 2, type: "payment", icon: CreditCard, color: "bg-amber-100 text-amber-600", title: "Payment Due", message: "Invoice INV-2026-001 of $150 is due. Please make the payment.", time: "Yesterday", read: false },
  { id: 3, type: "prescription", icon: Pill, color: "bg-rose-100 text-rose-600", title: "Prescription Uploaded", message: "Dr. Sharma has uploaded a new prescription for you.", time: "2 days ago", read: true },
  { id: 4, type: "appointment", icon: Calendar, color: "bg-indigo-100 text-indigo-600", title: "Follow-up Reminder", message: "Don't forget your Root Canal follow-up on Aug 12.", time: "3 days ago", read: true },
  { id: 5, type: "birthday", icon: Gift, color: "bg-purple-100 text-purple-600", title: "Happy Birthday! 🎉", message: "Wishing you a wonderful birthday! Enjoy 15% off your next visit.", time: "1 week ago", read: true },
];

export default function NotificationsPage() {
  const unread = notifications.filter((n) => !n.read).length;
  return (
    <>
      <DashboardHeader title="Notifications" notifications={unread} />
      <div className="p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-slate-900">
            All Notifications{" "}
            {unread > 0 && <Badge variant="default" className="ml-2">{unread} new</Badge>}
          </h2>
          <button className="text-sm text-indigo-600 hover:underline">Mark all as read</button>
        </div>
        <div className="space-y-3">
          {notifications.map((n) => (
            <Card key={n.id} className={!n.read ? "border-indigo-200 bg-indigo-50/30" : ""}>
              <CardContent className="p-4 flex items-start space-x-4">
                <div className={`w-10 h-10 rounded-xl ${n.color} flex items-center justify-center flex-shrink-0`}>
                  <n.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-slate-900 text-sm">{n.title}</h4>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-slate-400">{n.time}</span>
                      {!n.read && <span className="w-2 h-2 bg-indigo-600 rounded-full" />}
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 mt-0.5">{n.message}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}
