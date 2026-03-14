"use client";

import {
  Scale,
  Clock,
  BookOpen,
  HeartHandshake,
  Languages,
} from "lucide-react";

const reasons = [
  {
    icon: Scale,
    title: "Официальное юридическое сопровождение",
    description:
      "Работаем в полном соответствии с законодательством Армении. Имеем практический опыт взаимодействия с миграционными органами и банками.",
  },
  {
    icon: Clock,
    title: "Более 5 лет опыта",
    description:
      "С 2019 года сопровождаем клиентов при релокации, получении ВНЖ и регистрации бизнеса. Более 180 успешных кейсов.",
  },
  {
    icon: BookOpen,
    title: "Глубокое знание системы",
    description:
      "Понимаем особенности работы государственных органов, банковской системы и налогового законодательства Армении.",
  },
  {
    icon: HeartHandshake,
    title: "Полное сопровождение",
    description:
      "Берем на себя весь процесс: от подготовки документов до получения результата. Сопровождаем на каждом этапе.",
  },
  {
    icon: Languages,
    title: "Поддержка на русском, английском и армянском",
    description:
      "Обеспечиваем комфортное взаимодействие без языковых барьеров на всех этапах работы.",
  },
];


export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/50 to-background" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 text-sm font-semibold tracking-widest text-primary uppercase">
            Почему Non-Stop Visa
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Надежный партнер для{" "}
            <span className="gold-gradient-text">
              релокации и бизнеса
            </span>
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Мы обеспечиваем юридическую безопасность, прозрачность процесса и гарантированный результат для каждого клиента.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <div
              key={reason.title}
              className={`group relative overflow-hidden rounded-xl border border-border/50 bg-card p-8 transition-all duration-500 hover:border-primary/30 ${
                i >= 3 ? "lg:col-span-1" : ""
              }`}
            >
              <div className="absolute right-0 top-0 h-32 w-32 -translate-y-8 translate-x-8 rounded-full bg-primary/5 blur-2xl transition-all duration-500 group-hover:bg-primary/10" />
              <div className="relative">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20">
                  <reason.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
