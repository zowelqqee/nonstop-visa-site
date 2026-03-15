"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Сколько времени занимает получение ВНЖ в Армении?",
    answer:
      "Обычно 10-14 рабочих дней с момента подачи. Точный срок зависит от основания и готовности документов.",
  },
  {
    question: "Нужно ли лично приезжать в Армению?",
    answer:
      "Для части процедур личное присутствие нужно, но подготовку и большую часть процесса мы ведем дистанционно.",
  },
  {
    question: "В каких банках можно открыть счет?",
    answer:
      "Подбираем банк под задачу клиента: личный счет, бизнес-операции или международные платежи.",
  },
  {
    question: "Какие документы нужны для регистрации компании?",
    answer:
      "Базово нужны паспорт, данные учредителя и виды деятельности. Мы формируем финальный список под ваш кейс.",
  },
];


export function FaqSection() {
  return (
    <section id="faq" className="relative py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-primary uppercase">
            FAQ
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Часто задаваемые вопросы
          </h2>

          <p className="mt-4 text-muted-foreground leading-relaxed">
            Только основные вопросы, которые обычно нужны перед стартом.
          </p>

        </div>

        <Accordion type="single" collapsible className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-xl border border-border/50 bg-card px-6 transition-all duration-300 data-[state=open]:border-primary/20"
            >
              <AccordionTrigger className="py-5 text-left text-sm font-semibold text-foreground hover:text-primary hover:no-underline sm:text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
