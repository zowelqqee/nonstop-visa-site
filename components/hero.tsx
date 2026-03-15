"use client";

import { useEffect, useRef } from "react";
import { track } from "@vercel/analytics";
import Image from "next/image";
import { ArrowRight, MessageCircle, Send } from "lucide-react";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll("[data-animate]");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden pt-24 lg:pt-28"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero-yerevan.jpg"
          alt="Панорама Еревана"
          fill
          className="object-cover"
          priority
          quality={72}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 pt-28 pb-24 lg:grid-cols-2 lg:items-center lg:gap-14 lg:pt-0">
        <div className="flex flex-col gap-7">
          <div data-animate className="opacity-0" style={{ animationDelay: "0.1s" }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium tracking-wide text-primary uppercase">
                180+ клиентов уже переехали и запустили бизнес
              </span>
            </div>
          </div>

          <h1
            data-animate
            className="opacity-0 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "0.3s" }}
          >
            Релокация в Армению
            <br />
            <span className="gold-gradient-text text-balance">без бюрократии и стресса</span>
          </h1>

          <p
            data-animate
            className="opacity-0 max-w-lg text-lg leading-relaxed text-muted-foreground"
            style={{ animationDelay: "0.5s" }}
          >
            Помогаем получить ВНЖ, открыть компанию и банковский счет.
            Выбираете услугу, мы ведем процесс до результата.
          </p>

          <div
            data-animate
            className="opacity-0 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.7s" }}
          >
            <a
              href="#contact"
              onClick={() => track("cta_click", { source: "hero_primary" })}
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110 hover:gap-3"
            >
              Получить план релокации
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>

            <a
              href="#services"
              onClick={() => track("services_view_click", { source: "hero_secondary" })}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-5 py-3.5 text-sm font-medium text-secondary-foreground transition-all duration-300 hover:border-primary/40 hover:bg-secondary"
            >
              Выбрать услугу
            </a>
          </div>

          <div
            data-animate
            className="opacity-0 flex flex-wrap items-center gap-3 text-sm text-muted-foreground"
            style={{ animationDelay: "0.9s" }}
          >
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border/70 bg-secondary/40 px-4 py-2.5 transition-all duration-300 hover:border-primary/40 hover:bg-secondary"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border/70 bg-secondary/40 px-4 py-2.5 transition-all duration-300 hover:border-primary/40 hover:bg-secondary"
            >
              <Send size={16} />
              Telegram
            </a>
          </div>

          <div
            data-animate
            className="opacity-0 grid gap-2 pt-3 text-sm text-foreground/80 sm:grid-cols-3"
            style={{ animationDelay: "1.1s" }}
          >
            <div className="rounded-lg border border-border/50 bg-card/50 px-4 py-3">
              1. Консультация и выбор услуги
            </div>
            <div className="rounded-lg border border-border/50 bg-card/50 px-4 py-3">
              2. Подготовка документов
            </div>
            <div className="rounded-lg border border-border/50 bg-card/50 px-4 py-3">
              3. Получение результата
            </div>
          </div>
        </div>

        <div
          data-animate
          className="opacity-0 hidden lg:flex lg:justify-end"
          style={{ animationDelay: "0.5s" }}
        >
          <div className="w-full max-w-md space-y-4">
            <div className="glass rounded-2xl p-6">
              <p className="text-xs font-medium tracking-wider text-primary uppercase">
                Что получите за первую неделю
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                <li>• Персональный план действий</li>
                <li>• Чек-лист документов</li>
                <li>• Оценку сроков и бюджета</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-border/50 bg-card/70 p-4">
                <p className="text-xs text-muted-foreground">Средний старт</p>
                <p className="mt-1 text-xl font-semibold text-foreground">3-7 дней</p>
              </div>
              <div className="rounded-xl border border-border/50 bg-card/70 p-4">
                <p className="text-xs text-muted-foreground">Клиентов</p>
                <p className="mt-1 text-xl font-semibold text-foreground">180+</p>
              </div>
            </div>
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
              <p className="text-sm leading-relaxed text-foreground">
                Нужен быстрый старт? Сначала выберите услугу ниже и нажмите «Подробнее».
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
