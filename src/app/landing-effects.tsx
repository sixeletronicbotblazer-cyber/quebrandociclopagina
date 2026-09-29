"use client";

import { useEffect } from "react";

/**
 * Efeitos da landing page (ciclo de vida do React):
 * - classe `motion-ready` no <html> (animações de entrada)
 * - reveals no scroll via IntersectionObserver (respeita prefers-reduced-motion)
 * - ano automático no rodapé
 * - FAQ: acordeão acessível (button + aria-expanded + painel hidden)
 * - vitrine do app: marquee CSS infinito (ver .app-marquee em globals.css;
 *   sem setas, sem botões, pausado para quem prefere movimento reduzido)
 * - barra CTA fixa (somente celular): aparece depois do hero e some quando a
 *   oferta ou o rodapé estão visíveis. Somente IntersectionObservers, sem
 *   listener de scroll.
 * - repassa utm_* / fbclid da URL atual para o link do checkout.
 *
 * Idempotente e com cleanup completo (compatível com StrictMode).
 */

export default function LandingEffects() {
  useEffect(() => {
    const cleanups: Array<() => void> = [];

    document.documentElement.classList.add("motion-ready");
    cleanups.push(() => {
      document.documentElement.classList.remove("motion-ready");
    });

    // ---------- Reveals no scroll ----------
    const revealItems = document.querySelectorAll<HTMLElement>(".reveal");
    const canObserve =
      "IntersectionObserver" in window &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (canObserve) {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              revealObserver.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -24px 0px" }
      );
      revealItems.forEach((item, index) => {
        item.style.setProperty("--stagger", `${(index % 3) * 55}ms`);
        revealObserver.observe(item);
      });
      cleanups.push(() => revealObserver.disconnect());
    } else {
      revealItems.forEach((item) => item.classList.add("in-view"));
    }

    // ---------- Ano automático no rodapé ----------
    const yearEl = document.getElementById("year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    // ---------- FAQ: acordeão acessível ----------
    const faqList = document.querySelector(".faq-list");
    if (faqList) {
      const onFaqClick = (event: Event) => {
        const target = event.target as HTMLElement;
        const btn = target.closest<HTMLButtonElement>(".faq-q");
        if (!btn) return;
        const expanded = btn.getAttribute("aria-expanded") === "true";
        const panelId = btn.getAttribute("aria-controls");
        const panel = panelId ? document.getElementById(panelId) : null;
        btn.setAttribute("aria-expanded", String(!expanded));
        if (panel instanceof HTMLElement) panel.hidden = expanded;
      };
      faqList.addEventListener("click", onFaqClick);
      cleanups.push(() => faqList.removeEventListener("click", onFaqClick));
    }

    // ---------- Barra CTA fixa (somente celular, sem listener de scroll) ----------
    const bar = document.getElementById("sticky-cta");
    const hero = document.querySelector<HTMLElement>(".hero");
    const oferta = document.getElementById("oferta");
    const footerEl = document.querySelector<HTMLElement>("footer.footer");

    if (bar && hero && oferta && "IntersectionObserver" in window) {
      let heroVisible = true;
      let ofertaVisible = false;
      let footerVisible = false;

      const update = () => {
        const show = !heroVisible && !ofertaVisible && !footerVisible;
        bar.classList.toggle("is-visible", show);
      };

      const heroObserver = new IntersectionObserver(
        (entries) => {
          heroVisible = entries[entries.length - 1].isIntersecting;
          update();
        },
        { threshold: 0 }
      );
      heroObserver.observe(hero);
      cleanups.push(() => heroObserver.disconnect());

      const ofertaObserver = new IntersectionObserver(
        (entries) => {
          ofertaVisible = entries[entries.length - 1].isIntersecting;
          update();
        },
        { threshold: 0.06 }
      );
      ofertaObserver.observe(oferta);
      cleanups.push(() => ofertaObserver.disconnect());

      if (footerEl) {
        const footerObserver = new IntersectionObserver(
          (entries) => {
            footerVisible = entries[entries.length - 1].isIntersecting;
            update();
          },
          { threshold: 0.15 }
        );
        footerObserver.observe(footerEl);
        cleanups.push(() => footerObserver.disconnect());
      }

      update();
    }

    // ---------- Repassar utm_* / fbclid para o checkout ----------
    const checkoutLink = document.querySelector<HTMLAnchorElement>("a[data-checkout]");
    if (checkoutLink) {
      const incoming = new URLSearchParams(window.location.search);
      const passthrough = new URLSearchParams();
      incoming.forEach((value, key) => {
        if (key.toLowerCase().startsWith("utm_") || key === "fbclid") {
          passthrough.append(key, value);
        }
      });
      const extra = passthrough.toString();
      if (extra) {
        const base = checkoutLink.getAttribute("href") ?? "";
        checkoutLink.setAttribute(
          "href",
          `${base}${base.includes("?") ? "&" : "?"}${extra}`
        );
      }
    }

    return () => {
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return null;
}
