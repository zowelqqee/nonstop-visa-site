"use client";

import { Monitor, Briefcase, PenTool, TrendingUp, Rocket } from "lucide-react";

const clients = [
  {
    icon: Monitor,
    title: "IT-специалисты",
    description:
      "Разработчики и удаленные специалисты, которым нужен ВНЖ, банковский счет и стабильная юридическая база.",
  },
  {
    icon: Briefcase,
    title: "Предприниматели",
    description:
      "Владельцы бизнеса, которые хотят открыть компанию или перенести деятельность в Армению.",
  },
  {
    icon: PenTool,
    title: "Фрилансеры",
    description:
      "Независимые специалисты, которым необходима легальная структура бизнеса и международные платежи.",
  },
  {
    icon: TrendingUp,
    title: "Инвесторы",
    description:
      "Инвесторы, рассматривающие Армению как юрисдикцию для ведения бизнеса и управления капиталом.",
  },
  {
    icon: Rocket,
    title: "Стартапы",
    description:
      "Стартап-команды, которым требуется регистрация компании, банковский счет и бухгалтерское сопровождение.",
  },
];


export function TargetClients() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface/50 to-background" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-primary uppercase">
            Для кого наши услуги
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Решения для <span className="gold-gradient-text">специалистов и бизнеса</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Мы работаем как с частными специалистами, так и с компаниями, предоставляя решения под конкретные задачи клиента.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {clients.map((client) => (
            <div
              key={client.title}
              className="group flex flex-col items-center rounded-xl border border-border/50 bg-card p-6 text-center transition-all duration-500 hover:border-primary/30 hover:bg-card/80"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                <client.icon size={28} />
              </div>
              <h3 className="text-base font-semibold text-foreground">
                {client.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {client.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
