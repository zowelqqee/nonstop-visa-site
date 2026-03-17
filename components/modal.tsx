"use client";

import { track } from "@vercel/analytics";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Service } from "@/lib/services-data";
import { getServiceIcon } from "@/lib/service-icons";

interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  service: Service | null;
}

const sectionTitleClass = "text-sm font-semibold tracking-wide text-foreground uppercase";

export function Modal({ open, onOpenChange, service }: ModalProps) {
  const Icon = service ? getServiceIcon(service.icon) : null;

  if (!service) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex max-h-[calc(100dvh-1rem)] w-[calc(100vw-1rem)] flex-col overflow-hidden border-border/50 bg-card p-0 sm:max-h-[calc(100dvh-2rem)] sm:w-[calc(100vw-2rem)] sm:max-w-3xl">
        <DialogHeader className="shrink-0 border-b border-border/50 px-4 pt-5 pb-4 pr-12 sm:px-8 sm:pt-6 sm:pb-5 sm:pr-14">
          <div className="mb-3 flex flex-wrap items-center gap-3">
            {Icon ? (
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon size={20} />
              </div>
            ) : null}

            <span className="rounded-full bg-secondary px-3 py-1 text-[10px] font-semibold tracking-wider text-secondary-foreground uppercase">
              {service.tag}
            </span>
          </div>

          <DialogTitle className="text-xl font-semibold leading-tight sm:text-2xl">
            {service.title}
          </DialogTitle>
          <p className="mt-3 text-sm leading-relaxed break-words text-muted-foreground sm:text-[15px]">
            {service.short}
          </p>
        </DialogHeader>

        <div className="min-h-0 flex-1 space-y-5 overflow-y-auto overscroll-contain px-4 pt-4 pb-5 touch-pan-y [scrollbar-gutter:stable] [-webkit-overflow-scrolling:touch] sm:space-y-6 sm:px-8 sm:pt-5 sm:pb-6">
          <div className="grid gap-3 pt-5 sm:grid-cols-2">
            <div className="rounded-lg border border-border/50 bg-background/30 p-4">
              <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                Стоимость
              </p>
              <p className="mt-2 text-lg font-semibold text-foreground">
                {service.pricing.from}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {service.pricing.paymentFormat}
              </p>
            </div>

            <div className="rounded-lg border border-border/50 bg-background/30 p-4">
              <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                Сроки
              </p>
              <p className="mt-2 text-sm font-medium text-foreground sm:text-base">
                {service.details.timeline}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {service.details.workFormat}
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
            <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              Для кого
            </p>
            <p className="mt-2 text-sm leading-relaxed text-foreground">
              {service.details.forWho}
            </p>
          </div>

          <div className="space-y-3">
            <h4 className={sectionTitleClass}>Что входит</h4>
            <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
              {service.details.included.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 shrink-0 text-primary">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className={sectionTitleClass}>Следующий шаг</h4>
            <div className="rounded-lg border border-border/50 bg-background/30 p-4">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Отправьте заявку, и мы вернемся с персональным планом: какие
                документы нужны именно вам, сколько займет процесс и какой бюджет
                нужен на старте.
              </p>
              <a
                href="#contact"
                onClick={() => {
                  track("cta_click", { source: "service_modal_next_step", service: service.slug });
                  onOpenChange(false);
                }}
                className="mt-4 inline-flex rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
              >
                Отправить
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className={sectionTitleClass}>Необходимые документы</h4>
            <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
              {service.details.requiredDocuments.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 shrink-0 text-primary">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className={sectionTitleClass}>Дополнительные расходы</h4>
            <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
              {service.pricing.additionalCosts.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1 shrink-0 text-primary">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
            <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              Результат
            </p>
            <p className="mt-2 text-sm leading-relaxed text-foreground">
              {service.details.result}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
