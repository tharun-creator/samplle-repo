"use client";

import { useEffect } from "react";
import "./home.css";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://launch-to-space.vercel.app/#organization",
      "name": "ToSpace Private Limited",
      "legalName": "ToSpace Private Limited",
      "alternateName": "ToSpace",
      "url": "https://launch-to-space.vercel.app/",
      "logo": "https://launch-to-space.vercel.app/favicon.png",
      "email": "adnaan.m@tospace.in",
      "taxID": "33AAICT9147N1ZP",
      "identifier": [
        {
          "@type": "PropertyValue",
          "propertyID": "CIN",
          "value": "U29291TN2021PTC146836"
        },
        {
          "@type": "PropertyValue",
          "propertyID": "GSTIN",
          "value": "33AAICT9147N1ZP"
        }
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "adnaan.m@tospace.in",
        "contactType": "customer enquiries",
        "areaServed": "IN",
        "availableLanguage": [
          "en",
          "ta"
        ]
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "M114, Mullai Street, North Gandhigramam",
        "addressLocality": "Karur",
        "addressRegion": "Tamil Nadu",
        "postalCode": "639004",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 10.9601,
        "longitude": 78.0766
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://launch-to-space.vercel.app/#website",
      "name": "ToSpace Launch To Space",
      "alternateName": [
        "Launch To Space",
        "ToSpace"
      ],
      "url": "https://launch-to-space.vercel.app/",
      "publisher": {
        "@id": "https://launch-to-space.vercel.app/#organization"
      },
      "inLanguage": "en-IN"
    },
    {
      "@type": "WebPage",
      "@id": "https://launch-to-space.vercel.app/#webpage",
      "name": "ToSpace Launch To Space High-Altitude Balloon Missions in India",
      "url": "https://launch-to-space.vercel.app/",
      "isPartOf": {
        "@id": "https://launch-to-space.vercel.app/#website"
      },
      "about": {
        "@id": "https://launch-to-space.vercel.app/#service"
      },
      "publisher": {
        "@id": "https://launch-to-space.vercel.app/#organization"
      },
      "inLanguage": "en-IN",
      "dateModified": "2026-08-28"
    },
    {
      "@type": "Service",
      "@id": "https://launch-to-space.vercel.app/#service",
      "name": "Launch To Space",
      "alternateName": "ToSpace Launch To Space",
      "url": "https://launch-to-space.vercel.app/",
      "description": "High-altitude balloon missions to the stratosphere for research, technology demonstrations, education, commercial payloads and product marketing.",
      "serviceType": "High-altitude balloon payload missions",
      "provider": {
        "@id": "https://launch-to-space.vercel.app/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "audience": [
        {
          "@type": "Audience",
          "audienceType": "Researchers"
        },
        {
          "@type": "Audience",
          "audienceType": "Technology teams"
        },
        {
          "@type": "Audience",
          "audienceType": "Educators"
        },
        {
          "@type": "Audience",
          "audienceType": "Brands and product marketing teams"
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Launch To Space mission use cases",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Scientific research missions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Technology demonstration missions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Product testing missions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Product marketing missions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Educational missions"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Commercial missions"
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://launch-to-space.vercel.app/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Launch To Space?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Launch To Space is ToSpace's high-altitude balloon platform. It flies payloads to the stratosphere, roughly 30-35 km, for research, technology demonstration, education, commercial missions and product marketing, then returns them with data, imagery and video."
          }
        },
        {
          "@type": "Question",
          "name": "How high can the balloon go?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A standard mission reaches 30-35 km, above 99% of the atmosphere. Actual altitude varies with air currents and environmental conditions."
          }
        },
        {
          "@type": "Question",
          "name": "What payloads can I send?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Scientific instruments, cameras, sensors, electronics, technology demonstrators, student experiments, commercial products and branded payloads can fly on the standard carrier, with a baseline capacity of 2-5 kg. Larger or unusual payloads are assessed case by case."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use the mission for marketing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Missions can produce photography, video, product imagery and mission documentation for campaigns, public relations, launches and social media."
          }
        },
        {
          "@type": "Question",
          "name": "How do I start a mission?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Send a short brief with what you want to fly, what you want back and roughly when. ToSpace reviews the payload and proposed launch location, then responds with a mission plan, checklist and quote."
          }
        }
      ]
    }
  ]
};

