"use client";
import { DashboardHeader } from "@/components/layout/dashboard-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, AreaChart, Area, PieChart, Pie, Cell,
} from "recharts";

const monthlyRevenue = [
  { month: "Jan", revenue: 24000, expenses: 16000 },
  { month: "Feb", revenue: 28000, expenses: 17500 },
  { month: "Mar", revenue: 32000, expenses: 18000 },
  { month: "Apr", revenue: 27500, expenses: 15000 },
  { month: "May", revenue: 35000, expenses: 20000 },
  { month: "Jun", revenue: 41000, expenses: 22000 },
  { month: "Jul", revenue: 38500, expenses: 21000 },
];

const patientGrowth = [
  { month: "Jan", new: 42, returning: 98 },
  { month: "Feb", new: 55, returning: 107 },
  { month: "Mar", new: 48, returning: 114 },
  { month: "Apr", new: 63, returning: 112 },
  { month: "May", new: 71, returning: 119 },
  { month: "Jun", new: 88, returning: 122 },
  { month: "Jul", new: 76, returning: 119 },
];

const treatmentData = [
  { name: "General Dentistry", value: 35, color: "#6366f1" },
  { name: "Orthodontics", value: 20, color: "#10b981" },
  { name: "Root Canal", value: 18, color: "#f59e0b" },
  { name: "Implants", value: 15, color: "#ef4444" },
  { name: "Whitening", value: 12, color: "#8b5cf6" },
];

const appointmentTrend = [
  { month: "Jan", total: 145 },
  { month: "Feb", total: 162 },
  { month: "Mar", total: 138 },
  { month: "Apr", total: 175 },
  { month: "May", total: 210 },
  { month: "Jun", total: 195 },
  { month: "Jul", total: 203 },
];

export default function AnalyticsPage() {
  return (
    <>
      <DashboardHeader title="Analytics & Reports" subtitle="Comprehensive clinic performance metrics" />
      <div className="p-6 space-y-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Total Revenue (YTD)", value: "$226,000", change: "+18.4%", positive: true },
            { label: "Total Appointments", value: "1,228", change: "+12.1%", positive: true },
            { label: "New Patients", value: "443", change: "+8.7%", positive: true },
            { label: "Avg. Revenue / Patient", value: "$184", change: "+5.2%", positive: true },
          ].map((kpi) => (
            <Card key={kpi.label}>
              <CardContent className="p-5">
                <div className="text-2xl font-bold text-slate-900">{kpi.value}</div>
                <div className="text-xs text-slate-500 mt-0.5">{kpi.label}</div>
                <div className={`text-xs mt-1 font-medium ${kpi.positive ? "text-emerald-600" : "text-red-600"}`}>
                  {kpi.change} vs last year
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Revenue vs Expenses */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Revenue vs Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={monthlyRevenue}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#94a3b8" }} />
                <YAxis tick={{ fontSize: 12, fill: "#94a3b8" }} tickFormatter={(v) => `$${v / 1000}k`} />
                <Tooltip formatter={(v) => [`$${Number(v).toLocaleString()}`]} />
                <Bar dataKey="revenue" fill="#6366f1" radius={[4, 4, 0, 0]} name="Revenue" />
                <Bar dataKey="expenses" fill="#e2e8f0" radius={[4, 4, 0, 0]} name="Expenses" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Patient Growth */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Patient Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <AreaChart data={patientGrowth}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="month" tick={{ fontSize: 11, fill: "#94a3b8" }} />
                  <YAxis tick={{ fontSize: 11, fill: "#94a3b8" }} />
                  <Tooltip />
                  <Area type="monotone" dataKey="returning" fill="#e0e7ff" stroke="#6366f1" name="Returning" />
                  <Area type="monotone" dataKey="new" fill="#d1fae5" stroke="#10b981" name="New" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Treatment Mix */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Treatment Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center">
                <ResponsiveContainer width="55%" height={180}>
                  <PieChart>
                    <Pie data={treatmentData} dataKey="value" cx="50%" cy="50%" outerRadius={75} paddingAngle={2}>
                      {treatmentData.map((entry) => (
                        <Cell key={entry.name} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(v) => [`${v}%`]} />
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex-1 space-y-2">
                  {treatmentData.map((item) => (
                    <div key={item.name} className="flex items-center justify-between text-xs">
                      <div className="flex items-center space-x-2">
                        <div className="w-2.5 h-2.5 rounded-full" style={{ background: item.color }} />
                        <span className="text-slate-600">{item.name}</span>
                      </div>
                      <span className="font-medium text-slate-800">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Appointment Trend */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Monthly Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={180}>
              <LineChart data={appointmentTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#94a3b8" }} />
                <YAxis tick={{ fontSize: 12, fill: "#94a3b8" }} />
                <Tooltip />
                <Line type="monotone" dataKey="total" stroke="#6366f1" strokeWidth={2.5} dot={{ r: 4, fill: "#6366f1" }} name="Appointments" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
