import { DashboardHeader } from "@/components/layout/dashboard-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Building2, Mail, Bell, Palette } from "lucide-react";

export default function AdminSettingsPage() {
  return (
    <>
      <DashboardHeader title="Clinic Settings" />
      <div className="p-6 space-y-6 max-w-3xl">
        {/* Clinic Info */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center space-x-2">
              <Building2 className="w-5 h-5 text-indigo-600" />
              <span>Clinic Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-slate-700 block mb-1">Clinic Name</label>
                <Input defaultValue="DentalCare Clinic" />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 block mb-1">Phone</label>
                <Input defaultValue="+1 (555) 123-4567" />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-1">Address</label>
              <Input defaultValue="123 Dental Street, Medical District, City 12345" />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 block mb-1">Email</label>
              <Input type="email" defaultValue="info@dentalcare.com" />
            </div>
            <Button>Save</Button>
          </CardContent>
        </Card>

        {/* Working Hours */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Working Hours</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map((day) => (
              <div key={day} className="flex items-center justify-between">
                <label className="text-sm text-slate-700 w-28">{day}</label>
                <div className="flex items-center space-x-2">
                  <Input type="time" defaultValue={day === "Saturday" ? "10:00" : "09:00"} className="w-28" />
                  <span className="text-slate-400">–</span>
                  <Input type="time" defaultValue={day === "Saturday" ? "16:00" : "18:00"} className="w-28" />
                  <input type="checkbox" defaultChecked className="accent-indigo-600 w-4 h-4" />
                </div>
              </div>
            ))}
            <Button className="mt-2">Save Hours</Button>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base flex items-center space-x-2">
              <Bell className="w-5 h-5 text-indigo-600" />
              <span>Notification Settings</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              "Send appointment reminders (24h before)",
              "Send payment due reminders",
              "Send birthday wishes to patients",
              "Notify staff of new appointments",
              "Low inventory alerts",
            ].map((setting) => (
              <div key={setting} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                <span className="text-sm text-slate-700">{setting}</span>
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-indigo-600" />
              </div>
            ))}
            <Button>Save Settings</Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
