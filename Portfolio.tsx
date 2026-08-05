import { useEffect, useMemo, useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowUpLeft,
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  Check,
  ChevronLeft,
  Code2,
  Copy,
  Download,
  ExternalLink,
  Facebook,
  FileText,
  Github,
  Globe2,
  Heart,
  Image as ImageIcon,
  Layers3,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  Palette,
  Phone,
  Play,
  Printer,
  QrCode,
  School,
  Share2,
  Sparkles,
  Sun,
  Terminal,
  Trophy,
  UserRound,
  X,
} from "lucide-react";

const skills = [
  ["HTML5 / CSS3", 95],
  ["JavaScript (ES2024)", 88],
  ["UI/UX Design", 90],
  ["Responsive Design", 94],
  ["React / TypeScript", 84],
  ["Performance Optimization", 91],
];

const skillTags = [
  "HTML5",
  "CSS3",
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Node.js",
  "Git & GitHub",
  "Progressive Web Apps (PWA)",
  "Accessibility",
  "Responsive Design",
  "Performance Optimization",
  "UI/UX Design",
];

const navItems = [
  { label: "الرئيسية", href: "#hero" },
  { label: "الملف", href: "#profile" },
  { label: "عني", href: "#about" },
  { label: "المهارات", href: "#skills" },
  { label: "المشاريع", href: "#projects" },
  { label: "تواصل", href: "#contact" },
];

const projects = [
  {
    category: "web",
    number: "01",
    icon: <QrCode size={29} />,
    title: "Eissa Personal Card",
    copy: "بطاقة شخصية تفاعلية فائقة السرعة مع تقنيات Glassmorphism وتطبيق ويب تقدمي PWA.",
    tags: ["HTML5", "CSS3", "PWA"],
  },
  {
    category: "ui",
    number: "02",
    icon: <Palette size={29} />,
    title: "Cyber Dark UI Theme",
    copy: "نظام تصميم داكن فاخر يعتمد على المؤثرات الضوئية والتفاعلات الهادئة والواضحة.",
    tags: ["UI/UX", "Animation", "Design System"],
  },
  {
    category: "web",
    number: "03",
    icon: <Sparkles size={29} />,
    title: "High Performance App",
    copy: "تجربة ويب خفيفة مبنية بعناية، تضع سرعة التحميل وسهولة الاستخدام في المقدمة.",
    tags: ["Performance", "Vanilla JS", "Accessibility"],
  },
];

const galleryItems = [
  { icon: <QrCode />, title: "البطاقة الشخصية الرقمية", caption: "هوية رقمية للتواصل السريع" },
  { icon: <Moon />, title: "مظهر Cyber Slate", caption: "واجهة ليلية مع مؤثرات ضوئية" },
  { icon: <Terminal />, title: "لوحة الأوامر", caption: "تفاعل واضح وتحكم سريع" },
];

