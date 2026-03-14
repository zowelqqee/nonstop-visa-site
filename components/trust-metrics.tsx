"use client";

import { useEffect, useRef, useState } from "react";
import { Users, Calendar, CheckCircle2, Clock } from "lucide-react";

const metrics = [
  {
    icon: Users,
    value: 180,
    suffix: "+",
    label: "Клиентов получили ВНЖ",
    description: "Успешно релоцированы в Армению",
  },
  {
    icon: Calendar,
    value: 5,
    suffix: "+",
    label: "Лет опыта",
    description: "Практический опыт работы с миграцией и бизнесом",
  },
  {
    icon: CheckCircle2,
    value: 95,
    suffix: "%",
    label: "Успешных кейсов",
    description: "Положительное решение по заявлениям",
  },
  {
    icon: Clock,
    value: 14,
    suffix: "",
    label: "Дней в среднем",
    description: "Средний срок получения результата",
  },
];


function AnimatedCounter({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const increment = target / 40;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 30);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function TrustMetrics() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-surface to-background" />
      <div
        ref={ref}
        className="relative mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 lg:grid-cols-4"
      >
        {metrics.map((metric, i) => (
          <div
            key={metric.label}
            className="group glass rounded-xl p-6 text-center transition-all duration-500 hover:border-primary/30"
            style={{
              animationDelay: `${i * 0.15}s`,
            }}
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
              <metric.icon size={24} />
            </div>
            <p className="text-3xl font-bold text-foreground lg:text-4xl">
              <AnimatedCounter
                target={metric.value}
                suffix={metric.suffix}
                inView={inView}
              />
            </p>
            <p className="mt-1 text-sm font-semibold text-foreground/80">
              {metric.label}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {metric.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
