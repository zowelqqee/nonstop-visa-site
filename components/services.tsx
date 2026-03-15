"use client";

import { useState } from "react";
import { Modal } from "@/components/modal";
import {
  ServiceCard,
  type ServiceCardBehavior,
} from "@/components/service-card";
import { services, type Service } from "@/lib/services-data";

interface ServicesProps {
  learnMoreBehavior?: ServiceCardBehavior;
}

export function Services({ learnMoreBehavior = "modal" }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const isModalBehavior = learnMoreBehavior === "modal";

  const handleLearnMore = (service: Service) => {
    if (!isModalBehavior) {
      return;
    }
    setSelectedService(service);
  };

  const handleModalOpenChange = (open: boolean) => {
    if (!open) {
      setSelectedService(null);
    }
  };

  return (
    <>
      <section id="services" className="relative py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 max-w-2xl">
            <p className="mb-3 text-sm font-semibold tracking-widest text-primary uppercase">
              Услуги
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Выберите услугу и{" "}
              <span className="gold-gradient-text">
                начните процесс сегодня
              </span>
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              В каждой карточке есть формат, срок и результат. Нажмите
              «Подробнее», чтобы увидеть точный состав услуги, стоимость и
              следующий шаг.
            </p>
          </div>

          <div className="grid auto-rows-fr gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                service={service}
                behavior={learnMoreBehavior}
                onLearnMore={handleLearnMore}
                featured={index === 0}
              />
            ))}
          </div>
        </div>
      </section>

      {isModalBehavior ? (
        <Modal
          open={Boolean(selectedService)}
          onOpenChange={handleModalOpenChange}
          service={selectedService}
        />
      ) : null}
    </>
  );
}
