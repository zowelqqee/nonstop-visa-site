"use client";

import { MessageSquare, FileText, UserCheck, Award } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Первичная консультация",
    description:
      "Бесплатная консультация для анализа вашей ситуации, целей и сроков. Мы предложим оптимальный план релокации и открытия бизнеса.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Подготовка документов",
    description:
      "Подготавливаем и проверяем все необходимые документы. Обеспечиваем соответствие требованиям законодательства Армении.",
  },
  {
    icon: UserCheck,
    step: "03",
    title: "Подача и сопровождение",
    description:
      "Сопровождаем процесс подачи и взаимодействуем с государственными органами и банками. Вы получаете полную поддержку на каждом этапе.",
  },
  {
    icon: Award,
    step: "04",
    title: "Получение результата",
    description:
      "Вы получаете ВНЖ, зарегистрированную компанию и банковский счет. Оказываем поддержку и после завершения процесса.",
  },
];


export function Process() {
  return (
    <section id="process" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-primary uppercase">
            Как мы работаем
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Прозрачный процесс{" "}
            <span className="gold-gradient-text">
              от консультации до результата
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Мы полностью сопровождаем процесс, обеспечивая предсказуемый результат и юридическую безопасность.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/30 to-transparent lg:block" />

          <div className="grid gap-8 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={step.step} className="group relative">
                {/* Connector dot */}
                <div className="absolute left-1/2 -top-4 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-primary bg-background lg:block" />

                <div className="flex h-full flex-col rounded-xl border border-border/50 bg-card p-8 transition-all duration-500 hover:border-primary/30">
                  <div className="mb-6 flex items-center gap-4">
                    <span className="gold-gradient-text text-4xl font-bold opacity-60">
                      {step.step}
                    </span>
                    <div className="h-px flex-1 bg-border/50" />
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <step.icon size={20} />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                  {i < steps.length - 1 && (
                    <div className="mt-4 text-xs font-medium text-primary/50 lg:hidden">
                      {"Следующий шаг →"}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
