"use client";
import { useState } from "react";
import { DashboardHeader } from "@/components/layout/dashboard-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ToothCondition = "healthy" | "cavity" | "filling" | "crown" | "missing" | "implant" | "extraction";

const conditionColors: Record<ToothCondition, string> = {
  healthy: "bg-white border-slate-300 hover:border-indigo-400",
  cavity: "bg-red-100 border-red-400 text-red-700",
  filling: "bg-blue-100 border-blue-400 text-blue-700",
  crown: "bg-amber-100 border-amber-400 text-amber-700",
  missing: "bg-slate-200 border-slate-400 text-slate-500",
  implant: "bg-indigo-100 border-indigo-400 text-indigo-700",
  extraction: "bg-rose-200 border-rose-400 text-rose-700 line-through",
};

const conditionLabels: Record<ToothCondition, string> = {
  healthy: "Healthy",
  cavity: "Cavity",
  filling: "Filling",
  crown: "Crown",
  missing: "Missing",
  implant: "Implant",
  extraction: "Extracted",
};

// Upper jaw: 18–11 (right) | 21–28 (left)
// Lower jaw: 48–41 (right) | 31–38 (left)
const upperTeeth = [18, 17, 16, 15, 14, 13, 12, 11, 21, 22, 23, 24, 25, 26, 27, 28];
const lowerTeeth = [48, 47, 46, 45, 44, 43, 42, 41, 31, 32, 33, 34, 35, 36, 37, 38];

const defaultConditions: Record<number, ToothCondition> = {
  36: "cavity",
  46: "filling",
  16: "crown",
  11: "filling",
  31: "missing",
};

export default function OdontogramPage() {
  const [conditions, setConditions] = useState<Record<number, ToothCondition>>(defaultConditions);
  const [selected, setSelected] = useState<number | null>(null);
  const [paintMode, setPaintMode] = useState<ToothCondition>("cavity");

  const handleToothClick = (num: number) => {
    setSelected(num);
    setConditions((prev) => ({ ...prev, [num]: paintMode }));
  };

  const resetTooth = (num: number) => {
    setConditions((prev) => {
      const next = { ...prev };
      delete next[num];
      return next;
    });
    setSelected(null);
  };

  const ToothButton = ({ num }: { num: number }) => {
    const condition = conditions[num] ?? "healthy";
    return (
      <div className="flex flex-col items-center">
        <span className="text-xs text-slate-400 mb-1">{num}</span>
        <button
          onClick={() => handleToothClick(num)}
          className={cn(
            "w-8 h-8 sm:w-9 sm:h-9 rounded-lg border-2 text-xs font-bold transition-all hover:scale-110",
            conditionColors[condition],
            selected === num && "ring-2 ring-indigo-500 ring-offset-1"
          )}
          title={`Tooth ${num}: ${conditionLabels[condition]}`}
        >
          {condition !== "healthy" ? condition.charAt(0).toUpperCase() : num % 10}
        </button>
      </div>
    );
  };

  return (
    <>
      <DashboardHeader title="Odontogram" subtitle="Interactive dental chart" />
      <div className="p-6 space-y-6">
        {/* Legend & Tools */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Painting Mode</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {(Object.entries(conditionLabels) as [ToothCondition, string][]).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setPaintMode(key)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg border text-xs font-medium transition-all",
                    conditionColors[key],
                    paintMode === key && "ring-2 ring-indigo-500 ring-offset-1 font-bold"
                  )}
                >
                  {label}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Dental Chart (FDI Notation)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              {/* Upper Jaw */}
              <div className="mb-2 text-center text-xs text-slate-400 font-medium">Upper Jaw</div>
              <div className="flex justify-center gap-1 mb-4">
                {upperTeeth.map((num) => (
                  <ToothButton key={num} num={num} />
                ))}
              </div>

              {/* Divider */}
              <div className="relative my-2">
                <div className="border-t-2 border-dashed border-slate-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-white px-3 text-xs text-slate-400 font-medium">Gum Line</span>
                </div>
              </div>

              {/* Lower Jaw */}
              <div className="flex justify-center gap-1 mt-4">
                {lowerTeeth.map((num) => (
                  <ToothButton key={num} num={num} />
                ))}
              </div>
              <div className="mt-2 text-center text-xs text-slate-400 font-medium">Lower Jaw</div>
            </div>

            {/* Selected Tooth Info */}
            {selected && (
              <div className="mt-6 p-4 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-slate-900 text-sm">Tooth {selected}</h4>
                  <Button size="sm" variant="ghost" className="text-red-500" onClick={() => resetTooth(selected)}>
                    Mark Healthy
                  </Button>
                </div>
                <Badge variant={conditions[selected] === "cavity" ? "destructive" : "info"}>
                  {conditionLabels[conditions[selected] ?? "healthy"]}
                </Badge>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Summary */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Chart Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {(Object.entries(conditionLabels) as [ToothCondition, string][]).map(([key, label]) => {
                const count = Object.values(conditions).filter((c) => c === key).length;
                return (
                  <div key={key} className={cn("rounded-xl p-3 text-center border", conditionColors[key])}>
                    <div className="text-2xl font-bold">{count}</div>
                    <div className="text-xs mt-1">{label}</div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
