import { DashboardHeader } from "@/components/layout/dashboard-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, Lock, User } from "lucide-react";

export default function PatientSettingsPage() {
  return (
    <>
      <DashboardHeader title="Settings" />
      <div className="p-6 space-y-6 max-w-2xl">
        {/* Profile */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center space-x-2">
              <User className="w-5 h-5 text-indigo-600" />
              <span>Profile Settings</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-slate-700 block mb-1">First Name</label>
                <Input defaultValue="John" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 block mb-1">Last Name</label>
                <Input defaultValue="Doe" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-1">Email</label>
              <Input type="email" defaultValue="john@example.com" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-1">Phone</label>
              <Input type="tel" defaultValue="+1 (555) 010-1234" />
            </div>
            <Button>Save Profile</Button>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center space-x-2">
              <Bell className="w-5 h-5 text-indigo-600" />
              <span>Notification Preferences</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { label: "Appointment Reminders", desc: "Get notified 24h before your appointment" },
              { label: "Payment Reminders", desc: "Reminders for upcoming invoice due dates" },
              { label: "Prescription Alerts", desc: "When a new prescription is uploaded" },
              { label: "Follow-up Reminders", desc: "Post-treatment follow-up notifications" },
            ].map((n) => (
              <div key={n.label} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                <div>
                  <p className="text-sm font-medium text-slate-900">{n.label}</p>
                  <p className="text-xs text-slate-500">{n.desc}</p>
                </div>
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-indigo-600" />
              </div>
            ))}
            <Button>Save Preferences</Button>
          </CardContent>
        </Card>

        {/* Password */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center space-x-2">
              <Lock className="w-5 h-5 text-indigo-600" />
              <span>Change Password</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-1">Current Password</label>
              <Input type="password" placeholder="••••••••" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-1">New Password</label>
              <Input type="password" placeholder="••••••••" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-1">Confirm New Password</label>
              <Input type="password" placeholder="••••••••" />
            </div>
            <Button>Update Password</Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
