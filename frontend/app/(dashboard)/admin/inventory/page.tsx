import { DashboardHeader } from "@/components/layout/dashboard-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Package, AlertTriangle } from "lucide-react";

const inventory = [
  { id: 1, name: "Nitrile Gloves (L)", category: "PPE", stock: 12, threshold: 50, unit: "boxes", supplier: "MedSupply Co." },
  { id: 2, name: "Surgical Masks", category: "PPE", stock: 85, threshold: 100, unit: "pieces", supplier: "MedSupply Co." },
  { id: 3, name: "Composite Resin", category: "Materials", stock: 3, threshold: 10, unit: "syringes", supplier: "Dental Depot" },
  { id: 4, name: "Dental Needles", category: "Instruments", stock: 8, threshold: 30, unit: "boxes", supplier: "DentTools" },
  { id: 5, name: "Anesthetic Carpules", category: "Anesthesia", stock: 45, threshold: 30, unit: "boxes", supplier: "Dental Depot" },
  { id: 6, name: "Dental Crowns (Ceramic)", category: "Prosthetics", stock: 18, threshold: 10, unit: "units", supplier: "LabPro" },
  { id: 7, name: "Dental Implants", category: "Prosthetics", stock: 6, threshold: 5, unit: "units", supplier: "LabPro" },
  { id: 8, name: "Suture Thread", category: "Surgical", stock: 60, threshold: 40, unit: "packets", supplier: "DentTools" },
];

const categories = ["All", "PPE", "Materials", "Instruments", "Anesthesia", "Prosthetics", "Surgical"];

export default function InventoryPage() {
  const lowStock = inventory.filter((i) => i.stock < i.threshold);

  return (
    <>
      <DashboardHeader title="Inventory" subtitle="Track and manage dental supplies" />
      <div className="p-6 space-y-6">
        {/* Alerts */}
        {lowStock.length > 0 && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start space-x-3">
            <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-amber-800">{lowStock.length} items below threshold</p>
              <p className="text-amber-700 text-sm">{lowStock.map((i) => i.name).join(", ")}</p>
            </div>
          </div>
        )}

        {/* Filters & Add */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-3 py-1.5 rounded-lg border border-slate-200 text-sm text-slate-600 hover:border-indigo-400 hover:text-indigo-600 transition"
              >
                {cat}
              </button>
            ))}
          </div>
          <Button>
            <Plus className="w-4 h-4" />
            Add Item
          </Button>
        </div>

        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50">
                    <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">Item</th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">Category</th>
                    <th className="text-center py-3 px-4 text-xs font-semibold text-slate-500 uppercase">Stock</th>
                    <th className="text-center py-3 px-4 text-xs font-semibold text-slate-500 uppercase">Status</th>
                    <th className="text-left py-3 px-4 text-xs font-semibold text-slate-500 uppercase">Supplier</th>
                    <th className="text-right py-3 px-4 text-xs font-semibold text-slate-500 uppercase">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {inventory.map((item) => {
                    const isLow = item.stock < item.threshold;
                    const pct = Math.min((item.stock / item.threshold) * 100, 100);
                    return (
                      <tr key={item.id} className="hover:bg-slate-50">
                        <td className="py-3 px-4">
                          <div className="flex items-center space-x-2">
                            <Package className="w-4 h-4 text-slate-400" />
                            <span className="font-medium text-slate-900">{item.name}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <Badge variant="secondary">{item.category}</Badge>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <div>
                            <span className={`font-bold ${isLow ? "text-red-600" : "text-slate-900"}`}>
                              {item.stock}
                            </span>
                            <span className="text-slate-400 text-xs"> {item.unit}</span>
                            <div className="w-20 bg-slate-100 rounded-full h-1.5 mx-auto mt-1">
                              <div
                                className={`h-1.5 rounded-full ${isLow ? "bg-red-500" : "bg-emerald-500"}`}
                                style={{ width: `${pct}%` }}
                              />
                            </div>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <Badge variant={isLow ? "destructive" : "success"}>
                            {isLow ? "Low Stock" : "In Stock"}
                          </Badge>
                        </td>
                        <td className="py-3 px-4 text-slate-600">{item.supplier}</td>
                        <td className="py-3 px-4 text-right">
                          <div className="flex justify-end space-x-2">
                            <Button size="sm" variant="outline">Edit</Button>
                            {isLow && <Button size="sm" variant="warning">Reorder</Button>}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
