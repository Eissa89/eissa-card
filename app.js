      (function () {
        "use strict";

        // إضافة Web App Manifest خفيف عند توفر Service Worker API
        if ('serviceWorker' in navigator) {
          window.addEventListener('load', () => {
            const manifest = {
              name: "Eissa Mohammed Portfolio",
              short_name: "Eissa",
              start_url: "./",
              display: "standalone",
              background_color: "#0a0a0c",
              theme_color: "#0a0a0c",
              icons: [{ src: "1000081078.png", sizes: "192x192", type: "image/png" }]
            };
            const manifestBlob = new Blob([JSON.stringify(manifest)], { type: 'application/json' });
            const manifestURL = URL.createObjectURL(manifestBlob);
            const link = document.createElement('link');
            link.rel = 'manifest';
            link.href = manifestURL;
            document.head.appendChild(link);
            window.setTimeout(() => URL.revokeObjectURL(manifestURL), 0);
          });
        }

        const translations = {
          ar: {
            "nav.home": "الرئيسية",
            "nav.profile": "الملف",
            "nav.about": "عني",
            "nav.skills": "المهارات",
            "nav.projects": "المشاريع",
            "nav.contact": "تواصل",
            "nav.cta": "تواصل معي ↖",
            "hero.available": "متاح للتواصل والتعلم والعمل الحر",
            "hero.location": "الإسكندرية، مصر",
            "hero.eyebrow": "FRONT-END / UI / UX / DEVELOPER",
            "hero.title": 'اصنع<br /><span class="coral">تجربة،</span><br />تترك أثراً.',
            "hero.lede": "أبني تجارب ويب حديثة، سريعة، متجاوبة وأنيقة تجمع بين التقنية البرمجية واللمسة الإنسانية.",
            "hero.explore": "استكشف الملف ↓",
            "hero.resume": "📄 السيرة الذاتية (PDF)",
            "hero.learning": "حالياً أتعلم",
            "profile.name": "عيسى محمد",
            "profile.role": "Front-End Web Developer<br />UI/UX Designer • Student",
            "profile.status": "متاح",
            "profile.email_lbl": "البريد الإلكتروني",
            "profile.phone_lbl": "رقم الهاتف",
            "profile.location_lbl": "الموقع",
            "profile.location_val": "وادي القمر، الإسكندرية، مصر",
            "profile.vcard": "⇩ حفظ جهة الاتصال (.vcf)",
            "profile.print": "▣ طباعة",
            "profile.share": "شارك بياناتي",
            "profile.qr_desc": "امسح الكود بواسطة كاميرا الهاتف لمشاركة جهة الاتصال",
            "profile.social": "روابط التواصل",
            "about.body": "أنا عيسى محمد، طالب ومطور واجهات أمامية من الإسكندرية. أهتم بتجربة المستخدم، تحسين الأداء، سهولة الوصول (Accessibility)، والكود النظيف. أحول الأفكار المعقدة إلى تجارب واضحة تشعر بأنها جيدة بقدر ما تعمل.",
            "exp.e1_title": "مطور مشاريع الويب والتطبيقات",
            "exp.e1_desc": "العمل على مشاريع ويب تفاعلية وتطبيقات شخصية قائمة على أحدث الممارسات البرمجية.",
            "exp.e2_title": "دراسة البرمجيات والتقنيات الحديثة",
            "exp.e2_desc": "التركيز على بناء الواجهات والأداء وتجارب المستخدم مع مراعاة كاملة للوصولية الشاملة.",
            "stats.repos": "مستودع (GitHub)",
            "stats.stars": "إجمالي النجوم",
            "stats.lighthouse": "Lighthouse Score %",
            "stats.tools": "تقنية وأداة برمجية",
            "proj.all": "الكل",
            "proj.web": "الويب",
            "proj.ui": "الواجهات",
            "contact.lede": "لنجعلها مفيدة، جميلة، ومختلفة عن المعتاد.",
            "form.name": "الاسم",
            "form.email": "البريد الإلكتروني",
            "form.subject": "الموضوع",
            "form.message": "الرسالة",
            "form.submit": "↖ إرسال الرسالة",
            "form.name_placeholder": "اكتب اسمك",
            "form.email_placeholder": "name@example.com",
            "form.subject_placeholder": "كيف يمكنني مساعدتك؟",
            "form.message_placeholder": "اكتب رسالتك هنا...",
            "cmd.placeholder": "اكتب أمراً أو ابحث...",
            "footer.privacy": "الخصوصية",
            "footer.top": "للأعلى ↗",
            "skip": "تجاوز إلى المحتوى الرئيسي",
            "profile.kicker": "01 / بطاقة التعريف", "profile.title": "بياناتي،<br /><span class=\"lime\">بوضوح.</span>", "about.kicker": "02 / عني", "about.title": "مطور<br />يفكر<br /><span class=\"coral\">بعين مصمم.</span>", "skills.kicker": "03 / المهارات والقدرات", "skills.title": "الأدوات التي<br /><span class=\"lime\">أصل بها للفكرة.</span>", "experience.kicker": "04 / المسار والخبرات", "experience.title": "رحلة تعلم<br /><span class=\"coral\">مستمرة.</span>", "experience.current": "2024 — الحالي", "experience.previous": "2023 — 2024", "stats.kicker": "05 / الأرقام والإحصائيات", "stats.title": "مؤشرات الأداء<br /><span class=\"lime\">المباشرة.</span>", "projects.kicker": "06 / المشاريع", "projects.title": "أعمال تصنع<br /><span class=\"lime\">فرقاً.</span>", "projects.filter_label": "تصفية المشاريع", "contact.kicker": "07 / تواصل معي", "contact.title": "لديك<br /><span class=\"coral\">فكرة؟</span>", "project.details": "التفاصيل", "project.details_aria": "فتح تفاصيل", "project.open": "فتح المشروع ↗", "project.preview": "معاينة مباشرة ↗", "project.no_preview": "لا توجد معاينة منشورة", "privacy.title": "سياسة الخصوصية", "privacy.body": "يحترم هذا الموقع خصوصيتك ولا يجمع أي بيانات شخصية دون إذنك. يتم استخدام نموذج التواصل فقط لإرسال الاستفسارات المباشرة.", "resume.summary_title": "الملخص المهني", "resume.summary": "مطور واجهات أمامية متخصص في بناء تطبيقات ويب تفاعلية وعالية الأداء باستخدام React, TypeScript, HTML5, و CSS3 مع مراعاة معايير سهولة الوصول وتحسين محركات البحث.", "resume.download": "تحميل PDF حقيقي ⇩", "resume.print": "طباعة", "cmd.title": "لوحة الأوامر", "cmd.search_label": "البحث", "cmd.home": "الرئيسية", "cmd.projects": "المشاريع", "cmd.resume": "السيرة الذاتية", "cmd.theme": "تبديل المظهر", "cmd.lang": "تبديل اللغة", "aria.close": "إغلاق النافذة", "form.invalid_required": "هذا الحقل مطلوب.", "form.invalid_email": "أدخل بريدًا إلكترونيًا صحيحًا.", "form.invalid_summary": "يرجى ملء جميع الحقول المطلوبة.", "toast.email": "سيتم فتح تطبيق البريد الآن...", "toast.vcard": "تم تنزيل جهة الاتصال vCard", "toast.copy_failed": "تعذر النسخ تلقائياً", "toast.pdf": "جاري تجهيز ملف الـ PDF...", "modal.problem": "المشكلة / Problem", "modal.solution": "الحل / Solution", "modal.role": "الدور / Role", "modal.preview": "المعاينة / Preview", "modal.available_later": "ستضاف عند توفر تفاصيل دراسة الحالة.", "modal.link_available": "الرابط متاح أدناه عند توفره."
          },
          en: {
            "nav.home": "Home",
            "nav.profile": "Profile",
            "nav.about": "About",
            "nav.skills": "Skills",
            "nav.projects": "Projects",
            "nav.contact": "Contact",
            "nav.cta": "Contact Me ↖",
            "hero.available": "Available for Freelance & Projects",
            "hero.location": "Alexandria, Egypt",
            "hero.eyebrow": "FRONT-END / UI / UX / DEVELOPER",
            "hero.title": 'Craft an<br /><span class="coral">experience</span><br />that lasts.',
            "hero.lede": "I build modern, fast, responsive and sleek web experiences uniting engineering with human design.",
            "hero.explore": "Explore Profile ↓",
            "hero.resume": "📄 Resume (PDF)",
            "hero.learning": "Currently Learning",
            "profile.name": "Eissa Mohammed",
            "profile.role": "Front-End Web Developer<br />UI/UX Designer • Student",
            "profile.status": "Available",
            "profile.email_lbl": "Email Address",
            "profile.phone_lbl": "Phone Number",
            "profile.location_lbl": "Location",
            "profile.location_val": "Alexandria, Egypt",
            "profile.vcard": "⇩ Save vCard (.vcf)",
            "profile.print": "▣ Print",
            "profile.share": "Share Contact",
            "profile.qr_desc": "Scan QR code with mobile camera to share contact",
            "profile.social": "Social Links",
            "about.body": "I'm Eissa Mohammed, a student and front-end developer based in Alexandria. Focused on UX, performance optimization, accessibility, and clean code.",
            "exp.e1_title": "Web Projects & Apps Developer",
            "exp.e1_desc": "Building interactive web applications adhering to modern industry standards.",
            "exp.e2_title": "Software Engineering Student",
            "exp.e2_desc": "Focusing on UI development, accessibility, and intuitive visual designs.",
            "stats.repos": "GitHub Repositories",
            "stats.stars": "Total Stars",
            "stats.lighthouse": "Lighthouse Score %",
            "stats.tools": "Tech Stack Tools",
            "proj.all": "All",
            "proj.web": "Web",
            "proj.ui": "UI/UX",
            "contact.lede": "Let's make it impactful, elegant, and unique.",
            "form.name": "Name",
            "form.email": "Email",
            "form.subject": "Subject",
            "form.message": "Message",
            "form.submit": "↖ Send Message",
            "form.name_placeholder": "Enter your name",
            "form.email_placeholder": "name@example.com",
            "form.subject_placeholder": "How can I help you?",
            "form.message_placeholder": "Write your message here...",
            "cmd.placeholder": "Type a command or search...",
            "footer.privacy": "Privacy",
            "footer.top": "Back to Top ↗",
            "skip": "Skip to main content",
            "profile.kicker": "01 / Profile", "profile.title": "My details,<br /><span class=\"lime\">clearly.</span>", "about.kicker": "02 / About", "about.title": "A developer<br />who thinks<br /><span class=\"coral\">like a designer.</span>", "skills.kicker": "03 / Skills & Capabilities", "skills.title": "The tools I<br /><span class=\"lime\">use to shape ideas.</span>", "experience.kicker": "04 / Journey & Experience", "experience.title": "A continuous<br /><span class=\"coral\">learning journey.</span>", "experience.current": "2024 — Present", "experience.previous": "2023 — 2024", "stats.kicker": "05 / Metrics & Statistics", "stats.title": "Live performance<br /><span class=\"lime\">indicators.</span>", "projects.kicker": "06 / Projects", "projects.title": "Work that makes<br /><span class=\"lime\">a difference.</span>", "projects.filter_label": "Project filters", "contact.kicker": "07 / Contact", "contact.title": "Have an<br /><span class=\"coral\">idea?</span>", "project.details": "Details", "project.details_aria": "Open details for", "project.open": "Open project ↗", "project.preview": "Live preview ↗", "project.no_preview": "No published preview", "privacy.title": "Privacy Policy", "privacy.body": "This website respects your privacy and does not collect personal data without your permission. The contact form is used only to send direct inquiries.", "resume.summary_title": "Professional Summary", "resume.summary": "Front-end developer focused on building interactive, high-performance web applications using React, TypeScript, HTML5, and CSS3, with attention to accessibility and search engine optimization.", "resume.download": "Download PDF ⇩", "resume.print": "Print", "cmd.title": "Command Palette", "cmd.search_label": "Search", "cmd.home": "Home", "cmd.projects": "Projects", "cmd.resume": "Resume", "cmd.theme": "Toggle Theme", "cmd.lang": "Switch Language", "aria.close": "Close window", "form.invalid_required": "This field is required.", "form.invalid_email": "Enter a valid email address.", "form.invalid_summary": "Please complete all required fields.", "toast.email": "Opening your email app...", "toast.vcard": "Contact vCard downloaded", "toast.copy_failed": "Automatic copy failed", "toast.pdf": "Preparing the PDF...", "modal.problem": "Problem", "modal.solution": "Solution", "modal.role": "Role", "modal.preview": "Preview", "modal.available_later": "Details will be added when a case study is available.", "modal.link_available": "The link is available below when published."
          }
        };

        let currentLang = localStorage.getItem("site_lang") || "ar";
        let currentTheme = localStorage.getItem("site_theme") || "dark";
        let lastFocusedElement = null;

        // دالة آمنة لمعالجة نصوص الترجمة التي تحتوي على وسوم محددة وآمنة فقط لمنع ثغرات XSS
        function setSafeHTML(element, htmlString) {
          element.textContent = "";
          // تقسيم النص بالاعتماد على الوسوم الآمنة: <br />, <br>, <span class="coral">, <span class="lime">
          const regex = /(<br\s*\/?>|<span class="(?:coral|lime)">.*?<\/span>)/gi;
          const parts = htmlString.split(regex);

          for (let i = 0; i < parts.length; i++) {
            const part = parts[i];
            if (!part) continue;

            const partLower = part.toLowerCase();
            if (partLower.startsWith("<br")) {
              element.appendChild(document.createElement("br"));
            } else if (partLower.startsWith("<span")) {
              const match = part.match(/class="(coral|lime)"/i);
              const className = match ? match[1] : "";
              const text = part.replace(/<[^>]+>/g, "");
              const span = document.createElement("span");
              if (className) span.classList.add(className);
              span.textContent = text;
              element.appendChild(span);
            } else {
              element.appendChild(document.createTextNode(part));
            }
          }
        }

        const toast = document.getElementById("toast");
        let toastTimer;
        function showToast(message) {
          toast.querySelector("span").textContent = message;
          toast.classList.add("show");
          clearTimeout(toastTimer);
          toastTimer = setTimeout(() => toast.classList.remove("show"), 2500);
        }

        // ساعة الوقت الحية — لا تعمل في الخلفية بلا حاجة.
        const clockElement = document.getElementById("clock");
        let clockTimer = 0;

        function updateClock() {
          if (!clockElement) return;
          const now = new Date();
          clockElement.textContent = new Intl.DateTimeFormat(
            currentLang === "ar" ? "ar-EG" : "en-US",
            { hour: "2-digit", minute: "2-digit", second: "2-digit" }
          ).format(now);
        }

        function scheduleClock() {
          clearTimeout(clockTimer);
          updateClock();
          if (!document.hidden) {
            const delay = 1000 - (Date.now() % 1000);
            clockTimer = window.setTimeout(scheduleClock, delay);
          }
        }

        document.addEventListener("visibilitychange", scheduleClock, { passive: true });
        scheduleClock();

        // مؤشر الفأرة التفاعلي: تحديث واحد لكل frame بدل تغيير الـDOM مع كل حركة
        const cursor = document.getElementById("cursor");
        if (window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)").matches && cursor) {
          let pointerX = -100;
          let pointerY = -100;
          let cursorFrame = 0;
          const renderCursor = () => {
            cursor.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0) translate3d(-50%, -50%, 0)`;
            cursorFrame = 0;
          };
          window.addEventListener("pointermove", (e) => {
            pointerX = e.clientX;
            pointerY = e.clientY;
            if (!cursorFrame) cursorFrame = requestAnimationFrame(renderCursor);
          }, { passive: true });
          document.addEventListener("pointerover", (e) => {
            if (e.target.closest("a, button, input, textarea")) cursor.classList.add("hovered");
          }, { passive: true });
          document.addEventListener("pointerout", (e) => {
            if (e.target.closest("a, button, input, textarea") && !e.relatedTarget?.closest?.("a, button, input, textarea")) {
              cursor.classList.remove("hovered");
            }
          }, { passive: true });
        }

        // إدارة التركيز في النوافذ المنبثقة: حبس Tab + إعادة التركيز بعد الإغلاق.
        const focusReturnTargets = new WeakMap();

        function getFocusable(surface) {
          return [...surface.querySelectorAll(
            'button:not([disabled]), [href]:not([aria-disabled="true"]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )].filter((el) => el.getClientRects().length);
        }

        function trapFocus(surface) {
          const focusables = getFocusable(surface);
          if (!focusables.length) {
            surface.setAttribute("tabindex", "-1");
            surface.focus();
            return;
          }

          const first = focusables[0];
          const last = focusables[focusables.length - 1];

          surface.onkeydown = (event) => {
            if (event.key !== "Tab") return;
            const current = document.activeElement;

            if (event.shiftKey && current === first) {
              event.preventDefault();
              last.focus();
            } else if (!event.shiftKey && current === last) {
              event.preventDefault();
              first.focus();
            }
          };

          first.focus();
        }

        function openModal(modalId) {
          const surface = document.getElementById(modalId);
          if (!surface) return;

          focusReturnTargets.set(surface, document.activeElement);
          surface.classList.add("open");
          surface.setAttribute("aria-hidden", "false");
          document.body.classList.add("modal-open");
          trapFocus(surface);
        }

        window.closeModal = function (modalId, restoreFocus = true) {
          const surface = document.getElementById(modalId);
          if (!surface) return;

          surface.classList.remove("open");
          surface.setAttribute("aria-hidden", "true");
          surface.onkeydown = null;

          if (!document.querySelector(".modal.open, .cmd-palette.open")) {
            document.body.classList.remove("modal-open");
          }

          if (restoreFocus) {
            const target = focusReturnTargets.get(surface);
            if (target && target.isConnected && typeof target.focus === "function") {
              target.focus();
            }
          }
        };

        document.querySelectorAll(".modal, .cmd-palette").forEach((surface) => {
          surface.setAttribute("aria-hidden", "true");
          surface.addEventListener("click", (event) => {
            if (event.target === surface) closeModal(surface.id);
          });
        });

        // تبديل المظهر Dark / Light
        function setTheme(theme) {
          currentTheme = theme;
          localStorage.setItem("site_theme", theme);
          const isLight = theme === "light";
          document.documentElement.classList.toggle("light", isLight);
          document.getElementById("theme-toggle").textContent = isLight ? "◐" : "☼";
          document.getElementById("theme-color-meta").setAttribute("content", isLight ? "#f8f4ea" : "#0a0a0c");
        }
        document.getElementById("theme-toggle").addEventListener("click", () => {
          setTheme(currentTheme === "dark" ? "light" : "dark");
        });

        // تبديل اللغة (i18n)
        function setLanguage(lang) {
          currentLang = lang;
          localStorage.setItem("site_lang", lang);
          document.documentElement.lang = lang;
          document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
          document.getElementById("lang-label").textContent = lang === "ar" ? "EN" : "عربي";

          document.querySelectorAll("[data-i18n]").forEach((el) => {
            const key = el.getAttribute("data-i18n");
            if (translations[lang][key]) {
              setSafeHTML(el, translations[lang][key]);
            }
          });

          document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
            const key = el.getAttribute("data-i18n-placeholder");
            if (translations[lang][key]) el.setAttribute("placeholder", translations[lang][key]);
          });
          document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
            const key = el.getAttribute("data-i18n-aria-label");
            if (translations[lang][key]) el.setAttribute("aria-label", translations[lang][key]);
          });
          renderSkills();
          renderProjects(document.querySelector("[data-filter].active")?.dataset.filter || "all");
          updateClock();
        }
        document.getElementById("lang-toggle").addEventListener("click", () => {
          setLanguage(currentLang === "ar" ? "en" : "ar");
          showToast(currentLang === "ar" ? "تم تحويل اللغة للعربية" : "Switched to English");
        });

        // قائمة الهاتف المحمول
        const menuButton = document.getElementById("menu-toggle");
        const mobileNav = document.getElementById("mobile-nav");
        function closeMobileNav(restoreFocus = true) {
          mobileNav.classList.remove("open");
          menuButton.setAttribute("aria-expanded", "false");
          menuButton.textContent = "☰";
          if (restoreFocus) menuButton.focus();
        }

        menuButton.addEventListener("click", () => {
          const open = mobileNav.classList.toggle("open");
          menuButton.setAttribute("aria-expanded", String(open));
          menuButton.textContent = open ? "×" : "☰";
          if (open) {
            const firstLink = mobileNav.querySelector("a");
            if (firstLink) firstLink.focus();
          }
        });
        mobileNav.addEventListener("click", (event) => {
          if (event.target.closest("a")) {
            closeMobileNav(false);
          }
        });

        // يوضح القسم الحالي أثناء التمرير، مع مراقبة خفيفة بدل حسابات scroll مستمرة
        const navigationLinks = document.querySelectorAll(".main-nav a, .mobile-nav a");
        const sectionObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            navigationLinks.forEach((link) => {
              const active = link.getAttribute("href") === `#${entry.target.id}`;
              link.classList.toggle("active", active);
              if (active) link.setAttribute("aria-current", "location");
              else link.removeAttribute("aria-current");
            });
          });
        }, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });
        document.querySelectorAll("main section[id]").forEach((section) => sectionObserver.observe(section));

        // النسخ للحافظة
        document.querySelectorAll("[data-copy]").forEach((btn) => {
          btn.addEventListener("click", async function () {
            const val = this.dataset.copy;
            try {
              if (navigator.clipboard) await navigator.clipboard.writeText(val);
              else {
                const ta = document.createElement("textarea");
                ta.value = val; document.body.appendChild(ta); ta.select(); document.execCommand("copy"); ta.remove();
              }
              showToast((currentLang === "ar" ? "تم نسخ " : "Copied ") + (this.dataset.label || ""));
            } catch (_) {
              showToast(translations[currentLang]["toast.copy_failed"]);
            }
          });
        });

        // تحميل جهة الاتصال vCard
        document.getElementById("vcard-button").addEventListener("click", () => {
          const vcard = [
            "BEGIN:VCARD", "VERSION:3.0",
            "FN:Eissa Mohammed", "N:Mohammed;Eissa;;;",
            "TITLE:Front-End Web Developer / UI/UX Designer",
            "EMAIL;TYPE=INTERNET:ysym7003@gmail.com",
            "TEL;TYPE=CELL:+201288840809",
            "ADR;TYPE=HOME:;;Alexandria;;;Egypt",
            "URL:https://eissa89.github.io/eissa-card/",
            "URL;TYPE=LinkedIn:https://www.linkedin.com/in/eissa-dev",
            "END:VCARD"
          ].join("\n");
          const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.href = url;
          link.download = "eissa-mohammed.vcf";
          link.click();
          window.setTimeout(() => URL.revokeObjectURL(url), 0);
          showToast(translations[currentLang]["toast.vcard"]);
        });

        document.getElementById("print-button").addEventListener("click", () => window.print());

        // المهارات: سياق الاستخدام أوضح من نسب تقديرية غير قابلة للتحقق
        const skills = [
          { title: "Frontend", items: ["HTML5 / Modern CSS3", "JavaScript (ES2024)", "React / TypeScript"] },
          { title: "UI / UX", items: ["Interface systems", "Responsive flows", "Prototyping & interaction"] },
          { title: "Performance", items: ["Accessibility", "Performance budgets", "Responsive & PWA architecture"] },
          { title: "Tools", items: ["Git & GitHub", "Design tokens", "Testing-minded workflows"] },
          { title: "Creative Development", items: ["Motion direction", "Immersive web", "Visual storytelling"] }
        ];
        const skillTranslations = {
          ar: { Frontend: ["HTML5 / Modern CSS3", "JavaScript (ES2024)", "React / TypeScript"], "UI / UX": ["أنظمة الواجهات", "تدفقات متجاوبة", "النمذجة والتفاعل"], Performance: ["سهولة الوصول", "ميزانيات الأداء", "بنية Responsive وPWA"], Tools: ["Git & GitHub", "Design tokens", "سير عمل يراعي الاختبار"], "Creative Development": ["توجيه الحركة", "ويب غامر", "السرد البصري"] },
          en: { Frontend: ["HTML5 / Modern CSS3", "JavaScript (ES2024)", "React / TypeScript"], "UI / UX": ["Interface systems", "Responsive flows", "Prototyping & interaction"], Performance: ["Accessibility", "Performance budgets", "Responsive & PWA architecture"], Tools: ["Git & GitHub", "Design tokens", "Testing-minded workflows"], "Creative Development": ["Motion direction", "Immersive web", "Visual storytelling"] }
        };
        const skillTitles = { ar: { Frontend: "الواجهة الأمامية", "UI / UX": "UI / UX", Performance: "الأداء", Tools: "الأدوات", "Creative Development": "التطوير الإبداعي" }, en: { Frontend: "Frontend", "UI / UX": "UI / UX", Performance: "Performance", Tools: "Tools", "Creative Development": "Creative Development" } };
        function renderSkills() {
          const skillsGrid = document.getElementById("skills-grid");
          if (!skillsGrid) return;
          skillsGrid.replaceChildren();

          skills.forEach((skill) => {
            const items = skillTranslations[currentLang][skill.title] || [];

            const article = document.createElement("article");
            article.className = "panel skill-card";

            const h3 = document.createElement("h3");
            h3.textContent = skillTitles[currentLang][skill.title];

            const ul = document.createElement("ul");
            ul.className = "skill-items";

            items.forEach((item) => {
              const li = document.createElement("li");
              li.textContent = item;
              ul.appendChild(li);
            });

            article.append(h3, ul);
            skillsGrid.appendChild(article);
          });
        }
        renderSkills();

        const tags = ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Git & GitHub", "PWA", "Accessibility", "UI/UX", "Tailwind CSS"];
        const tagList = document.getElementById("tag-list");
        if (tagList) {
          tagList.replaceChildren();
          tags.forEach((t) => {
            const span = document.createElement("span");
            span.className = "tag";
            span.textContent = t;
            tagList.appendChild(span);
          });
        }

        // قائمة المشاريع
        const projects = [
          {
            id: "p1", category: "web", number: "01", symbol: "▦",
            title: "Eissa Personal Card & PWA",
            desc: "بطاقة شخصية تفاعلية فائقة السرعة مع تقنيات Glassmorphism وتطبيق ويب تقدمي PWA.", enDesc: "A fast interactive personal card using Glassmorphism and Progressive Web App technology.",
            tags: ["HTML5", "CSS3", "PWA", "JS"], link: "https://eissa89.github.io/eissa-card/"
          },
          {
            id: "p2", category: "ui", number: "02", symbol: "✦",
            title: "Cyber Dark UI System",
            desc: "نظام تصميم داكن فاخر يعتمد على المؤثرات الضوئية والتفاعلات الهادئة والواضحة.", enDesc: "A premium dark design system built around restrained lighting effects and clear interactions.",
            tags: ["UI/UX", "Design System", "a11y"]
          },
          {
            id: "p3", category: "web", number: "03", symbol: "◈",
            title: "High Performance App",
            desc: "تجربة ويب خفيفة مبنية بعناية، تضع سرعة التحميل وسهولة الاستخدام في المقدمة.", enDesc: "A carefully built lightweight web experience focused on loading speed and usability.",
            tags: ["Performance", "Vanilla JS", "React"]
          }
        ];

        function renderProjects(filter) {
          const grid = document.getElementById("projects-grid");
          const visibleProjects = projects.filter((p) => filter === "all" || p.category === filter);
          const fragment = document.createDocumentFragment();

          visibleProjects.forEach((p) => {
            const card = document.createElement("article");
            card.className = "panel project-card";

            const top = document.createElement("div");
            top.className = "project-topline";

            const number = document.createElement("span");
            number.className = "coral project-number";
            number.textContent = p.number;

            const category = document.createElement("span");
            category.className = "project-category";
            category.textContent = p.category === "web" ? "WEB" : "UI / UX";

            const symbol = document.createElement("span");
            symbol.className = "lime project-symbol";
            symbol.setAttribute("aria-hidden", "true");
            symbol.textContent = p.symbol;

            const topMeta = document.createElement("div");
            topMeta.className = "project-top-meta";
            topMeta.append(category, symbol);

            top.append(number, topMeta);

            const title = document.createElement("h3");
            title.className = "project-title";
            title.textContent = p.title;

            const desc = document.createElement("p");
            desc.className = "project-description";
            desc.textContent = currentLang === "en" ? p.enDesc : p.desc;

            const tags = document.createElement("div");
            tags.className = "project-tags";
            p.tags.forEach((tagText) => {
              const tag = document.createElement("span");
              tag.textContent = tagText;
              tags.appendChild(tag);
            });

            const actions = document.createElement("div");
            actions.className = "project-actions";

            const details = document.createElement("button");
            details.type = "button";
            details.className = "small-button project-details";
            details.dataset.projectId = p.id;
            details.textContent = translations[currentLang]["project.details"];
            details.setAttribute("aria-label", `${translations[currentLang]["project.details_aria"]} ${p.title}`);
            actions.appendChild(details);

            if (p.link) {
              const directLink = document.createElement("a");
              directLink.className = "small-button";
              directLink.href = p.link;
              directLink.target = "_blank";
              directLink.rel = "noopener noreferrer";
              directLink.textContent = translations[currentLang]["project.open"];
              actions.appendChild(directLink);
            }

            card.append(top, title, desc, tags, actions);
            fragment.appendChild(card);
          });

          grid.replaceChildren(fragment);
        }

        renderProjects("all");
        const projectsGrid = document.getElementById("projects-grid");
        projectsGrid.addEventListener("click", (event) => {
          const trigger = event.target.closest(".project-details");
          if (trigger) openProjectModal(trigger.dataset.projectId);
        });

        document.querySelectorAll("[data-filter]").forEach((btn) => {
          btn.addEventListener("click", function () {
            document.querySelectorAll("[data-filter]").forEach((b) => {
              b.classList.remove("active");
              b.setAttribute("aria-pressed", "false");
            });
            this.classList.add("active");
            this.setAttribute("aria-pressed", "true");
            renderProjects(this.dataset.filter);
          });
        });

        window.openProjectModal = function (id) {
          const item = projects.find((p) => p.id === id);
          if (!item) return;

          document.getElementById("modal-project-title").textContent = item.title;
          document.getElementById("modal-project-desc").textContent = currentLang === "en" ? item.enDesc : item.desc;

          const tags = document.getElementById("modal-project-tags");
          tags.replaceChildren();
          item.tags.forEach((tagText) => {
            const tag = document.createElement("span");
            tag.textContent = tagText;
            tags.appendChild(tag);
          });

          const link = document.getElementById("modal-project-link");
          if (item.link) {
            link.href = item.link;
            link.textContent = translations[currentLang]["project.preview"];
            link.removeAttribute("aria-disabled");
            link.style.display = "inline-flex";
            link.tabIndex = 0;
          } else {
            link.removeAttribute("href");
            link.textContent = translations[currentLang]["project.no_preview"];
            link.setAttribute("aria-disabled", "true");
            link.style.display = "inline-flex";
            link.tabIndex = -1;
          }

          openModal("project-modal");
        };

        document.getElementById("project-modal-close").addEventListener("click", () => closeModal("project-modal"));
        document.getElementById("privacy-modal-close").addEventListener("click", () => closeModal("privacy-modal"));

        // نافذة السيرة الذاتية PDF
        document.getElementById("resume-open-btn").addEventListener("click", () => openModal("resume-modal"));
        document.getElementById("resume-modal-close").addEventListener("click", () => closeModal("resume-modal"));
        document.getElementById("resume-print-btn").addEventListener("click", () => window.print());

        document.getElementById("download-pdf-btn").addEventListener("click", async () => {
          const element = document.getElementById("resume-export-target");
          showToast(translations[currentLang]["toast.pdf"]);
           if (typeof html2pdf === "undefined") {
             await new Promise((resolve, reject) => {
               const script = document.createElement("script");
               script.src = "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js";
               script.integrity = "sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg==";
               script.crossOrigin = "anonymous";
               script.referrerPolicy = "no-referrer";
               script.onload = resolve;
               script.onerror = reject;
               document.head.appendChild(script);
             }).catch(() => {});
           }
           if (typeof html2pdf !== "undefined") {
            const opt = {
              margin: 0.5, filename: "Eissa-Mohammed-Resume.pdf",
              image: { type: "jpeg", quality: 0.98 }, html2canvas: { scale: 2 },
              jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
            };
            html2pdf().set(opt).from(element).save();
          } else {
            window.print();
          }
        });

        // جلب بيانات GitHub مع التخزين المؤقت Caching عند اقتراب قسم الأرقام فقط
        let githubStatsFetched = false;
        async function fetchGitHubStats() {
          if (githubStatsFetched) return;
          githubStatsFetched = true;
          const cachedRepos = localStorage.getItem("github_repos");
          const cachedTime = localStorage.getItem("github_repos_time");
          if (cachedRepos && cachedTime && (Date.now() - Number(cachedTime) < 3600000)) {
            const repoElement = document.getElementById("stat-repos");
            repoElement.setAttribute("data-target", cachedRepos);
            repoElement.textContent = cachedRepos;
            return;
          }
          try {
            // إضافة timeout لحماية الاتصال من التعليق اللا نهائي (Security Timeout Enhancement)
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 5000);
            const res = await fetch("https://api.github.com/users/Eissa89", { signal: controller.signal });
            clearTimeout(timeoutId);
            if (res.ok) {
              const data = await res.json();
              const repoCount = Number.isFinite(data.public_repos) ? data.public_repos : 0;
              const repoElement = document.getElementById("stat-repos");
              repoElement.setAttribute("data-target", String(repoCount));
              repoElement.textContent = String(repoCount);
              localStorage.setItem("github_repos", String(repoCount));
              localStorage.setItem("github_repos_time", Date.now().toString());
            }
          } catch (_) {}
        }
        // لوحة الأوامر السريعة (Ctrl+K)
        const cmdPalette = document.getElementById("cmd-palette");
        const cmdInput = document.getElementById("cmd-input");
        window.addEventListener("keydown", (e) => {
          if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
            e.preventDefault();
            if (cmdPalette.classList.contains("open")) {
              closeModal("cmd-palette");
            } else {
              cmdInput.value = "";
              commandItems.forEach((item) => item.closest("li").hidden = false);
              openModal("cmd-palette");
            }
          }
          if (e.key === "Escape") {
            const openSurfaces = [...document.querySelectorAll(".modal.open, .cmd-palette.open")];
            const topSurface = openSurfaces[openSurfaces.length - 1];
            if (topSurface) closeModal(topSurface.id);
          }
        });
        document.getElementById("cmd-btn").addEventListener("click", () => {
          cmdInput.value = "";
          commandItems.forEach((item) => item.closest("li").hidden = false);
          openModal("cmd-palette");
        });
        const commandItems = [...document.querySelectorAll(".cmd-item")];
        cmdInput.addEventListener("input", () => {
          const query = cmdInput.value.trim().toLocaleLowerCase();
          commandItems.forEach((item) => {
            const visible = !query || item.textContent.toLocaleLowerCase().includes(query);
            item.closest("li").hidden = !visible;
          });
        });

        document.querySelectorAll(".cmd-item").forEach((item) => {
          item.addEventListener("click", function () {
            const action = this.dataset.action;
            if (action === "nav") {
              document.querySelector(this.dataset.target).scrollIntoView({ behavior: "smooth" });
            } else if (action === "resume") {
              closeModal("cmd-palette", false);
              openModal("resume-modal");
            } else if (action === "theme") {
              setTheme(currentTheme === "dark" ? "light" : "dark");
            } else if (action === "lang") {
              setLanguage(currentLang === "ar" ? "en" : "ar");
            }
            closeModal("cmd-palette", false);
          });
        });

        // الخصوصية
        document.getElementById("privacy-link").addEventListener("click", (e) => {
          e.preventDefault(); openModal("privacy-modal");
        });

        // التحقق من نموذج التواصل
        const contactForm = document.getElementById("contact-form");
        contactForm.addEventListener("submit", function (e) {
          let valid = true;
          const inputs = contactForm.querySelectorAll("input[required], textarea[required]");
          inputs.forEach((input) => {
            const error = document.getElementById(`${input.id}-error`);
            let message = "";
            const val = input.value.trim();
            const max = parseInt(input.getAttribute("maxlength"), 10);
            if (!val) {
              message = translations[currentLang]["form.invalid_required"];
            } else if (input.type === "email" && !input.validity.valid) {
              message = translations[currentLang]["form.invalid_email"];
            } else if (max && val.length > max) {
              message = currentLang === "ar" ? `يتجاوز الحد الأقصى المسموح به (${max} حرفًا).` : `Exceeded maximum allowed limit (${max} characters).`;
            }
            if (message) {
              input.setAttribute("aria-invalid", "true");
              if (error) error.textContent = message;
              valid = false;
            } else {
              input.setAttribute("aria-invalid", "false");
              if (error) error.textContent = "";
            }
          });

          if (!valid) {
            e.preventDefault();
            showToast(currentLang === "ar" ? "يرجى مراجعة الحقول المطلوبة." : "Please review the required fields.");
            contactForm.querySelector('[aria-invalid="true"]')?.focus();
          } else {
            e.preventDefault();
            const formData = new FormData(contactForm);
            const subject = encodeURIComponent(formData.get("subject") || "Portfolio inquiry");
            const body = encodeURIComponent(
              `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\n\n${formData.get("message")}`,
            );
            const recipient = contactForm.dataset.mailto;
            showToast(translations[currentLang]["toast.email"]);
            window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
          }
        });
        contactForm.addEventListener("input", (event) => {
          const input = event.target;
          if (!input.matches("input, textarea")) return;
          input.setAttribute("aria-invalid", "false");
          const error = document.getElementById(`${input.id}-error`);
          if (error) error.textContent = "";
        });

        // إحصائية GitHub — تُحمّل عند الاقتراب من القسم وتُحفظ مؤقتاً.
        const statsSection = document.getElementById("stats");
        const statsObserver = new IntersectionObserver(async (entries, observer) => {
          if (!entries.some((entry) => entry.isIntersecting)) return;

          observer.disconnect();
          const repoElement = document.getElementById("stat-repos");
          await fetchGitHubStats();

          const target = Number(repoElement.dataset.target);
          if (!Number.isFinite(target)) return;

          repoElement.textContent = "0";
          let count = 0;
          const step = Math.max(1, Math.ceil(target / 18));

          const countFrame = () => {
            count = Math.min(target, count + step);
            repoElement.textContent = String(count);
            if (count < target && !document.hidden) requestAnimationFrame(countFrame);
            else if (count < target) repoElement.textContent = String(target);
          };

          if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            repoElement.textContent = String(target);
          } else {
            requestAnimationFrame(countFrame);
          }
        }, { threshold: 0.2 });

        if (statsSection) statsObserver.observe(statsSection);

        // التهيئة
        setLanguage(currentLang);
        setTheme(currentTheme);
      })();
