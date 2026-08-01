"use client";
import { useState } from "react";
import { DashboardHeader } from "@/components/layout/dashboard-header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

const conversations = [
  {
    name: "Dr. Priya Sharma",
    initials: "PS",
    color: "bg-rose-100 text-rose-700",
    lastMessage: "Your next appointment is confirmed.",
    time: "10:30 AM",
    unread: 2,
    messages: [
      { from: "doctor", text: "Hello John, how are you feeling after the root canal?", time: "Mon 9:00 AM" },
      { from: "patient", text: "Feeling much better, thank you Doctor!", time: "Mon 9:05 AM" },
      { from: "doctor", text: "Great! Please continue taking the antibiotics for the full 7 days.", time: "Mon 9:10 AM" },
      { from: "doctor", text: "Your next appointment is confirmed for August 12.", time: "Today 10:30 AM" },
    ],
  },
  {
    name: "Clinic Reception",
    initials: "CR",
    color: "bg-indigo-100 text-indigo-700",
    lastMessage: "Your invoice has been generated.",
    time: "Yesterday",
    unread: 0,
    messages: [
      { from: "doctor", text: "Your invoice INV-2026-001 has been generated. Total: $150.", time: "Yesterday" },
      { from: "patient", text: "Thanks, I'll make the payment today.", time: "Yesterday" },
    ],
  },
];

export default function PatientMessagesPage() {
  const [active, setActive] = useState(0);
  const [message, setMessage] = useState("");
  const conv = conversations[active];

  return (
    <>
      <DashboardHeader title="Messages" />
      <div className="flex h-[calc(100vh-65px)]">
        {/* Sidebar */}
        <div className="w-64 border-r border-slate-200 bg-white overflow-y-auto">
          {conversations.map((c, i) => (
            <button
              key={c.name}
              onClick={() => setActive(i)}
              className={cn(
                "w-full p-4 text-left hover:bg-slate-50 transition border-b border-slate-100",
                active === i && "bg-indigo-50"
              )}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 rounded-full ${c.color} flex items-center justify-center text-sm font-bold flex-shrink-0`}>
                  {c.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-slate-900 truncate">{c.name}</span>
                    <span className="text-xs text-slate-400">{c.time}</span>
                  </div>
                  <p className="text-xs text-slate-500 truncate">{c.lastMessage}</p>
                </div>
                {c.unread > 0 && (
                  <span className="w-5 h-5 bg-indigo-600 text-white text-xs rounded-full flex items-center justify-center">
                    {c.unread}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col bg-slate-50">
          <div className="p-4 bg-white border-b border-slate-200 flex items-center space-x-3">
            <div className={`w-10 h-10 rounded-full ${conv.color} flex items-center justify-center text-sm font-bold`}>
              {conv.initials}
            </div>
            <div>
              <p className="font-semibold text-slate-900 text-sm">{conv.name}</p>
              <p className="text-xs text-emerald-500">Online</p>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {conv.messages.map((msg, i) => (
              <div key={i} className={cn("flex", msg.from === "patient" ? "justify-end" : "justify-start")}>
                <div
                  className={cn(
                    "max-w-xs px-4 py-2 rounded-2xl text-sm",
                    msg.from === "patient"
                      ? "bg-indigo-600 text-white rounded-br-sm"
                      : "bg-white border border-slate-200 text-slate-800 rounded-bl-sm"
                  )}
                >
                  <p>{msg.text}</p>
                  <p className={cn("text-xs mt-1", msg.from === "patient" ? "text-indigo-200" : "text-slate-400")}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="p-4 bg-white border-t border-slate-200">
            <div className="flex items-center space-x-2">
              <Input
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && setMessage("")}
                className="flex-1"
              />
              <Button onClick={() => setMessage("")}>
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
