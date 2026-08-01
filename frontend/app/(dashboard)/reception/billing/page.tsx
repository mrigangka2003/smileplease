"use client";
import { useState } from "react";
import { DashboardHeader } from "@/components/layout/dashboard-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Trash2, Download, Receipt } from "lucide-react";

const paymentMethods = ["Cash", "Card", "UPI", "Insurance"];

interface LineItem {
  id: number;
  description: string;
  quantity: number;
  price: number;
}

export default function BillingPage() {
  const [items, setItems] = useState<LineItem[]>([
    { id: 1, description: "Orthodontic Consultation", quantity: 1, price: 150 },
    { id: 2, description: "X-Ray (Panoramic)", quantity: 1, price: 80 },
  ]);
  const [discount, setDiscount] = useState(0);
  const [tax, setTax] = useState(10);
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [patientName, setPatientName] = useState("John Doe");

  const subtotal = items.reduce((sum, i) => sum + i.quantity * i.price, 0);
  const discountAmt = (subtotal * discount) / 100;
  const taxAmt = ((subtotal - discountAmt) * tax) / 100;
  const total = subtotal - discountAmt + taxAmt;

  const addItem = () => {
    setItems((prev) => [...prev, { id: Date.now(), description: "", quantity: 1, price: 0 }]);
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const updateItem = (id: number, field: keyof LineItem, value: string | number) => {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, [field]: value } : i)));
  };

  return (
    <>
      <DashboardHeader title="Billing" subtitle="Generate invoices and process payments" />
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Invoice Builder */}
          <div className="lg:col-span-2 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Invoice Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-slate-700 block mb-1">Patient Name</label>
                    <Input value={patientName} onChange={(e) => setPatientName(e.target.value)} />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 block mb-1">Invoice Date</label>
                    <Input type="date" defaultValue={new Date().toISOString().split("T")[0]} />
                  </div>
                </div>

                {/* Line Items */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-semibold text-slate-700">Services</label>
                    <Button size="sm" variant="outline" onClick={addItem}>
                      <Plus className="w-3 h-3" />
                      Add Line
                    </Button>
                  </div>
                  <div className="space-y-2">
                    {items.map((item) => (
                      <div key={item.id} className="grid grid-cols-12 gap-2 items-center">
                        <div className="col-span-6">
                          <Input
                            placeholder="Description"
                            value={item.description}
                            onChange={(e) => updateItem(item.id, "description", e.target.value)}
                          />
                        </div>
                        <div className="col-span-2">
                          <Input
                            type="number"
                            placeholder="Qty"
                            value={item.quantity}
                            onChange={(e) => updateItem(item.id, "quantity", Number(e.target.value))}
                          />
                        </div>
                        <div className="col-span-3">
                          <Input
                            type="number"
                            placeholder="Price"
                            value={item.price}
                            onChange={(e) => updateItem(item.id, "price", Number(e.target.value))}
                          />
                        </div>
                        <div className="col-span-1 text-right">
                          <button onClick={() => removeItem(item.id)} className="text-red-400 hover:text-red-600 transition p-1">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Discount & Tax */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-slate-700 block mb-1">Discount (%)</label>
                    <Input type="number" value={discount} onChange={(e) => setDiscount(Number(e.target.value))} />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 block mb-1">Tax (%)</label>
                    <Input type="number" value={tax} onChange={(e) => setTax(Number(e.target.value))} />
                  </div>
                </div>

                {/* Payment Method */}
                <div>
                  <label className="text-sm font-medium text-slate-700 block mb-2">Payment Method</label>
                  <div className="flex gap-2">
                    {paymentMethods.map((m) => (
                      <button
                        key={m}
                        onClick={() => setPaymentMethod(m)}
                        className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all ${paymentMethod === m ? "border-indigo-600 bg-indigo-50 text-indigo-700" : "border-slate-200 text-slate-600 hover:border-indigo-300"}`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Summary */}
          <div>
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="text-base flex items-center space-x-2">
                  <Receipt className="w-5 h-5 text-indigo-600" />
                  <span>Invoice Summary</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm mb-6">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Patient</span>
                    <span className="font-medium text-slate-900">{patientName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-emerald-600">
                      <span>Discount ({discount}%)</span>
                      <span>-${discountAmt.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-slate-500">Tax ({tax}%)</span>
                    <span>${taxAmt.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-indigo-600">${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-500">
                    <span>Payment</span>
                    <Badge variant="info">{paymentMethod}</Badge>
                  </div>
                </div>
                <div className="space-y-2">
                  <Button className="w-full">Process Payment</Button>
                  <Button variant="outline" className="w-full">
                    <Download className="w-4 h-4" />
                    Download PDF
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
