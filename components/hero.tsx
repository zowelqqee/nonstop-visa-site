"use client";

import { useEffect, useRef } from "react";
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
        ref={sectionRef}
        className="relative flex min-h-screen items-center overflow-hidden pt-24 lg:pt-28">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-yerevan.jpg"
          alt="Панорама Еревана"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pt-32 pb-20 lg:grid-cols-2 lg:items-center lg:pt-0">

        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-8">

          {/* Trust badge */}
          <div data-animate className="opacity-0" style={{ animationDelay: "0.1s" }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-medium tracking-wide text-primary uppercase">
                Более 180 клиентов успешно релоцированы
              </span>
            </div>
          </div>

          {/* HEADLINE */}
          <h1
            data-animate
            className="opacity-0 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "0.3s" }}
          >
            <span className="text-balance">
              Релокация и запуск бизнеса
            </span>

            <br />

            <span className="gold-gradient-text text-balance">
              в Армении под ключ
            </span>
          </h1>

          {/* SUBHEADLINE */}
          <p
            data-animate
            className="opacity-0 max-w-lg text-lg leading-relaxed text-muted-foreground"
            style={{ animationDelay: "0.5s" }}
          >
            Получение ВНЖ, регистрация компании и открытие банковского счета
            с полным юридическим сопровождением. Мы берем на себя весь процесс,
            чтобы вы могли сосредоточиться на бизнесе и жизни.
          </p>

          {/* CTA BUTTONS */}
          <div
            data-animate
            className="opacity-0 flex flex-wrap items-center gap-4"
            style={{ animationDelay: "0.7s" }}
          >

            {/* Primary CTA */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110 hover:gap-3"
            >
              Получить консультацию
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-5 py-3.5 text-sm font-medium text-secondary-foreground transition-all duration-300 hover:border-primary/40 hover:bg-secondary"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-5 py-3.5 text-sm font-medium text-secondary-foreground transition-all duration-300 hover:border-primary/40 hover:bg-secondary"
            >
              <Send size={16} />
              Telegram
            </a>

          </div>

          {/* CLIENT TRUST */}
          <div
            data-animate
            className="opacity-0 flex items-center gap-6 pt-4"
            style={{ animationDelay: "0.9s" }}
          >

            <div className="flex items-center gap-2">

              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-8 w-8 rounded-full border-2 border-background bg-secondary overflow-hidden"
                  >
                    <Image
                      src={`/images/client-${i}.jpg`}
                      alt="Клиент Non-Stop Visa"
                      width={32}
                      height={32}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>

              <span className="text-xs text-muted-foreground">
                <strong className="text-foreground">180+</strong> клиентов получили ВНЖ и открыли бизнес
              </span>

            </div>

          </div>

        </div>

        {/* RIGHT VISUAL */}
        <div
          data-animate
          className="opacity-0 hidden lg:flex lg:justify-end"
          style={{ animationDelay: "0.5s" }}
        >

          <div className="relative">

            <div className="absolute -inset-4 rounded-2xl bg-primary/5 blur-3xl" />

            <div className="glass relative overflow-hidden rounded-2xl p-1">

              <Image
                src="/images/hero-yerevan.jpg"
                alt="Регистрация бизнеса и получение ВНЖ в Армении"
                width={520}
                height={400}
                className="rounded-xl object-cover"
              />

              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/60 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">

                <div className="glass rounded-xl px-5 py-4">

                  <p className="text-xs font-medium text-primary uppercase tracking-wider">
                    Средний срок оформления
                  </p>

                  <p className="mt-1 text-2xl font-bold text-foreground">
                    14 дней
                  </p>

                  <p className="text-xs text-muted-foreground">
                    От консультации до результата
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
