import Image from "next/image";
import { Quote } from "lucide-react";

const cases = [
  {
    name: "Александр К.",
    role: "IT-предприниматель",
    image: "/images/client-1.jpg",
    story:
      "Перевез команду из 12 разработчиков в Ереван. Команда Non-Stop Visa взяла на себя ВНЖ, регистрацию компании и счета.",
    result:
      "Зарегистрировано ООО, оформлено 12 ВНЖ, открыто 3 банковских счета",
  },
  {
    name: "Мария С.",
    role: "Фриланс-дизайнер",
    image: "/images/client-2.jpg",
    story:
      "Как фрилансеру было сложно пройти юридические и банковские этапы. В итоге все оформили под ключ и в понятные сроки.",
    result:
      "Зарегистрировано ИП, получен ВНЖ, открыт личный и бизнес-счет",
  },
  {
    name: "Дмитрий В.",
    role: "Инвестор",
    image: "/images/client-3.jpg",
    story:
      "Нужен был партнер для запуска бизнеса в Армении. Команда собрала структуру, регистрацию и банковский контур.",
    result:
      "Зарегистрировано 2 ООО, открыты инвестиционные счета, настроена бухгалтерия",
  },
];


export function CaseStudies() {
  return (
    <section id="cases" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest text-primary uppercase">
            Кейсы клиентов
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Результаты клиентов
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Короткие примеры того, что мы делаем на практике и к какому итогу приходят клиенты.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {cases.map((caseItem) => (
            <div
              key={caseItem.name}
              className="group relative overflow-hidden rounded-xl border border-border/50 bg-card transition-all duration-500 hover:border-primary/30"
            >
              <div className="p-8">
                <Quote
                  size={32}
                  className="mb-4 text-primary/30"
                />
                <p className="leading-relaxed text-foreground/80 text-sm">
                  &ldquo;{caseItem.story}&rdquo;
                </p>
                <div className="mt-6 rounded-lg bg-primary/5 px-4 py-3 border border-primary/10">
                  <p className="text-xs font-medium text-primary uppercase tracking-wide">
                    Результат
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    {caseItem.result}
                  </p>
                </div>
              </div>
              <div className="border-t border-border/50 px-8 py-5">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-primary/20">
                    <Image
                      src={caseItem.image}
                      alt={caseItem.name}
                      width={48}
                      height={48}
                      className="h-full w-full object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {caseItem.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {caseItem.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
