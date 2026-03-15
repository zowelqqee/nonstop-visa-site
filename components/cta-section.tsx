"use client";

import { useState } from "react";
import { track } from "@vercel/analytics";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function CtaSection() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && contact) {
      track("lead_form_submit", { source: "cta_section" });
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="relative py-24">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-yerevan.jpg"
          alt="Панорама Еревана"
          fill
          className="object-cover"
          quality={72}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/55 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/85" />
      </div>
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="overflow-hidden rounded-2xl border border-primary/20 bg-card/90 backdrop-blur-sm">
          {/* Top accent bar */}
          <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

          <div className="p-8 sm:p-12">
            {!submitted ? (
              <>
                <div className="mb-8 text-center">
                  <p className="mb-3 text-sm font-semibold tracking-widest text-primary uppercase">
                    Бесплатная консультация
                  </p>
                  <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Оставьте заявку за 30 секунд
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Свяжемся с вами в Telegram или WhatsApp и предложим лучший стартовый сценарий под вашу задачу.
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="mx-auto flex max-w-md flex-col gap-5"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-foreground/80"
                    >
                      Ваше имя
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Иван Иванов"
                      required
                      className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact"
                      className="mb-2 block text-sm font-medium text-foreground/80"
                    >
                      Telegram или WhatsApp
                    </label>
                    <input
                      id="contact"
                      type="text"
                      inputMode="text"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="@username или +7 999 123-45-67"
                      required
                      className="w-full rounded-lg border border-border bg-secondary/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/50"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110 hover:gap-3"
                  >
                    Отправить заявку
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                  </button>
                  <p className="text-center text-xs text-muted-foreground">
                    Это бесплатно и без обязательств. Обычно отвечаем в тот же день.
                  </p>
                </form>
              </>
            ) : (
              <div className="py-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Заявка отправлена
                </h3>
                <p className="mt-3 text-muted-foreground">
                  Мы свяжемся с вами в Telegram или WhatsApp и отправим дальнейшие шаги.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