export default function Home() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ---- boot sequence: climb to 35 km while the page loads ---- */
    const bootCleanup = (() => {
      const boot = document.getElementById("boot");
      const km = document.getElementById("bootKm");
      const fill = document.getElementById("bootFill") as HTMLElement | null;
      if (!boot || !km || !fill) return () => {};
      let p = 0;
      let done = false;
      let timer: ReturnType<typeof setInterval> | undefined;
      let removeTimer: ReturnType<typeof setTimeout> | undefined;
      let finishTimer: ReturnType<typeof setTimeout> | undefined;
      let loadHandler: (() => void) | undefined;
      document.body.classList.add("is-booting");
      function paint() {
        fill!.style.width = p * 100 + "%";
        const v = p * 35;
        km!.textContent = (v < 10 ? "0" : "") + v.toFixed(1);
      }
      function finish() {
        if (done) return;
        done = true;
        if (timer) clearInterval(timer);
        p = 1;
        paint();
        finishTimer = setTimeout(() => {
          boot!.classList.add("is-done");
          document.body.classList.remove("is-booting");
          removeTimer = setTimeout(() => {
            if (boot!.parentNode) boot!.parentNode.removeChild(boot!);
          }, 900);
        }, reduce ? 0 : 420);
      }
      let safetyTimer: ReturnType<typeof setTimeout> | undefined;
      if (reduce) {
        finish();
      } else {
        timer = setInterval(() => {
          p = Math.min(0.92, p + (0.92 - p) * 0.14 + 0.015);
          paint();
        }, 110);
        if (document.readyState === "complete") {
          finishTimer = setTimeout(finish, 650);
        } else {
          loadHandler = () => setTimeout(finish, 450);
          window.addEventListener("load", loadHandler);
        }
        safetyTimer = setTimeout(finish, 5000);
      }
      return () => {
        if (timer) clearInterval(timer);
        if (removeTimer) clearTimeout(removeTimer);
        if (finishTimer) clearTimeout(finishTimer);
        if (safetyTimer) clearTimeout(safetyTimer);
        if (loadHandler) window.removeEventListener("load", loadHandler);
      };
    })();

    /* reuse already-loaded imagery in the gallery */
    document.querySelectorAll<HTMLImageElement>("img[data-ref]").forEach((im) => {
      const src = document.getElementById(im.getAttribute("data-ref")!) as HTMLImageElement | null;
      if (src) im.src = src.currentSrc || src.src;
    });

    /* hero reel caption, synced to the 28s css loop */
    const reelCleanup = (() => {
      const cap = document.getElementById("reelCap");
      if (!cap) return () => {};
      const labels = ["Float 32 km", "Near space payload view", "Descent under canopy"];
      if (reduce) {
        cap.textContent = labels[0];
        return () => {};
      }
      const t0 = performance.now();
      const id = setInterval(() => {
        const i = Math.floor((((performance.now() - t0) / 1000) % 21) / 7);
        if (cap.textContent !== labels[i]) cap.textContent = labels[i];
      }, 400);
      return () => clearInterval(id);
    })();

    /* altitude profile: a mission runs on a loop: ascent, burst, descent */
    const altCleanup = (() => {
      const sec = document.getElementById("altitude");
      if (!sec) return () => {};
      const craft = sec.querySelector<HTMLElement>(".alt__craft");
      const out = document.getElementById("altKm");
      const ph = document.getElementById("altPhase");
      if (!craft || !out || !ph) return () => {};
      const PEAK = 85;
      const OFFSET = 56;
      const T = { asc: 7600, flt: 1400, burst: 1000, desc: 5600, hold: 1200 };
      const TOTAL = T.asc + T.flt + T.burst + T.desc + T.hold;
      let running = false;
      let t0: number | null = null;
      let rafId: number | undefined;

      sec.classList.add("in");
      function place(km: number) {
        const f = km / 35;
        craft!.style.bottom = "calc(" + (f * PEAK).toFixed(2) + "% - " + (f * OFFSET).toFixed(1) + "px)";
        out!.textContent = (km < 10 ? "0" : "") + km.toFixed(1);
      }
      function show(km: number, phase: string, label: string) {
        place(km);
        if (craft!.getAttribute("data-phase") !== phase) {
          craft!.setAttribute("data-phase", phase);
          ph!.textContent = label;
        }
      }
      function frame(ts: number) {
        if (!running) return;
        if (t0 === null) t0 = ts;
        const t = (ts - t0) % TOTAL;
        const a = T.asc;
        const f = a + T.flt;
        const bu = f + T.burst;
        const d = bu + T.desc;
        if (t < a) show(35 * (t / a), "ascent", "ascent");
        else if (t < f) show(35, "float", "float");
        else if (t < bu) show(35, "burst", "burst");
        else if (t < d) {
          const k = (t - bu) / T.desc;
          show(35 * Math.pow(1 - k, 1.9), "descent", "descent");
        } else show(0, "landed", "recovered");
        rafId = requestAnimationFrame(frame);
      }
      let observer: IntersectionObserver | undefined;
      if (reduce) {
        show(35, "float", "float");
        return () => {};
      }
      if (!("IntersectionObserver" in window)) {
        running = true;
        rafId = requestAnimationFrame(frame);
      } else {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) {
                if (!running) {
                  running = true;
                  t0 = null;
                  rafId = requestAnimationFrame(frame);
                }
              } else running = false;
            });
          },
          { threshold: 0.08 },
        );
        observer.observe(sec);
      }
      return () => {
        if (rafId) cancelAnimationFrame(rafId);
        if (observer) observer.disconnect();
      };
    })();

    /* year */
    const yr = document.getElementById("yr");
    if (yr) yr.textContent = String(new Date().getFullYear());

    /* nav state */
    const nav = document.getElementById("nav");
    const burger = document.getElementById("burger");
    const mobile = document.getElementById("mobile");
    function onBurgerClick() {
      const open = mobile!.classList.toggle("is-open");
      nav!.classList.toggle("is-open", open);
      burger!.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    }
    function onMobileLinkClick() {
      mobile!.classList.remove("is-open");
      nav!.classList.remove("is-open");
      burger!.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
    if (nav && burger && mobile) {
      burger.addEventListener("click", onBurgerClick);
      mobile.querySelectorAll("a").forEach((a) => a.addEventListener("click", onMobileLinkClick));
    }

    /* home fab: show once the hero has scrolled past, hide again over the footer */
    const homeFab = document.getElementById("homeFab");
    const siteFooter = document.getElementById("site-footer");
    let footerNear = false;
    function toggleFab() {
      const pastHero = window.scrollY > window.innerHeight * 0.6;
      homeFab!.classList.toggle("is-visible", pastHero && !footerNear);
    }
    let footerObserver: IntersectionObserver | undefined;
    if (homeFab) {
      toggleFab();
      window.addEventListener("scroll", toggleFab, { passive: true });
      if (siteFooter && "IntersectionObserver" in window) {
        footerObserver = new IntersectionObserver(
          (entries) => {
            footerNear = entries[0]?.isIntersecting ?? false;
            toggleFab();
          },
          { rootMargin: "0px 0px -20% 0px" },
        );
        footerObserver.observe(siteFooter);
      }
    }

    /* telemetry rail: page scroll -> altitude 0 to 35 km */
    const stars = document.getElementById("stars");
    const topbar = document.getElementById("topbar");
    let ticking = false;
    function onScroll() {
      const y = window.scrollY || window.pageYOffset;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;
      if (topbar) topbar.style.width = p * 100 + "%";
      if (stars) stars.style.opacity = (0.18 + p * 0.55).toFixed(3);
      if (nav) nav.classList.toggle("is-stuck", y > 40);
      ticking = false;
    }
    function onScrollRaf() {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(onScroll);
      }
    }
    window.addEventListener("scroll", onScrollRaf, { passive: true });
    onScroll();

    /* scroll reveal */
    const items = document.querySelectorAll<HTMLElement>(".rv");
    let revealObserver: IntersectionObserver | undefined;
    if (reduce || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("in"));
    } else {
      revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              revealObserver!.unobserve(e.target);
            }
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
      );
      items.forEach((el) => revealObserver!.observe(el));
      document.querySelectorAll<HTMLElement>(".hero .rv").forEach((el) => {
        requestAnimationFrame(() => el.classList.add("in"));
      });
    }

    /* mission brief email handoff */
    const form = document.getElementById("mission-form") as HTMLFormElement | null;
    function onSubmit(e: SubmitEvent) {
      e.preventDefault();
      const note = form!.querySelector<HTMLElement>(".form__note");
      const data = new FormData(form!);
      const recipients = "adnaan.m@tospace.in,tospaceofficial@gmail.com";
      const subject = "Launch To Space Mission Brief";
      const body = [
        "Name: " + (data.get("name") || ""),
        "Organisation: " + (data.get("organisation") || ""),
        "Email: " + (data.get("email") || ""),
        "Mission type: " + (data.get("mission_type") || ""),
        "",
        "What would you like to fly?",
        data.get("message") || "",
      ].join("\n");
      if (note) {
        note.textContent = "Opening your email app...";
        note.style.color = "#5AA9FF";
      }
      window.location.href =
        "mailto:" + recipients + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    }
    if (form) form.addEventListener("submit", onSubmit as EventListener);

    /* Cal.com inline booking */
    const calMount = document.getElementById("cal-booking");
    if (calMount) {
      const calLink = calMount.getAttribute("data-cal-link") || "tospace/30min";
      const calOrigin = calMount.getAttribute("data-cal-origin") || "https://cal.com";
      const fallbackLink = calMount.querySelector<HTMLAnchorElement>(".cal-booking__fallback a");
      if (fallbackLink) fallbackLink.href = calOrigin.replace(/\/$/, "") + "/" + calLink;

      type CalApi = {
        (...args: unknown[]): void;
        q?: unknown[];
        loaded?: boolean;
        ns?: Record<string, CalApi>;
      };
      const w = window as unknown as { Cal?: CalApi };
      (function (C: Window & { Cal?: CalApi }, A: string, L: string) {
        const p = (a: CalApi, ar: unknown) => {
          a.q!.push(ar);
        };
        const d = C.document;
        C.Cal =
          C.Cal ||
          ((function (...args: unknown[]) {
            const cal = C.Cal!;
            const ar = args;
            if (!cal.loaded) {
              cal.ns = {};
              cal.q = cal.q || [];
              const script = d.createElement("script");
              script.src = A;
              d.head.appendChild(script);
              cal.loaded = true;
            }
            if (ar[0] === L) {
              const namespace = ar[1] as string;
              const api: CalApi = ((...a: unknown[]) => {
                p(api, a);
              }) as CalApi;
              api.q = api.q || [];
              if (typeof namespace === "string") {
                cal.ns![namespace] = cal.ns![namespace] || api;
                p(cal.ns![namespace], ar);
                p(cal, ["initNamespace", namespace]);
              } else {
                p(cal, ar);
              }
              return;
            }
            p(cal, ar);
          }) as CalApi);
      })(window, "https://app.cal.com/embed/embed.js", "init");
      const Cal = w.Cal!;
      Cal("init", "launch-to-space", { origin: calOrigin });
      Cal.ns!["launch-to-space"]("inline", {
        elementOrSelector: "#cal-booking",
        calLink: calLink,
        layout: "month_view",
        config: { theme: "dark" },
      });
      Cal.ns!["launch-to-space"]("ui", {
        styles: {
          body: { background: "#05070a" },
          eventTypeListItem: { background: "#0B0D10" },
          branding: { brandColor: "#5AA9FF" },
        },
        hideEventTypeDetails: true,
        showTimezoneWhenEventDetailsHidden: true,
        layout: "month_view",
      });

      const fallbackEl = calMount.querySelector<HTMLElement>(".cal-booking__fallback");
      if (fallbackEl) {
        const hideFallback = () => { fallbackEl.style.display = "none"; };
        const mo = new MutationObserver(() => {
          if (calMount.querySelector("iframe")) {
            hideFallback();
            mo.disconnect();
          }
        });
        mo.observe(calMount, { childList: true, subtree: true });
      }
    }

    /* horizon footer reveal */
    const footerCleanup = (() => {
      const footerReveal = document.querySelector<HTMLElement>(".footer-reveal-shell");
      if (!footerReveal) return () => {};
      let ticking2 = false;
      function updateFooterReveal() {
        const rect = footerReveal!.getBoundingClientRect();
        const isPhone = window.matchMedia && window.matchMedia("(max-width: 640px)").matches;
        const vh = window.visualViewport?.height || window.innerHeight;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        const y = window.scrollY || window.pageYOffset;
        const pageProgress = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;
        let fp = reduce ? 1 : isPhone ? (vh - rect.top) / (vh * 0.92) : (window.innerHeight - rect.top) / (window.innerHeight * 0.62);
        if (isPhone) {
          fp = Math.max(fp, (pageProgress - 0.84) / 0.12);
        }
        fp = Math.min(1, Math.max(0, fp));
        const eased = isPhone ? fp * fp * (3 - 2 * fp) : 1 - Math.pow(1 - fp, 3);
        footerReveal!.style.setProperty("--footer-stage-y", (isPhone ? (1 - eased) * 18 : (1 - eased) * 96).toFixed(1) + "px");
        const horizonStart = isPhone ? 220 : 300;
        const horizonTravel = isPhone ? Math.min(rect.height * 1.16, vh * 0.48) : horizonStart + rect.height * 0.72;
        footerReveal!.style.setProperty("--footer-horizon-y", (horizonStart - eased * horizonTravel).toFixed(1) + "px");
        footerReveal!.style.setProperty("--footer-horizon-opacity", (isPhone ? 0.5 + eased * 0.44 : 0.5 + eased * 0.5).toFixed(3));
        footerReveal!.style.setProperty("--footer-content-opacity", (0.5 + eased * 0.5).toFixed(3));
        const parent = footerReveal!.parentElement;
        if (isPhone && parent) {
          parent.style.setProperty("--footer-wrap-y", ((1 - eased) * 18).toFixed(1) + "px");
          parent.style.setProperty("--footer-wrap-opacity", (0.5 + eased * 0.5).toFixed(3));
        } else if (parent) {
          parent.style.removeProperty("--footer-wrap-y");
          parent.style.removeProperty("--footer-wrap-opacity");
        }
        ticking2 = false;
      }
      function onFooterScroll() {
        if (!ticking2) {
          ticking2 = true;
          window.requestAnimationFrame(updateFooterReveal);
        }
      }
      window.addEventListener("scroll", onFooterScroll, { passive: true });
      window.addEventListener("resize", updateFooterReveal);
      updateFooterReveal();
      return () => {
        window.removeEventListener("scroll", onFooterScroll);
        window.removeEventListener("resize", updateFooterReveal);
      };
    })();

    return () => {
      bootCleanup();
      reelCleanup();
      altCleanup();
      footerCleanup();
      window.removeEventListener("scroll", onScrollRaf);
      if (homeFab) window.removeEventListener("scroll", toggleFab);
      if (footerObserver) footerObserver.disconnect();
      if (nav && burger && mobile) {
        burger.removeEventListener("click", onBurgerClick);
        mobile.querySelectorAll("a").forEach((a) => a.removeEventListener("click", onMobileLinkClick));
      }
      if (form) form.removeEventListener("submit", onSubmit as EventListener);
    };
  }, []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\u003c") }}
      />
      <div className="boot" id="boot" role="status" aria-label="Loading">
        <div className="boot__mark">
          <svg className="boot__ring" viewBox="0 0 132 132" aria-hidden="true"><circle cx="66" cy="66" r="63"/></svg>
          <img src="/launch-mark.png" alt="" />
        </div>
        <div className="boot__read"><span id="bootKm">00.0</span> KM</div>
        <div className="boot__cap">Ascending</div>
        <div className="boot__bar"><span id="bootFill"></span></div>
      </div>

      <div className="stars" id="stars"></div>
      <div className="topbar" id="topbar"></div>

      {/* NAV */}
      <header className="nav" id="nav">
        <div className="nav__in">
          <a href="#home" className="nav__logo" aria-label="Launch To Space home"><img src="/launch-mark.png" alt="Launch To Space" /></a>
          <nav className="nav__links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#missions">Missions</a>
            <a href="#marketing">Product Marketing</a>
            <a href="#gallery">Gallery</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a href="#contact" className="btn btn--ghost nav__cta">Contact us</a>
          <button className="nav__burger" id="burger" aria-label="Open menu" aria-expanded="false"><i></i><i></i><i></i></button>
        </div>
      </header>
      <div className="mobile" id="mobile">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#missions">Missions</a>
        <a href="#marketing">Product Marketing</a>
        <a href="#gallery">Gallery</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact us →</a>
      </div>

      <main className="page">

      {/* HERO */}
      <section className="hero" id="home">
        <div className="hero__glow"></div>
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <h1 className="rv"><span><i>Launch</i></span><span><i>To Space</i></span></h1>
            <p className="hero__sub rv" style={{transitionDelay: '.12s'}}>Take your ideas beyond Earth.</p>
            <p className="hero__body rv" style={{transitionDelay: '.2s'}}>ToSpace's High-Altitude Balloon (HAB) platform carries ideas to <span className="nowrap">the stratosphere</span> for research, technology, education, commercial missions, and product marketing.</p>
            <div className="btn-row rv" style={{transitionDelay: '.28s'}}>
              <a href="#contact" className="btn btn--solid">Plan your mission <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M2 8h11M9 4l4 4-4 4"/></svg></a>
              <a href="#missions" className="btn btn--ghost">Explore missions <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M2 8h11M9 4l4 4-4 4"/></svg></a>
            </div>
            <div className="chain rv" style={{transitionDelay: '.36s'}}>
              <em>Balloon</em><s>→</s><em>Payload</em><s>→</s><em>Stratosphere</em><s>→</s><em>Earth</em>
            </div>
          </div>
          <figure className="hero__figure rv" style={{transitionDelay: '.15s'}}>
            <div className="reel">
              <img id="imgHero" className="reel__frame" src="/images/hero-payload-earth.jpg" width="1300" height="866" alt="Launch To Space high-altitude balloon carrying the carbon-fibre payload carrier above the curvature of Earth" fetchPriority="high" />
              <img className="reel__frame" data-ref="imgNear" alt="Payload carrier at the edge of space with Earth below" />
              <img className="reel__frame" data-ref="imgRecovery" alt="Payload carrier descending under an orange parachute" />
              <div className="reel__hud">
                <span className="reel__dots"><i></i><i></i><i></i></span>
                <span id="reelCap">Float 32 km</span>
              </div>
            </div>
          </figure>
        </div>
      </section>

      {/* STATS */}
      <section className="band--tight" aria-label="Flight envelope">
        <div className="wrap">
          <div className="stats rv">
            <div className="stat">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M2 20h20M4 20l6-11 3.2 5.5M11 20l5-9 4 9"/><circle cx="18.2" cy="4.4" r="1.6"/></svg>
              <div className="stat__val">30–35 km</div>
              <div className="stat__key">Max altitude</div>
            </div>
            <div className="stat">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="12" cy="12" r="9"/><path d="M12 6.6V12l3.6 2.2"/></svg>
              <div className="stat__val">2–4 hrs</div>
              <div className="stat__key">Mission duration</div>
            </div>
            <div className="stat">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="12" cy="12" r="2.2"/><circle cx="12" cy="12" r="6.4"/><circle cx="12" cy="12" r="10.4" opacity=".45"/></svg>
              <div className="stat__val">50–80 km</div>
              <div className="stat__key">Downrange drift</div>
            </div>
            <div className="stat">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M12 3l8 4.3v9.4L12 21l-8-4.3V7.3L12 3z"/><path d="M4 7.3l8 4.3 8-4.3M12 11.6V21"/></svg>
              <div className="stat__val">Up to 5 kg</div>
              <div className="stat__key">Baseline payload capacity</div>
            </div>
          </div>
        </div>
      </section>

      {/* ALTITUDE PROFILE */}
      <section className="alt" id="altitude" aria-label="Altitude profile">
        <div className="alt__stage">
          <div className="alt__stars"></div>

          <div className="alt__head rv">
            <p className="eyebrow">Altitude profile</p>
            <h2>How far up <span className="nowrap">35 km</span> really is</h2>
            <p className="alt__head-note">Past the weather, past commercial air traffic, into the edge of space.</p>
          </div>

          <div className="alt__inner">
            <div className="alt__band alt__band--peak" style={{bottom: '85%'}}><b>35 KM</b><span>Peak altitude where your payload flies</span></div>
            <div className="alt__band" style={{bottom: '73%'}}><b>30 KM</b><span>Above 99% of the atmosphere</span></div>
            <div className="alt__band" style={{bottom: '44%'}}><b>18 KM</b><span>Top of the weather</span></div>
            <div className="alt__band" style={{bottom: '24%'}}><b>10 KM</b><span>Where commercial airliners cruise</span></div>

            <div className="alt__track"></div>

            <div className="alt__plane" style={{bottom: '24%'}}>
              <svg viewBox="0 0 120 64" fill="currentColor" aria-hidden="true">
                <path d="M6 32c0-2.1 6-3.4 14-4l30-2.2 22-1.3c8-.4 14-.4 18.4.5 4 .8 6.6 2.4 8.6 4.2 1.6 1.5 2.6 2.4 2.6 2.8s-1 1.3-2.6 2.8c-2 1.8-4.6 3.4-8.6 4.2-4.4.9-10.4.9-18.4.5l-22-1.3-30-2.2C12 35.4 6 34.1 6 32z"/>
                <path d="M52 29.5 30.5 7.8c-.6-.6-.2-1.6.7-1.6h6.9c.5 0 1 .2 1.4.6L64 28.6zM52 34.5 30.5 56.2c-.6.6-.2 1.6.7 1.6h6.9c.5 0 1-.2 1.4-.6L64 35.4z"/>
                <path d="M17 30.6 6.6 19.4c-.5-.6-.1-1.5.7-1.5h4.3c.4 0 .8.2 1.1.5l10.6 11.6zM17 33.4 6.6 44.6c-.5.6-.1 1.5.7 1.5h4.3c.4 0 .8-.2 1.1-.5l10.6-11.6z"/>
                <rect x="40" y="16.5" width="15" height="5.4" rx="2.7"/>
                <rect x="40" y="42.1" width="15" height="5.4" rx="2.7"/>
              </svg>
            </div>

            <div className="alt__craft">
              <span className="alt__drift">
                <svg className="c c-balloon" viewBox="0 0 64 96" fill="currentColor" aria-hidden="true">
                  <path d="M32 2.5c10.2 0 18.5 8.1 18.5 18.1 0 9.6-7.1 16.6-13.3 23.4-2.2 2.4-3.6 4.4-4.1 6.2h-2.2c-.5-1.8-1.9-3.8-4.1-6.2C20.6 37.2 13.5 30.2 13.5 20.6 13.5 10.6 21.8 2.5 32 2.5z"/>
                  <rect x="31" y="48" width="2" height="8"/>
                  <path d="M22 55.5h20a1.6 1.6 0 011.6 1.6v19.4a1.6 1.6 0 01-1.6 1.6H22a1.6 1.6 0 01-1.6-1.6V57.1A1.6 1.6 0 0122 55.5zm1.4 4.2v5.1h6.7v-5.1zm10.5 0v5.1h6.7v-5.1zm-10.5 8.9v5.1h6.7v-5.1zm10.5 0v5.1h6.7v-5.1z"/>
                  <path d="M24.6 78.1h3.2l-3.9 8.6h4.3v2.6h-8.4l4.8-11.2zm14.8 0h-3.2l3.9 8.6h-4.3v2.6h8.4l-4.8-11.2z"/>
                </svg>
                <svg className="c c-burst" viewBox="0 0 64 96" fill="currentColor" aria-hidden="true">
                  <path d="M25 6l7 9-9 4zM43 9l-3 11 9-2zM17 20l9 5-8 6zM50 24l-9 4 7 7zM31 24l6 6-7 5z" opacity=".95"/>
                  <path d="M13 4l4 6M55 12l-6 4M9 34l7-2M56 38l-7-3" stroke="currentColor" strokeWidth="1.6" opacity=".7"/>
                  <rect x="31" y="46" width="2" height="10"/>
                  <path d="M22 55.5h20a1.6 1.6 0 011.6 1.6v19.4a1.6 1.6 0 01-1.6 1.6H22a1.6 1.6 0 01-1.6-1.6V57.1A1.6 1.6 0 0122 55.5zm1.4 4.2v5.1h6.7v-5.1zm10.5 0v5.1h6.7v-5.1zm-10.5 8.9v5.1h6.7v-5.1zm10.5 0v5.1h6.7v-5.1z"/>
                  <path d="M24.6 78.1h3.2l-3.9 8.6h4.3v2.6h-8.4l4.8-11.2zm14.8 0h-3.2l3.9 8.6h-4.3v2.6h8.4l-4.8-11.2z"/>
                </svg>
                <svg className="c c-chute" viewBox="0 0 80 96" fill="currentColor" aria-hidden="true">
                  <path d="M40 6c16.6 0 30 10.7 30 24 0 1-1 1.6-1.8 1.1l-9.4-5.4-8 5.3c-.6.4-1.4.4-2 0L40 25.6l-8.8 5.4c-.6.4-1.4.4-2 0l-8-5.3-9.4 5.4c-.8.5-1.8-.1-1.8-1.1 0-13.3 13.4-24 30-24z"/>
                  <path d="M11.4 31.6l.9.5 16.9 20.5-.9.7zM68.6 31.6l-.9.5-16.9 20.5.9.7zM29.4 31.5l1 .3 5.4 21.4-1 .3zM50.6 31.5l-1 .3-5.4 21.4 1 .3z"/>
                  <path d="M30 55.5h20a1.6 1.6 0 011.6 1.6v19.4a1.6 1.6 0 01-1.6 1.6H30a1.6 1.6 0 01-1.6-1.6V57.1A1.6 1.6 0 0130 55.5zm1.4 4.2v5.1h6.7v-5.1zm10.5 0v5.1h6.7v-5.1zm-10.5 8.9v5.1h6.7v-5.1zm10.5 0v5.1h6.7v-5.1z"/>
                  <path d="M32.6 78.1h3.2l-3.9 8.6h4.3v2.6h-8.4l4.8-11.2zm14.8 0h-3.2l3.9 8.6h-4.3v2.6h8.4l-4.8-11.2z"/>
                </svg>
              </span>
              <div className="alt__read"><span id="altKm">00.0</span> KM <i id="altPhase">ready</i></div>
            </div>

            <div className="alt__sea"><i></i><i></i><i></i><span>Sea level, 0 km</span></div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="band" id="missions">
        <div className="wrap">
          <div className="section-head rv">
            <p className="eyebrow">What Launch To Space enables</p>
            <h2>One platform.<br />Nine ways to explore<br />the stratosphere.</h2>
            <p className="lede">Every flight is a working mission – carrying instruments, cameras, prototypes, and products to near space, then bringing them back with the data and footage captured along the way.</p>
          </div>
          <div className="grid grid--3">
            <article className="card rv">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M10 3h4M11 3v6.2L5.6 18.4A2 2 0 007.3 21.4h9.4a2 2 0 001.7-3L13 9.2V3"/><path d="M8.2 15h7.6"/></svg>
              <h3>Scientific research</h3>
              <p>Conduct atmospheric and scientific experiments in the near-space environment.</p>
            </article>
            <article className="card rv" style={{transitionDelay: '.05s'}}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="7.5" y="7.5" width="9" height="9" rx="1.2"/><rect x="4" y="4" width="16" height="16" rx="2.4" opacity=".45"/><path d="M9.5 1.8v2.2M14.5 1.8v2.2M9.5 20v2.2M14.5 20v2.2M1.8 9.5h2.2M1.8 14.5h2.2M20 9.5h2.2M20 14.5h2.2"/></svg>
              <h3>Technology demonstration</h3>
              <p>Test aerospace, electronics, communication and other technologies at high altitude.</p>
            </article>
            <article className="card rv" style={{transitionDelay: '.1s'}}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 2.6l7.5 3v6c0 4.6-3.1 8.4-7.5 9.8-4.4-1.4-7.5-5.2-7.5-9.8v-6l7.5-3z"/><path d="M8.6 12.1l2.4 2.4 4.4-4.6"/></svg>
              <h3>Product testing</h3>
              <p>Validate products and systems under near-space conditions.</p>
            </article>
            <article className="card rv" style={{transitionDelay: '.15s'}}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="8.6" y="2.4" width="6.8" height="2.6" rx="1"/><path d="M9.6 5v13.4a2.4 2.4 0 002.4 2.4h0a2.4 2.4 0 002.4-2.4V5"/><path d="M9.6 12.6h4.8"/><circle cx="11.4" cy="16" r=".8" fill="currentColor" stroke="none"/><circle cx="13.4" cy="18" r=".6" fill="currentColor" stroke="none"/><path d="M17.2 4.6l3.4 3.4M20.6 4.6l-3.4 3.4" opacity=".55"/></svg>
              <h3>Pharmaceutical payloads</h3>
              <p>Expose formulations, vaccines and biologics to <span className="nowrap">near-space</span> cold, low pressure and radiation.</p>
            </article>
            <article className="card rv">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 8.4A2 2 0 015 6.4h2.6L9.2 4h5.6l1.6 2.4H19a2 2 0 012 2v8.2a2 2 0 01-2 2H5a2 2 0 01-2-2V8.4z"/><circle cx="12" cy="12.4" r="3.5"/></svg>
              <h3>Near-space imaging</h3>
              <p>Capture high-altitude photographs and video of your product and the Earth below.</p>
            </article>
            <article className="card rv">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3.5 9.5h3.2L14 5v14l-7.3-4.5H3.5a1 1 0 01-1-1v-3a1 1 0 011-1z"/><path d="M17.4 8.6a5 5 0 010 6.8M20.2 6a8.4 8.4 0 010 12"/></svg>
              <h3>Product marketing</h3>
              <p>Take your product to the stratosphere and build a campaign around the mission.</p>
            </article>
            <article className="card rv" style={{transitionDelay: '.05s'}}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 3l2.6 5.6 6 .8-4.4 4.2 1.1 6-5.3-2.9-5.3 2.9 1.1-6L3.4 9.4l6-.8L12 3z"/></svg>
              <h3>Brand promotion</h3>
              <p>Associate your brand with aerospace, innovation, exploration and near-space technology.</p>
            </article>
            <article className="card rv" style={{transitionDelay: '.1s'}}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 4L2.5 8.6 12 13.2l9.5-4.6L12 4z"/><path d="M6.5 10.8v4.6c0 1.6 2.5 2.9 5.5 2.9s5.5-1.3 5.5-2.9v-4.6M20.6 9v5.4"/></svg>
              <h3>Educational missions</h3>
              <p>Give students and institutions a real near-space mission to design, fly and analyse.</p>
            </article>
            <article className="card rv" style={{transitionDelay: '.15s'}}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect x="2.6" y="7" width="18.8" height="13" rx="2"/><path d="M8.8 7V5.4a1.8 1.8 0 011.8-1.8h2.8a1.8 1.8 0 011.8 1.8V7M2.6 12.4h18.8"/></svg>
              <h3>Commercial missions</h3>
              <p>Customised high-altitude missions for companies and organisations.</p>
            </article>
          </div>
        </div>
      </section>

      {/* PRODUCT MARKETING */}
      <section className="band bleed bleed--marketing" id="marketing">
        <div className="wrap split">
          <div className="rv">
            <p className="eyebrow">Product marketing</p>
            <h3 className="marketing-title"><b>Your product.</b><b>Our mission.</b><b>The edge of space.</b></h3>
            <p className="lede">Send your product or branded payload on a Launch To Space mission. We take it from Earth to the stratosphere and turn the mission into powerful content and a memorable brand experience.</p>
            <div className="journey">
              <span className="journey__node"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3"><rect x="3.6" y="3.6" width="16.8" height="16.8" rx="4.6"/><circle cx="12" cy="12" r="3.9"/><circle cx="17.2" cy="6.8" r=".9" fill="currentColor"/></svg>Social media</span>
              <span className="journey__node">Advertising</span>
              <span className="journey__node">PR</span>
              <span className="journey__node">Product launches</span>
              <span className="journey__node">Brand campaigns</span>
              <span className="journey__node">Corporate storytelling</span>
            </div>
            <a href="#contact" className="btn btn--solid">Create your mission <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M2 8h11M9 4l4 4-4 4"/></svg></a>
          </div>
          <div className="split__media rv" style={{transitionDelay: '.12s'}}>
            <img id="imgNear" className="shot" src="/images/near-space-payload.jpg" width="1100" height="733" alt="Branded Launch To Space payload carrier photographed at the edge of space with Earth below" loading="lazy" />
          </div>
        </div>
      </section>

      {/* MISSION CONTENT */}
      <section className="band" id="payloads">
        <div className="wrap">
          <div className="section-head rv">
            <p className="eyebrow">Mission content</p>
            <h2>Every mission comes back<br />with something to show.</h2>
            <p className="lede">A flight is not only data. It is footage of your product against the black of space, a story with a date and an altitude attached, and a set of assets your team can use for a year.</p>
          </div>
          <div className="deliverables rv">
            <div className="deliv">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M3 8.4A2 2 0 015 6.4h2.6L9.2 4h5.6l1.6 2.4H19a2 2 0 012 2v8.2a2 2 0 01-2 2H5a2 2 0 01-2-2V8.4z"/><circle cx="12" cy="12.4" r="3.5"/></svg>
              <div><h3>High-altitude photography</h3><p>Stills of your payload with Earth's curvature behind it.</p></div>
            </div>
            <div className="deliv">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="2.6" y="6" width="13" height="12" rx="2"/><path d="M15.6 11l5.8-3.3v8.6L15.6 13z"/></svg>
              <div><h3>Video content</h3><p>Ascent, float and descent, cut for launch films and social.</p></div>
            </div>
            <div className="deliv">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M12 3l8 4.3v9.4L12 21l-8-4.3V7.3L12 3z"/><path d="M4 7.3l8 4.3 8-4.3M12 11.6V21"/></svg>
              <div><h3>Product imagery</h3><p>Hero shots of your product in the stratosphere, not a studio.</p></div>
            </div>
            <div className="deliv">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M6 3h8l4.4 4.4V21H6z"/><path d="M13.6 3v5h4.8M9 12.6h6M9 16.4h6"/></svg>
              <div><h3>Mission documentation</h3><p>Flight profile, altitude log, telemetry and a mission report.</p></div>
            </div>
            <div className="deliv">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="3.6" y="3.6" width="16.8" height="16.8" rx="4.6"/><circle cx="12" cy="12" r="3.9"/><circle cx="17.2" cy="6.8" r=".9" fill="currentColor"/></svg>
              <div><h3>Social media content</h3><p>Vertical cuts, stills and captions sized for every channel.</p></div>
            </div>
            <div className="deliv">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M3.5 9.5h3.2L14 5v14l-7.3-4.5H3.5a1 1 0 01-1-1v-3a1 1 0 011-1z"/><path d="M17.4 8.6a5 5 0 010 6.8"/></svg>
              <div><h3>PR &amp; brand stories</h3><p>A press-ready narrative with imagery editors will actually run.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="vision">
        <div className="limb"></div>
        <div className="wrap" style={{position: 'relative'}}>
          <p className="eyebrow eyebrow--center rv">Our vision</p>
          <p className="vision__quote rv"><span>Near Space, open to anyone</span><span>with an idea worth taking higher.</span></p>
          <p className="lede rv" style={{transitionDelay: '.1s'}}>To make Near Space accessible not only for science and technology, but also for brands, products, creators, and people with ideas worth taking higher.</p>
        </div>
      </section>

      <section className="band--tight">
        <div className="wrap">
          <div className="positioning rv">
            <p>Launch To Space transforms high-altitude missions into experiences that people can <em>see, share and remember</em>, taking products, technology and ideas from Earth to the stratosphere.</p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="band">
        <div className="wrap">
          <div className="section-head rv">
            <p className="eyebrow">Mission profile</p>
            <h2>How a mission works</h2>
            <p className="lede">Six stages, from the first call to the finished content. You are involved in <span className="nowrap">all of them</span>.</p>
          </div>
          <div className="process">
            <div className="step rv"><span className="step__dot"></span><span className="step__no">01</span><h3>Plan</h3><p>Define your mission and payload.</p><span className="step__t">T − 6 weeks</span></div>
            <div className="step rv" style={{transitionDelay: '.06s'}}><span className="step__dot"></span><span className="step__no">02</span><h3>Prepare</h3><p>We integrate and test your payload.</p><span className="step__t">T − 2 weeks</span></div>
            <div className="step rv" style={{transitionDelay: '.12s'}}><span className="step__dot"></span><span className="step__no">03</span><h3>Launch</h3><p>High-altitude balloon ascent to Near Space.</p><span className="step__t">T − 0</span></div>
            <div className="step rv" style={{transitionDelay: '.18s'}}><span className="step__dot"></span><span className="step__no">04</span><h3>Mission</h3><p>Collect data, images and video from the stratosphere.</p><span className="step__t">T + 90 min</span></div>
            <div className="step rv" style={{transitionDelay: '.24s'}}><span className="step__dot"></span><span className="step__no">05</span><h3>Recover</h3><p>Safely recover the payload.</p><span className="step__t">T + 4 hrs</span></div>
            <div className="step rv" style={{transitionDelay: '.3s'}}><span className="step__dot"></span><span className="step__no">06</span><h3>Content</h3><p>Receive mission data and high-impact content for your brand.</p><span className="step__t">T + 10 days</span></div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="band" id="gallery">
        <div className="wrap">
          <div className="section-head rv">
            <p className="eyebrow">Gallery</p>
            <h2>Mission archive</h2>
          </div>
          <div className="gal">
            <figure className="tile t-a rv" style={{margin: '0'}}>
              <img data-ref="imgNear" alt="Payload carrier at the edge of space, Earth's curvature behind it" loading="lazy" />
              <figcaption className="tile__cap"><span>Near space</span><span>32 km</span></figcaption>
            </figure>
            <figure className="tile t-b rv" style={{margin: '0'}}>
              <img data-ref="imgHero" alt="High-altitude balloon carrying the payload carrier above Earth" loading="lazy" />
              <figcaption className="tile__cap"><span>Float, balloon and carrier</span></figcaption>
            </figure>
            <figure className="tile t-c rv" style={{margin: '0', transitionDelay: '.06s'}}>
              <img id="imgRecovery" src="/images/recovery-parachute.jpg" alt="Payload carrier descending under an orange parachute" loading="lazy" />
              <figcaption className="tile__cap"><span>Descent under canopy</span></figcaption>
            </figure>
            <figure className="tile t-wide rv" style={{margin: '0', transitionDelay: '.1s'}}>
              <img id="imgCarrier" src="/images/carrier-ground.jpg" width="1000" height="823" alt="The payload carrier on the ground at a launch site" loading="lazy" />
              <figcaption className="tile__cap"><span>Flight configuration</span><span>Pre-launch</span></figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* CLIENTS */}
      <section className="band" id="clients">
        <div className="wrap">
          <div className="section-head rv">
            <p className="eyebrow">Clients &amp; partners</p>
            <h2>Who flies with us</h2>
            <p className="lede">Research groups, institutions and technology teams we work with on <span className="nowrap">near-space</span> missions.</p>
          </div>
          {/* To add a client: copy a .client block and swap the image. */}
          <div className="clients-grid rv">
            <div className="client"><img src="/images/client-astreva.png" alt="Astreva Aerospace" loading="lazy" /></div>
            <div className="client"><img src="/images/client-csterc.png" alt="C-STERC, Centre for Science &amp; Technology Education, Research and Communication" loading="lazy" /></div>
            <div className="client"><img src="/images/client-grahaa.png" alt="Grahaa" loading="lazy" /></div>
            <div className="client"><img src="/images/client-openspace.png" alt="Open Space Foundation" loading="lazy" /></div>
            <div className="client"><img src="/images/client-susan.png" alt="Susan Future Technologies" loading="lazy" /></div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="band" id="about">
        <div className="wrap about">
          <div className="about__mark rv"><img src="/launch-mark.png" width="300" height="286" alt="Launch To Space mark" loading="lazy" /></div>
          <div className="rv" style={{transitionDelay: '.08s'}}>
            <p className="eyebrow">About</p>
            <h2 style={{marginBottom: '26px'}}>A ToSpace platform</h2>
            <p><strong>Launch To Space</strong> is the High-Altitude Balloon platform built by ToSpace to make Near Space something you can actually reach, without waiting a decade or paying for a rocket.</p>
            <p>A high-altitude balloon can carry a well-built payload to 30–35 km, hold it there while cameras capture the journey and instruments collect data, and bring it back the same day. From that altitude, you can see Earth's curvature, the darkness of space above the atmosphere, and how your hardware performs in an environment unlike anything on the ground.</p>
            <p>We handle the full flight: balloon, carrier, tracking, recovery and mission operations.</p>
            <p className="about__highlight">You bring the idea. We'll take it beyond Earth.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="band" id="faq">
        <div className="wrap">
          <div className="section-head rv">
            <p className="eyebrow">FAQ</p>
            <h2>Questions before you fly</h2>
          </div>
          <div className="faq rv">
            <details><summary>What is Launch To Space?</summary><p>Launch To Space is ToSpace's High-Altitude Balloon platform. We fly payloads to the stratosphere, roughly 30–35 km, for research, technology demonstration, education, commercial missions and product marketing, and return them with data, imagery and video.</p></details>
            <details><summary>How high can the balloon go?</summary><p>A standard mission reaches 30–35 km, well above 99% of the atmosphere. At that altitude the sky is black, the curvature of the Earth is clearly visible, and conditions approach those of space: near-vacuum pressure and temperatures around −60 °C. Actual altitude on the day varies with air currents and environmental conditions.</p></details>
            <details><summary>What payloads can I send, including my own product?</summary><p>Whatever you want taken higher. Scientific instruments, cameras, sensors, electronics, technology demonstrators, student experiments, commercial products and branded payloads all fly on the standard carrier, with a baseline capacity of 2–5 kg. Sending a product is one of the most common missions we fly: we review the item for mass, size, materials and safety, design the mounting, and fly it with cameras framed on it. Larger or unusual payloads are assessed case by case.</p></details>
            <details><summary>Can I use the mission for marketing?</summary><p>That is what the platform is built for. You receive photography, video, product imagery and mission documentation, all cleared for commercial use in campaigns, PR, launches and social media.</p></details>
            <details><summary>How long does a mission take, and how do I start one?</summary><p>Send us a short brief with what you want to fly, what you want back, and roughly when. Once we have your proposed launch location, we assess regulatory compliance and flight feasibility and respond within two working days with a mission plan, a payload checklist and a quote. From there, planning and payload integration typically take four to six weeks. The flight itself runs 2–4 hours from release to recovery, and edited content is delivered about ten days after landing.</p></details>
            <details><summary>How is the payload recovered, and what if recovery fails?</summary><p>When the balloon bursts at peak altitude, a parachute deploys automatically and the carrier descends under canopy. Redundant onboard GPS transmits its position throughout and we monitor telemetry in real time, so a recovery team can collect it from the landing site the same day. In the rare event that a payload cannot be recovered, we fly a replacement mission at no additional launch cost, subject to the re-flight terms in our mission agreement.</p></details>
            <details><summary>Are these HAB launches legally authorised?</summary><p>Yes. We file for and obtain the required clearances from DGCA and the relevant local authorities for every launch, covering both the flight and your payload. You do not deal with the paperwork. Where a proposed site cannot be cleared, we identify a workable alternative with you before the mission is scheduled.</p></details>
            <details><summary>What could delay or abort a launch?</summary><p>Every launch follows a strict Go / No-Go protocol on the day. We abort if weather conditions, adverse winds, rain or anything extreme, put a safe landing or the recovery team at risk. An aborted launch is rescheduled, not lost. If a proposed site does not clear regulatory or feasibility checks, we work with you to identify an alternative.</p></details>
            <details><summary>Can you launch outside India?</summary><p>Potentially, yes. It depends on finding suitable launch and recovery sites and securing approval from local authorities; if both are viable we fly in your country. Otherwise we launch from India and courier your payload back to you, along with all video and data captured during the mission.</p></details>
            <details><summary>Can students and companies run their own missions?</summary><p>Both, and they are core to the platform. Schools, colleges and university teams design and build an experiment, take part in launch operations, and analyse their own flight data afterwards. For companies, carrier branding, camera angles, sensor suites, flight timing, launch site and the content package can all be tailored, and fully bespoke mission profiles are available for commercial programmes.</p></details>
          </div>
        </div>
      </section>

      {/* MEETING BOOKING */}
      <section className="booking" id="meeting">
        <div className="wrap">
          <div className="booking__grid">
            <div className="booking__copy rv">
              <p className="eyebrow">Mission consult</p>
              <h2>Book a launch planning call</h2>
              <p className="lede">Choose a time to review payload fit, campaign goals, launch windows and the fastest path from idea to flight plan.</p>
              <div className="booking__meta" aria-label="Meeting details">
                <span>30 minute discovery call</span>
                <span>Payload and content scope review</span>
                <span>Follow-up mission checklist</span>
              </div>
            </div>

            <div className="booking__panel rv" style={{transitionDelay: '.08s'}}>
              <div className="cal-booking" id="cal-booking" data-cal-origin="https://cal.com" data-cal-link="adnaan-founder/talk-with-adnaan" aria-label="Cal.com meeting booking">
                <div className="cal-booking__fallback">
                  <span>Loading Cal.com availability...</span>
                  <a href="https://cal.com/adnaan-founder/talk-with-adnaan" target="_blank" rel="noopener">Open in Cal.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <div className="contact__glow"></div>
        <div className="wrap" style={{position: 'relative'}}>
          <p className="eyebrow eyebrow--center rv">Contact</p>
          <h2 className="rv">Ready to take your idea beyond?</h2>
          <p className="lede rv" style={{transitionDelay: '.06s'}}>Bring us your idea, and let's take it higher.</p>

          <form className="form rv" id="mission-form" action="mailto:adnaan.m@tospace.in,tospaceofficial@gmail.com" method="post" encType="text/plain">
            <div className="form__grid">
              <div><label htmlFor="f-name">Name</label><input id="f-name" name="name" type="text" autoComplete="name" required /></div>
              <div><label htmlFor="f-org">Organisation</label><input id="f-org" name="organisation" type="text" autoComplete="organization" /></div>
              <div><label htmlFor="f-email">Email</label><input id="f-email" name="email" type="email" autoComplete="email" required /></div>
              <div>
                <label htmlFor="f-type">Mission type</label>
                <select id="f-type" name="mission_type">
                  <option>Product marketing</option>
                  <option>Scientific research</option>
                  <option>Technology demonstration</option>
                  <option>Educational mission</option>
                  <option>Commercial / custom</option>
                </select>
              </div>
              <div className="form__full"><label htmlFor="f-msg">What would you like to fly?</label><textarea id="f-msg" name="message" placeholder="Payload, approximate mass, and what you want back from the flight."></textarea></div>
            </div>
            <div className="form__foot">
              <span className="form__note">Reply within 2 working days</span>
              <button className="btn btn--solid" type="submit">Send mission brief <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M2 8h11M9 4l4 4-4 4"/></svg></button>
            </div>
            <div className="form__recipients" aria-label="Mission brief recipients">
              <span>Mission brief goes to</span>
              <a href="mailto:adnaan.m@tospace.in" className="foot__mail"><svg viewBox="0 0 20 16" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M1.5 2h17a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/><path d="M1 3l9 7 9-7"/></svg><span>adnaan.m@tospace.in</span></a>
              <a href="mailto:tospaceofficial@gmail.com" className="foot__mail"><svg viewBox="0 0 20 16" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M1.5 2h17a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/><path d="M1 3l9 7 9-7"/></svg><span>tospaceofficial@gmail.com</span></a>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="site-footer">
        <div className="footer-reveal-shell" aria-label="Launch To Space footer reveal">
          <div className="footer-reveal">
            <div className="footer-reveal__stage">
              <div className="footer-reveal__mark"><img src="/icon" alt="Launch To Space" /></div>
              <h2 className="footer-reveal__title">Launch To Space</h2>
            </div>
            <div className="footer-reveal__horizon" aria-hidden="true"></div>
          </div>
        </div>
        <div className="wrap">
          <div className="foot-group">
          <div className="foot foot--4col">
            <div>
              <h4>Navigate</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#missions">Missions</a></li>
              </ul>
            </div>
            <div>
              <h4>Explore</h4>
              <ul>
                <li><a href="#marketing">Product marketing</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#clients">Clients</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4>Talk to us</h4>
              <ul>
                <li><a href="mailto:adnaan.m@tospace.in" className="foot__mail"><svg viewBox="0 0 20 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M1.5 2h17a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/><path d="M1 3l9 7 9-7"/></svg><span>adnaan.m@tospace.in</span></a></li>
                <li><a href="mailto:tospaceofficial@gmail.com" className="foot__mail"><svg viewBox="0 0 20 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M1.5 2h17a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"/><path d="M1 3l9 7 9-7"/></svg><span>tospaceofficial@gmail.com</span></a></li>
                <li><a href="tel:+919361854814" className="foot__mail"><svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true"><path d="M4 2.8c-.5 1.8-.3 4 .6 6.2 1 2.4 2.6 4.4 4.6 5.7 2 1.3 4.2 1.9 6 1.5l1-2.4-3-1.6-1 1.1c-1.1-.4-2.2-1.2-3.1-2.3-.9-1.1-1.5-2.3-1.8-3.5l1.4-.7L7.1 3.7z"/></svg><span>+91 93618 54814</span></a></li>
                <li><a href="#contact" className="foot__mail foot__cta"><svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M2 8h11M9 4l4 4-4 4"/></svg><span>Send a mission brief</span></a></li>
              </ul>
            </div>
            <div className="foot__offices">
              <h4>Chennai office</h4>
              <p><svg viewBox="0 0 16 20" width="12" height="15" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M8 19c4-4.6 6.5-8.2 6.5-11.2A6.5 6.5 0 0 0 1.5 7.8C1.5 10.8 4 14.4 8 19z"/><circle cx="8" cy="7.6" r="2.3"/></svg><span>No. 23, 2nd Floor, Palandiamman Koil Street,<br />Adambakkam, Chennai 600088, Tamil Nadu, India</span></p>
              <h4>Karur office</h4>
              <p><svg viewBox="0 0 16 20" width="12" height="15" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true"><path d="M8 19c4-4.6 6.5-8.2 6.5-11.2A6.5 6.5 0 0 0 1.5 7.8C1.5 10.8 4 14.4 8 19z"/><circle cx="8" cy="7.6" r="2.3"/></svg><span>M114, Mullai Street, North Gandhigramam,<br />Karur 639004, Tamil Nadu, India</span></p>
            </div>
          </div>

          <div className="legal">
            <div className="legal__meta">
              <span className="legal__copy">© <span id="yr">2026</span> ToSpace Pvt Ltd</span>
              <span className="legal__reg">CIN U29291TN2021PTC146836</span>
              <span className="legal__reg">GSTIN 33AAICT9147N1ZP</span>
            </div>
            <nav className="legal__links" aria-label="Legal links">
              <a href="/legal/privacy-policy">Privacy Policy</a>
              <a href="/legal/cookie-policy">Cookie Policy</a>
              <a href="/legal/legal-notice">Legal Notice</a>
              <a href="/legal/terms-and-conditions">Terms &amp; Conditions</a>
            </nav>
          </div>
          </div>
        </div>
      </footer>
      </main>

      <a href="#home" className="home-fab" id="homeFab" aria-label="Back to home"><img src="/launch-mark.png" alt="" /></a>
    </>
  );
}
