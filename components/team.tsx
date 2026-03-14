"use client";

import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";

export function Team() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/50 to-background" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-primary uppercase">
            Команда
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Руководство{" "}
            <span className="gold-gradient-text">
              с практическим опытом
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Команда специалистов по миграционному праву и регистрации бизнеса в Армении с многолетним практическим опытом.
          </p>
        </div>

        <div className="mx-auto max-w-lg">
          <div className="group overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-500 hover:border-primary/30">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="/images/founder.jpg"
                alt="Основатель Non-Stop Visa"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
            </div>
            <div className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground">
                Armen Hovhannisyan
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">
                Основатель и руководитель Non-Stop Visa
              </p>
              <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Более 5 лет опыта сопровождения клиентов при получении ВНЖ, регистрации бизнеса и открытии банковских счетов в Армении.
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-all hover:border-primary/30 hover:text-primary"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-all hover:border-primary/30 hover:text-primary"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
