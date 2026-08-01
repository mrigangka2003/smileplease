import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["123 Dental Street", "Medical District, City 12345"],
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (555) 123-4567", "+1 (555) 765-4321"],
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@smileplease.com", "appointments@smileplease.com"],
    color: "bg-rose-100 text-rose-600",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon – Fri: 9:00 AM – 6:00 PM", "Saturday: 10:00 AM – 4:00 PM"],
    color: "bg-amber-100 text-amber-600",
  },
];

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-50 to-sky-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-4">Contact Us</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-6">Get In Touch</h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Have questions or want to book an appointment? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-slate-700 block mb-1">
                        First Name
                      </label>
                      <Input placeholder="John" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-slate-700 block mb-1">
                        Last Name
                      </label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 block mb-1">Email</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 block mb-1">Phone</label>
                    <Input type="tel" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 block mb-1">Subject</label>
                    <Input placeholder="How can we help?" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-slate-700 block mb-1">Message</label>
                    <textarea
                      className="flex min-h-[120px] w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>
                  <Button className="w-full">Send Message</Button>
                </CardContent>
              </Card>
            </div>

            {/* Info & Map */}
            <div className="space-y-6">
              {/* Contact Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((item) => (
                  <Card key={item.title}>
                    <CardContent className="p-4 flex items-start space-x-3">
                      <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 text-sm mb-1">{item.title}</h3>
                        {item.details.map((d) => (
                          <p key={d} className="text-slate-500 text-xs">
                            {d}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="space-y-3">
                <a href="tel:+15551234567" className="flex items-center space-x-3 p-4 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition">
                  <Phone className="w-5 h-5" />
                  <div>
                    <div className="font-semibold text-sm">Call Now</div>
                    <div className="text-indigo-200 text-xs">+1 (555) 123-4567</div>
                  </div>
                </a>
                <a
                  href="https://wa.me/15551234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 p-4 bg-emerald-500 text-white rounded-xl hover:bg-emerald-600 transition"
                >
                  <MessageCircle className="w-5 h-5" />
                  <div>
                    <div className="font-semibold text-sm">WhatsApp</div>
                    <div className="text-emerald-100 text-xs">Chat with us instantly</div>
                  </div>
                </a>
                <a href="mailto:info@smileplease.com" className="flex items-center space-x-3 p-4 bg-slate-100 text-slate-800 rounded-xl hover:bg-slate-200 transition">
                  <Mail className="w-5 h-5" />
                  <div>
                    <div className="font-semibold text-sm">Send Email</div>
                    <div className="text-slate-500 text-xs">info@smileplease.com</div>
                  </div>
                </a>
              </div>

              {/* Map placeholder */}
              <div className="h-48 bg-slate-100 rounded-xl flex items-center justify-center border border-slate-200">
                <div className="text-center text-slate-400">
                  <MapPin className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm">Map Embed Here</p>
                  <p className="text-xs mt-1">123 Dental Street, Medical District</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
