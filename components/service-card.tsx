"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/services-data";
import { getServiceIcon } from "@/lib/service-icons";

export type ServiceCardBehavior = "modal" | "page";

interface ServiceCardProps {
  service: Service;
  behavior: ServiceCardBehavior;
  featured?: boolean;
  onLearnMore?: (service: Service) => void;
}

export function ServiceCard({
  service,
  behavior,
  featured = false,
  onLearnMore,
}: ServiceCardProps) {
  const Icon = getServiceIcon(service.icon);
  const shortResult = service.details.result.split(",")[0];

  return (
    <article
      className={`group relative h-full overflow-hidden rounded-xl border border-border/50 bg-card p-6 transition-all duration-500 hover:border-primary/30 hover:bg-card/80 sm:p-8 ${
        featured ? "sm:col-span-2 lg:col-span-1" : ""
      }`}
    >
      <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col">
        <div className="mb-5 flex items-start justify-between gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20">
            <Icon size={24} />
          </div>
          <span
            title={service.tag}
            className="max-w-[70%] truncate rounded-full bg-secondary px-3 py-1 text-[10px] font-semibold tracking-wider text-secondary-foreground uppercase"
          >
            {service.tag}
          </span>
        </div>

        <h3 className="text-lg leading-tight font-semibold text-foreground sm:text-xl">
          {service.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
          {service.short}
        </p>

        <dl className="mt-4 space-y-2 text-xs leading-relaxed text-muted-foreground sm:text-sm">
          <div>
            <dt className="inline font-semibold text-foreground/85">Для кого: </dt>
            <dd className="inline">{service.details.forWho}</dd>
          </div>
          <div>
            <dt className="inline font-semibold text-foreground/85">Результат: </dt>
            <dd className="inline">{shortResult}</dd>
          </div>
          <div>
            <dt className="inline font-semibold text-foreground/85">Срок: </dt>
            <dd className="inline">{service.details.timeline}</dd>
          </div>
        </dl>

        <div className="mt-auto pt-6">
          {behavior === "page" ? (
            <Link
              href={`/services/${service.slug}`}
              onClick={() =>
                track("service_learn_more_click", {
                  service: service.slug,
                  source: "card_page_link",
                })
              }
              className="group/link inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all hover:gap-2.5"
            >
              Подробнее
              <ArrowRight
                size={14}
                className="transition-transform group-hover/link:translate-x-0.5"
              />
            </Link>
          ) : (
            <button
              type="button"
              onClick={() => {
                track("service_learn_more_click", {
                  service: service.slug,
                  source: "card_modal",
                });
                onLearnMore?.(service);
              }}
              className="group/link inline-flex cursor-pointer items-center gap-1.5 text-sm font-medium text-primary transition-all hover:gap-2.5"
            >
              Подробнее
              <ArrowRight
                size={14}
                className="transition-transform group-hover/link:translate-x-0.5"
              />
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
