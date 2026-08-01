import { DashboardHeader } from "@/components/layout/dashboard-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Receipt, AlertCircle } from "lucide-react";

const invoices = [
  { id: "INV-2026-001", date: "Aug 1, 2026", service: "Orthodontic Checkup", amount: 150, status: "Unpaid" },
  { id: "INV-2026-002", date: "Jul 15, 2026", service: "Wisdom Tooth Consultation", amount: 90, status: "Paid" },
  { id: "INV-2026-003", date: "Jun 20, 2026", service: "Braces Adjustment", amount: 200, status: "Paid" },
  { id: "INV-2026-004", date: "May 10, 2026", service: "Root Canal – Visit 1", amount: 650, status: "Paid" },
  { id: "INV-2026-005", date: "Apr 5, 2026", service: "Teeth Cleaning", amount: 120, status: "Unpaid" },
];

export default function PatientInvoicesPage() {
  const unpaid = invoices.filter((i) => i.status === "Unpaid");
  const totalDue = unpaid.reduce((sum, i) => sum + i.amount, 0);

  return (
    <>
      <DashboardHeader title="Invoices & Billing" subtitle="View and manage your invoices" />
      <div className="p-6 space-y-6">
        {/* Outstanding balance */}
        {totalDue > 0 && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-center space-x-3">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0" />
            <div className="flex-1">
              <p className="font-semibold text-amber-800">Outstanding Balance</p>
              <p className="text-amber-700 text-sm">
                You have <strong>${totalDue}</strong> in unpaid invoices.
              </p>
            </div>
            <Button variant="warning" size="sm">Pay Now</Button>
          </div>
        )}

        <Card>
          <CardHeader>
            <CardTitle className="text-base">All Invoices</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100">
                    <th className="text-left py-3 px-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">Invoice #</th>
                    <th className="text-left py-3 px-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">Date</th>
                    <th className="text-left py-3 px-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">Service</th>
                    <th className="text-right py-3 px-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">Amount</th>
                    <th className="text-center py-3 px-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">Status</th>
                    <th className="text-right py-3 px-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {invoices.map((inv) => (
                    <tr key={inv.id} className="hover:bg-slate-50">
                      <td className="py-3 px-2 font-medium text-slate-900">{inv.id}</td>
                      <td className="py-3 px-2 text-slate-500">{inv.date}</td>
                      <td className="py-3 px-2 text-slate-700">{inv.service}</td>
                      <td className="py-3 px-2 text-right font-semibold text-slate-900">${inv.amount}</td>
                      <td className="py-3 px-2 text-center">
                        <Badge variant={inv.status === "Paid" ? "success" : "warning"}>{inv.status}</Badge>
                      </td>
                      <td className="py-3 px-2 text-right">
                        <div className="flex justify-end space-x-2">
                          <Button size="sm" variant="ghost">
                            <Download className="w-4 h-4" />
                          </Button>
                          {inv.status === "Unpaid" && (
                            <Button size="sm">Pay</Button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
