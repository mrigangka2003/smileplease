"use client";
import { DashboardHeader } from "@/components/layout/dashboard-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell,
} from "recharts";
import { TrendingUp, Users, Calendar, DollarSign, ChevronRight, Package } from "lucide-react";

const revenueData = [
  { month: "Feb", revenue: 28000 },
  { month: "Mar", revenue: 32000 },
  { month: "Apr", revenue: 27500 },
  { month: "May", revenue: 35000 },
  { month: "Jun", revenue: 41000 },
  { month: "Jul", revenue: 38500 },
];

const appointmentData = [
  { month: "Feb", appointments: 145 },
  { month: "Mar", appointments: 162 },
  { month: "Apr", appointments: 138 },
  { month: "May", appointments: 175 },
  { month: "Jun", appointments: 210 },
  { month: "Jul", appointments: 195 },
];

const treatmentPieData = [
  { name: "General", value: 35, color: "#6366f1" },
  { name: "Orthodontics", value: 20, color: "#10b981" },
  { name: "Root Canal", value: 18, color: "#f59e0b" },
  { name: "Implants", value: 15, color: "#ef4444" },
  { name: "Whitening", value: 12, color: "#8b5cf6" },
];

const stats = [
  { label: "Monthly Revenue", value: "$38,500", change: "+6.2%", icon: DollarSign, color: "bg-indigo-50 text-indigo-600", positive: true },
  { label: "Total Patients", value: "8,547", change: "+124", icon: Users, color: "bg-emerald-50 text-emerald-600", positive: true },
  { label: "This Month Appts.", value: "195", change: "-7.1%", icon: Calendar, color: "bg-amber-50 text-amber-600", positive: false },
  { label: "Revenue Growth", value: "+14.3%", change: "vs last quarter", icon: TrendingUp, color: "bg-rose-50 text-rose-600", positive: true },
];

const recentUsers = [
  { name: "Dr. Lisa Wong", role: "Dentist", status: "Active", joined: "Jun 1, 2026" },
  { name: "Emma Lewis", role: "Receptionist", status: "Active", joined: "May 15, 2026" },
  { name: "Mark Taylor", role: "Admin", status: "Active", joined: "Apr 10, 2026" },
];

const lowStock = [
  { item: "Nitrile Gloves (L)", stock: 12, threshold: 50 },
  { item: "Composite Resin", stock: 3, threshold: 10 },
  { item: "Dental Needles", stock: 8, threshold: 30 },
];

export default function AdminDashboard() {
  return (
    <>
      <DashboardHeader title="Admin Dashboard" subtitle="Overview of clinic operations" />
      <div className="p-6 space-y-6">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <Card key={s.label}>
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-10 h-10 rounded-xl ${s.color} flex items-center justify-center`}>
                    <s.icon className="w-5 h-5" />
                  </div>
                  <Badge variant={s.positive ? "success" : "destructive"} className="text-xs">
                    {s.change}
                  </Badge>
                </div>
                <div className="text-2xl font-bold text-slate-900">{s.value}</div>
                <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Revenue Chart */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Monthly Revenue</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                    <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#94a3b8" }} />
                    <YAxis tick={{ fontSize: 12, fill: "#94a3b8" }} tickFormatter={(v) => `$${v / 1000}k`} />
                    <Tooltip formatter={(v) => [`$${Number(v).toLocaleString()}`, "Revenue"]} />
                    <Bar dataKey="revenue" fill="#6366f1" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Treatment Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Treatment Mix</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={160}>
                <PieChart>
                  <Pie data={treatmentPieData} dataKey="value" cx="50%" cy="50%" outerRadius={65} paddingAngle={2}>
                    {treatmentPieData.map((entry) => (
                      <Cell key={entry.name} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(v) => [`${v}%`, ""]} />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-1.5 mt-2">
                {treatmentPieData.map((item) => (
                  <div key={item.name} className="flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-2">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background: item.color }} />
                      <span className="text-slate-600">{item.name}</span>
                    </div>
                    <span className="font-medium text-slate-800">{item.value}%</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row 2 */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Appointments Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={180}>
              <LineChart data={appointmentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#94a3b8" }} />
                <YAxis tick={{ fontSize: 12, fill: "#94a3b8" }} />
                <Tooltip />
                <Line type="monotone" dataKey="appointments" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Users */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-base">Recent Users</CardTitle>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/admin/users">
                  Manage <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentUsers.map((u) => (
                <div key={u.name} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center text-xs font-bold">
                      {u.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">{u.name}</p>
                      <p className="text-xs text-slate-400">{u.role} · Joined {u.joined}</p>
                    </div>
                  </div>
                  <Badge variant="success">{u.status}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Low Stock Alerts */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-base flex items-center space-x-2">
                <Package className="w-5 h-5 text-amber-500" />
                <span>Low Stock Alerts</span>
              </CardTitle>
              <Button variant="ghost" size="sm" asChild>
                <Link href="/admin/inventory">
                  Inventory <ChevronRight className="w-4 h-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent className="space-y-3">
              {lowStock.map((item) => (
                <div key={item.item} className="p-3 bg-amber-50 border border-amber-200 rounded-xl">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-slate-900">{item.item}</span>
                    <Badge variant="warning">{item.stock} left</Badge>
                  </div>
                  <div className="w-full bg-amber-100 rounded-full h-1.5">
                    <div
                      className="bg-amber-500 h-1.5 rounded-full"
                      style={{ width: `${Math.min((item.stock / item.threshold) * 100, 100)}%` }}
                    />
                  </div>
                  <p className="text-xs text-amber-700 mt-1">Minimum threshold: {item.threshold}</p>
                </div>
              ))}
              <Button className="w-full" variant="warning">Order Supplies</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
