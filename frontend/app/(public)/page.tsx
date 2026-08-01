import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  Star,
  Shield,
  Users,
  Award,
  ChevronRight,
  CheckCircle,
  Phone,
  Calendar,
  Sparkles,
  Smile
} from "lucide-react";

const services = [
  { icon: "🦷", title: "General Dentistry", desc: "Comprehensive checkups, preventative care, and gentle dental cleaning." },
  { icon: "✨", title: "Teeth Whitening", desc: "Advanced laser whitening for a radiant, spot-free bright smile." },
  { icon: "🔬", title: "Root Canal Therapy", desc: "Painless precision root canal treatments using 3D imaging." },
  { icon: "🏥", title: "Dental Implants", desc: "Permanent, natural-looking implant restorations." },
  { icon: "😁", title: "Orthodontics & Aligners", desc: "Invisible clear aligners and modern braces for perfect alignment." },
  { icon: "👶", title: "Pediatric Dentistry", desc: "Gentle and welcoming dental experiences designed for kids." },
];

const doctors = [
  {
    name: "Dr. Sarah Mitchell",
    specialty: "Orthodontics Specialist",
    exp: "12+ Years Exp",
    rating: 4.9,
    initials: "SM",
    color: "bg-blue-100 text-blue-700",
  },
  {
    name: "Dr. James Chen",
    specialty: "Oral & Implant Surgeon",
    exp: "15+ Years Exp",
    rating: 4.9,
    initials: "JC",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    name: "Dr. Priya Sharma",
    specialty: "Endodontist",
    exp: "10+ Years Exp",
    rating: 4.8,
    initials: "PS",
    color: "bg-rose-100 text-rose-700",
  },
  {
    name: "Dr. Robert Hill",
    specialty: "Periodontics & Aesthetic",
    exp: "18+ Years Exp",
    rating: 4.9,
    initials: "RH",
    color: "bg-amber-100 text-amber-700",
  },
];

