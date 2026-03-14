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
      "Средний срок получения ВНЖ составляет 10–14 рабочих дней с момента подачи документов. В отдельных случаях возможно ускоренное оформление. Специалисты Non-Stop Visa сопровождают весь процесс.",
  },
  {
    question: "Нужно ли лично приезжать в Армению?",
    answer:
      "Для получения ВНЖ требуется личное присутствие для подачи документов и биометрии. Однако большую часть подготовки мы выполняем дистанционно. Регистрация бизнеса и другие процедуры могут быть организованы с минимальным участием клиента.",
  },
  {
    question: "В каких банках можно открыть счет?",
    answer:
      "Мы работаем с ведущими банками Армении, включая Ameriabank, Ardshinbank, ACBA Bank и IDBank. Поможем выбрать оптимальный банк для личных или бизнес-целей.",
  },
  {
    question: "Какие документы нужны для регистрации компании?",
    answer:
      "Для регистрации ИП необходим паспорт и адрес проживания. Для ООО дополнительно потребуются данные учредителя. Команда Non-Stop Visa подготовит все документы и полностью сопроводит процесс.",
  },
  {
    question: "Какие налоги в Армении?",
    answer:
      "Армения предлагает выгодные налоговые условия. Для ИП возможны льготные режимы, а для компаний действуют конкурентные налоговые ставки. Мы поможем выбрать оптимальную структуру.",
  },
  {
    question: "Помогаете ли вы с оформлением виз?",
    answer:
      "Да, мы сопровождаем оформление шенгенских и других виз. Подготавливаем документы, консультируем и сопровождаем процесс подачи.",
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
            Ответы на основные вопросы о получении ВНЖ, регистрации бизнеса и релокации в Армению.
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
