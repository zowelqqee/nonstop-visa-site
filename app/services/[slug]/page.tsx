import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { getServiceIcon } from "@/lib/service-icons";
import { getServiceBySlug, services } from "@/lib/services-data";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Услуга не найдена | Non-Stop Visa",
    };
  }

  return {
    title: `${service.title} | Non-Stop Visa`,
    description: service.short,
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const Icon = getServiceIcon(service.icon);

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />

      <section className="relative py-24">
        <div className="mx-auto max-w-4xl px-6">
          <Link
            href="/#services"
            className="mb-8 inline-flex items-center text-sm font-medium text-primary transition-opacity hover:opacity-80"
          >
            Назад к услугам
          </Link>

          <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Icon size={28} />
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            {service.title}
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {service.short}
          </p>

          <article className="mt-10 rounded-xl border border-border/50 bg-card p-8">
            <p className="whitespace-pre-line text-base leading-relaxed text-muted-foreground">
              {service.full}
            </p>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
