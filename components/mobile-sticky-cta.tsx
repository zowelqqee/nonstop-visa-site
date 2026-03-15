export function MobileStickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border/30 bg-background/95 backdrop-blur md:hidden">
      <div className="mx-auto max-w-7xl px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <a
          href="/#contact"
          className="inline-flex w-full items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110"
        >
          Получить консультацию
        </a>
      </div>
    </div>
  );
}