const testimonials = [
  {
    name: "Emily Johnson",
    text: "Smile Please completely changed how I feel about dental visits. Pain-free and stunning results!",
    rating: 5,
    role: "Verified Patient",
  },
  {
    name: "Marcus Thompson",
    text: "The 3D smile alignment gave me the confidence I needed for my career. Incredible team!",
    rating: 5,
    role: "Verified Patient",
  },
  {
    name: "Aria Patel",
    text: "State-of-the-art facility, super friendly staff, and transparent pricing. 10/10 recommend!",
    rating: 5,
    role: "Verified Patient",
  },
];

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-[#eaf6e8] via-[#e5f3ed] to-[#f4f9f4] min-h-screen pb-16 pt-3 sm:pt-6 px-3 sm:px-6 lg:px-8">
      {/* Outer Rounded Hero Card Container */}
      <div className="max-w-[1400px] mx-auto bg-[#6598f6] rounded-[2rem] sm:rounded-[2.8rem] text-white shadow-2xl overflow-hidden relative border border-white/20">
        
        {/* Subtle Background Glow Elements */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl pointer-events-none" />

        {/* Hero Section Grid */}
        <div className="px-6 sm:px-10 lg:px-14 pt-8 pb-16 sm:pb-24 lg:pb-32 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
          
          {/* Left Column: Heading & Patient Callout Card */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Title Section */}
            <div className="space-y-3">
              <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.05] font-sans">
                Restore <br />
                Your True <br />
                <span className="inline-flex items-center gap-3 flex-wrap">
                  Smile
                  {/* Avatars & +2k badge */}
                  <div className="inline-flex items-center bg-white/20 backdrop-blur-md p-1.5 rounded-full border border-white/30 ml-2">
                    <div className="flex -space-x-2">
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-300 to-amber-500 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-800 shadow-sm overflow-hidden">
                        <span className="text-[10px]">👩</span>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-300 to-teal-600 border-2 border-white flex items-center justify-center text-xs font-bold text-white shadow-sm overflow-hidden">
                        <span className="text-[10px]">👩‍⚕️</span>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-white px-3 py-1 bg-white/20 rounded-full ml-1">
                      +2k
                    </span>
                  </div>
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-white/90 text-base sm:text-lg max-w-xl font-normal leading-relaxed pt-2">
              Using <span className="font-semibold text-white">advanced technology</span>, we deliver comprehensive treatments for a healthy, <span className="font-semibold text-white">confident smile</span>.
            </p>

            {/* Floating Patient Card Badge (Bottom Left) */}
            <div className="pt-6 sm:pt-10">
              <div className="relative inline-block bg-white text-slate-900 rounded-[2.2rem] p-5 shadow-2xl max-w-xs sm:max-w-sm border border-slate-100/50 transform hover:-translate-y-1 transition-all">
                {/* Badge Header */}
                <div className="mb-4">
                  <div className="text-3xl font-extrabold text-[#5287f3] tracking-tight">98%</div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-0.5">
                    loyal dental patients
                  </div>
                </div>

                {/* Patient Image Card */}
                <div className="relative h-48 sm:h-52 w-full rounded-2xl overflow-hidden bg-gradient-to-tr from-sky-400 via-blue-500 to-indigo-600">
                  <Image
                    src="/images/patient-happy.png"
                    alt="Loyal Dental Patient"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Tooth Artwork & Rotating Consultation Badge */}
          <div className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0">
            
            {/* 3D Tooth Illustration Container */}
            <div className="relative w-full max-w-md lg:max-w-lg aspect-square rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-b from-sky-400/20 to-indigo-900/30 border border-white/20 backdrop-blur-sm flex items-center justify-center">
              <Image
                src="/images/tooth-hero.png"
                alt="3D Dental Restoration Artwork"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Rotating / Floating Consultation Badge (Bottom Left of Tooth) */}
            <Link
              href="/book-appointment"
              className="absolute -bottom-6 left-4 sm:left-8 group"
            >
              <div className="w-28 h-28 sm:w-32 sm:h-32 bg-[#ccff00] hover:bg-[#d8ff33] text-slate-950 rounded-full flex flex-col items-center justify-center p-3 shadow-2xl transition-transform transform group-hover:scale-105 border-4 border-[#6598f6] relative cursor-pointer">
                
                {/* Circular Text SVG */}
                <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                  <path
                    id="circlePath"
                    d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                    fill="none"
                  />
                  <text className="text-[9px] font-extrabold uppercase tracking-widest fill-slate-900">
                    <textPath href="#circlePath">
                      • BOOK YOUR CONSULTATION • BOOK YOUR CONSULTATION
                    </textPath>
                  </text>
                </svg>

                {/* Center Arrow Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full bg-slate-950 text-[#ccff00] flex items-center justify-center shadow-inner group-hover:rotate-45 transition-transform">
                    <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </div>

              </div>
            </Link>

          </div>

        </div>
      </div>

      {/* Services Section */}
      <section className="max-w-[1400px] mx-auto mt-16 sm:mt-24 px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 text-xs font-bold px-3.5 py-1.5 rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Dental Care</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            World-Class Dental Solutions
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            From routine maintenance to complete 3D aesthetic transformations, our clinic delivers unmatched precision and comfort.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#5287f3] transition-colors">
                {s.title}
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {s.desc}
              </p>
              <Link
                href="/services"
                className="inline-flex items-center space-x-1.5 text-sm font-semibold text-[#5287f3] hover:text-blue-700 transition"
              >
                <span>Learn treatment details</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Smile Please */}
      <section className="max-w-[1400px] mx-auto mt-20 sm:mt-28 bg-white rounded-[2.5rem] p-8 sm:p-14 border border-slate-100 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 text-xs font-bold px-3.5 py-1.5 rounded-full">
              <Shield className="w-3.5 h-3.5" />
              <span>Why Patients Choose Smile Please</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Advanced Technology. <br />
              <span className="text-[#5287f3]">Gentle Care.</span>
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We combine state-of-the-art 3D imaging, laser dentistry, and stress-free anesthesia techniques so your dental experience feels smooth and comforting.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {[
                "3D Cone Beam Computed Tomography",
                "Painless Laser Dentistry",
                "Same-Day Porcelain Veneers",
                "Transparent Pricing & No Hidden Fees",
                "24/7 Dental Emergency Hotline",
                "Flexible Dental Insurance Plans",
              ].map((feature) => (
                <div key={feature} className="flex items-center space-x-3 text-slate-800 font-medium text-sm">
                  <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                href="/book-appointment"
                className="inline-flex items-center space-x-2 bg-slate-950 text-white font-bold text-sm px-7 py-4 rounded-full shadow-lg hover:bg-slate-800 transition"
              >
                <span>Book Your Free Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-[#6598f6] text-white p-8 rounded-3xl space-y-3 shadow-md">
              <Award className="w-10 h-10 text-[#ccff00]" />
              <div className="text-3xl font-extrabold">#1 Dental</div>
              <p className="text-white/80 text-xs">Rated Top Clinic in Aesthetic & Surgical Care</p>
            </div>

            <div className="bg-slate-900 text-white p-8 rounded-3xl space-y-3 shadow-md">
              <Users className="w-10 h-10 text-sky-400" />
              <div className="text-3xl font-extrabold">15,000+</div>
              <p className="text-slate-400 text-xs">Successful Smiles Restored</p>
            </div>

            <div className="bg-emerald-50 text-emerald-950 p-8 rounded-3xl space-y-3 border border-emerald-100 col-span-2 shadow-sm">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-sm font-bold ml-2">4.9 / 5.0 Rating</span>
              </div>
              <p className="text-slate-700 text-sm italic">
                &quot;The precision and comfort at Smile Please is unmatched. I felt zero pain during my tooth restoration!&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Doctors */}
      <section className="max-w-[1400px] mx-auto mt-20 sm:mt-28">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-800 text-xs font-bold px-3.5 py-1.5 rounded-full mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Board-Certified Specialists</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Meet Our Experts
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doc) => (
            <div key={doc.name} className="bg-white rounded-3xl p-6 text-center shadow-sm border border-slate-100 hover:shadow-md transition">
              <div className={`w-20 h-20 rounded-full ${doc.color} flex items-center justify-center text-2xl font-bold mx-auto mb-4`}>
                {doc.initials}
              </div>
              <h3 className="font-bold text-slate-900 text-lg">{doc.name}</h3>
              <p className="text-[#5287f3] text-sm font-medium mb-1">{doc.specialty}</p>
              <p className="text-slate-400 text-xs mb-3">{doc.exp}</p>
              <div className="inline-flex items-center space-x-1 bg-amber-50 px-3 py-1 rounded-full text-xs font-semibold text-amber-700">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>{doc.rating} Stars</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-[1400px] mx-auto mt-20 sm:mt-28 bg-[#5287f3] text-white rounded-[2.5rem] p-10 sm:p-14 shadow-lg">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 bg-white/20 text-white text-xs font-bold px-3.5 py-1.5 rounded-full mb-3">
            <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
            <span>Patient Experiences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            What Our Patients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white/10 backdrop-blur-md rounded-3xl p-7 border border-white/20 space-y-4">
              <div className="flex space-x-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-300 text-amber-300" />
                ))}
              </div>
              <p className="text-white/90 text-sm italic leading-relaxed">&quot;{t.text}&quot;</p>
              <div>
                <div className="font-bold text-sm">{t.name}</div>
                <div className="text-white/70 text-xs">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="max-w-[1400px] mx-auto mt-20 sm:mt-28 bg-slate-950 text-white rounded-[2.5rem] p-10 sm:p-16 text-center relative overflow-hidden">
        <div className="relative z-10 max-w-3xl mx-auto space-y-6">
          <Smile className="w-12 h-12 text-[#ccff00] mx-auto" />
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Ready to Restore Your True Smile?
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Schedule your personalized consultation with our experts today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link
              href="/book-appointment"
              className="inline-flex items-center justify-center space-x-2 bg-[#ccff00] text-slate-950 font-bold text-base px-8 py-4 rounded-full hover:bg-[#d8ff33] transition"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Appointment Now</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center space-x-2 bg-slate-800 text-white font-semibold text-base px-8 py-4 rounded-full hover:bg-slate-700 transition"
            >
              <Phone className="w-5 h-5" />
              <span>Call Us: (555) 123-4567</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