export function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(false);
  const [likes, setLikes] = useState(15);
  const [projectFilter, setProjectFilter] = useState<"all" | "web" | "ui">("all");
  const [toast, setToast] = useState("");
  const [activeGallery, setActiveGallery] = useState<number | null>(null);
  const [clock, setClock] = useState("");

  useEffect(() => {
    const updateClock = () => {
      setClock(
        new Intl.DateTimeFormat("ar-EG", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }).format(new Date()),
      );
    };
    updateClock();
    const interval = window.setInterval(updateClock, 1000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timeout = window.setTimeout(() => setToast(""), 2400);
    return () => window.clearTimeout(timeout);
  }, [toast]);

  const filteredProjects = useMemo(
    () =>
      projectFilter === "all"
        ? projects
        : projects.filter((project) => project.category === projectFilter),
    [projectFilter],
  );

  const copyValue = async (value: string, label: string) => {
    await navigator.clipboard?.writeText(value);
    setToast(`تم نسخ ${label}`);
  };

  const downloadVCard = () => {
    const vCard = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "FN:Eissa Mohammed",
      "N:Mohammed;Eissa;;;",
      "TITLE:Front-End Web Developer / UI/UX Designer / Student",
      "EMAIL;TYPE=INTERNET:ysym7003@gmail.com",
      "TEL;TYPE=CELL:+201288840809",
      "ADR;TYPE=HOME:;;Alexandria;;;Egypt",
      "URL:https://eissa89.github.io/eissa-card/",
      "END:VCARD",
    ].join("\n");
    const url = URL.createObjectURL(new Blob([vCard], { type: "text/vcard" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "eissa-mohammed.vcf";
    link.click();
    URL.revokeObjectURL(url);
    setToast("تم تجهيز جهة الاتصال للتنزيل");
  };

  const submitContact = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = String(form.get("subject") || "رسالة من الموقع");
    const message = String(form.get("message") || "");
    window.location.href = `mailto:ysym7003@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
    setToast("سيتم فتح تطبيق البريد لإرسال رسالتك");
  };

  const surface = isLight ? "bg-[#f4f1e9] text-[#102d3a]" : "bg-[#071721] text-[#edf4ec]";
  const soft = isLight ? "bg-[#dce8df]" : "bg-[#0d2732]";
  const card = isLight ? "bg-[#f8f5ed] border-[#102d3a]/15" : "bg-[#0d202b] border-[#b7d0c5]/15";
  const muted = isLight ? "text-[#35606b]" : "text-[#abc1b9]";

  return (
    <main dir="rtl" className={`min-h-[100dvh] overflow-hidden ${surface} selection:bg-[#d9ef62] selection:text-[#102d3a]`}>
      <style>{`
        @keyframes rise { from { opacity: 0; transform: translateY(18px) } to { opacity: 1; transform: translateY(0) } }
        @keyframes pulse { 0%,100% { box-shadow: 0 0 0 0 rgba(217,239,98,.35) } 50% { box-shadow: 0 0 0 9px rgba(217,239,98,0) } }
        @keyframes float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-8px) } }
        .eissa-rise { animation: rise .7s cubic-bezier(.2,.8,.2,1) both }
        .eissa-delay-1 { animation-delay: .1s } .eissa-delay-2 { animation-delay: .2s } .eissa-delay-3 { animation-delay: .3s }
        .eissa-float { animation: float 5s ease-in-out infinite }
        .eissa-grid { background-image: linear-gradient(rgba(217,239,98,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(217,239,98,.12) 1px, transparent 1px); background-size: 26px 26px }
        html { scroll-behavior: smooth }
        @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: .01ms !important; scroll-behavior: auto !important; transition-duration: .01ms !important } }
      `}</style>

      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:right-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-[#d9ef62] focus:px-4 focus:py-3 focus:text-[#102d3a]">تجاوز إلى المحتوى الرئيسي</a>

      <header className={`sticky top-0 z-30 border-b backdrop-blur-xl ${isLight ? "border-[#102d3a]/15 bg-[#f4f1e9]/90" : "border-white/10 bg-[#071721]/90"}`}>
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <a href="#hero" className="flex items-center gap-3" aria-label="الصفحة الرئيسية">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#d9ef62] font-mono text-sm font-bold text-[#102d3a]">ع‌م</span>
            <span className="hidden text-sm font-bold tracking-[.16em] sm:block">EISSA / STUDIO</span>
          </a>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="التنقل الرئيسي">
            {navItems.map((item) => <a key={item.href} href={item.href} className={`text-xs font-bold tracking-wide transition-colors hover:text-[#d9ef62] ${muted}`}>{item.label}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <button type="button" onClick={() => setIsLight((value) => !value)} className="grid h-10 w-10 place-items-center rounded-full border border-current/20 transition hover:border-[#d9ef62] hover:text-[#d9ef62]" aria-label="تغيير المظهر">
              {isLight ? <Moon size={17} /> : <Sun size={17} />}
            </button>
            <a href="#contact" className="hidden items-center gap-2 rounded-full border border-current px-4 py-2 text-xs font-bold transition hover:bg-[#d9ef62] hover:text-[#102d3a] sm:flex">تواصل معي <ArrowUpLeft size={14} /></a>
            <button type="button" onClick={() => setMenuOpen((value) => !value)} className="grid h-10 w-10 place-items-center rounded-full border border-current/20 lg:hidden" aria-expanded={menuOpen} aria-label="فتح القائمة">
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {menuOpen && <nav className={`border-t px-5 py-5 lg:hidden ${isLight ? "border-[#102d3a]/15" : "border-white/10"}`} aria-label="قائمة الهاتف">
          <div className="flex flex-col gap-4">{navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)} className={`text-sm font-bold ${muted}`}>{item.label}</a>)}</div>
        </nav>}
      </header>

      <div id="main-content">
        <section id="hero" className="relative mx-auto grid max-w-[1200px] gap-12 px-5 pb-20 pt-16 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:px-10 lg:pb-28 lg:pt-24">
          <div className="eissa-rise">
            <div className={`mb-6 flex items-center gap-3 text-xs font-bold tracking-[.18em] ${muted}`}><span className="h-2 w-2 animate-[pulse_2s_infinite] rounded-full bg-[#e07b5b]" /> متاح للتواصل والتعلم</div>
            <div className={`mb-5 flex flex-wrap items-center gap-4 font-mono text-xs ${muted}`}><span className="flex items-center gap-2"><MapPin size={14} /> الإسكندرية، مصر</span><span>•</span><span>{clock || "--:--:--"}</span></div>
            <p className="mb-4 text-sm font-bold tracking-[.16em] text-[#d9ef62]">Front-End / UI / UX / Student</p>
            <h1 className="max-w-3xl font-serif text-[clamp(4rem,10vw,8.6rem)] leading-[.86] tracking-[-.08em]">اصنع<br /><span className="text-[#e07b5b]">تجربة،</span><br />تترك أثراً.</h1>
            <p className={`mt-8 max-w-lg text-lg leading-8 sm:text-xl ${muted}`}>أبني تجارب ويب حديثة، سريعة، متجاوبة وأنيقة تجمع بين التقنية واللمسة الإنسانية.</p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#profile" className="group flex items-center gap-3 rounded-full bg-[#d9ef62] px-5 py-3 text-sm font-bold text-[#102d3a] transition hover:-translate-y-1 hover:bg-[#e07b5b] hover:text-white">استكشف الملف <ArrowDown size={17} className="transition-transform group-hover:translate-y-1" /></a>
              <a href="https://github.com/Eissa89" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-3 py-3 text-sm font-semibold underline decoration-[#e07b5b] decoration-2 underline-offset-4 hover:text-[#d9ef62]">GitHub <ExternalLink size={15} /></a>
            </div>
          </div>
          <div className="relative min-h-[390px] eissa-rise eissa-delay-2 sm:min-h-[500px]">
            <div className="absolute inset-5 rotate-3 rounded-[2.2rem] bg-[#173543] sm:inset-10" />
            <div className="absolute inset-0 overflow-hidden rounded-[2.2rem] bg-[#102d3a] shadow-[14px_16px_0_#e07b5b]">
              <div className="eissa-grid absolute inset-0" />
              <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full border-[24px] border-[#d9ef62]" />
              <div className="absolute bottom-0 right-0 h-52 w-52 rounded-tl-[100%] bg-[#e07b5b]" />
              <div className="absolute right-8 top-8 flex items-center gap-2 font-mono text-[10px] tracking-[.16em] text-[#d9ef62] sm:right-12 sm:top-12"><span className="h-2 w-2 rounded-full bg-[#d9ef62]" /> EISSA / 89</div>
              <div className="absolute inset-x-8 top-1/2 -translate-y-1/2 sm:inset-x-14">
                <div className="font-mono text-[10px] tracking-[.2em] text-[#abc9bc]">01 — THE POINT OF VIEW</div>
                <div className="mt-4 font-serif text-[clamp(3.1rem,8vw,6.4rem)] leading-[.82] tracking-[-.08em] text-[#f4f1e9]">Make it<br /><em className="text-[#d9ef62]">matter.</em></div>
                <div className="mt-8 flex items-center gap-3 text-xs text-[#abc9bc]"><span className="h-px w-10 bg-[#abc9bc]" /> interfaces with a pulse</div>
              </div>
              <div className="absolute bottom-7 left-8 rounded-full border border-[#abc9bc]/40 px-3 py-2 font-mono text-[10px] text-[#abc9bc]">Alexandria / EG</div>
            </div>
            <div className={`eissa-float absolute -bottom-7 -right-2 z-10 rounded-2xl border p-4 shadow-[7px_8px_0_#d9ef62] sm:-right-7 ${card}`}><div className={`font-mono text-[10px] tracking-[.14em] ${muted}`}>حالياً أتعلم</div><div className="mt-2 flex items-center gap-2 text-sm font-bold"><Trophy size={16} className="text-[#e07b5b]" /> the edge of possible</div></div>
          </div>
        </section>

        <section id="profile" className={`border-y ${soft} ${isLight ? "border-[#102d3a]/15" : "border-white/10"}`}>
          <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
            <div className="mb-12"><div className="font-mono text-xs font-bold tracking-[.2em] text-[#e07b5b]">01 / بطاقة التعريف</div><h2 className="mt-5 font-serif text-5xl tracking-[-.06em] sm:text-6xl">بياناتي،<br /><span className="text-[#d9ef62]">بوضوح.</span></h2></div>
            <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
              <article className={`rounded-[2rem] border p-6 sm:p-8 ${card}`}>
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4"><div className="grid h-20 w-20 place-items-center rounded-3xl bg-[#d9ef62] font-serif text-3xl font-bold text-[#102d3a]">ع‌م</div><div><h3 className="text-2xl font-bold">عيسى محمد</h3><p className={`mt-1 text-sm ${muted}`}>Front-End Web Developer<br />UI/UX Designer • Student</p></div></div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#d9ef62]"><span className="h-2 w-2 rounded-full bg-[#d9ef62]" /> متاح</div>
                </div>
                <div className={`my-7 border-t ${isLight ? "border-[#102d3a]/10" : "border-white/10"}`} />
                <div className="space-y-4">
                  <div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#e07b5b]/15 text-[#e07b5b]"><Mail size={17} /></span><div className="min-w-0 flex-1"><span className={`block text-xs ${muted}`}>البريد الإلكتروني</span><a href="mailto:ysym7003@gmail.com" className="break-all text-sm font-semibold hover:text-[#d9ef62]">ysym7003@gmail.com</a></div><button type="button" onClick={() => void copyValue("ysym7003@gmail.com", "البريد الإلكتروني")} aria-label="نسخ البريد" className="rounded-lg p-2 hover:bg-[#d9ef62] hover:text-[#102d3a]"><Copy size={16} /></button></div>
                  <div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#e07b5b]/15 text-[#e07b5b]"><Phone size={17} /></span><div className="min-w-0 flex-1"><span className={`block text-xs ${muted}`}>رقم الهاتف</span><a href="tel:+201288840809" dir="ltr" className="text-sm font-semibold hover:text-[#d9ef62]">01288840809</a></div><button type="button" onClick={() => void copyValue("01288840809", "رقم الهاتف")} aria-label="نسخ الهاتف" className="rounded-lg p-2 hover:bg-[#d9ef62] hover:text-[#102d3a]"><Copy size={16} /></button></div>
                  <div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-xl bg-[#e07b5b]/15 text-[#e07b5b]"><MapPin size={17} /></span><div><span className={`block text-xs ${muted}`}>الموقع</span><span className="text-sm font-semibold">وادي القمر، الإسكندرية، مصر</span></div></div>
                </div>
                <div className="mt-7 flex flex-wrap gap-3"><button type="button" onClick={downloadVCard} className="flex items-center gap-2 rounded-full bg-[#d9ef62] px-4 py-2.5 text-xs font-bold text-[#102d3a] hover:bg-[#e07b5b] hover:text-white"><Download size={15} /> حفظ جهة الاتصال</button><button type="button" onClick={() => window.print()} className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-xs font-bold hover:border-[#d9ef62] hover:text-[#d9ef62] ${isLight ? "border-[#102d3a]/25" : "border-white/20"}`}><Printer size={15} /> طباعة</button></div>
              </article>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                <article className={`rounded-[2rem] border p-6 ${card}`}><div className="flex items-center gap-3"><span className="text-[#d9ef62]"><QrCode /></span><h3 className="font-bold">شارك بياناتي</h3></div><div className="mx-auto my-6 grid h-32 w-32 grid-cols-8 gap-1 rounded-xl bg-white p-3">{Array.from({ length: 64 }, (_, index) => <span key={index} className={`${(index * 17 + index * index) % 7 < 3 ? "bg-[#102d3a]" : "bg-white"}`} />)}</div><p className={`text-center text-xs leading-5 ${muted}`}>امسح الكود بواسطة كاميرا الهاتف لمشاركة جهة الاتصال</p></article>
                <article className={`rounded-[2rem] border p-6 ${card}`}><div className="flex items-center gap-3"><span className="text-[#e07b5b]"><Share2 /></span><h3 className="font-bold">روابط التواصل</h3></div><div className="mt-5 flex gap-3"><a href="https://wa.me/qr/KZIOEFQDMGOBF1" target="_blank" rel="noreferrer" aria-label="واتساب" className="grid h-11 w-11 place-items-center rounded-full bg-[#25D366] text-white transition hover:-translate-y-1"><MessageCircle size={19} /></a><a href="https://www.facebook.com/share/16uQ1C3d2y/" target="_blank" rel="noreferrer" aria-label="فيسبوك" className="grid h-11 w-11 place-items-center rounded-full bg-[#1877F2] text-white transition hover:-translate-y-1"><Facebook size={19} /></a><button type="button" onClick={() => void copyValue("https://eissa89.github.io/eissa-card/", "رابط الموقع")} aria-label="نسخ رابط الموقع" className={`grid h-11 w-11 place-items-center rounded-full border transition hover:-translate-y-1 hover:border-[#d9ef62] hover:text-[#d9ef62] ${isLight ? "border-[#102d3a]/20" : "border-white/20"}`}><Globe2 size={19} /></button></div><p className={`mt-5 text-xs leading-5 ${muted}`}>يسعدني استقبال الرسائل والأفكار والتعاونات الجديدة.</p></article>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]"><div><div className="font-mono text-xs font-bold tracking-[.2em] text-[#e07b5b]">02 / عني</div><h2 className="mt-6 max-w-sm font-serif text-5xl leading-[.9] tracking-[-.06em] sm:text-6xl">مطور<br />يفكر<br /><span className="text-[#e07b5b]">بعين مصمم.</span></h2></div><div className="self-end"><p className="text-2xl leading-[1.35] tracking-[-.02em] sm:text-3xl">شغوف ببناء مواقع جميلة وعالية الأداء وتطبيقات ويب تقدمية تجعل التقنية أقرب للناس.</p><p className={`mt-7 max-w-xl text-base leading-7 ${muted}`}>أنا عيسى محمد، طالب ومطور واجهات أمامية من الإسكندرية. أهتم بتجربة المستخدم، تحسين الأداء، سهولة الوصول، والكود النظيف. أحب تحويل الأفكار المعقدة إلى تجارب واضحة ومدروسة تشعر بأنها جيدة بقدر ما تعمل.</p><div className="mt-10 grid gap-5 sm:grid-cols-3"><div className="flex items-start gap-3"><School className="mt-1 shrink-0 text-[#e07b5b]" size={20} /><span><strong className="block">التعليم</strong><small className={muted}>تعلم مستمر وممارسة يومية</small></span></div><div className="flex items-start gap-3"><MapPin className="mt-1 shrink-0 text-[#e07b5b]" size={20} /><span><strong className="block">الموقع</strong><small className={muted}>الإسكندرية، مصر</small></span></div><div className="flex items-start gap-3"><Award className="mt-1 shrink-0 text-[#e07b5b]" size={20} /><span><strong className="block">الهدف</strong><small className={muted}>أثر رقمي مفيد ومبتكر</small></span></div></div></div></div>
        </section>

        <section id="skills" className={`border-y ${soft} ${isLight ? "border-[#102d3a]/15" : "border-white/10"}`}>
          <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"><div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><div className="font-mono text-xs font-bold tracking-[.2em] text-[#e07b5b]">03 / المهارات والقدرات</div><h2 className="mt-5 font-serif text-5xl tracking-[-.06em] sm:text-6xl">الأدوات التي<br /><span className="text-[#d9ef62]">أصل بها للفكرة.</span></h2></div><p className={`max-w-xs text-sm leading-6 ${muted}`}>مزيج عملي من البرمجة والتصميم والأداء لبناء منتجات رقمية متماسكة.</p></div>
            <div className="grid gap-4 md:grid-cols-2">{skills.map(([name, value]) => <div key={name} className={`rounded-2xl border p-5 ${card}`}><div className="mb-3 flex items-center justify-between gap-4"><span className="font-semibold">{name}</span><span className="font-mono text-sm text-[#d9ef62]">{value}%</span></div><div className={`h-2 overflow-hidden rounded-full ${isLight ? "bg-[#102d3a]/10" : "bg-white/10"}`}><div className="h-full rounded-full bg-[#d9ef62]" style={{ width: `${value}%` }} /></div></div>)}</div>
            <div className="mt-8 flex flex-wrap gap-3">{skillTags.map((skill, index) => <span key={skill} className={`rounded-full border px-4 py-2.5 text-sm transition hover:-translate-y-1 ${index % 4 === 0 ? "border-[#d9ef62] text-[#d9ef62]" : isLight ? "border-[#102d3a]/20" : "border-white/20"}`}>{skill}</span>)}</div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="mb-12"><div className="font-mono text-xs font-bold tracking-[.2em] text-[#e07b5b]">04 / المسار والخبرات</div><h2 className="mt-5 font-serif text-5xl tracking-[-.06em] sm:text-6xl">رحلة تعلم<br /><span className="text-[#e07b5b]">مستمرة.</span></h2></div>
          <div className="relative space-y-5 before:absolute before:right-[11px] before:top-3 before:h-[calc(100%-24px)] before:w-px before:bg-[#e07b5b]/40">{[["2024 — الحالي", "مطور مشاريع الويب والتطبيقات", "العمل على مشاريع ويب تفاعلية وتطبيقات شخصية قائمة على أحدث الممارسات."], ["2023 — 2024", "دراسة البرمجيات والتقنيات الحديثة", "التركيز على بناء الواجهات والأداء وتجارب المستخدم بدون تعقيد زائد."], ["المرحلة الحالية", "طالب شغوف", "الجمع بين التحصيل العلمي الأكاديمي وصقل المهارات الشخصية والتقنية."]].map(([date, title, copy]) => <article key={date} className="relative pr-10"><span className="absolute right-0 top-2 h-6 w-6 rounded-full border-4 border-[#e07b5b] bg-current" /><div className={`rounded-2xl border p-6 ${card}`}><span className="font-mono text-xs text-[#d9ef62]">{date}</span><h3 className="mt-3 text-xl font-bold">{title}</h3><p className={`mt-3 text-sm leading-6 ${muted}`}>{copy}</p></div></article>)}</div>
        </section>

        <section id="projects" className={`border-y ${soft} ${isLight ? "border-[#102d3a]/15" : "border-white/10"}`}>
          <div className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"><div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><div className="font-mono text-xs font-bold tracking-[.2em] text-[#e07b5b]">05 / المشاريع</div><h2 className="mt-5 font-serif text-5xl tracking-[-.06em] sm:text-6xl">أعمال تصنع<br /><span className="text-[#d9ef62]">فرقاً.</span></h2></div><div className="flex gap-2" role="tablist">{[["all", "الكل"], ["web", "الويب"], ["ui", "الواجهات"]].map(([value, label]) => <button key={value} type="button" role="tab" aria-selected={projectFilter === value} onClick={() => setProjectFilter(value as "all" | "web" | "ui")} className={`rounded-full px-4 py-2 text-xs font-bold transition ${projectFilter === value ? "bg-[#d9ef62] text-[#102d3a]" : `border ${isLight ? "border-[#102d3a]/20" : "border-white/20"}`}`}>{label}</button>)}</div></div>
            <div className="grid gap-5 md:grid-cols-3">{filteredProjects.map((project) => <article key={project.number} className={`group rounded-[1.7rem] border p-6 transition hover:-translate-y-2 hover:border-[#d9ef62] ${card}`}><div className="flex items-center justify-between"><span className="font-mono text-xs text-[#e07b5b]">{project.number}</span><span className="text-[#d9ef62] transition group-hover:rotate-12">{project.icon}</span></div><h3 className="mt-16 text-2xl font-bold">{project.title}</h3><p className={`mt-4 text-sm leading-6 ${muted}`}>{project.copy}</p><div className="mt-7 flex flex-wrap gap-2 border-t border-current/10 pt-5">{project.tags.map((tag) => <span key={tag} className="rounded-full bg-current/5 px-3 py-1 text-xs">{tag}</span>)}</div></article>)}</div>
          </div>
        </section>

        <section id="gallery" className="mx-auto max-w-[1200px] px-5 py-20 sm:px-8 lg:px-10 lg:py-28"><div className="mb-10"><div className="font-mono text-xs font-bold tracking-[.2em] text-[#e07b5b]">06 / المعرض</div><h2 className="mt-5 font-serif text-5xl tracking-[-.06em] sm:text-6xl">تفاصيل<br /><span className="text-[#e07b5b]">تستحق النظر.</span></h2></div><div className="grid gap-5 md:grid-cols-3">{galleryItems.map((item, index) => <button type="button" key={item.title} onClick={() => setActiveGallery(index)} className={`group min-h-52 rounded-[1.7rem] border p-6 text-right transition hover:-translate-y-2 hover:border-[#d9ef62] ${card}`}><div className="flex items-center justify-between"><span className="text-[#d9ef62]">{item.icon}</span><ImageIcon size={17} className={muted} /></div><h3 className="mt-20 text-lg font-bold">{item.title}</h3><p className={`mt-2 text-sm ${muted}`}>{item.caption}</p></button>)}</div></section>

        <section id="contact" className="relative overflow-hidden bg-[#d9ef62] text-[#102d3a]"><div className="absolute -left-16 top-10 h-72 w-72 rounded-full border-[34px] border-[#102d3a]/10" /><div className="relative mx-auto grid max-w-[1200px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[.9fr_1.1fr] lg:px-10 lg:py-28"><div><div className="font-mono text-xs font-bold tracking-[.2em] text-[#e07b5b]">07 / تواصل معي</div><h2 className="mt-6 font-serif text-[clamp(4rem,9vw,7.6rem)] leading-[.82] tracking-[-.08em]">لديك<br /><span className="text-[#e07b5b]">فكرة؟</span></h2><p className="mt-8 max-w-md text-lg leading-7 text-[#35606b]">لنجعلها مفيدة، جميلة، ومختلفة عن المعتاد.</p><div className="mt-8 flex flex-wrap gap-3"><a href="mailto:ysym7003@gmail.com" className="flex items-center gap-2 rounded-full bg-[#102d3a] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#e07b5b]"><Mail size={17} /> أرسل رسالة</a><a href="https://eissa89.github.io/eissa-card/" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-full border border-[#102d3a] px-5 py-3 text-sm font-bold transition hover:bg-[#102d3a] hover:text-[#d9ef62]"><Globe2 size={17} /> موقعي</a></div></div><form onSubmit={submitContact} className={`rounded-[2rem] border border-[#102d3a]/20 bg-white/20 p-6 backdrop-blur-sm sm:p-8`}><div className="grid gap-5 sm:grid-cols-2"><label className="text-sm font-bold">الاسم<input name="name" required className="mt-2 w-full rounded-xl border border-[#102d3a]/20 bg-white/40 px-4 py-3 font-normal outline-none focus:border-[#102d3a]" placeholder="اكتب اسمك" /></label><label className="text-sm font-bold">البريد الإلكتروني<input name="email" type="email" required className="mt-2 w-full rounded-xl border border-[#102d3a]/20 bg-white/40 px-4 py-3 font-normal outline-none focus:border-[#102d3a]" placeholder="name@example.com" /></label></div><label className="mt-5 block text-sm font-bold">الموضوع<input name="subject" required className="mt-2 w-full rounded-xl border border-[#102d3a]/20 bg-white/40 px-4 py-3 font-normal outline-none focus:border-[#102d3a]" placeholder="كيف يمكنني مساعدتك؟" /></label><label className="mt-5 block text-sm font-bold">الرسالة<textarea name="message" required rows={4} className="mt-2 w-full resize-y rounded-xl border border-[#102d3a]/20 bg-white/40 px-4 py-3 font-normal outline-none focus:border-[#102d3a]" placeholder="اكتب رسالتك هنا..." /></label><button type="submit" className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#102d3a] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#e07b5b]"><SendIcon /> إرسال الرسالة</button></form></div></section>
      </div>

      <footer className="bg-[#102d3a] text-[#abc9bc]"><div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-5 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10"><div><div className="font-serif text-2xl text-[#f4f1e9]">Eissa Mohammed <span className="text-[#d9ef62]">عيسى محمد</span></div><div className="mt-2 font-mono text-[10px] tracking-[.15em]">FRONT-END / UI / UX / ALEXANDRIA</div></div><div className="flex items-center gap-4"><a href="https://github.com/Eissa89" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-[#d9ef62]"><Github size={19} /></a><a href="https://eissa89.github.io/eissa-card/" target="_blank" rel="noreferrer" aria-label="Website" className="hover:text-[#d9ef62]"><Globe2 size={19} /></a><a href="#hero" className="flex items-center gap-2 border-r border-white/20 pr-4 text-xs font-bold hover:text-[#d9ef62]">للأعلى <ArrowUpRight size={15} /></a></div></div></footer>

      {activeGallery !== null && <div className="fixed inset-0 z-50 grid place-items-center bg-[#071721]/85 p-5 backdrop-blur-md" role="dialog" aria-modal="true" aria-label="عرض المعرض" onClick={() => setActiveGallery(null)}><div className={`relative w-full max-w-lg rounded-[2rem] border p-10 text-center ${card}`} onClick={(event) => event.stopPropagation()}><button type="button" onClick={() => setActiveGallery(null)} aria-label="إغلاق" className="absolute left-5 top-5 rounded-full p-2 hover:bg-[#d9ef62] hover:text-[#102d3a]"><X size={18} /></button><div className="mx-auto grid h-28 w-28 place-items-center rounded-3xl bg-[#d9ef62] text-[#102d3a]">{galleryItems[activeGallery].icon}</div><h3 className="mt-7 text-2xl font-bold">{galleryItems[activeGallery].title}</h3><p className={`mt-3 ${muted}`}>{galleryItems[activeGallery].caption}</p></div></div>}
      {toast && <div role="status" className="fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full bg-[#102d3a] px-5 py-3 text-sm font-bold text-white shadow-xl"><Check size={16} className="text-[#d9ef62]" /> {toast}</div>}
    </main>
  );
}

function SendIcon() {
  return <ArrowUpLeft size={17} />;
}