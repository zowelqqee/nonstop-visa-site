import {
  Scale,
  Clock,
  HeartHandshake,
} from "lucide-react";

const reasons = [
  {
    icon: Scale,
    title: "Официальное юридическое сопровождение",
    description:
      "Работаем по требованиям законодательства Армении и заранее снимаем юридические риски.",
  },
  {
    icon: Clock,
    title: "Более 5 лет опыта",
    description:
      "С 2019 года ведем кейсы по ВНЖ, бизнесу и банковским вопросам. Более 180 завершенных проектов.",
  },
  {
    icon: HeartHandshake,
    title: "Полное сопровождение",
    description:
      "Остаемся на связи на всем пути: от заявки до финального результата и следующих шагов.",
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
            Почему с нами проще
          </h2>

          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Фокус на предсказуемом результате: понятные шаги, сроки и сопровождение без лишней сложности.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="group relative overflow-hidden rounded-xl border border-border/50 bg-card p-8 transition-all duration-500 hover:border-primary/30"
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
