import { MessageCircle, Send, Mail, MapPin } from "lucide-react";

const footerLinks = [
  { label: "Услуги", href: "#services" },
  { label: "Как мы работаем", href: "#process" },
  { label: "О компании", href: "#why-us" },
  { label: "Кейсы", href: "#cases" },
  { label: "Вопросы и ответы", href: "#faq" },
  { label: "Контакты", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-card/50">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">

            <span className="gold-gradient-text text-2xl font-bold tracking-tight">
              Non-Stop Visa
            </span>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Юридическое сопровождение релокации, получения ВНЖ и регистрации бизнеса в Армении. Надежный партнер для специалистов, предпринимателей и инвесторов.
            </p>

            <div className="mt-6 flex items-center gap-3">

              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-all hover:border-primary/30 hover:text-primary"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>

              <a
                href="http://t.me/nonstopvisa"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-all hover:border-primary/30 hover:text-primary"
                aria-label="Telegram"
              >
                <Send size={18} />
              </a>

            </div>

          </div>

          {/* Navigation */}
          <div>

            <h4 className="mb-4 text-sm font-semibold text-foreground">
              Навигация
            </h4>

            <ul className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

          </div>

          {/* Contact */}
          <div>

            <h4 className="mb-4 text-sm font-semibold text-foreground">
              Контакты
            </h4>

            <ul className="flex flex-col gap-4">

              <li className="flex items-start gap-3">
                <Mail size={16} className="mt-0.5 shrink-0 text-primary/60" />
                <span className="text-sm text-muted-foreground">
                  info@nonstopvisa.com
                </span>
              </li>

              <li className="flex items-start gap-3">
                <MessageCircle
                  size={16}
                  className="mt-0.5 shrink-0 text-primary/60"
                />
                <span className="text-sm text-muted-foreground">
                  WhatsApp: +374 XX XXX XXXX
                </span>
              </li>

              <li className="flex items-start gap-3">
                <Send size={16} className="mt-0.5 shrink-0 text-primary/60" />
                <span className="text-sm text-muted-foreground">
                  Telegram: @nonstopvisa
                </span>
              </li>

              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary/60" />
                <span className="text-sm text-muted-foreground">
                  Ереван, Армения
                </span>
              </li>

            </ul>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/30 pt-8 sm:flex-row">

          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Non-Stop Visa. Все права защищены.
          </p>

          <div className="flex gap-6">

            <a
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Политика конфиденциальности
            </a>

            <a
              href="#"
              className="text-xs text-muted-foreground transition-colors hover:text-primary"
            >
              Условия использования
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
}
