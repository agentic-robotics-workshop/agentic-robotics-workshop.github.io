export function SupportedBy() {
  return (
    <section className="fade-in mx-auto my-4 flex w-full max-w-[85rem] flex-col items-center px-6 md:px-10">
      <p className="mb-8 text-sm font-bold uppercase tracking-[0.1em] text-text-secondary">
        Supported By
      </p>
      <div className="grid w-full grid-cols-1 md:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="flex min-h-24 items-center justify-center border-y border-surface-border bg-black/[0.015] px-8 py-6"
          >
            <span className="text-sm font-bold uppercase tracking-[0.18em] text-text-soft">
              Partner TBA
            </span>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-sm font-light text-text-muted">
        Industry partners providing robot platforms will be announced soon.
      </p>
    </section>
  );
}
