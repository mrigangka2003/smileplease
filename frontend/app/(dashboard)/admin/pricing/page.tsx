import { DashboardHeader } from "@/components/layout/dashboard-header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Edit, Plus, Save } from "lucide-react";

const pricing = [
  { service: "General Checkup", category: "General", price: 80, duration: "60 min", taxable: true },
  { service: "Teeth Cleaning", category: "Preventive", price: 100, duration: "45 min", taxable: true },
  { service: "Root Canal (Single)", category: "Endodontics", price: 650, duration: "90 min", taxable: true },
  { service: "Dental Implant", category: "Prosthetics", price: 2000, duration: "Multiple", taxable: true },
  { service: "Braces (Full)", category: "Orthodontics", price: 3500, duration: "12-24 months", taxable: false },
  { service: "Teeth Whitening", category: "Cosmetic", price: 350, duration: "60 min", taxable: true },
  { service: "Wisdom Tooth Extraction", category: "Surgical", price: 250, duration: "60 min", taxable: true },
  { service: "Pediatric Checkup", category: "Pediatric", price: 70, duration: "45 min", taxable: true },
  { service: "Veneer (Per Tooth)", category: "Cosmetic", price: 900, duration: "Multiple", taxable: true },
];

export default function PricingPage() {
  return (
    <>
      <DashboardHeader title="Treatment Pricing" subtitle="Manage service price list" />
      <div className="p-6 space-y-6">
        <div className="flex justify-end">
          <Button>
            <Plus className="w-4 h-4" />
            Add Service
          </Button>
        </div>
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50">
                    <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">Service</th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">Category</th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">Duration</th>
                    <th className="text-right py-3 px-4 text-xs font-semibold text-slate-500 uppercase">Price (USD)</th>
                    <th className="text-center py-3 px-4 text-xs font-semibold text-slate-500 uppercase">Taxable</th>
                    <th className="text-right py-3 px-4 text-xs font-semibold text-slate-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {pricing.map((item) => (
                    <tr key={item.service} className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-medium text-slate-900">{item.service}</td>
                      <td className="py-3 px-4">
                        <Badge variant="secondary">{item.category}</Badge>
                      </td>
                      <td className="py-3 px-4 text-slate-500">{item.duration}</td>
                      <td className="py-3 px-4 text-right">
                        <div className="flex justify-end items-center">
                          <span className="font-bold text-slate-900">${item.price.toLocaleString()}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <Badge variant={item.taxable ? "info" : "secondary"}>{item.taxable ? "Yes" : "No"}</Badge>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <Button size="sm" variant="ghost">
                          <Edit className="w-3.5 h-3.5" />
                        </Button>
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
